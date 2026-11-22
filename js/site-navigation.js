const menuButton = document.querySelector('.site-menu-button');
const menuLinks = document.getElementById(menuButton.getAttribute('aria-controls'));
const narrowScreen = window.matchMedia('(max-width: 600px)');

function setMenuOpen(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  menuLinks.hidden = !open;
}

function updateMenuLayout() {
  const focus = document.activeElement;
  menuButton.hidden = !narrowScreen.matches;
  setMenuOpen(!narrowScreen.matches);

  if (narrowScreen.matches && menuLinks.contains(focus)) {
    menuButton.focus();
  } else if (!narrowScreen.matches && focus === menuButton) {
    menuLinks.querySelector('a')?.focus();
  }
}

menuButton.addEventListener('click', () => setMenuOpen(menuLinks.hidden));
menuButton.parentElement.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && narrowScreen.matches && !menuLinks.hidden) {
    setMenuOpen(false);
    menuButton.focus();
  }
});
narrowScreen.addEventListener('change', updateMenuLayout);
updateMenuLayout();
