const dialog = document.getElementById('ProjetoWeb');
const btnAbrir = document.getElementById('abrir');
const btnFechar = document.getElementById('fechar');

btnAbrir.addEventListener('click', () => {
  dialog.showModal();
});

btnFechar.addEventListener('click', () => {
  dialog.close();
});

const Dialog = document.getElementById('ProjetoFoto');
const BtnAbrir = document.getElementById('Abrir');
const BtnFechar = document.getElementById('Fechar');

BtnAbrir.addEventListener('click', () => {
  Dialog.showModal();
});

BtnFechar.addEventListener('click', () => {
  Dialog.close();
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));