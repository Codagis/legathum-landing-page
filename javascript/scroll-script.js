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
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Rolando para baixo
    header.style.top = "-80px"; // Esconde o header (ajuste se necessário)
  } else {
    // Rolando para cima
    header.style.top = "0";
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Evita valores negativos
});