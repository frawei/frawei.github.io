var speakButton = document.querySelector("#speak-button");
var speakText = document.querySelector("#speak-text");
var playerThese = document.querySelector("#audio-these");
var playerJaNein = document.querySelector("#audio-janein");
// var emojiFooter = document.querySelector("#emoji-btn");
var currentThese = "Gefühlte Fakten ist der beste Podcast";
var utter = new SpeechSynthesisUtterance();
utter.lang = 'de-DE';

function rndStr(myArray) {
    var RandomValue = Math.floor(Math.random() * myArray.length);
    return myArray[RandomValue];
}

/* function emojiShuffle() {
    emojiFooter.innerHTML = rndStr(emojis);
} */

window.onload = function() {
    speakText.setAttribute("placeholder", rndStr(phThese))
};

/* emojiFooter.addEventListener('click', function() {
    emojiShuffle();
}) */

speakButton.addEventListener('click', function() {
    if (speakText.value.trim() != '') {
        currentThese = speakText.value;
    } else { //use placeholder
        currentThese = speakText.getAttribute("placeholder");
    }
    //Button Settings
    speakButton.disabled = true;
    /* var intervalId = window.setInterval(function() {
        emojiShuffle();
    }, 400); */
    //set These audio source
    playerThese.setAttribute("src", rndStr(srcThese));
    //set Ja Nein audio source
    playerJaNein.setAttribute("src", rndStr(srcJaNein));
    //when JaNein is loaded, start function
    playerJaNein.oncanplay = function() {
        clearInterval(intervalId);
        speakButton.textContent = "🔊";
        //1 Thesen Einleitung
        playerThese.play();
        //when These is said, continue
        playerThese.onpause = function() {
            //
            utter.text = currentThese;
            window.speechSynthesis.speak(utter);
            utter.onend = function(event) {
                playerJaNein.play();
                playerJaNein.onpause = function() {
                    speakButton.disabled = false;
                    speakText.setAttribute("placeholder", rndStr(phThese));
                }

            }
        }
    }
});

var srcThese = [
    "source/thesen/14These1.mp3",
    "source/thesen/14These2.mp3",
    "source/thesen/14These3.mp3",
    "source/thesen/15These1.mp3",
    "source/thesen/15These2.mp3",
    "source/thesen/15These3.mp3",
    "source/thesen/16These1.mp3",
    "source/thesen/16These2.mp3",
    "source/thesen/16These3.mp3",
    "source/thesen/17These1.mp3",
    "source/thesen/17These2.mp3",
    "source/thesen/17These3.mp3",
    "source/thesen/18These1.mp3",
    "source/thesen/18These2.mp3",
    "source/thesen/18These3.mp3",
    "source/thesen/20These1.mp3",
    "source/thesen/20These2.mp3",
    "source/thesen/20These3.mp3",
    "source/thesen/21These1.mp3",
    "source/thesen/21These2.mp3",
    "source/thesen/21These3.mp3",
    "source/thesen/22These1.mp3",
    "source/thesen/22These2.mp3",
    "source/thesen/22These3.mp3",
    "source/thesen/23These1.mp3",
    "source/thesen/27These1.mp3",
    "source/thesen/27These2.mp3",
    "source/thesen/27These3.mp3",
    "source/thesen/28These1.mp3",
    "source/thesen/28These2.mp3",
    "source/thesen/28These3.mp3",
    "source/thesen/31These1.mp3",
    "source/thesen/31These2.mp3",
    "source/thesen/31These3.mp3",
    "source/thesen/35These1.mp3",
    "source/thesen/35These2.mp3",
    "source/thesen/35These3.mp3",
    "source/thesen/37These1.mp3",
    "source/thesen/37These2.mp3",
    "source/thesen/37These3.mp3",
    "source/thesen/40These1.mp3",
    "source/thesen/40These2.mp3",
    "source/thesen/40These3.mp3"
];

var txtLoad = [
    "Geduld bitte, Christian ist nicht mehr der jüngste.",
    "einen Moment, Tarkan muss erst noch das nächste Buch fertig schreiben",
    "warte kurz, die beiden bestellen gerade noch einen Absorber",
    "darüber müssen sie kurz nachdenken"
];

var phThese = [
    "Pizza Hawaii",
    "Remoulade",
    "Gurke auf dem Burger",
    "Sprachnachrichten über eine Minute",
    "langsam und genüsslich essen",
    "vor dem Zähneputzen Wasser über die Zahnpasta und über die Zahnbürste laufen lassen",
    "Bei lauter Musik bei den Nachbarn - rübergehn uns sich beschweren",
    "Joggen",
    "Freunden Geld leihen",
    "Mineralwasser, also Sprudelwasser",
    "Tatort",
    "Mit der Exfreundin von einem guten Freund befreundet bleiben.",
    "Nen Möbelpacker bei sich kacken lassen",
    "Bei einem Spiel der deutschen Nationalmannschaft eine Deuschlandflagge haben",
    "Filme in 3D sind besser als in 2D",
    "Woanders als zuhause auf Klo gehen. Und zwar, um ein großes Geschäft zu machen.",
    "Clown sind lustig",
    "Männer sollten sich nicht schminken",
    "Gerne Hosen kaufen gehen",
    "Jose Mourinho würde der Bundesliga gut tun",
    "Bei Vollmond lässt es sich schlechter schlafen",
    "E-Sport sollte wie ein normaler Sport behandelt werden",
    "Bargeld sollte abgeschafft werden",
    "Salziges Popcorn schmeckt besser als süßes Popcorn",
    "Das Nießen von anderen macht mich agressiv",
    "Die Brusthaare rasieren",
    "Homöopathische Arzneimittel",
    "Sich daran halten, wenn man sagt, dass man sich nichts schenkt",
    "Rassistischen Verwandten beim Festessen die Meinung sagen",
    "Plätzchen",
    "Sprachnachrichten laut abhören",
    "Über Geld sprechen",
    "Wenn man verabredet ist, nochmal per WhatsApp nachfragen, ob es bei der Verabredung bleibt",
    "Snooze-Taste",
    "Timo Werner passt sehr gut in das Spielsystem des FC Bayern München",
    "Jüngere in der bahn darauf hinweisen, dass sie den Platz für Ältere frei machen",
    "Jemandem sagen, dass er stinkt",
    "Die Lautstärke am Fernseher muss eine ungerade Zahl haben",
    "Rauchverbot",
    "Bevor man die Wohnung verlässt, den Herd kontrollieren",
    "Sprachnachrichten auf dem Klo aufnehmen",
    "Mit den Gelenken knacken"
];

var srcJaNein = [
    "source/janein/15Ja1.mp3",
    "source/janein/15Ja2.mp3",
    "source/janein/15Ja3.mp3",
    "source/janein/16Ja1.mp3",
    "source/janein/16Ja2.mp3",
    "source/janein/16Ja3.mp3",
    "source/janein/17Ja1.mp3",
    "source/janein/17Ja2.mp3",
    "source/janein/17Ja3.mp3",
    "source/janein/18Ja1.mp3",
    "source/janein/18Ja2.mp3",
    "source/janein/18Ja3.mp3",
    "source/janein/20Ja1.mp3",
    "source/janein/20Ja2.mp3",
    "source/janein/20Ja3.mp3",
    "source/janein/21Ja1.mp3",
    "source/janein/21Ja2.mp3",
    "source/janein/21Ja3.mp3",
    "source/janein/22Ja1.mp3",
    "source/janein/22Ja2.mp3",
    "source/janein/22Ja3.mp3",
    "source/janein/27Ja1.mp3",
    "source/janein/27Ja2.mp3",
    "source/janein/27Ja3.mp3",
    "source/janein/28Ja1.mp3",
    "source/janein/28Ja2.mp3",
    "source/janein/28Ja3.mp3",
    "source/janein/31Ja1.mp3",
    "source/janein/31Ja2.mp3",
    "source/janein/31Ja3.mp3",
    "source/janein/35Ja1.mp3",
    "source/janein/35Ja1z.mp3",
    "source/janein/35Ja2.mp3",
    "source/janein/35Ja3.mp3",
    "source/janein/37Ja1.mp3",
    "source/janein/37Ja2.mp3",
    "source/janein/37Ja3.mp3",
    "source/janein/40Ja1.mp3",
    "source/janein/40Ja2.mp3",
    "source/janein/40Ja3.mp3"
];

var emojis = [
    '😄', '😃', '😀', '😊', '☺', '😉', '😍', '😘', '😚', '😗', '😙', '😜', '😝', '😛', '😳', '😁', '😔', '😌', '😒', '😞', '😣', '😢', '😂', '😭', '😪', '😥', '😰', '😅', '😓', '😩', '😫', '😨', '😱', '😠', '😡', '😤', '😖', '😆', '😋', '😷', '😎', '😴', '😵', '😲', '😟', '😦', '😧', '😈', '👿', '😮', '😬', '😐', '😕', '😯', '😶', '😇', '😏', '😑', '👲', '👳', '👮', '👷', '💂', '👶', '👦', '👧', '👨', '👩', '👴', '👵', '👱', '👼', '👸', '😺', '😸', '😻', '😽', '😼', '🙀', '😿', '😹', '😾', '👹', '👺', '🙈', '🙉', '🙊', '💀', '👽', '💩', '🔥', '✨', '🌟', '💫', '💥', '💢', '💦', '💧', '💤', '💨', '👂', '👀', '👃', '👅', '👄', '👍', '👎', '👌', '👊', '✊', '✌', '👋', '✋', '👐', '👆', '👇', '👉', '👈', '🙌', '🙏', '☝', '👏', '💪', '🚶', '🏃', '💃', '👫', '👪', '👬', '👭', '💏', '💑', '👯', '🙆', '🙅', '💁', '🙋', '💆', '💇', '💅', '👰', '🙎', '🙍', '🙇', '🎩', '👑', '👒', '👟', '👞', '👡', '👠', '👢', '👕', '👔', '👚', '👗', '🎽', '👖', '👘', '👙', '💼', '👜', '👝', '👛', '👓', '🎀', '🌂', '💄', '💛', '💙', '💜', '💚', '❤', '💔', '💗', '💓', '💕', '💖', '💞', '💘', '💌', '💋', '💍', '💎', '👤', '👥', '💬', '👣', '💭', '🐶', '🐺', '🐱', '🐭', '🐹', '🐰', '🐸', '🐯', '🐨', '🐻', '🐷', '🐽', '🐮', '🐗', '🐵', '🐒', '🐴', '🐑', '🐘', '🐼', '🐧', '🐦', '🐤', '🐥', '🐣', '🐔', '🐍', '🐢', '🐛', '🐝', '🐜', '🐞', '🐌', '🐙', '🐚', '🐠', '🐟', '🐬', '🐳', '🐋', '🐄', '🐏', '🐀', '🐃', '🐅', '🐇', '🐉', '🐎', '🐐', '🐓', '🐕', '🐖', '🐁', '🐂', '🐲', '🐡', '🐊', '🐫', '🐪', '🐆', '🐈', '🐩', '🐾', '💐', '🌸', '🌷', '🍀', '🌹', '🌻', '🌺', '🍁', '🍃', '🍂', '🌿', '🌾', '🍄', '🌵', '🌴', '🌲', '🌳', '🌰', '🌱', '🌼', '🌐', '🌞', '🌝', '🌚', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌜', '🌛', '🌙', '🌍', '🌎', '🌏', '🌋', '🌌', '🌠', '⭐', '☀', '⛅', '☁', '⚡', '☔', '❄', '⛄', '🌀', '🌁', '🌈', '🌊', '🎍', '💝', '🎎', '🎒', '🎓', '🎏', '🎆', '🎇', '🎐', '🎑', '🎃', '👻', '🎅', '🎄', '🎁', '🎋', '🎉', '🎊', '🎈', '🎌', '🔮', '🎥', '📷', '📹', '📼', '💿', '📀', '💽', '💾', '💻', '📱', '☎', '📞', '📟', '📠', '📡', '📺', '📻', '🔊', '🔉', '🔈', '🔇', '🔔', '🔕', '📢', '📣', '⏳', '⌛', '⏰', '⌚', '🔓', '🔒', '🔏', '🔐', '🔑', '🔎', '💡', '🔦', '🔆', '🔅', '🔌', '🔋', '🔍', '🛁', '🛀', '🚿', '🚽', '🔧', '🔩', '🔨', '🚪', '🚬', '💣', '🔫', '🔪', '💊', '💉', '💰', '💴', '💵', '💷', '💶', '💳', '💸', '📲', '📧', '📥', '📤', '✉', '📩', '📨', '📯', '📫', '📪', '📬', '📭', '📮', '📦', '📝', '📄', '📃', '📑', '📊', '📈', '📉', '📜', '📋', '📅', '📆', '📇', '📁', '📂', '✂', '📌', '📎', '✒', '✏', '📏', '📐', '📕', '📗', '📘', '📙', '📓', '📔', '📒', '📚', '📖', '🔖', '📛', '🔬', '🔭', '📰', '🎨', '🎬', '🎤', '🎧', '🎼', '🎵', '🎶', '🎹', '🎻', '🎺', '🎷', '🎸', '👾', '🎮', '🃏', '🎴', '🀄', '🎲', '🎯', '🏈', '🏀', '⚽', '⚾', '🎾', '🎱', '🏉', '🎳', '⛳', '🚵', '🚴', '🏁', '🏇', '🏆', '🎿', '🏂', '🏊', '🏄', '🎣', '☕', '🍵', '🍶', '🍼', '🍺', '🍻', '🍸', '🍹', '🍷', '🍴', '🍕', '🍔', '🍟', '🍗', '🍖', '🍝', '🍛', '🍤', '🍱', '🍣', '🍥', '🍙', '🍘', '🍚', '🍜', '🍲', '🍢', '🍡', '🍳', '🍞', '🍩', '🍮', '🍦', '🍨', '🍧', '🎂', '🍰', '🍪', '🍫', '🍬', '🍭', '🍯', '🍎', '🍏', '🍊', '🍋', '🍒', '🍇', '🍉', '🍓', '🍑', '🍈', '🍌', '🍐', '🍍', '🍠', '🍆', '🍅', '🌽', '🏠', '🏡', '🏫', '🏢', '🏣', '🏥', '🏦', '🏪', '🏩', '🏨', '💒', '⛪', '🏬', '🏤', '🌇', '🌆', '🏯', '🏰', '⛺', '🏭', '🗼', '🗾', '🗻', '🌄', '🌅', '🌃', '🗽', '🌉', '🎠', '🎡', '⛲', '🎢', '🚢', '⛵', '🚤', '🚣', '⚓', '🚀', '✈', '💺', '🚁', '🚂', '🚊', '🚉', '🚞', '🚆', '🚄', '🚅', '🚈', '🚇', '🚝', '🚋', '🚃', '🚎', '🚌', '🚍', '🚙', '🚘', '🚗', '🚕', '🚖', '🚛', '🚚', '🚨', '🚓', '🚔', '🚒', '🚑', '🚐', '🚲', '🚡', '🚟', '🚠', '🚜', '💈', '🚏', '🎫', '🚦', '🚥', '⚠', '🚧', '🔰', '⛽', '🏮', '🎰', '♨', '🗿', '🎪', '🎭', '📍', '🚩', '⬆', '⬇', '⬅', '➡', '🔠', '🔡', '🔤', '↗', '↖', '↘', '↙', '↔', '↕', '🔄', '◀', '▶', '🔼', '🔽', '↩', '↪', 'ℹ', '⏪', '⏩', '⏫', '⏬', '⤵', '⤴', '🆗', '🔀', '🔁', '🔂', '🆕', '🆙', '🆒', '🆓', '🆖', '📶', '🎦', '🈁', '🈯', '🈳', '🈵', '🈴', '🈲', '🉐', '🈹', '🈺', '🈶', '🈚', '🚻', '🚹', '🚺', '🚼', '🚾', '🚰', '🚮', '🅿', '♿', '🚭', '🈷', '🈸', '🈂', 'Ⓜ', '🛂', '🛄', '🛅', '🛃', '🉑', '㊙', '㊗', '🆑', '🆘', '🆔', '🚫', '🔞', '📵', '🚯', '🚱', '🚳', '🚷', '🚸', '⛔', '✳', '❇', '❎', '✅', '✴', '💟', '🆚', '📳', '📴', '🅰', '🅱', '🆎', '🅾', '💠', '➿', '♻', '♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓', '⛎', '🔯', '🏧', '💹', '💲', '💱', '©', '®', '™', '〽', '〰', '🔝', '🔚', '🔙', '🔛', '🔜', '❌', '⭕', '❗', '❓', '❕', '❔', '🔃', '🕛', '🕧', '🕐', '🕜', '🕑', '🕝', '🕒', '🕞', '🕓', '🕟', '🕔', '🕠', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕡', '🕢', '🕣', '🕤', '🕥', '🕦', '✖', '➕', '➖', '➗', '♠', '♥', '♣', '♦', '💮', '💯', '✔', '☑', '🔘', '🔗', '➰', '🔱', '🔲', '🔳', '◼', '◻', '◾', '◽', '▪', '▫', '🔺', '⬜', '⬛', '⚫', '⚪', '🔴', '🔵', '🔻', '🔶', '🔷', '🔸', '🔹'
];
