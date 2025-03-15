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

    // Lista de imágenes (para el slider de imágenes)
    const gallerySlides = document.querySelectorAll('.gallery-slide');
    const galleryItems = Array.from(gallerySlides).map(slide => ({
        src: slide.src,
        alt: slide.alt
    }));
    console.log("Gallery Items:", galleryItems); // Depuración para verificar el orden

    // Función para redimensionar imágenes usando canvas
    function resizeImage(imgSrc, callback) {
        const img = new Image();
        img.crossOrigin = "Anonymous"; // Necesario si las imágenes están en otro dominio
        img.src = imgSrc;

        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = 600;
            canvas.height = 400;

            // Redibujar la imagen en el canvas con las nuevas dimensiones
            ctx.drawImage(img, 0, 0, 600, 400);

            // Convertir el canvas a una URL de datos (data URL)
            const resizedImage = canvas.toDataURL('image/jpeg', 0.8); // 0.8 es la calidad (0 a 1)
            console.log(`Imagen redimensionada generada para: ${imgSrc}`); // Depuración
            callback(resizedImage);
        };

        img.onerror = () => {
            console.error(`Error al cargar la imagen original: ${imgSrc}`);
            callback(imgSrc); // Usar la imagen original si falla
        };
    }

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
        let loadedItems = 0;

        // Limpiar slides y dots existentes para evitar duplicaciones
        sliderContainer.innerHTML = '';
        dotContainer.innerHTML = '';

        // Generar los slides y los dots dinámicamente
        items.forEach((item, index) => {
            const slide = document.createElement("div");
            slide.className = slideClass;
            if (index === 0) slide.classList.add("active");

            if (item.src && item.youtubeLink) { // Para videos
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

                sliderContainer.appendChild(slide);
                loadedItems++;
                if (loadedItems === items.length) {
                    initializeSlider();
                }
            } else { // Para imágenes
                resizeImage(item.src, (resizedSrc) => {
                    const img = document.createElement("img");
                    img.src = resizedSrc;
                    img.alt = item.alt;
                    img.className = slideClass;
                    if (index === 0) img.classList.add("active");
                    img.onload = () => {
                        console.log(`Imagen ${index} cargada: ${resizedSrc}`); // Depuración
                        slide.appendChild(img);
                        sliderContainer.appendChild(slide);
                        loadedItems++;
                        if (loadedItems === items.length) {
                            initializeSlider();
                        }
                    };
                    img.onerror = () => {
                        console.error(`Error al cargar la imagen redimensionada ${index}: ${resizedSrc}`);
                        slide.appendChild(img); // Usar la imagen original si falla
                        sliderContainer.appendChild(slide);
                        loadedItems++;
                        if (loadedItems === items.length) {
                            initializeSlider();
                        }
                    };
                });
            }

            const dot = document.createElement("div");
            dot.className = "slider-dot";
            if (index === 0) dot.classList.add("active");
            dot.addEventListener("click", () => goToSlide(index));
            dotContainer.appendChild(dot);
        });

        function initializeSlider() {
            // Mostrar el título inicial (si aplica)
            if (titleContainer && items[0].title) {
                titleContainer.textContent = items[0].title;
            }

            startSlider();
            console.log("Slider inicializado con", items.length, "elementos");
        }

        function goToSlide(index) {
            const slides = sliderContainer.querySelectorAll(`.${slideClass}`);
            const dots = dotContainer.querySelectorAll(".slider-dot");

            if (index >= items.length) index = 0;
            if (index < 0) index = items.length - 1;

            slides.forEach((slide, i) => {
                const isActive = i === index;
                slide.classList.toggle("active", isActive);
                const img = slide.querySelector('img');
                if (img) {
                    img.style.opacity = isActive ? '1' : '0'; // Asegurar que solo la imagen activa sea visible
                }
            });

            dots.forEach((dot, i) => {
                dot.classList.toggle("active", i === index);
            });

            if (titleContainer && items[index].title) {
                titleContainer.textContent = items[index].title;
            }

            currentIndex = index;
            console.log("Cambiado a slide", index);
        }

        function startSlider() {
            clearInterval(interval);
            interval = setInterval(() => {
                goToSlide(currentIndex + 1);
            }, intervalTime);
            console.log("Slider iniciado con intervalo de", intervalTime, "ms");
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
    }

    // Configuración del slider de videos
    setupSlider({
        items: videos,
        sliderContainer: document.querySelector(".video-slider"),
        slideClass: "video-slide",
        dotContainer: document.querySelector(".video .slider-dots"),
        prevBtn: document.getElementById("prev-slide"),
        nextBtn: document.getElementById("next-next-slide"),
        titleContainer: document.getElementById("video-title"),
        intervalTime: 5000
    });

    // Configuración del slider de imágenes
    setupSlider({
        items: galleryItems,
        sliderContainer: document.querySelector(".gallery-slider"),
        slideClass: "gallery-slide",
        dotContainer: document.querySelector(".gallery-slider + .slider-controls .slider-dots"),
        prevBtn: document.querySelector(".gallery-slider + .slider-controls .prev-slide"),
        nextBtn: document.querySelector(".gallery-slider + .slider-controls .next-slide"),
        intervalTime: 5000
    });
});