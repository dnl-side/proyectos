(function () {
    const LEVEL = "N5";
    const curriculumUrl = "json/jlpt-n5-curriculum.json";

    const modulesContainer = document.getElementById("modules-container");
    const summaryEl = document.getElementById("progress-summary");
    const progressBarEl = document.getElementById("progress-bar");
    const diagnosticForm = document.getElementById("diagnostic-form");
    const diagnosticResult = document.getElementById("diagnostic-result");

    function moduleCard(module, isDone) {
        const resourceLinks = module.resources.length
            ? module.resources.map(path => `<a href="${path}">${path}</a>`).join(" · ")
            : "Pendiente de implementar";

        return `
            <article class="module-card ${isDone ? "completed" : ""}">
                <header>
                    <h3>${module.title}</h3>
                    <span class="module-type">${module.type.toUpperCase()}</span>
                </header>
                <p><strong>Objetivos:</strong></p>
                <ul>
                    ${module.objectives.map(item => `<li>${item}</li>`).join("")}
                </ul>
                <p><strong>Horas estimadas:</strong> ${module.estimatedHours}</p>
                <p><strong>Hito:</strong> ${module.milestone}</p>
                <p><strong>Recursos:</strong> ${resourceLinks}</p>
                <label class="module-check">
                    <input type="checkbox" data-module-id="${module.id}" ${isDone ? "checked" : ""}>
                    Marcar como completado
                </label>
            </article>
        `;
    }

    function renderSummary(totalModules) {
        const completion = window.ProgressStore.getCompletion(LEVEL, totalModules);
        summaryEl.textContent = `Progreso N5: ${completion.completed}/${completion.totalModules} módulos (${completion.percentage}%).`;
        progressBarEl.style.width = `${completion.percentage}%`;
        progressBarEl.setAttribute("aria-valuenow", String(completion.percentage));
    }

    function renderDiagnostic() {
        const levelData = window.ProgressStore.getLevel(LEVEL);
        if (!levelData.diagnostic) {
            diagnosticResult.innerHTML = "Aún no has realizado el diagnóstico inicial.";
            return;
        }

        const { kana, grammar, vocabulary, reading, listening, recommendation } = levelData.diagnostic;
        diagnosticResult.innerHTML = `
            <p><strong>Último diagnóstico:</strong></p>
            <ul>
                <li>Kana: ${kana}/5</li>
                <li>Gramática: ${grammar}/5</li>
                <li>Vocabulario: ${vocabulary}/5</li>
                <li>Lectura: ${reading}/5</li>
                <li>Listening: ${listening}/5</li>
            </ul>
            <p><strong>Recomendación:</strong> ${recommendation}</p>
        `;
    }

    function recommendationFromScore(total) {
        if (total <= 10) {
            return "Empieza desde cero con Hiragana, Katakana y gramática básica antes de avanzar.";
        }

        if (total <= 18) {
            return "Base parcial detectada: refuerza vocabulario y kanji inicial antes del simulacro.";
        }

        return "Buen punto de partida: inicia ruta intensiva N5 con foco en simulacros y listening.";
    }

    function wireModuleChecks(totalModules) {
        modulesContainer.querySelectorAll("input[type='checkbox']").forEach(input => {
            input.addEventListener("change", event => {
                const target = event.currentTarget;
                window.ProgressStore.markModule(LEVEL, target.dataset.moduleId, target.checked);
                target.closest(".module-card").classList.toggle("completed", target.checked);
                renderSummary(totalModules);
            });
        });
    }

    function wireDiagnosticForm() {
        diagnosticForm.addEventListener("submit", event => {
            event.preventDefault();
            const formData = new FormData(diagnosticForm);
            const payload = {
                kana: Number(formData.get("kana") || 0),
                grammar: Number(formData.get("grammar") || 0),
                vocabulary: Number(formData.get("vocabulary") || 0),
                reading: Number(formData.get("reading") || 0),
                listening: Number(formData.get("listening") || 0)
            };

            const total = payload.kana + payload.grammar + payload.vocabulary + payload.reading + payload.listening;
            payload.recommendation = recommendationFromScore(total);

            window.ProgressStore.setDiagnostic(LEVEL, payload);
            renderDiagnostic();
        });
    }

    fetch(curriculumUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo cargar el currículo N5");
            }
            return response.json();
        })
        .then(data => {
            const progressLevel = window.ProgressStore.getLevel(LEVEL);
            modulesContainer.innerHTML = data.modules
                .map(module => moduleCard(module, Boolean(progressLevel.modules[module.id]?.completed)))
                .join("");

            renderSummary(data.modules.length);
            renderDiagnostic();
            wireModuleChecks(data.modules.length);
            wireDiagnosticForm();
        })
        .catch(error => {
            console.error(error);
            modulesContainer.innerHTML = "<p>No se pudo cargar el plan N5. Revisa la consola para más detalle.</p>";
        });
})();
