document.addEventListener('DOMContentLoaded', () => {
    // Lista de videos
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
            intervalTime = 5000
        } = config;

        let currentIndex = 0;
        let interval;

        // Generar los slides y los dots dinámicamente
        items.forEach((item, index) => {
            const slide = document.createElement("div");
            slide.className = slideClass;
            if (index === 0) slide.classList.add("active");

            if (item.src) { // Para videos
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
                };

                slide.appendChild(iframe);
                slide.appendChild(fallbackLink);
            } else { // Para imágenes
                const img = sliderContainer.querySelectorAll(`.${slideClass}`)[index];
                if (img) slide.appendChild(img); // Reutilizamos las imágenes ya existentes en el HTML
            }

            sliderContainer.appendChild(slide);

            const dot = document.createElement("div");
            dot.className = "slider-dot";
            if (index === 0) dot.classList.add("active");
            dot.addEventListener("click", () => goToSlide(index));
            dotContainer.appendChild(dot);
        });

        // Mostrar el título inicial (si aplica)
        if (titleContainer && items[0].title) {
            titleContainer.textContent = items[0].title;
        }

        function goToSlide(index) {
            const slides = sliderContainer.querySelectorAll(`.${slideClass}`);
            const dots = dotContainer.querySelectorAll(".slider-dot");

            if (index >= items.length) index = 0;
            if (index < 0) index = items.length - 1;

            slides.forEach((slide, i) => {
                slide.classList.toggle("active", i === index);
            });

            dots.forEach((dot, i) => {
                dot.classList.toggle("active", i === index);
            });

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
        intervalTime: 5000
    });

    // Configuración del slider de imágenes (modal)
    const modal = document.getElementById('galleryModal');
    const galleryBtn = document.querySelector('.gallery-btn');
    const closeBtn = document.querySelector('.close');
    const gallerySlides = document.querySelectorAll('.gallery-slide');
    const galleryItems = Array.from(gallerySlides).map(slide => ({
        src: slide.src,
        alt: slide.alt
    }));

    setupSlider({
        items: galleryItems,
        sliderContainer: document.querySelector(".gallery-slider"),
        slideClass: "gallery-slide",
        dotContainer: document.querySelector(".gallery-slider + .slider-controls .slider-dots"),
        prevBtn: document.querySelector(".gallery-slider + .slider-controls .prev-slide"),
        nextBtn: document.querySelector(".gallery-slider + .slider-controls .next-slide"),
        intervalTime: 5000
    });

    // Manejo del modal
    galleryBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
        setupSlider({ // Reiniciar el slider al abrir el modal
            items: galleryItems,
            sliderContainer: document.querySelector(".gallery-slider"),
            slideClass: "gallery-slide",
            dotContainer: document.querySelector(".gallery-slider + .slider-controls .slider-dots"),
            prevBtn: document.querySelector(".gallery-slider + .slider-controls .prev-slide"),
            nextBtn: document.querySelector(".gallery-slider + .slider-controls .next-slide"),
            intervalTime: 5000
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});