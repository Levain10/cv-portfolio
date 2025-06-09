document.addEventListener("DOMContentLoaded", function() {
    // Contacto
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("¡Gracias por contactarme! Pronto responderé tu mensaje.");
        });
    }

    // Carrusel para Artwork
    const images = [
        "../Imagenes/Siren ATC.jpeg",
        "../Imagenes/dyonisus ATC.jpeg",
        "../Imagenes/Kemane the woods guardian.jpeg",
        "../Imagenes/short hair Alex.jpeg",
        "../Imagenes/Jet and Alex chibis.jpeg",
        "../Imagenes/Garden Fairy Design.jpeg",
        "../Imagenes/Medusa the before.jpeg"
    ];
    const descriptions = [
        "Siren ATC - Año 2024",
        "Dyonisus ATC - Año 2024",
        "Kemane the woods guardian - Año 2023",
        "Short hair Alex - Año 2023",
        "Jet and Alex chibis - Año 2022",
        "Garden Fairy Design - Año 2022",
        "Medusa the before - Año 2021"
    ];
    let current = 0;
    const carouselImage = document.getElementById("carouselImage");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const carouselDesc = document.getElementById("carouselDesc");

    function showImage(index, direction) {
        if (!carouselImage) return;
        carouselImage.classList.remove('slide-left', 'slide-right');
        void carouselImage.offsetWidth; // Fuerza reflow
        carouselImage.classList.add(direction === 'left' ? 'slide-left' : 'slide-right');
        setTimeout(() => {
            carouselImage.src = images[index];
            carouselImage.classList.remove('slide-left', 'slide-right');
            if (carouselDesc) {
                carouselDesc.textContent = descriptions[index];
            }
        }, 500);
    }

    if (carouselImage && prevBtn && nextBtn) {
        prevBtn.addEventListener("click", function() {
            const prev = (current - 1 + images.length) % images.length;
            showImage(prev, 'left');
            current = prev;
        });
        nextBtn.addEventListener("click", function() {
            const next = (current + 1) % images.length;
            showImage(next, 'right');
            current = next;
        });
        // Inicializa la descripción al cargar
        if (carouselDesc) {
            carouselDesc.textContent = descriptions[current];
        }
    }
});