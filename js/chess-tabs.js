for (const group of document.querySelectorAll('[data-chess-tabs]')) {
  const list = group.querySelector('.chess-tab-list');
  const panels = new Map(Array.from(group.querySelectorAll('.chess-tab-panel'), panel => [panel.id, panel]));
  const tabs = Array.from(list.querySelectorAll('a'), link => ({
    link,
    panel: panels.get(link.hash.slice(1))
  }));

  // Keep the original links and visible content if the markup is incomplete.
  if (!tabs.length || tabs.some(tab => !tab.panel)) continue;

  const activate = (selected) => {
    for (const tab of tabs) {
      const active = tab === selected;
      tab.link.setAttribute('aria-selected', String(active));
      tab.link.tabIndex = active ? 0 : -1;
      tab.panel.hidden = !active;
    }
  };

  list.setAttribute('role', 'tablist');
  for (const [index, tab] of tabs.entries()) {
    const { link, panel } = tab;
    link.parentElement.setAttribute('role', 'presentation');
    link.id = `chess-tab-${panel.id}`;
    link.setAttribute('role', 'tab');
    link.setAttribute('aria-controls', panel.id);
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', link.id);
    panel.tabIndex = 0;

    link.addEventListener('click', (event) => {
      event.preventDefault();
      activate(tab);
    });

    link.addEventListener('keydown', (event) => {
      let next;
      switch (event.key) {
        case 'ArrowLeft': next = (index + tabs.length - 1) % tabs.length; break;
        case 'ArrowRight': next = (index + 1) % tabs.length; break;
        case 'Home': next = 0; break;
        case 'End': next = tabs.length - 1; break;
        case ' ': next = index; break;
        default: return;
      }
      event.preventDefault();
      activate(tabs[next]);
      tabs[next].link.focus();
    });
  }

  function revealFragment() {
    const tab = tabs.find(({ link }) => link.hash === window.location.hash);
    if (!tab) return;
    activate(tab);
    tab.panel.scrollIntoView();
  }

  group.dataset.enhanced = '';
  activate(tabs[0]);
  revealFragment();
  window.addEventListener('hashchange', revealFragment);
}
