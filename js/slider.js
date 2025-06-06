document.addEventListener('DOMContentLoaded', () => {
    // Lista de videos
    const videos = [
        {
            src: "https://www.youtube.com/embed/zaLrt9orTeU",
            title: "Katakana",
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

    // Lista de imágenes (para el slider de imágenes)
    const gallerySlides = document.querySelectorAll('.gallery-slide');
    const galleryItems = Array.from(gallerySlides).map(slide => ({
        src: slide.src,
        alt: slide.alt
    }));

    // Configuración genérica para un slider
    function setupSlider(config) {
        const {
            items,
            sliderContainer,
            slideClass,
            dotContainer,
            prevBtn,
            nextBtn,
            titleContainer,
            intervalTime = 5000,
            sliderName = "Slider"
        } = config;

        let currentIndex = 0;
        let interval;

        // Determinar si es un slider de imágenes o videos
        const isImageSlider = slideClass === "gallery-slide";

        // No limpiar el contenedor si es un slider de imágenes (usamos las imágenes del HTML)
        if (!isImageSlider) {
            sliderContainer.innerHTML = '';
        }
        dotContainer.innerHTML = '';

        // Obtener los slides (para imágenes, usamos los existentes; para videos, los generamos)
        let slides;
        if (isImageSlider) {
            slides = sliderContainer.querySelectorAll(`.${slideClass}`);
        } else {
            // Generar los slides para videos
            items.forEach((item, index) => {
                const slide = document.createElement("div");
                slide.className = slideClass;
                if (index === 0) slide.classList.add("active");

                const iframe = document.createElement("iframe");
                iframe.width = "560";
                iframe.height = "315";
                iframe.src = item.src;
                iframe.title = item.title;
                iframe.frameBorder = "0";
                iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
                iframe.allowFullscreen = true;

                const fallbackLink = document.createElement("a");
                fallbackLink.href = item.youtubeLink;
                fallbackLink.className = "video-fallback";
                fallbackLink.textContent = `Ver "${item.title}" en YouTube`;
                fallbackLink.style.display = "none";

                iframe.onerror = () => {
                    iframe.style.display = "none";
                    fallbackLink.style.display = "block";
                    goToSlide(currentIndex + 1); // Pasa al siguiente slide si un video falla
                };

                slide.appendChild(iframe);
                slide.appendChild(fallbackLink);
                sliderContainer.appendChild(slide);
            });
            slides = sliderContainer.querySelectorAll(`.${slideClass}`);
        }

        // Generar los dots dinámicamente
        items.forEach((_, index) => {
            const dot = document.createElement("div");
            dot.className = "slider-dot";
            if (index === 0) dot.classList.add("active");
            dot.addEventListener("click", () => goToSlide(index));
            dotContainer.appendChild(dot);
        });

        // Mostrar el título inicial (si aplica, para videos)
        if (titleContainer && items[0].title) {
            titleContainer.textContent = items[0].title;
        }

        function goToSlide(index) {
            const dots = dotContainer.querySelectorAll(".slider-dot");

            if (index >= items.length) index = 0;
            if (index < 0) index = items.length - 1;

            slides.forEach((slide, i) => {
                if (i === index) {
                    slide.classList.add("active");
                } else {
                    slide.classList.remove("active");
                }
            });

            dots.forEach((dot, i) => {
                dot.classList.toggle("active", i === index);
            });

            // Actualizar el título si está disponible (para videos)
            if (titleContainer && items[index].title) {
                titleContainer.textContent = items[index].title;
            }

            currentIndex = index;
        }

        function startSlider() {
            clearInterval(interval);
            interval = setInterval(() => {
                goToSlide(currentIndex + 1);
            }, intervalTime);
        }

        function pauseSlider() {
            clearInterval(interval);
            setTimeout(startSlider, 10000);
        }

        prevBtn.addEventListener("click", () => {
            goToSlide(currentIndex - 1);
            pauseSlider();
        });

        nextBtn.addEventListener("click", () => {
            goToSlide(currentIndex + 1);
            pauseSlider();
        });

        dotContainer.addEventListener("click", (e) => {
            if (e.target.classList.contains("slider-dot")) {
                const dotIndex = Array.from(dotContainer.children).indexOf(e.target);
                goToSlide(dotIndex);
                pauseSlider();
            }
        });

        startSlider();
    }

    // Configuración del slider de videos
    setupSlider({
        items: videos,
        sliderContainer: document.querySelector(".video-slider"),
        slideClass: "video-slide",
        dotContainer: document.querySelector(".video .slider-dots"),
        prevBtn: document.getElementById("prev-slide"),
        nextBtn: document.getElementById("next-slide"),
        titleContainer: document.getElementById("video-title"),
        intervalTime: 5000,
        sliderName: "Video Slider"
    });

    // Configuración del slider de imágenes
    setupSlider({
        items: galleryItems,
        sliderContainer: document.querySelector(".gallery-slider"),
        slideClass: "gallery-slide",
        dotContainer: document.querySelector(".gallery-slider + .slider-controls .slider-dots"),
        prevBtn: document.querySelector(".gallery-slider + .slider-controls .prev-slide"),
        nextBtn: document.querySelector(".gallery-slider + .slider-controls .next-slide"),
        intervalTime: 5000,
        sliderName: "Image Slider"
    });
});