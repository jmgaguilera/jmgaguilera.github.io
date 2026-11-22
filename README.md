# Sitio personal de José Miguel González Aguilera

El sitio se genera con Jekyll y se publica en <https://www.jmgaguilera.com/>.

## Compilar en local

Instala el Ruby indicado en `.ruby-version` y ejecuta estos comandos desde la raíz del repositorio:

```sh
bundle install
JEKYLL_ENV=production bundle exec jekyll build
python3 scripts/check_site.py _site
bundle exec jekyll serve
```

La comprobación verifica rutas históricas y enlaces locales en el HTML. Rust fácil, Rust patrones,
Inmersión en Python 3 y Tengwar se publican desde otros repositorios y se comprueban en el dominio público.

## Activar el despliegue por GitHub Actions

1. Comprueba que **Sitio Jekyll** pasa en el pull request. Prepara en GitHub una rama de retorno con el commit publicado `42835a3228eafa1bcbf966d249f17eb2a4e38cc0` y su `CNAME`.
2. En **Settings → Pages**, selecciona **GitHub Actions** como origen y comprueba que el dominio personalizado sigue siendo `www.jmgaguilera.com`. Integra el pull request en `master` y verifica que el flujo vuelve a pasar.
3. En **Settings → Environments**, crea el entorno `github-pages` si hace falta y limita el despliegue a `master`. Después, crea la variable de repositorio `PAGES_DEPLOY` con el valor `true` en **Settings → Secrets and variables → Actions → Variables**.
4. Ejecuta **Sitio Jekyll** manualmente desde `master`. Comprueba la portada, los RSS, los artículos y los cuatro proyectos que publica GitHub bajo el mismo dominio.

Si falla el primer cambio de origen, desactiva `PAGES_DEPLOY` y vuelve a **Deploy from a branch**
con la rama de retorno y la carpeta `/`. Para las siguientes actualizaciones, revierte el cambio
afectado en `master` y vuelve a desplegar.
