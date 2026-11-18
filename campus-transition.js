// This small classic script runs before the campus modules or the entry form load.
(() => {
  const dialog = document.getElementById('scene-transition');
  const title = document.getElementById('transition-title');
  const detail = document.getElementById('transition-detail');
  const labels = new Map([
    ['lobby', 'Entrando al lobby'],
    ['equinos', 'Entrando a Campus Equino'],
    ['odontologia', 'Entrando a Odontología veterinaria'],
    ['farmacologia', 'Entrando a Farmacología veterinaria'],
  ]);

  function open() {
    document.documentElement.classList.add('scene-loading');
    if (!dialog.open) {
      dialog.showModal();
      title.focus({ preventScroll: true });
    }
  }

  function show(scene) {
    delete dialog.dataset.error;
    title.textContent = labels.get(scene) || 'Cargando el campus';
    detail.textContent = '';
    open();
  }

  function hide() {
    if (dialog.open) dialog.close();
    document.documentElement.classList.remove('scene-loading');
  }

  function fail(message) {
    dialog.dataset.error = 'true';
    title.textContent = 'No se pudo abrir la sala';
    detail.textContent = message || 'Vuelve a cargar para intentarlo de nuevo.';
    open();
  }

  dialog.addEventListener('cancel', event => event.preventDefault());
  for (const type of ['keydown', 'keyup']) {
    dialog.addEventListener(type, event => event.stopPropagation());
  }
  dialog.querySelector('.transition-retry').addEventListener('click', event => {
    event.preventDefault();
    location.reload();
  });
  window.veticTransition = { show, hide, fail, visible: () => dialog.open };
  // Promote the parser's non-modal, first-paint cover to the browser's top layer.
  dialog.removeAttribute('open');
  show(new URLSearchParams(location.search).get('scene') || 'lobby');
})();
