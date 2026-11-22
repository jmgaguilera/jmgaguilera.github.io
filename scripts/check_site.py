"""Comprueba las rutas públicas y los enlaces locales del sitio compilado."""

import argparse
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import quote, unquote, urljoin, urlsplit


SITE = "https://www.jmgaguilera.com/"
SITE_HOSTS = {"www.jmgaguilera.com", "jmgaguilera.com", "jmgaguilera.github.io"}
# GitHub Pages sirve estos proyectos desde otros repositorios bajo el mismo dominio.
PROJECTS = {
    "inmersionenpython3html", "rust_facil", "rust_patrones", "tengwar-esp"
}


class References(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = set()

    def handle_starttag(self, tag, attrs):
        self.links.update(value for name, value in attrs if name in {"href", "src"} and value)


def exists(site, path):
    target = site / unquote(path).lstrip("/")
    if not target.resolve().is_relative_to(site):
        return False
    return target.is_file() or (target / "index.html").is_file()


def check(site):
    routes = Path(__file__).with_name("published-paths.txt").read_text(encoding="utf-8")
    paths = [line for line in routes.splitlines() if line and not line.startswith("#")]
    errors = [f"Falta la ruta pública {path}" for path in paths if not exists(site, path)]
    pages = sorted(site.rglob("*.html"))
    checked = set()

    for page in pages:
        relative = page.relative_to(site).as_posix()
        parser = References()
        parser.feed(page.read_text(encoding="utf-8"))
        for link in sorted(parser.links):
            url = urlsplit(urljoin(SITE + quote(relative), link))
            if url.scheme not in {"http", "https"} or url.hostname not in SITE_HOSTS:
                continue
            if url.path.lstrip("/").partition("/")[0] in PROJECTS:
                continue
            checked.add(url.path)
            if not exists(site, url.path):
                errors.append(f"{relative}: no existe {url.path} (enlace {link})")

    if errors:
        raise SystemExit("\n".join(errors))
    print(f"{len(paths)} rutas públicas y {len(checked)} destinos locales en {len(pages)} páginas verificados.")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("site", type=Path, help="directorio generado por Jekyll")
    check(parser.parse_args().site.resolve())
