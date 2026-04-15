# Briefing de Profesionalización — Proyecto de aprendizaje de japonés

## 1) Objetivo del briefing
Transformar el proyecto actual (estático y parcialmente implementado) en una plataforma **estable, escalable y pedagógicamente sólida** para aprender japonés desde **nivel inicial hasta avanzado**, con una ruta clara por niveles **JLPT N5 → N4 → N3 → N2 → N1**.

---

## 2) Diagnóstico rápido del estado actual

### Lo que existe hoy
- Sitio web con páginas estáticas para:
  - Hiragana
  - Katakana
  - Kanji
  - Detalles por sección
- JSON de lecciones de kanji.
- JS orientado al front con interacciones puntuales.
- Estilos CSS básicos.

### Limitaciones detectadas
- No hay estructura de producto ni roadmap formal.
- No hay modelo de dominio educativo (progreso, unidades, objetivos, evaluación).
- No hay trazabilidad pedagógica por JLPT.
- No hay backend/API para usuarios, progreso y resultados.
- No hay estrategia de contenido consistente (gramática, vocabulario, listening, lectura).
- No hay QA automatizado, observabilidad ni métricas de aprendizaje.

---

## 3) Visión del producto (versión profesional)
Construir una plataforma de estudio con:
- **Ruta guiada por niveles JLPT** con objetivos semanales.
- **Aprendizaje activo** (quiz, repaso espaciado, práctica contextual).
- **Seguimiento de progreso** (temas dominados, pendientes, errores frecuentes).
- **Banco de contenidos versionado** (vocabulario, gramática, kanji, ejercicios, audios).
- **Panel de métricas** para mantener y mejorar continuamente la efectividad.

---

## 4) Alcance funcional objetivo (producto completo)

### 4.1 Módulos de aprendizaje
1. **Kana (Hiragana/Katakana)**
   - Trazo, reconocimiento visual, lectura y escritura.
   - Confusiones comunes y práctica adaptativa.
2. **Vocabulario por nivel JLPT**
   - Tarjetas, ejemplos, audio nativo, sinónimos y antónimos.
3. **Gramática por nivel JLPT**
   - Estructuras, uso, contraejemplos, mini ejercicios.
4. **Kanji por nivel JLPT**
   - Lecturas on/kun, radicales, orden de trazos, palabras frecuentes.
5. **Comprensión lectora**
   - Textos graduados con preguntas.
6. **Comprensión auditiva**
   - Clips por dificultad + preguntas tipo examen.
7. **Simulacros JLPT**
   - Exámenes parciales y completos con timer y análisis.

### 4.2 Módulos de plataforma
1. **Cuenta de usuario y autenticación**
2. **Progreso y analítica personal**
3. **Motor de repaso espaciado (SRS)**
4. **Recomendador de estudio** según desempeño
5. **CMS de contenido educativo** (interno)
6. **Panel admin** para gestión de niveles, unidades y ejercicios

---

## 5) Arquitectura recomendada (meta)

### Frontend
- SPA moderna (React/Vue/Svelte) con diseño responsive.
- Sistema de diseño (componentes reutilizables, accesibilidad).

### Backend
- API REST (o GraphQL) para usuarios, progreso, contenido y evaluaciones.
- Auth (JWT/OAuth), roles (estudiante/admin/editor).

### Datos
- Base relacional para usuarios/progreso/evaluaciones.
- Repositorio de contenido con versionado y revisión editorial.

### Calidad y operación
- CI/CD (tests, build, deploy).
- Telemetría: errores, performance, funnels de aprendizaje.
- Backups, seguridad básica y políticas de datos.

---

## 6) Plan pedagógico por niveles JLPT

## 6.1 Etapa 1 — JLPT N5 (prioridad inicial)
**Objetivo:** permitir al estudiante empezar desde cero y cerrar base sólida.

### Contenido mínimo N5
- Kana completo (hiragana + katakana) con dominio de lectura.
- Kanji iniciales N5.
- Vocabulario esencial N5.
- Gramática base (partículas, formas verbales básicas, adjetivos, preguntas simples).
- Lecturas cortas y listening básico.

### Funcionalidades críticas N5
- Onboarding diagnóstico (si sabe algo, saltar módulos).
- Lecciones cortas + práctica inmediata.
- Quiz por tema + evaluación de unidad.
- Repaso espaciado para vocabulario y kanji.
- Dashboard de avance (porcentaje por competencia).

### Criterio de salida N5
- Simulacro N5 con umbral de aprobación configurable.
- Reporte de brechas (gramática/vocab/listening/lectura).

## 6.2 Etapa 2 — JLPT N4
- Expandir gramática intermedia inicial.
- Aumentar vocabulario y kanji.
- Introducir textos más largos y audios más naturales.
- Reforzar confusiones gramaticales frecuentes.

## 6.3 Etapa 3 — JLPT N3
- Transición a nivel intermedio real.
- Lectura con intención comunicativa y contexto social/laboral.
- Listening con mayor velocidad y variación de acentos.

## 6.4 Etapa 4 — JLPT N2
- Gramática avanzada, lectura extensa y matices.
- Estrategias de examen y gestión de tiempo.

## 6.5 Etapa 5 — JLPT N1
- Dominio de estructuras complejas, formalidad y matiz.
- Exposición a textos densos y audios exigentes.
- Simulaciones completas de alta dificultad.

---

## 7) Backlog maestro (qué agregar y mejorar)

### Producto y UX
- [ ] Definir user personas y casos de uso principales.
- [ ] Diseñar mapa de navegación y flujos de estudio.
- [ ] Implementar sistema de diseño y accesibilidad (WCAG base).

### Contenido educativo
- [ ] Estandarizar formato de lección (objetivo, explicación, ejemplo, práctica).
- [ ] Crear matriz de cobertura JLPT por nivel y tema.
- [ ] Diseñar banco de preguntas por dificultad y objetivo.

### Ingeniería
- [ ] Migrar front estático a arquitectura modular.
- [ ] Implementar API de contenido/progreso.
- [ ] Definir esquema de datos de estudiantes y resultados.
- [ ] Implementar autenticación y perfiles.

### Calidad
- [ ] Tests unitarios de lógica de evaluación/SRS.
- [ ] Tests e2e de flujos críticos (registro, lección, quiz, progreso).
- [ ] Validación de contenido (consistencia, duplicados, errores).

### Operación
- [ ] Pipeline CI/CD.
- [ ] Monitoreo y alertas.
- [ ] Versionado de contenido y estrategia de rollback.

---

## 8) Roadmap de implementación sugerido

### Fase 0 (2-3 semanas) — Orden y base técnica
- Auditoría del código actual.
- Definición de arquitectura inicial y convenciones.
- Setup de repo, ambientes y CI básico.

### Fase 1 (4-8 semanas) — MVP N5 funcional
- Módulos N5 (kana, vocab, gramática, kanji) con quizzes.
- Perfil de usuario + guardado de progreso.
- Primer simulacro N5.

### Fase 2 (4-6 semanas) — Escala N4
- Duplicar estructura pedagógica para N4.
- Mejoras en analytics y recomendaciones de estudio.

### Fase 3 (6-10 semanas) — N3 y robustez de plataforma
- Contenido y evaluaciones N3.
- Optimización de rendimiento y observabilidad avanzada.

### Fases 4-5 — N2 y N1
- Consolidar niveles avanzados.
- Refinar banco de exámenes y estrategia de retención.

---

## 9) Métricas clave para mantenimiento y mejora continua
- Tasa de finalización por unidad.
- Retención semanal/mensual.
- Precisión por tipo de ejercicio.
- Tiempo promedio para dominar lección.
- Tasa de aprobación en simulacros por nivel.
- Errores recurrentes por tema (para priorizar mejoras).

---

## 10) Riesgos y mitigación
- **Riesgo:** crecer contenido sin calidad pedagógica.
  - **Mitigación:** revisión editorial y rúbricas de calidad.
- **Riesgo:** deuda técnica temprana.
  - **Mitigación:** estándares, testing y revisiones de arquitectura.
- **Riesgo:** baja retención de usuarios.
  - **Mitigación:** sesiones cortas, metas semanales y feedback motivacional.

---

## 11) Propuesta operativa para “mantención y mejoras”
1. Ciclo quincenal de mejoras (plan → construir → medir → ajustar).
2. Priorización por impacto pedagógico + costo técnico.
3. Dashboard de métricas con revisión semanal.
4. Gestión de incidencias (bugs de contenido y de plataforma).
5. Revisión curricular mensual contra objetivos JLPT.

---

## 12) Entregables inmediatos (siguiente paso)
Para iniciar correctamente, se recomienda aprobar estos entregables:
1. **Documento de alcance N5** (temario exacto + criterios de aprobación).
2. **Diseño funcional del MVP N5** (pantallas y flujos clave).
3. **Modelo de datos inicial** (usuarios, lecciones, intentos, progreso).
4. **Backlog priorizado para 8 semanas**.
5. **Definición de métricas base y panel de seguimiento**.

---

## 13) Resumen ejecutivo
El proyecto ya tiene una base visual para comenzar, pero para convertirlo en una solución profesional de aprendizaje de japonés se necesita: **estructura pedagógica JLPT, arquitectura técnica escalable, sistema de progreso, motor de práctica inteligente y operación continua basada en métricas**. La entrada recomendada es un **MVP N5 sólido**, y desde ahí escalar ordenadamente a N4, N3, N2 y N1.
