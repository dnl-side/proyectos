// Cargar el JSON de las lecciones
fetch("json/kanji-lessons.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("No se pudo cargar kanji-lessons.json");
        }
        return response.json();
    })
    .then(kanjiLessons => {
        // Agrupar lecciones por nivel
        const levels = {};

        kanjiLessons.forEach(lesson => {
            // Extraer el nivel del nombre de la lección (ej. "Lección 1 - Kanji Nivel 1" -> 1)
            const match = lesson.lesson.match(/Nivel (\d+)/);
            if (match) {
                const level = parseInt(match[1], 10);
                if (!levels[level]) {
                    levels[level] = [];
                }
                levels[level].push(lesson);
            }
        });

        // Generar tablas para cada nivel
        const mainContent = document.getElementById("main-content");

        // Ordenar los niveles (1, 2, etc.)
        const sortedLevels = Object.keys(levels).sort((a, b) => a - b);

        sortedLevels.forEach(level => {
            const section = document.createElement("section");
            section.className = "tabla-kanji";

            const h2 = document.createElement("h2");
            h2.textContent = `Kanji Nivel ${level}`;
            section.appendChild(h2);

            const table = document.createElement("table");
            const headerRow = document.createElement("tr");
            headerRow.innerHTML = `
                <th>Kanji</th>
                <th>Significado</th>
                <th>Detalles</th>
            `;
            table.appendChild(headerRow);

            // Añadir los kanji de todas las lecciones de este nivel
            levels[level].forEach(lesson => {
                lesson.vocabulary.forEach(vocab => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td class="kanji-big">${vocab.kanji}</td>
                        <td>${vocab.meaning}</td>
                        <td><a href="detalle-kanji.html?level=${level}&char=${vocab.kanji}">Ver</a></td>
                    `;
                    table.appendChild(row);
                });
            });

            section.appendChild(table);
            mainContent.appendChild(section);
        });
    })
    .catch(err => {
        console.error("Error cargando kanji-lessons.json:", err);
        const mainContent = document.getElementById("main-content");
        mainContent.innerHTML = "<p>Error: No se pudo cargar las lecciones de kanji.</p>";
    });