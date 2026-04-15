(function (window) {
    const STORAGE_KEY = "jlptProgressV1";

    function load() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : {};
        } catch (error) {
            console.warn("No se pudo leer progreso de localStorage", error);
            return {};
        }
    }

    function save(progress) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }

    function ensureLevel(level) {
        const progress = load();
        if (!progress[level]) {
            progress[level] = {
                modules: {},
                updatedAt: new Date().toISOString(),
                diagnostic: null
            };
        }
        return progress;
    }

    function markModule(level, moduleId, completed) {
        const progress = ensureLevel(level);
        progress[level].modules[moduleId] = {
            completed,
            updatedAt: new Date().toISOString()
        };
        progress[level].updatedAt = new Date().toISOString();
        save(progress);
    }

    function setDiagnostic(level, payload) {
        const progress = ensureLevel(level);
        progress[level].diagnostic = {
            ...payload,
            updatedAt: new Date().toISOString()
        };
        progress[level].updatedAt = new Date().toISOString();
        save(progress);
    }

    function getLevel(level) {
        const progress = ensureLevel(level);
        return progress[level];
    }

    function getCompletion(level, totalModules) {
        const data = getLevel(level);
        const completed = Object.values(data.modules).filter(item => item.completed).length;
        const percentage = totalModules > 0 ? Math.round((completed / totalModules) * 100) : 0;
        return { completed, totalModules, percentage };
    }

    window.ProgressStore = {
        load,
        markModule,
        setDiagnostic,
        getLevel,
        getCompletion
    };
})(window);
