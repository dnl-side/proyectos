// Mapa para convertir niveles numéricos a texto
const levelMap = {
    1: "uno",
    2: "dos",
    3: "tres",
    4: "cuatro",
    5: "cinco",
    6: "seis",
    7: "siete",
    8: "ocho"
};

// Mapa de kanji a número de archivo SVG por nivel
const kanjiMap = {
    1: {
        '一': '1', '右': '2', '雨': '3', '円': '4', '王': '5',
        '音': '6', '下': '7', '火': '8', '花': '9', '貝': '10',
        '学': '11', '気': '12', '九': '13', '休': '14', '玉': '15',
        '金': '16', '空': '17', '月': '18', '犬': '19', '見': '20',
        '五': '21', '口': '22', '校': '23', '左': '24', '三': '25',
        '山': '26', '子': '27', '四': '28', '糸': '29', '字': '30',
        '耳': '31', '七': '32', '車': '33', '手': '34', '十': '35',
        '出': '36', '女': '37', '小': '38', '上': '39', '森': '40',
        '人': '41', '水': '42', '正': '43', '生': '44', '青': '45',
        '夕': '46', '石': '47', '赤': '48', '千': '49', '川': '50',
        '先': '51', '早': '52', '草': '53', '足': '54', '村': '55',
        '大': '56', '男': '57', '竹': '58', '中': '59', '虫': '60',
        '町': '61', '天': '62', '田': '63', '土': '64', '二': '65',
        '日': '66', '入': '67', '年': '68', '白': '69', '八': '70',
        '百': '71', '文': '72', '木': '73', '本': '74', '名': '75',
        '目': '76', '立': '77', '力': '78', '林': '79', '六': '80'
    },
    2: {
        '引': '1', '羽': '2', '雲': '3', '園': '4', '遠': '5',
        '何': '6', '科': '7', '夏': '8', '家': '9', '歌': '10',
        '画': '11', '回': '12', '会': '13', '海': '14', '絵': '15',
        '外': '16', '角': '17', '楽': '18', '活': '19', '間': '20',
        '丸': '21', '岩': '22', '顔': '23', '汽': '24', '記': '25',
        '帰': '26', '弓': '27', '牛': '28', '魚': '29', '京': '30',
        '強': '31', '教': '32', '近': '33', '兄': '34', '形': '35',
        '計': '36', '元': '37', '言': '38', '原': '39', '戸': '40',
        '古': '41', '午': '42', '後': '43', '語': '44', '工': '45',
        '公': '46', '広': '47', '交': '48', '光': '49', '考': '50',
        '行': '51', '高': '52', '黄': '53', '合': '54', '谷': '55',
        '国': '56', '黒': '57', '今': '58', '才': '59', '細': '60',
        '作': '61', '算': '62', '止': '63', '市': '64', '矢': '65',
        '姉': '66', '思': '67', '紙': '68', '寺': '69', '自': '70',
        '時': '71', '室': '72', '社': '73', '弱': '74', '首': '75',
        '秋': '76', '週': '77', '春': '78', '書': '79', '少': '80',
        '場': '81', '色': '82', '食': '83', '心': '84', '新': '85',
        '親': '86', '図': '87', '数': '88', '西': '89', '声': '90',
        '星': '91', '晴': '92', '切': '93', '雪': '94', '船': '95',
        '線': '96', '前': '97', '組': '98', '走': '99', '多': '100',
        '太': '101', '体': '102', '台': '103', '地': '104', '池': '105',
        '知': '106', '茶': '107', '昼': '108', '長': '109', '鳥': '110',
        '朝': '111', '直': '112', '通': '113', '弟': '114', '店': '115',
        '点': '116', '電': '117', '刀': '118', '冬': '119', '当': '120',
        '東': '121', '答': '122', '頭': '123', '同': '124', '道': '125',
        '読': '126', '内': '127', '南': '128', '肉': '129', '馬': '130',
        '売': '131', '買': '132', '麦': '133', '半': '134', '番': '135',
        '父': '136', '風': '137', '分': '138', '聞': '139', '米': '140',
        '歩': '141', '母': '142', '方': '143', '北': '144', '毎': '145',
        '妹': '146', '万': '147', '明': '148', '鳴': '149', '毛': '150',
        '門': '151', '夜': '152', '野': '153', '友': '154', '用': '155',
        '曜': '156', '来': '157', '里': '158', '理': '159', '話': '160'
    }
};

const kanjiStrokeCounts = {};
LEVEL1_KANJI_STROKE_COUNTS.forEach(item => kanjiStrokeCounts[item.kanji] = item.strokeCount);
LEVEL2_KANJI_STROKE_COUNTS.forEach(item => kanjiStrokeCounts[item.kanji] = item.strokeCount);

// OBTENER PARÁMETROS DE LA URL
const params = new URLSearchParams(window.location.search);
const kanjiLevel = parseInt(params.get("level"), 10); // Nivel (1 o 2)
const kanjiChar = params.get("char"); // Carácter kanji (ej. "一")

// OBTENEMOS LOS ELEMENTOS DEL DOM
const title = document.getElementById("kanji-title");
const levelElement = document.getElementById("kanji-level");
const onyomiElement = document.getElementById("kanji-onyomi");
const kunyomiElement = document.getElementById("kanji-kunyomi");
const meaningElement = document.getElementById("kanji-meaning");
const exampleElement = document.getElementById("kanji-example");

// Creamos el canvas
const canvas = document.createElement("canvas");
canvas.id = "drawing-canvas";
canvas.width = 400;
canvas.height = 400;
document.querySelector(".detalle").appendChild(canvas);

// VARIABLES PARA EL DIBUJO
let isDrawing = false;
const strokes = [];
let currentStroke = [];

// CARGAR LAS LECCIONES DESDE EL JSON
fetch("json/kanji-lessons.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("No se pudo cargar kanji-lessons.json");
        }
        return response.json();
    })
    .then(kanjiLessons => {
        // BUSCAR EL KANJI EN LAS LECCIONES
        let kanjiData = null;
        for (const lesson of kanjiLessons) {
            const vocab = lesson.vocabulary.find(v => v.kanji === kanjiChar);
            if (vocab) {
                kanjiData = vocab;
                break;
            }
        }

        if (kanjiLevel && kanjiChar && kanjiData && kanjiMap[kanjiLevel] && kanjiMap[kanjiLevel][kanjiChar]) {
            // Información del kanji
            title.textContent = `Kanji: ${kanjiChar}`;
            levelElement.textContent = kanjiLevel;
            onyomiElement.textContent = kanjiData.on.length ? kanjiData.on.join(", ") : "-";
            kunyomiElement.textContent = kanjiData.kun.length ? kanjiData.kun.join(", ") : "-";
            meaningElement.textContent = kanjiData.meaning;
            exampleElement.textContent = kanjiData.example;

            // Construir la ruta del SVG
            const svgFile = kanjiMap[kanjiLevel][kanjiChar];
            const svgPath = `svg/kanji/nivel_${levelMap[kanjiLevel]}/${svgFile}.svg`;
            const requiredStrokes = kanjiStrokeCounts[kanjiChar] || 0;

            console.log("Intentando cargar SVG desde:", svgPath);
            fetch(svgPath)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status} - ${svgPath} no encontrado`);
                    }
                    return response.text();
                })
                .then(svgText => {
                    const parser = new DOMParser();
                    const svgDoc = parser.parseFromString(svgText, "image/svg+xml");
                    const svgPath = svgDoc.querySelector("path");
                    if (!svgPath) throw new Error("No se encontró un elemento <path> en el SVG");
                    const pathData = svgPath.getAttribute("d");
                    const svgElement = svgDoc.querySelector("svg");
                    const viewBox = svgElement.getAttribute("viewBox");
                    if (!viewBox) throw new Error("No se encontró viewBox en el SVG");

                    const viewBoxValues = viewBox.split(/\s+/).map(Number);
                    const viewBoxWidth = viewBoxValues[2];
                    const viewBoxHeight = viewBoxValues[3];

                    setupCanvas(pathData, requiredStrokes, viewBoxWidth, viewBoxHeight);
                })
                .catch(err => {
                    console.error("Error cargando o procesando SVG:", err);
                    document.querySelector(".detalle").innerHTML += "<p>Error: No se pudo cargar el SVG para dibujar. Verifica la ruta.</p>";
                });
        } else {
            console.log("Parámetros inválidos:", kanjiLevel, kanjiChar);
            document.querySelector(".detalle").innerHTML = "<p>Kanji no encontrado.</p>";
        }
    })
    .catch(err => {
        console.error("Error cargando kanji-lessons.json:", err);
        document.querySelector(".detalle").innerHTML = "<p>Error: No se pudo cargar las lecciones de kanji.</p>";
    });

// FUNCIONES setupCanvas y validateDrawing (sin cambios)
function setupCanvas(svgPathData, requiredStrokes, viewBoxWidth, viewBoxHeight) {
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    let strokeWidth = localStorage.getItem("strokeWidth") || 15;
    let userStrokeCount = 0;

    const canvasSize = { width: canvas.width, height: canvas.height };
    const scaleFactor = 0.5;
    const scaleX = (canvasSize.width * scaleFactor) / viewBoxWidth;
    const scaleY = (canvasSize.height * scaleFactor) / viewBoxHeight;
    const scale = Math.min(scaleX, scaleY);

    const offsetX = (canvasSize.width - viewBoxWidth * scale) / 2;
    const verticalAdjustment = -40;
    const offsetY = ((canvasSize.height - viewBoxHeight * scale) / 2) + verticalAdjustment;

    // Dibujar cuadrícula
    const gridSize = 20;
    ctx.strokeStyle = "#e0e0e0";
    ctx.lineWidth = 1;
    for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
    for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }

    ctx.save();
    ctx.translate(offsetX, offsetY);
    ctx.scale(scale, scale);
    const path = new Path2D(svgPathData);
    ctx.fillStyle = "rgba(255, 105, 180, 0.5)";
    ctx.fill(path);
    ctx.restore();

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);
    canvas.addEventListener("touchstart", startDrawing);
    canvas.addEventListener("touchmove", draw);
    canvas.addEventListener("touchend", stopDrawing);

    function startDrawing(e) {
        isDrawing = true;
        const pos = getPosition(e);
        currentStroke = [pos];
        userStrokeCount++;
        ctx.beginPath();
        ctx.moveTo(pos.x, pos.y);
        ctx.strokeStyle = getRandomColor();
        ctx.lineWidth = strokeWidth;
    }

    function draw(e) {
        if (!isDrawing) return;
        const pos = getPosition(e);
        currentStroke.push(pos);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
    }

    function stopDrawing() {
        if (isDrawing) {
            strokes.push(currentStroke);
            currentStroke = [];
            isDrawing = false;
        }
    }

    function getPosition(e) {
        const rect = canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        return { x: clientX - rect.left, y: clientY - rect.top };
    }

    function getRandomColor() {
        const colors = ["blue", "red", "teal", "yellow", "purple", "green", "orange"];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    const clearButton = document.createElement("button");
    clearButton.textContent = "Limpiar";
    clearButton.addEventListener("click", () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = "#e0e0e0";
        ctx.lineWidth = 1;
        for (let x = 0; x <= canvas.width; x += gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
        }
        for (let y = 0; y <= canvas.height; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
        }
        ctx.save();
        ctx.translate(offsetX, offsetY);
        ctx.scale(scale, scale);
        ctx.fillStyle = "rgba(255, 105, 180, 0.5)";
        ctx.fill(path);
        ctx.restore();
        strokes.length = 0;
        userStrokeCount = 0;
    });
    document.querySelector(".detalle").appendChild(clearButton);

    const validateButton = document.createElement("button");
    validateButton.textContent = "Validar";
    validateButton.addEventListener("click", () => {
        validateDrawing(svgPathData, requiredStrokes, userStrokeCount, offsetX, offsetY, scale);
    });
    document.querySelector(".detalle").appendChild(validateButton);

    const widthButton = document.createElement("button");
    widthButton.textContent = "Grosor";
    widthButton.addEventListener("click", () => {
        const newWidth = prompt("Ingresa el grosor del trazo (1-20):", strokeWidth);
        if (newWidth && !isNaN(newWidth) && newWidth >= 1 && newWidth <= 20) {
            strokeWidth = newWidth;
            localStorage.setItem("strokeWidth", strokeWidth);
        }
    });
    document.querySelector(".detalle").appendChild(widthButton);
}

function validateDrawing(svgPathData, requiredStrokes, userStrokeCount, offsetX, offsetY, scale) {
    if (strokes.length === 0) {
        alert("Por favor, realiza algunos trazos antes de validar.");
        return;
    }
    if (userStrokeCount !== requiredStrokes) {
        alert(`Cantidad de trazos incorrecta. Realizaste ${userStrokeCount}/${requiredStrokes}.`);
        return;
    }
    const tolerance = 20;
    let isAligned = true;
    const pathProperties = new svgPathProperties.svgPathProperties(svgPathData);
    const totalLength = pathProperties.getTotalLength();
    const samplePoints = [];
    const numSamples = 2000;
    const step = totalLength / numSamples;

    for (let i = 0; i <= numSamples; i++) {
        const length = i * step;
        const point = pathProperties.getPointAtLength(length);
        samplePoints.push({ x: point.x, y: point.y });
    }

    for (let strokeIndex = 0; strokeIndex < strokes.length; strokeIndex++) {
        const stroke = strokes[strokeIndex];
        for (let pointIndex = 0; pointIndex < stroke.length; pointIndex++) {
            const point = stroke[pointIndex];
            let pointIsValid = false;
            const transformedX = (point.x - offsetX) / scale;
            const transformedY = (point.y - offsetY) / scale;
            let minDistance = Infinity;
            for (const sample of samplePoints) {
                const distance = Math.hypot(transformedX - sample.x, transformedY - sample.y);
                minDistance = Math.min(minDistance, distance);
            }
            if (minDistance <= tolerance) {
                pointIsValid = true;
            } else {
                console.log(`Punto (${transformedX}, ${transformedY}) fuera de tolerancia. Distancia mínima: ${minDistance}`);
            }
            if (!pointIsValid) {
                isAligned = false;
                break;
            }
        }
        if (!isAligned) break;
    }

    if (isAligned) {
        alert("¡Dibujo válido! Los trazos están alineados correctamente.");
    } else {
        alert("Dibujo incorrecto. Intenta alinear mejor los trazos con el fondo.");
    }
}