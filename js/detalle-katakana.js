// Base de datos de Katakana con detalles
/**
 * Este objeto contiene cada carácter de hiragana como clave,
 * y un objeto con la información correspondiente:
 *   - char: El carácter en japonés.
 *   - pron: La pronunciación (romaji).
 *   - ejemplo: Un ejemplo de uso.
 *   - trazo: La ruta al archivo SVG para dibujar la forma.
 */

const katakanaData = {
    // Grupo A
    "a": { char: "ア", pron: "A", ejemplo: "アメリカ (amerika - América)", trazo: "svg/katakana/a.svg" },
    "i": { char: "イ", pron: "I", ejemplo: "イギリス (igirisu - Inglaterra)", trazo: "svg/katakana/i.svg" },
    "u": { char: "ウ", pron: "U", ejemplo: "ウイルス (uirusu - virus)", trazo: "svg/katakana/u.svg" },
    "e": { char: "エ", pron: "E", ejemplo: "エネルギー (enerugī - energía)", trazo: "svg/katakana/e.svg" },
    "o": { char: "オ", pron: "O", ejemplo: "オレンジ (orenji - naranja)", trazo: "svg/katakana/o.svg" },

    // Grupo KA
    "ka": { char: "カ", pron: "KA", ejemplo: "カメラ (kamera - cámara)", trazo: "svg/katakana/ka.svg" },
    "ki": { char: "キ", pron: "KI", ejemplo: "キロ (kiro - kilómetro)", trazo: "svg/katakana/ki.svg" },
    "ku": { char: "ク", pron: "KU", ejemplo: "クッキー (kukkī - galleta)", trazo: "svg/katakana/ku.svg" },
    "ke": { char: "ケ", pron: "KE", ejemplo: "ケーキ (kēki - pastel)", trazo: "svg/katakana/ke.svg" },
    "ko": { char: "コ", pron: "KO", ejemplo: "コーヒー (kōhī - café)", trazo: "svg/katakana/ko.svg" },

    // Grupo SA
    "sa": { char: "サ", pron: "SA", ejemplo: "サッカー (sakkā - fútbol)", trazo: "svg/katakana/sa.svg" },
    "shi": { char: "シ", pron: "SHI", ejemplo: "シャツ (shatsu - camisa)", trazo: "svg/katakana/shi.svg" },
    "su": { char: "ス", pron: "SU", ejemplo: "スーパー (sūpā - supermercado)", trazo: "svg/katakana/su.svg" },
    "se": { char: "セ", pron: "SE", ejemplo: "セーター (sētā - suéter)", trazo: "svg/katakana/se.svg" },
    "so": { char: "ソ", pron: "SO", ejemplo: "ソフト (sofuto - software)", trazo: "svg/katakana/so.svg" },

    // Grupo TA
    "ta": { char: "タ", pron: "TA", ejemplo: "タクシー (takushī - taxi)", trazo: "svg/katakana/ta.svg" },
    "chi": { char: "チ", pron: "CHI", ejemplo: "チーズ (chīzu - queso)", trazo: "svg/katakana/chi.svg" },
    "tsu": { char: "ツ", pron: "TSU", ejemplo: "ツイッター (tsuittā - Twitter)", trazo: "svg/katakana/tsu.svg" },
    "te": { char: "テ", pron: "TE", ejemplo: "テレビ (terebi - televisión)", trazo: "svg/katakana/te.svg" },
    "to": { char: "ト", pron: "TO", ejemplo: "トマト (tomato - tomate)", trazo: "svg/katakana/to.svg" },

    // Grupo NA
    "na": { char: "ナ", pron: "NA", ejemplo: "ナイフ (naifu - cuchillo)", trazo: "svg/katakana/na.svg" },
    "ni": { char: "ニ", pron: "NI", ejemplo: "ニュース (nyūsu - noticias)", trazo: "svg/katakana/ni.svg" },
    "nu": { char: "ヌ", pron: "NU", ejemplo: "ヌードル (nūdoru - fideos)", trazo: "svg/katakana/nu.svg" },
    "ne": { char: "ネ", pron: "NE", ejemplo: "ネコ (neko - gato, onomatopeya)", trazo: "svg/katakana/ne.svg" },
    "no": { char: "ノ", pron: "NO", ejemplo: "ノート (nōto - cuaderno)", trazo: "svg/katakana/no.svg" },

    // Grupo HA
    "ha": { char: "ハ", pron: "HA", ejemplo: "ハンバーガー (hanbāgā - hamburguesa)", trazo: "svg/katakana/ha.svg" },
    "hi": { char: "ヒ", pron: "HI", ejemplo: "ヒーロー (hīrō - héroe)", trazo: "svg/katakana/hi.svg" },
    "fu": { char: "フ", pron: "FU", ejemplo: "フランス (furansu - Francia)", trazo: "svg/katakana/fu.svg" },
    "he": { char: "ヘ", pron: "HE", ejemplo: "ヘリコプター (herikoputā - helicóptero)", trazo: "svg/katakana/he.svg" },
    "ho": { char: "ホ", pron: "HO", ejemplo: "ホテル (hoteru - hotel)", trazo: "svg/katakana/ho.svg" },

    // Grupo MA
    "ma": { char: "マ", pron: "MA", ejemplo: "マスク (masuku - mascarilla)", trazo: "svg/katakana/ma.svg" },
    "mi": { char: "ミ", pron: "MI", ejemplo: "ミルク (miruku - leche)", trazo: "svg/katakana/mi.svg" },
    "mu": { char: "ム", pron: "MU", ejemplo: "ムービー (mūbī - película)", trazo: "svg/katakana/mu.svg" },
    "me": { char: "メ", pron: "ME", ejemplo: "メール (mēru - correo)", trazo: "svg/katakana/me.svg" },
    "mo": { char: "モ", pron: "MO", ejemplo: "モーター (mōtā - motor)", trazo: "svg/katakana/mo.svg" },

    // Grupo RA
    "ra": { char: "ラ", pron: "RA", ejemplo: "ラジオ (rajio - radio)", trazo: "svg/katakana/ra.svg" },
    "ri": { char: "リ", pron: "RI", ejemplo: "リモコン (rimokon - control remoto)", trazo: "svg/katakana/ri.svg" },
    "ru": { char: "ル", pron: "RU", ejemplo: "ルール (rūru - regla)", trazo: "svg/katakana/ru.svg" },
    "re": { char: "レ", pron: "RE", ejemplo: "レストラン (resutoran - restaurante)", trazo: "svg/katakana/re.svg" },
    "ro": { char: "ロ", pron: "RO", ejemplo: "ロボット (robotto - robot)", trazo: "svg/katakana/ro.svg" },

    // Grupo WA y N
    "wa": { char: "ワ", pron: "WA", ejemplo: "ワイン (wain - vino)", trazo: "svg/katakana/wa.svg" },
    "wo": { char: "ヲ", pron: "WO", ejemplo: "ヲ (partícula, raro en Katakana)", trazo: "svg/katakana/wo.svg" },
    "n": { char: "ン", pron: "N", ejemplo: "パン (pan - pan)", trazo: "svg/katakana/n.svg" },

    // Sonidos especiales - Grupo GA
    "ga": { char: "ガ", pron: "GA", ejemplo: "ゲーム (gēmu - juego)", trazo: "svg/katakana/ga.svg" },
    "gi": { char: "ギ", pron: "GI", ejemplo: "ギター (gitā - guitarra)", trazo: "svg/katakana/gi.svg" },
    "gu": { char: "グ", pron: "GU", ejemplo: "グループ (gurūpu - grupo)", trazo: "svg/katakana/gu.svg" },
    "ge": { char: "ゲ", pron: "GE", ejemplo: "ゲスト (gesuto - invitado)", trazo: "svg/katakana/ge.svg" },
    "go": { char: "ゴ", pron: "GO", ejemplo: "ゴール (gōru - gol)", trazo: "svg/katakana/go.svg" },

    // Grupo ZA
    "za": { char: "ザ", pron: "ZA", ejemplo: "ザ (za - onomatopeya)", trazo: "svg/katakana/za.svg" },
    "ji": { char: "ジ", pron: "JI", ejemplo: "ジーンズ (jīnzu - jeans)", trazo: "svg/katakana/ji.svg" },
    "zu": { char: "ズ", pron: "ZU", ejemplo: "ズボン (zubon - pantalones)", trazo: "svg/katakana/zu.svg" },
    "ze": { char: "ゼ", pron: "ZE", ejemplo: "ゼロ (zero - cero)", trazo: "svg/katakana/ze.svg" },
    "zo": { char: "ゾ", pron: "ZO", ejemplo: "ゾーン (zōn - zona)", trazo: "svg/katakana/zo.svg" },

    // Grupo DA
    "da": { char: "ダ", pron: "DA", ejemplo: "ダンス (dansu - baile)", trazo: "svg/katakana/da.svg" },
    "di": { char: "ヂ", pron: "JI", ejemplo: "ヂ (ji - raro en Katakana)", trazo: "svg/katakana/di.svg" },
    "du": { char: "ヅ", pron: "ZU", ejemplo: "ヅ (zu - raro en Katakana)", trazo: "svg/katakana/du.svg" },
    "de": { char: "デ", pron: "DE", ejemplo: "デパート (depāto - almacén)", trazo: "svg/katakana/de.svg" },
    "do": { char: "ド", pron: "DO", ejemplo: "ドア (doa - puerta)", trazo: "svg/katakana/do.svg" },

    // Grupo BA
    "ba": { char: "バ", pron: "BA", ejemplo: "バス (basu - autobús)", trazo: "svg/katakana/ba.svg" },
    "bi": { char: "ビ", pron: "BI", ejemplo: "ビール (bīru - cerveza)", trazo: "svg/katakana/bi.svg" },
    "bu": { char: "ブ", pron: "BU", ejemplo: "ブック (bukku - libro)", trazo: "svg/katakana/bu.svg" },
    "be": { char: "ベ", pron: "BE", ejemplo: "ベッド (beddo - cama)", trazo: "svg/katakana/be.svg" },
    "bo": { char: "ボ", pron: "BO", ejemplo: "ボール (bōru - pelota)", trazo: "svg/katakana/bo.svg" },

    // Grupo PA (Handakuten)
    "pa": { char: "パ", pron: "PA", ejemplo: "パーティー (pātī - fiesta)", trazo: "svg/katakana/pa.svg" },
    "pi": { char: "ピ", pron: "PI", ejemplo: "ピアノ (piano - piano)", trazo: "svg/katakana/pi.svg" },
    "pu": { char: "プ", pron: "PU", ejemplo: "プール (pūru - piscina)", trazo: "svg/katakana/pu.svg" },
    "pe": { char: "ペ", pron: "PE", ejemplo: "ペン (pen - pluma)", trazo: "svg/katakana/pe.svg" },
    "po": { char: "ポ", pron: "PO", ejemplo: "ポケット (poketto - bolsillo)", trazo: "svg/katakana/po.svg" },

    // Sonidos compuestos - Grupo K
    "kya": { char: "キャ", pron: "KYA", ejemplo: "キャンプ (kyanpu - campamento)", trazo: "svg/katakana/kya.svg" },
    "kyu": { char: "キュ", pron: "KYU", ejemplo: "キュート (kyūto - lindo)", trazo: "svg/katakana/kyu.svg" },
    "kyo": { char: "キョ", pron: "KYO", ejemplo: "キョウト (kyōto - Kioto)", trazo: "svg/katakana/kyo.svg" },

    // Grupo S
    "sha": { char: "シャ", pron: "SHA", ejemplo: "シャワー (shawā - ducha)", trazo: "svg/katakana/sha.svg" },
    "shu": { char: "シュ", pron: "SHU", ejemplo: "シューズ (shūzu - zapatos)", trazo: "svg/katakana/shu.svg" },
    "sho": { char: "ショ", pron: "SHO", ejemplo: "ショー (shō - espectáculo)", trazo: "svg/katakana/sho.svg" },

    // Grupo T
    "cha": { char: "チャ", pron: "CHA", ejemplo: "チャンス (chansu - oportunidad)", trazo: "svg/katakana/cha.svg" },
    "chu": { char: "チュ", pron: "CHU", ejemplo: "チューブ (chūbu - tubo)", trazo: "svg/katakana/chu.svg" },
    "cho": { char: "チョ", pron: "CHO", ejemplo: "チョコ (choko - chocolate)", trazo: "svg/katakana/cho.svg" },

    // Grupo N
    "nya": { char: "ニャ", pron: "NYA", ejemplo: "ニャー (nyā - maullido)", trazo: "svg/katakana/nya.svg" },
    "nyu": { char: "ニュ", pron: "NYU", ejemplo: "ニュース (nyūsu - noticias)", trazo: "svg/katakana/nyu.svg" },
    "nyo": { char: "ニョ", pron: "NYO", ejemplo: "ニョキニョキ (nyoki-nyoki - brotar)", trazo: "svg/katakana/nyo.svg" },

    // Grupo H
    "hya": { char: "ヒャ", pron: "HYA", ejemplo: "ヒャッホー (hyahhō - grito de emoción)", trazo: "svg/katakana/hya.svg" },
    "hyu": { char: "ヒュ", pron: "HYU", ejemplo: "ヒューマン (hyūman - humano)", trazo: "svg/katakana/hyu.svg" },
    "hyo": { char: "ヒョ", pron: "HYO", ejemplo: "ヒョウ (hyō - leopardo)", trazo: "svg/katakana/hyo.svg" },

    // Grupo M
    "mya": { char: "ミャ", pron: "MYA", ejemplo: "ミャンマー (myanmā - Myanmar)", trazo: "svg/katakana/mya.svg" },
    "myu": { char: "ミュ", pron: "MYU", ejemplo: "ミュージック (myūjikku - música)", trazo: "svg/katakana/myu.svg" },
    "myo": { char: "ミョ", pron: "MYO", ejemplo: "ミョウ (myō - extraño)", trazo: "svg/katakana/myo.svg" },

    // Grupo R
    "rya": { char: "リャ", pron: "RYA", ejemplo: "リャマ (ryama - llama)", trazo: "svg/katakana/rya.svg" },
    "ryu": { char: "リュ", pron: "RYU", ejemplo: "リュック (ryukku - mochila)", trazo: "svg/katakana/ryu.svg" },
    "ryo": { char: "リョ", pron: "RYO", ejemplo: "リョウ (ryō - dormitorio, nombre)", trazo: "svg/katakana/ryo.svg" },

    // Sonidos compuestos especiales - Grupo G (GA)
    "gya": { char: "ギャ", pron: "GYA", ejemplo: "ギャグ (gyagu - broma)", trazo: "svg/katakana/gya.svg" },
    "gyu": { char: "ギュ", pron: "GYU", ejemplo: "ギュッ (gyu - abrazo fuerte)", trazo: "svg/katakana/gyu.svg" },
    "gyo": { char: "ギョ", pron: "GYO", ejemplo: "ギョーザ (gyōza - dumplings)", trazo: "svg/katakana/gyo.svg" },

    // Grupo Z (ZA)
    "ja": { char: "ジャ", pron: "JA", ejemplo: "ジャンプ (janpu - salto)", trazo: "svg/katakana/ja.svg" },
    "ju": { char: "ジュ", pron: "JU", ejemplo: "ジュース (jūsu - jugo)", trazo: "svg/katakana/ju.svg" },
    "jo": { char: "ジョ", pron: "JO", ejemplo: "ジョーク (jōku - chiste)", trazo: "svg/katakana/jo.svg" },

    // Grupo D (DA)
    "dya": { char: "ヂャ", pron: "DYA", ejemplo: "ヂャ (dya - raro en Katakana)", trazo: "svg/katakana/dya.svg" },
    "dyu": { char: "ヂュ", pron: "DYU", ejemplo: "ヂュ (dyu - raro en Katakana)", trazo: "svg/katakana/dyu.svg" },
    "dyo": { char: "ヂョ", pron: "DYO", ejemplo: "ヂョ (dyo - raro en Katakana)", trazo: "svg/katakana/dyo.svg" },

    // Grupo B (BA)
    "bya": { char: "ビャ", pron: "BYA", ejemplo: "ビャク (byaku - blanco, raro)", trazo: "svg/katakana/bya.svg" },
    "byu": { char: "ビュ", pron: "BYU", ejemplo: "ビュー (byū - vista)", trazo: "svg/katakana/byu.svg" },
    "byo": { char: "ビョ", pron: "BYO", ejemplo: "ビョウ (byō - segundo)", trazo: "svg/katakana/byo.svg" },

    // Grupo P (PA - Handakuten)
    "pya": { char: "ピャ", pron: "PYA", ejemplo: "ピャーッ (pyā - grito)", trazo: "svg/katakana/pya.svg" },
    "pyu": { char: "ピュ", pron: "PYU", ejemplo: "ピュア (pyua - puro)", trazo: "svg/katakana/pyu.svg" },
    "pyo": { char: "ピョ", pron: "PYO", ejemplo: "ピョンピョン (pyonpyon - saltar)", trazo: "svg/katakana/pyo.svg" }
};

// -------------------------------------------------------------------------------------------
// 2) MAPA DE TRAZOS (strokeCount) PARA KATAKANA (ya proporcionado, pero en JavaScript)
// -------------------------------------------------------------------------------------------
const katakanaStrokeCount = {
    "ア": 2, "イ": 2, "ウ": 3, "エ": 3, "オ": 3,
    "カ": 2, "キ": 3, "ク": 2, "ケ": 3, "コ": 2,
    "サ": 3, "シ": 3, "ス": 2, "セ": 2, "ソ": 2,
    "タ": 3, "チ": 3, "ツ": 3, "テ": 3, "ト": 2,
    "ナ": 2, "ニ": 2, "ヌ": 2, "ネ": 4, "ノ": 1,
    "ハ": 2, "ヒ": 2, "フ": 1, "ヘ": 1, "ホ": 4,
    "マ": 2, "ミ": 3, "ム": 2, "メ": 2, "モ": 3,
    "ヤ": 2, "ユ": 2, "ヨ": 3,
    "ラ": 2, "リ": 2, "ル": 2, "レ": 1, "ロ": 3,
    "ワ": 2, "ヲ": 3, "ン": 2,
    "ガ": 4, "ギ": 5, "グ": 4, "ゲ": 5, "ゴ": 4,
    "ザ": 5, "ジ": 5, "ズ": 4, "ゼ": 4, "ゾ": 4,
    "ダ": 5, "ヂ": 5, "ヅ": 5, "デ": 5, "ド": 4,
    "バ": 4, "ビ": 4, "ブ": 3, "ベ": 3, "ボ": 6,
    "パ": 3, "ピ": 3, "プ": 2, "ペ": 2, "ポ": 5,
    "ャ": 2, "ュ": 2, "ョ": 3
};

// 1) ASIGNAMOS strokeCount A CADA ENTRADA DE katakanaData
Object.keys(katakanaData).forEach(key => {
    const katakanaChar = katakanaData[key].char;
    if (katakanaStrokeCount[katakanaChar] !== undefined) {
        katakanaData[key].strokeCount = katakanaStrokeCount[katakanaChar];
    } else {
        katakanaData[key].strokeCount = 0;
    }
});

// 2) OBTENER PARÁMETRO DE LA URL
const params = new URLSearchParams(window.location.search);
const katakanaKey = params.get("k"); // Cambiamos "h" por "k" para diferenciar de hiragana

// 3) OBTENEMOS LOS ELEMENTOS DEL DOM
const title = document.getElementById("katakana-title");
const charElement = document.getElementById("katakana-char");
const pronElement = document.getElementById("katakana-pron");
const ejemploElement = document.getElementById("katakana-ejemplo");

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

// 4) COMPROBAR SI EXISTE EL KATAKANA
if (katakanaKey && katakanaData[katakanaKey]) {
    const katakana = katakanaData[katakanaKey];
    title.textContent = `Katakana: ${katakana.pron}`;
    charElement.textContent = katakana.char;
    pronElement.textContent = katakana.pron;
    ejemploElement.textContent = katakana.ejemplo;
    const requiredStrokes = katakana.strokeCount || 0;

    console.log("Intentando cargar SVG desde:", katakana.trazo);
    fetch(katakana.trazo)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status} - ${katakana.trazo} no encontrado`);
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
    console.log("Clave no encontrada:", katakanaKey);
    document.querySelector(".detalle").innerHTML = "<p>Katakana no encontrado.</p>";
}

// 5) FUNCIÓN PRINCIPAL QUE CONFIGURA EL CANVAS
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

// 6) VALIDACIÓN DEL DIBUJO
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
    const tolerance = 20; // Tolerancia de 20 píxeles
    let isAligned = true;

    const pathProperties = new svgPathProperties.svgPathProperties(svgPathData);
    const totalLength = pathProperties.getTotalLength();

    const samplePoints = [];
    const numSamples = 2000; // Densidad de puntos muestreados
    const step = totalLength / numSamples;

    for (let i = 0; i <= numSamples; i++) {
        const length = i * step;
        const point = pathProperties.getPointAtLength(length);
        samplePoints.push({ x: point.x, y: point.y });
    }

    // Validar cada punto del trazo del usuario
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