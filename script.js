document.addEventListener('DOMContentLoaded', function() {
    // Referencia a los elementos
    const envelope = document.getElementById('envelope');
    const envelopeFlap = document.getElementById('envelope-flap');
    const letter = document.getElementById('letter');
    
    // Función para abrir el sobre al hacer clic
    envelope.addEventListener('click', function() {
      // Agregar clase 'open' al sobre para animar la solapa
      envelope.classList.add('open');
      
      // Mostrar la carta después de un breve retraso para la animación
      setTimeout(() => {
        letter.classList.add('visible');
        createHearts();
      }, 500);
    });
    
    // Función para crear corazones animados
    function createHearts() {
      const heartsContainer = document.createElement('div');
      heartsContainer.className = 'hearts-container';
      document.body.appendChild(heartsContainer);
      
      // Crear varios corazones
      for (let i = 0; i < 15; i++) {
        setTimeout(() => {
          const heart = document.createElement('div');
          heart.className = 'floating-heart';
          heart.innerHTML = '❤️';
          heart.style.left = Math.random() * 100 + '%';
          heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
          heartsContainer.appendChild(heart);
          
          // Eliminar el corazón después de la animación
          setTimeout(() => {
            heart.remove();
          }, 5000);
        }, i * 300);
      }
      
      // Eliminar el contenedor después de un tiempo
      setTimeout(() => {
        heartsContainer.remove();
      }, 8000);
    }
    
    // Precargar imágenes
    function preloadImages() {
      const images = ['postal.png', 'flores.png'];
      images.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    }
    
    // Ejecutar precarga
    preloadImages();
  });