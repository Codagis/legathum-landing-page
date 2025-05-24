document.addEventListener('DOMContentLoaded', () => {
  const elementos = document.querySelectorAll('.anima-scroll');

  const observer = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visivel');
      } else {
        entrada.target.classList.remove('visivel');
      }
    });
  }, {
    threshold: 0.1
  });

  elementos.forEach(el => observer.observe(el));
});