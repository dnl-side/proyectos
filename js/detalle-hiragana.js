// -------------------------------------------------------------------------------------------
// 1) OBJETO BASE DE DATOS DE HIRAGANA
// -------------------------------------------------------------------------------------------
/**
 * Este objeto contiene cada carácter de hiragana como clave,
 * y un objeto con la información correspondiente:
 *   - char: El carácter en japonés.
 *   - pron: La pronunciación (romaji).
 *   - ejemplo: Un ejemplo de uso.
 *   - trazo: La ruta al archivo SVG para dibujar la forma.
 */
const hiraganaData = {
    // Grupo A
    "a": { char: "あ", pron: "A", ejemplo: "あい (ai - amor)", trazo: "svg/hiragana/a.svg" },
    "i": { char: "い", pron: "I", ejemplo: "いえ (ie - casa)", trazo: "svg/hiragana/i.svg" },
    "u": { char: "う", pron: "U", ejemplo: "うみ (umi - mar)", trazo: "svg/hiragana/u.svg" },
    "e": { char: "え", pron: "E", ejemplo: "えんぴつ (enpitsu - lápiz)", trazo: "svg/hiragana/e.svg" },
    "o": { char: "お", pron: "O", ejemplo: "おちゃ (ocha - té verde)", trazo: "svg/hiragana/o.svg" },

    // Grupo KA
    "ka": { char: "か", pron: "KA", ejemplo: "かさ (kasa - paraguas)", trazo: "svg/hiragana/ka.svg" },
    "ki": { char: "き", pron: "KI", ejemplo: "きく (kiku - escuchar)", trazo: "svg/hiragana/ki.svg" },
    "ku": { char: "く", pron: "KU", ejemplo: "くつ (kutsu - zapatos)", trazo: "svg/hiragana/ku.svg" },
    "ke": { char: "け", pron: "KE", ejemplo: "けし (keshi - borrador)", trazo: "svg/hiragana/ke.svg" },
    "ko": { char: "こ", pron: "KO", ejemplo: "こども (kodomo - niño)", trazo: "svg/hiragana/ko.svg" },

    // Grupo SA
    "sa": { char: "さ", pron: "SA", ejemplo: "さかな (sakana - pez)", trazo: "svg/hiragana/sa.svg" },
    "shi": { char: "し", pron: "SHI", ejemplo: "しお (shio - sal)", trazo: "svg/hiragana/shi.svg" },
    "su": { char: "す", pron: "SU", ejemplo: "すし (sushi - sushi)", trazo: "svg/hiragana/su.svg" },
    "se": { char: "せ", pron: "SE", ejemplo: "せかい (sekai - mundo)", trazo: "svg/hiragana/se.svg" },
    "so": { char: "そ", pron: "SO", ejemplo: "そら (sora - cielo)", trazo: "svg/hiragana/so.svg" },

    // Grupo TA
    "ta": { char: "た", pron: "TA", ejemplo: "たべる (taberu - comer)", trazo: "svg/hiragana/ta.svg" },
    "chi": { char: "ち", pron: "CHI", ejemplo: "ちず (chizu - mapa)", trazo: "svg/hiragana/chi.svg" },
    "tsu": { char: "つ", pron: "TSU", ejemplo: "つき (tsuki - luna)", trazo: "svg/hiragana/tsu.svg" },
    "te": { char: "て", pron: "TE", ejemplo: "てがみ (tegami - carta)", trazo: "svg/hiragana/te.svg" },
    "to": { char: "と", pron: "TO", ejemplo: "とけい (tokei - reloj)", trazo: "svg/hiragana/to.svg" },

    // Grupo NA
    "na": { char: "な", pron: "NA", ejemplo: "なまえ (namae - nombre)", trazo: "svg/hiragana/na.svg" },
    "ni": { char: "に", pron: "NI", ejemplo: "にほん (nihon - Japón)", trazo: "svg/hiragana/ni.svg" },
    "nu": { char: "ぬ", pron: "NU", ejemplo: "ぬま (numa - pantano)", trazo: "svg/hiragana/nu.svg" },
    "ne": { char: "ね", pron: "NE", ejemplo: "ねこ (neko - gato)", trazo: "svg/hiragana/ne.svg" },
    "no": { char: "の", pron: "NO", ejemplo: "のみもの (nomimono - bebida)", trazo: "svg/hiragana/no.svg" },

    // Grupo HA
    "ha": { char: "は", pron: "HA", ejemplo: "はな (hana - flor)", trazo: "svg/hiragana/ha.svg" },
    "hi": { char: "ひ", pron: "HI", ejemplo: "ひる (hiru - mediodía)", trazo: "svg/hiragana/hi.svg" },
    "fu": { char: "ふ", pron: "FU", ejemplo: "ふね (fune - barco)", trazo: "svg/hiragana/fu.svg" },
    "he": { char: "へ", pron: "HE", ejemplo: "へや (heya - habitación)", trazo: "svg/hiragana/he.svg" },
    "ho": { char: "ほ", pron: "HO", ejemplo: "ほん (hon - libro)", trazo: "svg/hiragana/ho.svg" },

    // Grupo MA
    "ma": { char: "ま", pron: "MA", ejemplo: "まど (mado - ventana)", trazo: "svg/hiragana/ma.svg" },
    "mi": { char: "み", pron: "MI", ejemplo: "みず (mizu - agua)", trazo: "svg/hiragana/mi.svg" },
    "mu": { char: "む", pron: "MU", ejemplo: "むし (mushi - insecto)", trazo: "svg/hiragana/mu.svg" },
    "me": { char: "め", pron: "ME", ejemplo: "めがね (megane - gafas)", trazo: "svg/hiragana/me.svg" },
    "mo": { char: "も", pron: "MO", ejemplo: "もり (mori - bosque)", trazo: "svg/hiragana/mo.svg" },

    // Grupo RA
    "ra": { char: "ら", pron: "RA", ejemplo: "らくがき (rakugaki - garabato)", trazo: "svg/hiragana/ra.svg" },
    "ri": { char: "り", pron: "RI", ejemplo: "りんご (ringo - manzana)", trazo: "svg/hiragana/ri.svg" },
    "ru": { char: "る", pron: "RU", ejemplo: "るす (rusu - ausencia)", trazo: "svg/hiragana/ru.svg" },
    "re": { char: "れ", pron: "RE", ejemplo: "れいぞうこ (reizoko - refrigerador)", trazo: "svg/hiragana/re.svg" },
    "ro": { char: "ろ", pron: "RO", ejemplo: "ろぼっと (robotto - robot)", trazo: "svg/hiragana/ro.svg" },

    // Grupo WA y N
    "wa": { char: "わ", pron: "WA", ejemplo: "わたし (watashi - yo)", trazo: "svg/hiragana/wa.svg" },
    "wo": { char: "を", pron: "WO", ejemplo: "を (partícula objeto directo)", trazo: "svg/hiragana/wo.svg" },
    "n":  { char: "ん", pron: "N",  ejemplo: "てん (ten - punto)", trazo: "svg/hiragana/n.svg" },

    // Sonidos especiales - Grupo GA
    "ga": { char: "が", pron: "GA", ejemplo: "がっこう (gakkou - escuela)", trazo: "svg/hiragana/ga.svg" },
    "gi": { char: "ぎ", pron: "GI", ejemplo: "ぎん (gin - plata)", trazo: "svg/hiragana/gi.svg" },
    "gu": { char: "ぐ", pron: "GU", ejemplo: "ぐみ (gumi - goma)", trazo: "svg/hiragana/gu.svg" },
    "ge": { char: "げ", pron: "GE", ejemplo: "げんき (genki - saludable)", trazo: "svg/hiragana/ge.svg" },
    "go": { char: "ご", pron: "GO", ejemplo: "ごはん (gohan - arroz/comida)", trazo: "svg/hiragana/go.svg" },

    // Grupo ZA
    "za": { char: "ざ", pron: "ZA", ejemplo: "ざっし (zasshi - revista)", trazo: "svg/hiragana/za.svg" },
    "ji": { char: "じ", pron: "JI", ejemplo: "じかん (jikan - tiempo)", trazo: "svg/hiragana/ji.svg" },
    "zu": { char: "ず", pron: "ZU", ejemplo: "ずつ (zutsu - cada uno)", trazo: "svg/hiragana/zu.svg" },
    "ze": { char: "ぜ", pron: "ZE", ejemplo: "ぜんぶ (zenbu - todo)", trazo: "svg/hiragana/ze.svg" },
    "zo": { char: "ぞ", pron: "ZO", ejemplo: "ぞう (zou - elefante)", trazo: "svg/hiragana/zo.svg" },

    // Grupo DA
    "da": { char: "だ", pron: "DA", ejemplo: "だれ (dare - quién)", trazo: "svg/hiragana/da.svg" },
    "di": { char: "ぢ", pron: "JI", ejemplo: "ちぢむ (chijimu - encoger)", trazo: "svg/hiragana/di.svg" },
    "du": { char: "づ", pron: "ZU", ejemplo: "つづく (tsuzuku - continuar)", trazo: "svg/hiragana/du.svg" },
    "de": { char: "で", pron: "DE", ejemplo: "でんしゃ (densha - tren)", trazo: "svg/hiragana/de.svg" },
    "do": { char: "ど", pron: "DO", ejemplo: "どあ (doa - puerta)", trazo: "svg/hiragana/do.svg" },

    // Grupo BA
    "ba": { char: "ば", pron: "BA", ejemplo: "ばしょ (basho - lugar)", trazo: "svg/hiragana/ba.svg" },
    "bi": { char: "び", pron: "BI", ejemplo: "びじん (bijin - belleza)", trazo: "svg/hiragana/bi.svg" },
    "bu": { char: "ぶ", pron: "BU", ejemplo: "ぶた (buta - cerdo)", trazo: "svg/hiragana/bu.svg" },
    "be": { char: "べ", pron: "BE", ejemplo: "べんきょう (benkyou - estudio)", trazo: "svg/hiragana/be.svg" },
    "bo": { char: "ぼ", pron: "BO", ejemplo: "ぼうし (boushi - sombrero)", trazo: "svg/hiragana/bo.svg" },

    // Grupo PA (Handakuten)
    "pa": { char: "ぱ", pron: "PA", ejemplo: "ぱん (pan - pan)", trazo: "svg/hiragana/pa.svg" },
    "pi": { char: "ぴ", pron: "PI", ejemplo: "ぴあの (piano - piano)", trazo: "svg/hiragana/pi.svg" },
    "pu": { char: "ぷ", pron: "PU", ejemplo: "ぷりん (purin - flan)", trazo: "svg/hiragana/pu.svg" },
    "pe": { char: "ぺ", pron: "PE", ejemplo: "ぺん (pen - pluma)", trazo: "svg/hiragana/pe.svg" },
    "po": { char: "ぽ", pron: "PO", ejemplo: "ぽけっと (poketto - bolsillo)", trazo: "svg/hiragana/po.svg" },

    // Sonidos compuestos - Grupo K
    "kya": { char: "きゃ", pron: "KYA", ejemplo: "きゃく (kyaku - invitado)", trazo: "svg/hiragana/kya.svg" },
    "kyu": { char: "きゅ", pron: "KYU", ejemplo: "きゅう (kyuu - nueve)", trazo: "svg/hiragana/kyu.svg" },
    "kyo": { char: "きょ", pron: "KYO", ejemplo: "きょう (kyou - hoy)", trazo: "svg/hiragana/kyo.svg" },

    // Grupo S
    "sha": { char: "しゃ", pron: "SHA", ejemplo: "しゃしん (shashin - foto)", trazo: "svg/hiragana/sha.svg" },
    "shu": { char: "しゅ", pron: "SHU", ejemplo: "しゅみ (shumi - pasatiempo)", trazo: "svg/hiragana/shu.svg" },
    "sho": { char: "しょ", pron: "SHO", ejemplo: "しょくじ (shokuji - comida)", trazo: "svg/hiragana/sho.svg" },

    // Grupo T
    "cha": { char: "ちゃ", pron: "CHA", ejemplo: "ちゃわん (chawan - taza)", trazo: "svg/hiragana/cha.svg" },
    "chu": { char: "ちゅ", pron: "CHU", ejemplo: "ちゅうがっこう (chuugakkou - secundaria)", trazo: "svg/hiragana/chu.svg" },
    "cho": { char: "ちょ", pron: "CHO", ejemplo: "ちょう (chou - mariposa)", trazo: "svg/hiragana/cho.svg" },

    // Grupo N
    "nya": { char: "にゃ", pron: "NYA", ejemplo: "にゃん (nyan - maullido)", trazo: "svg/hiragana/nya.svg" },
    "nyu": { char: "にゅ", pron: "NYU", ejemplo: "にゅうがく (nyuugaku - ingreso)", trazo: "svg/hiragana/nyu.svg" },
    "nyo": { char: "にょ", pron: "NYO", ejemplo: "にょう (nyou - orina, raro)", trazo: "svg/hiragana/nyo.svg" },

    // Grupo H
    "hya": { char: "ひゃ", pron: "HYA", ejemplo: "ひゃく (hyaku - cien)", trazo: "svg/hiragana/hya.svg" },
    "hyu": { char: "ひゅ", pron: "HYU", ejemplo: "ひゅう (hyuu - silbido)", trazo: "svg/hiragana/hyu.svg" },
    "hyo": { char: "ひょ", pron: "HYO", ejemplo: "ひょう (hyou - hielo)", trazo: "svg/hiragana/hyo.svg" },

    // Grupo M
    "mya": { char: "みゃ", pron: "MYA", ejemplo: "みゃく (myaku - pulso)", trazo: "svg/hiragana/mya.svg" },
    "myu": { char: "みゅ", pron: "MYU", ejemplo: "みゅうじかる (myuujikaru - musical)", trazo: "svg/hiragana/myu.svg" },
    "myo": { char: "みょ", pron: "MYO", ejemplo: "みょう (myou - extraño)", trazo: "svg/hiragana/myo.svg" },

    // Grupo R
    "rya": { char: "りゃ", pron: "RYA", ejemplo: "りゃく (ryaku - abreviatura)", trazo: "svg/hiragana/rya.svg" },
    "ryu": { char: "りゅ", pron: "RYU", ejemplo: "りゅう (ryuu - dragón)", trazo: "svg/hiragana/ryu.svg" },
    "ryo": { char: "りょ", pron: "RYO", ejemplo: "りょう (ryou - dormitorio)", trazo: "svg/hiragana/ryo.svg" },

    // Sonidos compuestos especiales - Grupo G (GA)
    "gya": { char: "ぎゃ", pron: "GYA", ejemplo: "ぎゃく (gyaku - opuesto)", trazo: "svg/hiragana/gya.svg" },
    "gyu": { char: "ぎゅ", pron: "GYU", ejemplo: "ぎゅう (gyuu - vaca)", trazo: "svg/hiragana/gyu.svg" },
    "gyo": { char: "ぎょ", pron: "GYO", ejemplo: "ぎょかい (gyokai - industria pesquera)", trazo: "svg/hiragana/gyo.svg" },

    // Grupo Z (ZA)
    "ja":  { char: "じゃ", pron: "JA", ejemplo: "じゃあ (jaa - entonces)", trazo: "svg/hiragana/ja.svg" },
    "ju":  { char: "じゅ", pron: "JU", ejemplo: "じゅう (juu - diez)", trazo: "svg/hiragana/ju.svg" },
    "jo":  { char: "じょ", pron: "JO", ejemplo: "じょう (jou - castillo)", trazo: "svg/hiragana/jo.svg" },

    // Grupo D (DA)
    "dya": { char: "ぢゃ", pron: "DYA", ejemplo: "ぢゃ (dya - variante de ja, raro)", trazo: "svg/hiragana/dya.svg" },
    "dyu": { char: "ぢゅ", pron: "DYU", ejemplo: "ぢゅ (dyu - variante de ju, raro)", trazo: "svg/hiragana/dyu.svg" },
    "dyo": { char: "ぢょ", pron: "DYO", ejemplo: "ぢょ (dyo - variante de jo, raro)", trazo: "svg/hiragana/dyo.svg" },

    // Grupo B (BA)
    "bya": { char: "びゃ", pron: "BYA", ejemplo: "びゃく (byaku - blanco, raro)", trazo: "svg/hiragana/bya.svg" },
    "byu": { char: "びゅ", pron: "BYU", ejemplo: "びゅう (byuu - vista)", trazo: "svg/hiragana/byu.svg" },
    "byo": { char: "びょ", pron: "BYO", ejemplo: "びょう (byou - segundo)", trazo: "svg/hiragana/byo.svg" },

    // Grupo P (PA - Handakuten)
    "pya": { char: "ぴゃ", pron: "PYA", ejemplo: "ぴゃく (pyaku - cien, raro)", trazo: "svg/hiragana/pya.svg" },
    "pyu": { char: "ぴゅ", pron: "PYU", ejemplo: "ぴゅあ (pyua - puro)", trazo: "svg/hiragana/pyu.svg" },
    "pyo": { char: "ぴょ", pron: "PYO", ejemplo: "ぴょん (pyon - salto)", trazo: "svg/hiragana/pyo.svg" }
};

// -------------------------------------------------------------------------------------------
// 2) MAPA DE TRAZOS (strokeCount) POR CADA CARÁCTER (EN JAVASCRIPT)
// -------------------------------------------------------------------------------------------
const hiraganaStrokeCount = {
    "あ": 3, "い": 2, "う": 2, "え": 2, "お": 3,
    "か": 3, "き": 4, "く": 1, "け": 3, "こ": 2,
    "さ": 3, "し": 1, "す": 2, "せ": 3, "そ": 1,
    "た": 4, "ち": 2, "つ": 1, "て": 1, "と": 2,
    "な": 4, "に": 3, "ぬ": 2, "ね": 2, "の": 1,
    "は": 3, "ひ": 1, "ふ": 4, "へ": 1, "ほ": 4,
    "ま": 3, "み": 2, "む": 3, "め": 2, "も": 3,
    "や": 3, "ゆ": 2, "よ": 2,
    "ら": 2, "り": 2, "る": 1, "れ": 2, "ろ": 1,
    "わ": 2, "を": 3, "ん": 1,
    "が": 5, "ぎ": 6, "ぐ": 3, "げ": 5, "ご": 4,
    "ざ": 5, "じ": 3, "ず": 4, "ぜ": 5, "ぞ": 3,
    "だ": 6, "ぢ": 4, "づ": 3, "で": 3, "ど": 4,
    "ば": 5, "び": 3, "ぶ": 6, "べ": 3, "ぼ": 6,
    "ぱ": 4, "ぴ": 2, "ぷ": 5, "ぺ": 2, "ぽ": 5,
    "っ": 1,
    "ゃ": 3, "ゅ": 3, "ょ": 2
  };
  
// 3) ASIGNAMOS strokeCount A CADA ENTRADA DE hiraganaData
Object.keys(hiraganaData).forEach(key => {
    const hiraganaChar = hiraganaData[key].char;
    if (hiraganaStrokeCount[hiraganaChar] !== undefined) {
        hiraganaData[key].strokeCount = hiraganaStrokeCount[hiraganaChar];
    } else {
        hiraganaData[key].strokeCount = 0;
    }
});

// 4) OBTENER PARÁMETRO DE LA URL
const params = new URLSearchParams(window.location.search);
const hiraganaKey = params.get("h");

// 5) OBTENEMOS LOS ELEMENTOS DEL DOM
const title = document.getElementById("hiragana-title");
const charElement = document.getElementById("hiragana-char");
const pronElement = document.getElementById("hiragana-pron");
const ejemploElement = document.getElementById("hiragana-ejemplo");

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

// 6) COMPROBAR SI EXISTE EL HIRAGANA
if (hiraganaKey && hiraganaData[hiraganaKey]) {
    const hiragana = hiraganaData[hiraganaKey];
    title.textContent = `Hiragana: ${hiragana.pron}`;
    charElement.textContent = hiragana.char;
    pronElement.textContent = hiragana.pron;
    ejemploElement.textContent = hiragana.ejemplo;
    const requiredStrokes = hiragana.strokeCount || 0;

    console.log("Intentando cargar SVG desde:", hiragana.trazo);
    fetch(hiragana.trazo)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status} - ${hiragana.trazo} no encontrado`);
            }
            return response.text();
        })
        .then(svgText => {
            console.log("SVG cargado correctamente:", svgText.substring(0, 100));

            const parser = new DOMParser();
            const svgDoc = parser.parseFromString(svgText, "image/svg+xml");
            const svgPath = svgDoc.querySelector("path");
            if (!svgPath) {
                throw new Error("No se encontró un elemento <path> en el SVG");
            }
            const pathData = svgPath.getAttribute("d");
            const svgElement = svgDoc.querySelector("svg");
            const viewBox = svgElement.getAttribute("viewBox");
            if (!viewBox) {
                throw new Error("No se encontró viewBox en el SVG");
            }

            const viewBoxValues = viewBox.split(/\s+/).map(Number);
            const viewBoxWidth = viewBoxValues[2];
            const viewBoxHeight = viewBoxValues[3];
            console.log("viewBox dimensions:", viewBoxWidth, viewBoxHeight);

            setupCanvas(pathData, requiredStrokes, viewBoxWidth, viewBoxHeight);
        })
        .catch(err => {
            console.error("Error cargando o procesando SVG:", err);
            document.querySelector(".detalle").innerHTML += "<p>Error: No se pudo cargar el SVG para dibujar. Verifica la ruta.</p>";
        });
} else {
    console.log("Clave no encontrada:", hiraganaKey);
    document.querySelector(".detalle").innerHTML = "<p>Hiragana no encontrado.</p>";
}

// 7) FUNCIÓN PRINCIPAL QUE CONFIGURA EL CANVAS
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

    // Dibujar la cuadrícula de fondo
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
        return {
            x: clientX - rect.left,
            y: clientY - rect.top
        };
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

// 8) VALIDACIÓN DEL DIBUJO
function validateDrawing(svgPathData, requiredStrokes, userStrokeCount, offsetX, offsetY, scale) {
    // 1. Validar si hay trazos
    if (strokes.length === 0) {
        alert("Por favor, realiza algunos trazos antes de validar.");
        return;
    }

    // 2. Comparar cantidad de trazos con los requeridos
    if (userStrokeCount !== requiredStrokes) {
        alert(`Cantidad de trazos incorrecta. Realizaste ${userStrokeCount}/${requiredStrokes}.`);
        return;
    }

    // 3. Validar alineación con el SVG
    const tolerance = 20; // Tolerancia reducida a 20 píxeles como en Flutter
    let isAligned = true;

    const pathProperties = new svgPathProperties.svgPathProperties(svgPathData);
    const totalLength = pathProperties.getTotalLength();

    const samplePoints = [];
    const numSamples = 2000; // Aumentar la densidad de puntos muestreados
    const step = totalLength / numSamples;

    for (let i = 0; i <= numSamples; i++) {
        const length = i * step;
        const point = pathProperties.getPointAtLength(length);
        samplePoints.push({ x: point.x, y: point.y });
    }

    // Validar cada punto del trazo del usuario con depuración detallada
    for (let strokeIndex = 0; strokeIndex < strokes.length; strokeIndex++) {
        const stroke = strokes[strokeIndex];
        for (let pointIndex = 0; pointIndex < stroke.length; pointIndex++) {
            const point = stroke[pointIndex];
            let pointIsValid = false;

            // Transformar el punto del usuario al sistema de coordenadas del SVG
            const transformedX = (point.x - offsetX) / scale;
            const transformedY = (point.y - offsetY) / scale;

            // Calcular la distancia mínima al camino del SVG
            let minDistance = Infinity;
            for (const sample of samplePoints) {
                const distance = Math.hypot(transformedX - sample.x, transformedY - sample.y);
                minDistance = Math.min(minDistance, distance);
            }

            console.log(`Trazo ${strokeIndex}, Punto ${pointIndex} (${transformedX}, ${transformedY}): Distancia mínima = ${minDistance}`);

            if (minDistance <= tolerance) {
                pointIsValid = true;
            } else {
                console.log(`Punto (${transformedX}, ${transformedY}) fuera de tolerancia. Distancia mínima: ${minDistance}`);
            }

            if (!pointIsValid) {
                isAligned = false;
                break; // Salir del bucle de puntos si un punto falla
            }
        }
        if (!isAligned) break; // Salir del bucle de trazos si un trazo falla
    }

    // 4. Mostrar resultado
    if (isAligned) {
        alert("¡Dibujo válido! Los trazos están alineados correctamente.");
    } else {
        alert("Dibujo incorrecto. Intenta alinear mejor los trazos con el fondo.");
    }
}