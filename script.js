const images = document.querySelectorAll('.gallery-img');
const overlay = document.getElementById('video-overlay');
const overlayVideo = document.getElementById('overlay-video');
const closeBtn = document.getElementById('close-overlay');

// Abre el overlay con el video al hacer clic en una imagen
images.forEach(img => {
    img.addEventListener('click', function() {
        const videoSrc = img.getAttribute('data-video');
        overlay.classList.add('show'); // Añadir la clase 'show' para activar la transición
        overlayVideo.src = videoSrc;
        overlayVideo.play();
    });
});

// Cierra el overlay al hacer clic en el botón de cierre
closeBtn.addEventListener('click', function() {
    overlay.classList.remove('show'); // Eliminar la clase 'show' para ocultarlo con la transición
    overlayVideo.pause();
    overlayVideo.src = ''; // Detiene el video
});

// Cierra el overlay si se hace clic fuera del video
overlay.addEventListener('click', function(event) {
    if (event.target === overlay) {
        overlay.classList.remove('show'); // Eliminar la clase 'show' para ocultarlo con la transición
        overlayVideo.pause();
        overlayVideo.src = ''; // Detiene el video
    }
});
