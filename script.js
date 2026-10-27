const body = document.body;
const themeToggle = document.querySelector('#themeToggle');
const directions = document.querySelector('#directions');
const directionButtons = [...document.querySelectorAll('[data-theme-choice]')];
const filterButtons = [...document.querySelectorAll('[data-filter]')];
const cards = [...document.querySelectorAll('.product-card')];
const search = document.querySelector('#search');
const emptyState = document.querySelector('#emptyState');
const dialog = document.querySelector('#panelDialog');
const feedback = document.querySelector('#demoFeedback');
const toast = document.querySelector('#toast');
let currentFilter = 'todos';
let toastTimeout;

const requestedTheme = new URLSearchParams(location.search).get('theme');
if (['origem', 'balcao', 'feira'].includes(requestedTheme)) body.dataset.theme = requestedTheme;
if (new URLSearchParams(location.search).has('panel-preview')) dialog.showModal();

themeToggle.addEventListener('click', () => {
  const opening = directions.hidden;
  directions.hidden = !opening;
  themeToggle.setAttribute('aria-expanded', String(opening));
  if (opening) directions.querySelector('button').focus();
});

directionButtons.forEach((button) => button.addEventListener('click', () => {
  body.dataset.theme = button.dataset.themeChoice;
  directionButtons.forEach((item) => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
}));

function applyFilters() {
  const query = search.value.trim().toLocaleLowerCase('pt-BR');
  let visible = 0;
  cards.forEach((card) => {
    const matchesCategory = currentFilter === 'todos' || card.dataset.category === currentFilter;
    const matchesQuery = !query || `${card.dataset.name} ${card.innerText}`.toLocaleLowerCase('pt-BR').includes(query);
    const show = matchesCategory && matchesQuery;
    card.hidden = !show;
    if (show) visible += 1;
  });
  emptyState.hidden = visible > 0;
}

filterButtons.forEach((button) => button.addEventListener('click', () => {
  currentFilter = button.dataset.filter;
  filterButtons.forEach((item) => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  applyFilters();
}));
search.addEventListener('input', applyFilters);

document.querySelectorAll('.ask-product').forEach((button) => button.addEventListener('click', () => {
  const product = button.dataset.product;
  const message = `Olá! Vi o exemplo “${product}” no catálogo da Queijeira 504. Vocês têm algum produto parecido disponível?`;
  window.open(`https://wa.me/558499360528?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
}));

document.querySelector('#openPanel').addEventListener('click', () => dialog.showModal());
document.querySelector('#closePanel').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

function showFeedback(message) {
  feedback.textContent = message;
  clearTimeout(toastTimeout);
  toast.textContent = message;
  toast.classList.add('show');
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 3200);
}

document.querySelector('#demoAdd').addEventListener('click', () => showFeedback('Na versão real, esta ação abriria o cadastro de um novo produto. Nada foi salvo.'));
document.querySelector('#demoEdit').addEventListener('click', () => showFeedback('Exemplo visual: editar nome, descrição, foto e status. A demonstração não salva alterações.'));
document.querySelector('#demoRemove').addEventListener('click', () => showFeedback('Exemplo visual: retirar um item do catálogo próprio. Nenhum produto foi removido.'));
