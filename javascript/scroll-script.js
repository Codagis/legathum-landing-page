document.addEventListener('DOMContentLoaded', () => {
  const elementos = document.querySelectorAll('.anima-scroll');

  const observer = new IntersectionObserver((entradas, observer) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visivel');
        observer.unobserve(entrada.target);
      }
    });
  }, {
    threshold: 0.1
  });

  elementos.forEach(el => observer.observe(el));
});

let lastScrollTop = 0;
const header = document.getElementById("main-header");

window.addEventListener("scroll", function () {

  if (typeof header === 'undefined' || !header) {
    console.error("Elemento header não definido ou não encontrado.");
    return;
  }

  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.style.top = "-80px";
  } else {
    header.style.top = "0";
  }


  if (scrollTop === 0) {
    header.style.background = "rgba(0, 0, 0, 0.2)";
  } else {
    header.style.background = "#1E1E1E";
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

document.getElementById('btn-comecar-agora').addEventListener('click', () => {
  document.getElementById('listaEspera').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('btn-comecar-agora-dois').addEventListener('click', () => {
  document.getElementById('listaEspera').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('btn-quero-investir').addEventListener('click', () => {
  document.getElementById('listaEspera').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('btn-quero-conversar').addEventListener('click', () => {
  document.getElementById('listaEspera').scrollIntoView({ behavior: 'smooth' });
});