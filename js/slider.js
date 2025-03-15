// Lista de videos (incluimos el video inicial y los 3 adicionales)
const videos = [
    {
        src: "https://www.youtube.com/embed/zaLrt9orTeU",
        title: "Video de prueba para aprender japonés",
        youtubeLink: "https://www.youtube.com/watch?v=zaLrt9orTeU"
    },
    {
        src: "https://www.youtube.com/embed/Qd9P2ukc-IU",
        title: "Canciones infantiles",
        youtubeLink: "https://www.youtube.com/watch?v=Qd9P2ukc-IU"
    },
    {
        src: "https://www.youtube.com/embed/iOUC62Ouaow",
        title: "Canciones infantiles",
        youtubeLink: "https://www.youtube.com/watch?v=iOUC62Ouaow"
    },
    {
        src: "https://www.youtube.com/embed/sba32xXeusU",
        title: "Canciones infantiles",
        youtubeLink: "https://www.youtube.com/watch?v=sba32xXeusU"
    }
];

// Configuración del slider
const slider = document.querySelector(".video-slider");
const videoTitle = document.getElementById("video-title");
const dotsContainer = document.querySelector(".slider-dots");
const prevButton = document.getElementById("prev-slide");
const nextButton = document.getElementById("next-slide");
let currentIndex = 0;
const intervalTime = 5000; // Cambia cada 5 segundos
let interval;

// Generar los slides y los dots dinámicamente
videos.forEach((video, index) => {
    // Crear slide
    const slide = document.createElement("div");
    slide.className = "video-slide";
    if (index === 0) slide.classList.add("active");

    // Crear el iframe
    const iframe = document.createElement("iframe");
    iframe.width = "560";
    iframe.height = "315";
    iframe.src = video.src;
    iframe.title = video.title;
    iframe.frameBorder = "0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;

    // Añadir un enlace alternativo en caso de que el iframe falle
    const fallbackLink = document.createElement("a");
    fallbackLink.href = video.youtubeLink;
    fallbackLink.className = "video-fallback";
    fallbackLink.textContent = `Ver "${video.title}" en YouTube`;
    fallbackLink.style.display = "none"; // Ocultar por defecto

    // Añadir un listener para detectar errores de carga del iframe
    iframe.onerror = () => {
        iframe.style.display = "none";
        fallbackLink.style.display = "block";
    };

    slide.appendChild(iframe);
    slide.appendChild(fallbackLink);
    slider.appendChild(slide);

    // Crear dot
    const dot = document.createElement("div");
    dot.className = "slider-dot";
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

// Mostrar el título inicial
videoTitle.textContent = videos[0].title;

// Funciones para el slider
function goToSlide(index) {
    const slides = document.querySelectorAll(".video-slide");
    const dots = document.querySelectorAll(".slider-dot");

    // Asegurarse de que el índice esté dentro de los límites
    if (index >= videos.length) index = 0;
    if (index < 0) index = videos.length - 1;

    // Actualizar slides
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
    });

    // Actualizar dots
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });

    // Actualizar título
    videoTitle.textContent = videos[index].title;

    currentIndex = index;
}

// Cambio automático
function startSlider() {
    clearInterval(interval); // Limpiar cualquier intervalo existente
    interval = setInterval(() => {
        goToSlide(currentIndex + 1);
    }, intervalTime);
}

// Detener el cambio automático al interactuar
function pauseSlider() {
    clearInterval(interval);
    // Reiniciar después de 10 segundos de inactividad
    setTimeout(startSlider, 10000);
}

// Botones de navegación
prevButton.addEventListener("click", () => {
    goToSlide(currentIndex - 1);
    pauseSlider();
});

nextButton.addEventListener("click", () => {
    goToSlide(currentIndex + 1);
    pauseSlider();
});

// Dots
dotsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("slider-dot")) {
        pauseSlider();
    }
});

// Iniciar el slider
startSlider();