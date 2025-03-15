// Lista de videos
const videos = [
    {
        src: "https://www.youtube.com/embed/diIQBFaBNHU",
        title: "Canciones infantiles"
    },
    {
        src: "https://www.youtube.com/embed/iOUC62Ouaow",
        title: "Canciones infantiles"
    },
    {
        src: "https://www.youtube.com/embed/TGFHlujys5o",
        title: "Canciones infantiles"
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
    slide.innerHTML = `
        <iframe width="560" height="315" 
            src="${video.src}" 
            title="${video.title}" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    `;
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