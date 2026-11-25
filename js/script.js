const btnTema = document.getElementById('btn-tema');
const body = document.body;

if (localStorage.getItem('tema') === 'escuro') {
  body.classList.add('dark-mode');
  btnTema.textContent = '☀️';
}

btnTema.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    btnTema.textContent = '☀️';
    localStorage.setItem('tema', 'escuro');
  } else {
    btnTema.textContent = '🌙';
    localStorage.setItem('tema', 'claro');
  }
});