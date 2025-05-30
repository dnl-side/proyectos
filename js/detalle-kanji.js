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

// Definir los stroke counts (esto debería estar en tu código o en un JSON separado)
const LEVEL1_KANJI_STROKE_COUNTS = [
    { kanji: "一", strokeCount: 1 },
    { kanji: "右", strokeCount: 5 },
    { kanji: "雨", strokeCount: 8 },
    { kanji: "円", strokeCount: 4 },
    { kanji: "王", strokeCount: 4 },
    { kanji: "音", strokeCount: 9 },
    { kanji: "下", strokeCount: 3 },
    { kanji: "火", strokeCount: 4 },
    { kanji: "花", strokeCount: 7 },
    { kanji: "貝", strokeCount: 7 },
    { kanji: "学", strokeCount: 8 },
    { kanji: "気", strokeCount: 6 },
    { kanji: "九", strokeCount: 2 },
    { kanji: "休", strokeCount: 6 },
    { kanji: "玉", strokeCount: 5 },
    { kanji: "金", strokeCount: 8 },
    { kanji: "空", strokeCount: 8 },
    { kanji: "月", strokeCount: 4 },
    { kanji: "犬", strokeCount: 4 },
    { kanji: "見", strokeCount: 7 },
    { kanji: "五", strokeCount: 4 },
    { kanji: "口", strokeCount: 3 },
    { kanji: "校", strokeCount: 10 },
    { kanji: "左", strokeCount: 5 },
    { kanji: "三", strokeCount: 3 },
    { kanji: "山", strokeCount: 3 },
    { kanji: "子", strokeCount: 3 },
    { kanji: "四", strokeCount: 5 },
    { kanji: "糸", strokeCount: 6 },
    { kanji: "字", strokeCount: 6 },
    { kanji: "耳", strokeCount: 6 },
    { kanji: "七", strokeCount: 2 },
    { kanji: "車", strokeCount: 7 },
    { kanji: "手", strokeCount: 4 },
    { kanji: "十", strokeCount: 2 },
    { kanji: "出", strokeCount: 5 },
    { kanji: "女", strokeCount: 3 },
    { kanji: "小", strokeCount: 3 },
    { kanji: "上", strokeCount: 3 },
    { kanji: "森", strokeCount: 12 },
    { kanji: "人", strokeCount: 2 },
    { kanji: "水", strokeCount: 4 },
    { kanji: "正", strokeCount: 5 },
    { kanji: "生", strokeCount: 5 },
    { kanji: "青", strokeCount: 8 },
    { kanji: "夕", strokeCount: 3 },
    { kanji: "石", strokeCount: 5 },
    { kanji: "赤", strokeCount: 7 },
    { kanji: "千", strokeCount: 3 },
    { kanji: "川", strokeCount: 3 },
    { kanji: "先", strokeCount: 6 },
    { kanji: "早", strokeCount: 6 },
    { kanji: "草", strokeCount: 9 },
    { kanji: "足", strokeCount: 7 },
    { kanji: "村", strokeCount: 7 },
    { kanji: "大", strokeCount: 3 },
    { kanji: "男", strokeCount: 7 },
    { kanji: "竹", strokeCount: 6 },
    { kanji: "中", strokeCount: 4 },
    { kanji: "虫", strokeCount: 6 },
    { kanji: "町", strokeCount: 7 },
    { kanji: "天", strokeCount: 4 },
    { kanji: "田", strokeCount: 5 },
    { kanji: "土", strokeCount: 3 },
    { kanji: "二", strokeCount: 2 },
    { kanji: "日", strokeCount: 4 },
    { kanji: "入", strokeCount: 2 },
    { kanji: "年", strokeCount: 6 },
    { kanji: "白", strokeCount: 5 },
    { kanji: "八", strokeCount: 2 },
    { kanji: "百", strokeCount: 6 },
    { kanji: "文", strokeCount: 4 },
    { kanji: "木", strokeCount: 4 },
    { kanji: "本", strokeCount: 5 },
    { kanji: "名", strokeCount: 6 },
    { kanji: "目", strokeCount: 5 },
    { kanji: "立", strokeCount: 5 },
    { kanji: "力", strokeCount: 2 },
    { kanji: "林", strokeCount: 8 },
    { kanji: "六", strokeCount: 4 }
];

const LEVEL2_KANJI_STROKE_COUNTS = [
    { kanji: "引", strokeCount: 4 },
    { kanji: "羽", strokeCount: 6 },
    { kanji: "雲", strokeCount: 12 },
    { kanji: "園", strokeCount: 13 },
    { kanji: "遠", strokeCount: 13 },
    { kanji: "何", strokeCount: 7 },
    { kanji: "科", strokeCount: 9 },
    { kanji: "夏", strokeCount: 10 },
    { kanji: "家", strokeCount: 10 },
    { kanji: "歌", strokeCount: 14 },
    { kanji: "画", strokeCount: 8 },
    { kanji: "回", strokeCount: 6 },
    { kanji: "会", strokeCount: 6 },
    { kanji: "海", strokeCount: 9 },
    { kanji: "絵", strokeCount: 12 },
    { kanji: "外", strokeCount: 5 },
    { kanji: "角", strokeCount: 7 },
    { kanji: "楽", strokeCount: 13 },
    { kanji: "活", strokeCount: 9 },
    { kanji: "間", strokeCount: 12 },
    { kanji: "丸", strokeCount: 3 },
    { kanji: "岩", strokeCount: 8 },
    { kanji: "顔", strokeCount: 18 },
    { kanji: "汽", strokeCount: 7 },
    { kanji: "記", strokeCount: 10 },
    { kanji: "帰", strokeCount: 10 },
    { kanji: "弓", strokeCount: 3 },
    { kanji: "牛", strokeCount: 4 },
    { kanji: "魚", strokeCount: 11 },
    { kanji: "京", strokeCount: 8 },
    { kanji: "強", strokeCount: 11 },
    { kanji: "教", strokeCount: 11 },
    { kanji: "近", strokeCount: 7 },
    { kanji: "兄", strokeCount: 7 },
    { kanji: "形", strokeCount: 7 },
    { kanji: "計", strokeCount: 9 },
    { kanji: "元", strokeCount: 4 },
    { kanji: "言", strokeCount: 7 },
    { kanji: "原", strokeCount: 10 },
    { kanji: "戸", strokeCount: 4 },
    { kanji: "古", strokeCount: 5 },
    { kanji: "午", strokeCount: 4 },
    { kanji: "後", strokeCount: 9 },
    { kanji: "語", strokeCount: 14 },
    { kanji: "工", strokeCount: 3 },
    { kanji: "公", strokeCount: 4 },
    { kanji: "広", strokeCount: 5 },
    { kanji: "交", strokeCount: 6 },
    { kanji: "光", strokeCount: 6 },
    { kanji: "考", strokeCount: 6 },
    { kanji: "行", strokeCount: 6 },
    { kanji: "高", strokeCount: 10 },
    { kanji: "黄", strokeCount: 11 },
    { kanji: "合", strokeCount: 6 },
    { kanji: "谷", strokeCount: 7 },
    { kanji: "国", strokeCount: 8 },
    { kanji: "黒", strokeCount: 11 },
    { kanji: "今", strokeCount: 4 },
    { kanji: "才", strokeCount: 3 },
    { kanji: "細", strokeCount: 11 },
    { kanji: "作", strokeCount: 7 },
    { kanji: "算", strokeCount: 14 },
    { kanji: "止", strokeCount: 4 },
    { kanji: "市", strokeCount: 5 },
    { kanji: "矢", strokeCount: 5 },
    { kanji: "姉", strokeCount: 8 },
    { kanji: "思", strokeCount: 9 },
    { kanji: "紙", strokeCount: 10 },
    { kanji: "寺", strokeCount: 6 },
    { kanji: "自", strokeCount: 6 },
    { kanji: "時", strokeCount: 10 },
    { kanji: "室", strokeCount: 9 },
    { kanji: "社", strokeCount: 7 },
    { kanji: "弱", strokeCount: 10 },
    { kanji: "首", strokeCount: 9 },
    { kanji: "秋", strokeCount: 9 },
    { kanji: "週", strokeCount: 11 },
    { kanji: "春", strokeCount: 9 },
    { kanji: "書", strokeCount: 10 },
    { kanji: "少", strokeCount: 4 },
    { kanji: "場", strokeCount: 12 },
    { kanji: "色", strokeCount: 6 },
    { kanji: "食", strokeCount: 9 },
    { kanji: "心", strokeCount: 4 },
    { kanji: "新", strokeCount: 13 },
    { kanji: "親", strokeCount: 16 },
    { kanji: "図", strokeCount: 7 },
    { kanji: "数", strokeCount: 13 },
    { kanji: "西", strokeCount: 6 },
    { kanji: "声", strokeCount: 7 },
    { kanji: "星", strokeCount: 9 },
    { kanji: "晴", strokeCount: 12 },
    { kanji: "切", strokeCount: 4 },
    { kanji: "雪", strokeCount: 11 },
    { kanji: "船", strokeCount: 11 },
    { kanji: "線", strokeCount: 15 },
    { kanji: "前", strokeCount: 9 },
    { kanji: "組", strokeCount: 11 },
    { kanji: "走", strokeCount: 7 },
    { kanji: "多", strokeCount: 6 },
    { kanji: "太", strokeCount: 4 },
    { kanji: "体", strokeCount: 7 },
    { kanji: "台", strokeCount: 5 },
    { kanji: "地", strokeCount: 6 },
    { kanji: "池", strokeCount: 6 },
    { kanji: "知", strokeCount: 8 },
    { kanji: "茶", strokeCount: 9 },
    { kanji: "昼", strokeCount: 9 },
    { kanji: "長", strokeCount: 8 },
    { kanji: "鳥", strokeCount: 11 },
    { kanji: "朝", strokeCount: 12 },
    { kanji: "直", strokeCount: 8 },
    { kanji: "通", strokeCount: 10 },
    { kanji: "弟", strokeCount: 7 },
    { kanji: "店", strokeCount: 8 },
    { kanji: "点", strokeCount: 9 },
    { kanji: "電", strokeCount: 13 },
    { kanji: "刀", strokeCount: 2 },
    { kanji: "冬", strokeCount: 5 },
    { kanji: "当", strokeCount: 6 },
    { kanji: "東", strokeCount: 8 },
    { kanji: "答", strokeCount: 12 },
    { kanji: "頭", strokeCount: 16 },
    { kanji: "同", strokeCount: 6 },
    { kanji: "道", strokeCount: 12 },
    { kanji: "読", strokeCount: 14 },
    { kanji: "内", strokeCount: 4 },
    { kanji: "南", strokeCount: 9 },
    { kanji: "肉", strokeCount: 6 },
    { kanji: "馬", strokeCount: 10 },
    { kanji: "売", strokeCount: 11 },
    { kanji: "買", strokeCount: 12 },
    { kanji: "麦", strokeCount: 7 },
    { kanji: "半", strokeCount: 5 },
    { kanji: "番", strokeCount: 12 },
    { kanji: "父", strokeCount: 4 },
    { kanji: "風", strokeCount: 9 },
    { kanji: "分", strokeCount: 4 },
    { kanji: "聞", strokeCount: 14 },
    { kanji: "米", strokeCount: 6 },
    { kanji: "歩", strokeCount: 8 },
    { kanji: "母", strokeCount: 5 },
    { kanji: "方", strokeCount: 4 },
    { kanji: "北", strokeCount: 5 },
    { kanji: "毎", strokeCount: 6 },
    { kanji: "妹", strokeCount: 8 },
    { kanji: "万", strokeCount: 3 },
    { kanji: "明", strokeCount: 8 },
    { kanji: "鳴", strokeCount: 14 },
    { kanji: "毛", strokeCount: 4 },
    { kanji: "門", strokeCount: 8 },
    { kanji: "夜", strokeCount: 8 },
    { kanji: "野", strokeCount: 11 },
    { kanji: "友", strokeCount: 4 },
    { kanji: "用", strokeCount: 5 },
    { kanji: "曜", strokeCount: 18 },
    { kanji: "来", strokeCount: 7 },
    { kanji: "里", strokeCount: 7 },
    { kanji: "理", strokeCount: 11 },
    { kanji: "話", strokeCount: 13 }
];

// Combinamos stroke counts en un solo objeto
const kanjiStrokeCounts = {};
LEVEL1_KANJI_STROKE_COUNTS.forEach(item => kanjiStrokeCounts[item.kanji] = item.strokeCount);
LEVEL2_KANJI_STROKE_COUNTS.forEach(item => kanjiStrokeCounts[item.kanji] = item.strokeCount);

// OBTENER PARÁMETROS DE LA URL
const params = new URLSearchParams(window.location.search);
const kanjiLevel = parseInt(params.get("level"), 10); // Nivel (1 o 2)
const kanjiChar = decodeURIComponent(params.get("char")); // Decodificar el carácter kanji (ej. "一")

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
fetch("/proyectos/json/kanji-lessons.json")
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
            const svgPath = `/proyectos/svg/kanji/nivel_${levelMap[kanjiLevel]}/${svgFile}.svg`;
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
            console.log("Parámetros inválidos:", kanjiLevel, kanjiChar, kanjiData, kanjiMap[kanjiLevel]);
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