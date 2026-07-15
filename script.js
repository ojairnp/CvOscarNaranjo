document.addEventListener('DOMContentLoaded', () => {
  console.log('CV de Oscar Jair Naranjo Ponce — cargado');

  // Animación de entrada para los items
  const items = document.querySelectorAll('.item');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  items.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(12px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(item);
  });

  // Efecto de escritura en el título (opcional)
  const titulo = document.querySelector('.titulo');
  if (titulo) {
    const textoOriginal = titulo.textContent;
    titulo.textContent = '';
    let i = 0;
    const escribir = () => {
      if (i < textoOriginal.length) {
        titulo.textContent += textoOriginal.charAt(i);
        i++;
        setTimeout(escribir, 30);
      }
    };
    // Descomentar la siguiente línea para activar el efecto
    // escribir();
  }
});