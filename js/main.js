// Main JavaScript for Japanese Learning Site
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const isActive = navMenu.classList.contains('active');
            mobileMenuToggle.textContent = isActive ? '✕' : '☰';
            mobileMenuToggle.setAttribute('aria-label', isActive ? 'Cerrar menú' : 'Abrir menú');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('header')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.textContent = '☰';
                mobileMenuToggle.setAttribute('aria-label', 'Abrir menú');
            }
        });

        // Close menu when clicking a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenuToggle.textContent = '☰';
                mobileMenuToggle.setAttribute('aria-label', 'Abrir menú');
            });
        });
    }

    // Progress Tracking System
    class ProgressTracker {
        constructor() {
            this.storageKey = 'japanese-learning-progress';
            this.progress = this.loadProgress();
        }

        loadProgress() {
            const saved = localStorage.getItem(this.storageKey);
            return saved ? JSON.parse(saved) : {
                hiragana: { learned: [], practiced: 0 },
                katakana: { learned: [], practiced: 0 },
                kanji: { learned: [], practiced: 0 },
                quizzesTaken: 0,
                totalScore: 0
            };
        }

        saveProgress() {
            localStorage.setItem(this.storageKey, JSON.stringify(this.progress));
        }

        markAsLearned(type, character) {
            if (!this.progress[type].learned.includes(character)) {
                this.progress[type].learned.push(character);
                this.saveProgress();
            }
        }

        incrementPractice(type) {
            this.progress[type].practiced++;
            this.saveProgress();
        }

        recordQuizScore(score) {
            this.progress.quizzesTaken++;
            this.progress.totalScore += score;
            this.saveProgress();
        }

        getProgress(type) {
            return this.progress[type];
        }

        getTotalProgress() {
            const hiraganaTotal = 46 + 25 + 33; // Basic + Special + Compound
            const katakanaTotal = 46 + 25 + 33;
            const kanjiTotal = 100; // Simplified for now

            const hiraganaLearned = this.progress.hiragana.learned.length;
            const katakanaLearned = this.progress.katakana.learned.length;
            const kanjiLearned = this.progress.kanji.learned.length;

            const total = hiraganaTotal + katakanaTotal + kanjiTotal;
            const learned = hiraganaLearned + katakanaLearned + kanjiLearned;

            return {
                percentage: Math.round((learned / total) * 100),
                learned,
                total,
                hiragana: Math.round((hiraganaLearned / hiraganaTotal) * 100),
                katakana: Math.round((katakanaLearned / katakanaTotal) * 100),
                kanji: Math.round((kanjiLearned / kanjiTotal) * 100)
            };
        }

        displayProgress(containerId) {
            const container = document.getElementById(containerId);
            if (!container) return;

            const totalProgress = this.getTotalProgress();

            container.innerHTML = `
                <h3>Tu Progreso</h3>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${totalProgress.percentage}%">
                        ${totalProgress.percentage}%
                    </div>
                </div>
                <div class="progress-stats">
                    <div class="stat-card">
                        <span class="stat-value">${totalProgress.hiragana}%</span>
                        <span class="stat-label">Hiragana</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-value">${totalProgress.katakana}%</span>
                        <span class="stat-label">Katakana</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-value">${totalProgress.kanji}%</span>
                        <span class="stat-label">Kanji</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-value">${this.progress.quizzesTaken}</span>
                        <span class="stat-label">Quizzes Completados</span>
                    </div>
                </div>
            `;
        }
    }

    // Initialize progress tracker
    window.progressTracker = new ProgressTracker();

    // Display progress if container exists
    const progressContainer = document.getElementById('progress-tracker');
    if (progressContainer) {
        window.progressTracker.displayProgress('progress-tracker');
    }

    // Quiz System
    class Quiz {
        constructor(characters, type = 'hiragana') {
            this.characters = characters;
            this.type = type;
            this.currentQuestion = 0;
            this.score = 0;
            this.questions = this.generateQuestions();
        }

        generateQuestions(count = 10) {
            const shuffled = [...this.characters].sort(() => Math.random() - 0.5);
            return shuffled.slice(0, Math.min(count, shuffled.length)).map(char => ({
                character: char.char,
                correct: char.romaji,
                options: this.generateOptions(char.romaji)
            }));
        }

        generateOptions(correct) {
            const allOptions = this.characters.map(c => c.romaji);
            const wrongOptions = allOptions
                .filter(opt => opt !== correct)
                .sort(() => Math.random() - 0.5)
                .slice(0, 3);

            const options = [...wrongOptions, correct];
            return options.sort(() => Math.random() - 0.5);
        }

        displayQuestion(containerId) {
            const container = document.getElementById(containerId);
            if (!container || this.currentQuestion >= this.questions.length) {
                this.displayResults(containerId);
                return;
            }

            const question = this.questions[this.currentQuestion];

            container.innerHTML = `
                <div class="quiz-question">
                    <div class="quiz-character">${question.character}</div>
                    <div class="quiz-options">
                        ${question.options.map(opt =>
                            `<button class="quiz-option" data-answer="${opt}">${opt.toUpperCase()}</button>`
                        ).join('')}
                    </div>
                </div>
                <div class="quiz-score">
                    <p>Pregunta ${this.currentQuestion + 1} de ${this.questions.length} | Puntuación: ${this.score}/${this.currentQuestion}</p>
                </div>
            `;

            // Add event listeners to options
            container.querySelectorAll('.quiz-option').forEach(btn => {
                btn.addEventListener('click', (e) => this.checkAnswer(e.target, question.correct, containerId));
            });
        }

        checkAnswer(button, correct, containerId) {
            const answer = button.dataset.answer;
            const isCorrect = answer === correct;

            if (isCorrect) {
                button.classList.add('correct');
                this.score++;
            } else {
                button.classList.add('incorrect');
                // Highlight correct answer
                document.querySelectorAll('.quiz-option').forEach(btn => {
                    if (btn.dataset.answer === correct) {
                        btn.classList.add('correct');
                    }
                });
            }

            // Disable all buttons
            document.querySelectorAll('.quiz-option').forEach(btn => {
                btn.disabled = true;
                btn.style.cursor = 'not-allowed';
            });

            // Move to next question after delay
            setTimeout(() => {
                this.currentQuestion++;
                this.displayQuestion(containerId);
            }, 1500);
        }

        displayResults(containerId) {
            const container = document.getElementById(containerId);
            const percentage = Math.round((this.score / this.questions.length) * 100);

            let message = '';
            if (percentage >= 90) message = '¡Excelente trabajo! 🎉';
            else if (percentage >= 70) message = '¡Muy bien! 👏';
            else if (percentage >= 50) message = '¡Buen intento! 💪';
            else message = 'Sigue practicando 📚';

            container.innerHTML = `
                <div class="quiz-score">
                    <h3>${message}</h3>
                    <p>Puntuación Final: ${this.score} de ${this.questions.length} (${percentage}%)</p>
                    <button class="btn" onclick="location.reload()">Intentar de Nuevo</button>
                </div>
            `;

            // Record score
            if (window.progressTracker) {
                window.progressTracker.recordQuizScore(this.score);
            }
        }
    }

    // Make Quiz available globally
    window.Quiz = Quiz;

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.intro, .beneficios, .como-estudiar, .tabla-hiragana, .tabla-katakana, .tabla-kanji').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    console.log('Japanese Learning Site initialized successfully!');
});
