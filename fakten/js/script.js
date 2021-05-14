var speakButton = document.querySelector("#speak-button");
var speakText = document.querySelector("#speak-text");
var playerThese = document.querySelector("#audio-these");
var playerJaNein = document.querySelector("#audio-janein");
var emojiFooter = document.querySelector("#emoji-footer");
var currentThese = "Gefühlte Fakten ist der beste Podcast";
var utter = new SpeechSynthesisUtterance();

utter.lang = 'de-DE';

window.onload = function() {
    var randomPlaceholder = Math.floor(Math.random() * phThese.length);
    speakText.setAttribute("placeholder", phThese[randomPlaceholder])
    var randomEmoji1 = Math.floor(Math.random() * emojis.length);
    var randomEmoji2 = Math.floor(Math.random() * emojis.length);
    var randomEmoji3 = Math.floor(Math.random() * emojis.length);
    var randomEmoji4 = Math.floor(Math.random() * emojis.length);
    var randomEmoji5 = Math.floor(Math.random() * emojis.length);
    emojiFooter.innerHTML = emojis[randomEmoji1] + emojis[randomEmoji2] + emojis[randomEmoji3] + emojis[randomEmoji4] + emojis[randomEmoji5]
};

emojiFooter.addEventListener('click', function() {
    var randomEmoji1 = Math.floor(Math.random() * emojis.length);
    var randomEmoji2 = Math.floor(Math.random() * emojis.length);
    var randomEmoji3 = Math.floor(Math.random() * emojis.length);
    var randomEmoji4 = Math.floor(Math.random() * emojis.length);
    var randomEmoji5 = Math.floor(Math.random() * emojis.length);
    emojiFooter.innerHTML = emojis[randomEmoji1] + emojis[randomEmoji2] + emojis[randomEmoji3] + emojis[randomEmoji4] + emojis[randomEmoji5]
})

speakButton.addEventListener('click', function() {
    if (speakText.value.trim() != '') {
        currentThese = speakText.value;
    } else {
        currentThese = speakText.getAttribute("placeholder");
    }
    //get random values from arrays
    var randomButtonText = Math.floor(Math.random() * txtLoad.length);
    var randomJaNein = Math.floor(Math.random() * srcJaNein.length);
    var randomThese = Math.floor(Math.random() * srcThese.length);
    //Button Settings
    speakButton.disabled = true;
    var intervalId = window.setInterval(function() {
        var randomEmoji1 = Math.floor(Math.random() * emojis.length);
        speakButton.textContent = txtLoad[randomButtonText] + '\n \n' + emojis[randomEmoji1] + emojis[randomEmoji1] + emojis[randomEmoji1] + emojis[randomEmoji1] + emojis[randomEmoji1]
    }, 400);
    //set These audio source
    playerThese.setAttribute("src", srcThese[randomThese]);
    //set Ja Nein audio source
    playerJaNein.setAttribute("src", srcJaNein[randomJaNein]);
    //when JaNein is loaded, start function
    playerJaNein.oncanplay = function() {
        clearInterval(intervalId);
        speakButton.textContent = "These prüfen";
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
                    speakButton.textContent = "These prüfen";
                    speakButton.disabled = false;
                    var randomPlaceholder = Math.floor(Math.random() * phThese.length);
                    speakText.setAttribute("placeholder", phThese[randomPlaceholder])
                }

            }
        }
    }
});

var srcThese = [
    "https://sodnor.github.io/fakten/source/thesen/14These1.mp3",
    "https://sodnor.github.io/fakten/source/thesen/14These2.mp3",
    "https://sodnor.github.io/fakten/source/thesen/14These3.mp3",
    "https://sodnor.github.io/fakten/source/thesen/15These1.mp3",
    "https://sodnor.github.io/fakten/source/thesen/15These2.mp3",
    "https://sodnor.github.io/fakten/source/thesen/15These3.mp3",
    "https://sodnor.github.io/fakten/source/thesen/16These1.mp3",
    "https://sodnor.github.io/fakten/source/thesen/16These2.mp3",
    "https://sodnor.github.io/fakten/source/thesen/16These3.mp3",
    "https://sodnor.github.io/fakten/source/thesen/17These1.mp3",
    "https://sodnor.github.io/fakten/source/thesen/17These2.mp3",
    "https://sodnor.github.io/fakten/source/thesen/17These3.mp3",
    "https://sodnor.github.io/fakten/source/thesen/18These1.mp3",
    "https://sodnor.github.io/fakten/source/thesen/18These2.mp3",
    "https://sodnor.github.io/fakten/source/thesen/18These3.mp3",
    "https://sodnor.github.io/fakten/source/thesen/20These1.mp3",
    "https://sodnor.github.io/fakten/source/thesen/20These2.mp3",
    "https://sodnor.github.io/fakten/source/thesen/20These3.mp3",
    "https://sodnor.github.io/fakten/source/thesen/21These1.mp3",
    "https://sodnor.github.io/fakten/source/thesen/21These2.mp3",
    "https://sodnor.github.io/fakten/source/thesen/21These3.mp3",
    "https://sodnor.github.io/fakten/source/thesen/22These1.mp3",
    "https://sodnor.github.io/fakten/source/thesen/22These2.mp3",
    "https://sodnor.github.io/fakten/source/thesen/22These3.mp3",
    "https://sodnor.github.io/fakten/source/thesen/23These1.mp3",
    "https://sodnor.github.io/fakten/source/thesen/27These1.mp3",
    "https://sodnor.github.io/fakten/source/thesen/27These2.mp3",
    "https://sodnor.github.io/fakten/source/thesen/27These3.mp3",
    "https://sodnor.github.io/fakten/source/thesen/28These1.mp3",
    "https://sodnor.github.io/fakten/source/thesen/28These2.mp3",
    "https://sodnor.github.io/fakten/source/thesen/28These3.mp3",
    "https://sodnor.github.io/fakten/source/thesen/31These1.mp3",
    "https://sodnor.github.io/fakten/source/thesen/31These2.mp3",
    "https://sodnor.github.io/fakten/source/thesen/31These3.mp3",
    "https://sodnor.github.io/fakten/source/thesen/35These1.mp3",
    "https://sodnor.github.io/fakten/source/thesen/35These2.mp3",
    "https://sodnor.github.io/fakten/source/thesen/35These3.mp3",
    "https://sodnor.github.io/fakten/source/thesen/37These1.mp3",
    "https://sodnor.github.io/fakten/source/thesen/37These2.mp3",
    "https://sodnor.github.io/fakten/source/thesen/37These3.mp3",
    "https://sodnor.github.io/fakten/source/thesen/40These1.mp3",
    "https://sodnor.github.io/fakten/source/thesen/40These2.mp3",
    "https://sodnor.github.io/fakten/source/thesen/40These3.mp3"
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
    "https://sodnor.github.io/fakten/source/janein/15Ja1.mp3",
    "https://sodnor.github.io/fakten/source/janein/15Ja2.mp3",
    "https://sodnor.github.io/fakten/source/janein/15Ja3.mp3",
    "https://sodnor.github.io/fakten/source/janein/16Ja1.mp3",
    "https://sodnor.github.io/fakten/source/janein/16Ja2.mp3",
    "https://sodnor.github.io/fakten/source/janein/16Ja3.mp3",
    "https://sodnor.github.io/fakten/source/janein/17Ja1.mp3",
    "https://sodnor.github.io/fakten/source/janein/17Ja2.mp3",
    "https://sodnor.github.io/fakten/source/janein/17Ja3.mp3",
    "https://sodnor.github.io/fakten/source/janein/18Ja1.mp3",
    "https://sodnor.github.io/fakten/source/janein/18Ja2.mp3",
    "https://sodnor.github.io/fakten/source/janein/18Ja3.mp3",
    "https://sodnor.github.io/fakten/source/janein/20Ja1.mp3",
    "https://sodnor.github.io/fakten/source/janein/20Ja2.mp3",
    "https://sodnor.github.io/fakten/source/janein/20Ja3.mp3",
    "https://sodnor.github.io/fakten/source/janein/21Ja1.mp3",
    "https://sodnor.github.io/fakten/source/janein/21Ja2.mp3",
    "https://sodnor.github.io/fakten/source/janein/21Ja3.mp3",
    "https://sodnor.github.io/fakten/source/janein/22Ja1.mp3",
    "https://sodnor.github.io/fakten/source/janein/22Ja2.mp3",
    "https://sodnor.github.io/fakten/source/janein/22Ja3.mp3",
    "https://sodnor.github.io/fakten/source/janein/27Ja1.mp3",
    "https://sodnor.github.io/fakten/source/janein/27Ja2.mp3",
    "https://sodnor.github.io/fakten/source/janein/27Ja3.mp3",
    "https://sodnor.github.io/fakten/source/janein/28Ja1.mp3",
    "https://sodnor.github.io/fakten/source/janein/28Ja2.mp3",
    "https://sodnor.github.io/fakten/source/janein/28Ja3.mp3",
    "https://sodnor.github.io/fakten/source/janein/31Ja1.mp3",
    "https://sodnor.github.io/fakten/source/janein/31Ja2.mp3",
    "https://sodnor.github.io/fakten/source/janein/31Ja3.mp3",
    "https://sodnor.github.io/fakten/source/janein/35Ja1.mp3",
    "https://sodnor.github.io/fakten/source/janein/35Ja1z.mp3",
    "https://sodnor.github.io/fakten/source/janein/35Ja2.mp3",
    "https://sodnor.github.io/fakten/source/janein/35Ja3.mp3",
    "https://sodnor.github.io/fakten/source/janein/37Ja1.mp3",
    "https://sodnor.github.io/fakten/source/janein/37Ja2.mp3",
    "https://sodnor.github.io/fakten/source/janein/37Ja3.mp3",
    "https://sodnor.github.io/fakten/source/janein/40Ja1.mp3",
    "https://sodnor.github.io/fakten/source/janein/40Ja2.mp3",
    "https://sodnor.github.io/fakten/source/janein/40Ja3.mp3"
];

var emojis = [
    '😄', '😃', '😀', '😊', '☺', '😉', '😍', '😘', '😚', '😗', '😙', '😜', '😝', '😛', '😳', '😁', '😔', '😌', '😒', '😞', '😣', '😢', '😂', '😭', '😪', '😥', '😰', '😅', '😓', '😩', '😫', '😨', '😱', '😠', '😡', '😤', '😖', '😆', '😋', '😷', '😎', '😴', '😵', '😲', '😟', '😦', '😧', '😈', '👿', '😮', '😬', '😐', '😕', '😯', '😶', '😇', '😏', '😑', '👲', '👳', '👮', '👷', '💂', '👶', '👦', '👧', '👨', '👩', '👴', '👵', '👱', '👼', '👸', '😺', '😸', '😻', '😽', '😼', '🙀', '😿', '😹', '😾', '👹', '👺', '🙈', '🙉', '🙊', '💀', '👽', '💩', '🔥', '✨', '🌟', '💫', '💥', '💢', '💦', '💧', '💤', '💨', '👂', '👀', '👃', '👅', '👄', '👍', '👎', '👌', '👊', '✊', '✌', '👋', '✋', '👐', '👆', '👇', '👉', '👈', '🙌', '🙏', '☝', '👏', '💪', '🚶', '🏃', '💃', '👫', '👪', '👬', '👭', '💏', '💑', '👯', '🙆', '🙅', '💁', '🙋', '💆', '💇', '💅', '👰', '🙎', '🙍', '🙇', '🎩', '👑', '👒', '👟', '👞', '👡', '👠', '👢', '👕', '👔', '👚', '👗', '🎽', '👖', '👘', '👙', '💼', '👜', '👝', '👛', '👓', '🎀', '🌂', '💄', '💛', '💙', '💜', '💚', '❤', '💔', '💗', '💓', '💕', '💖', '💞', '💘', '💌', '💋', '💍', '💎', '👤', '👥', '💬', '👣', '💭', '🐶', '🐺', '🐱', '🐭', '🐹', '🐰', '🐸', '🐯', '🐨', '🐻', '🐷', '🐽', '🐮', '🐗', '🐵', '🐒', '🐴', '🐑', '🐘', '🐼', '🐧', '🐦', '🐤', '🐥', '🐣', '🐔', '🐍', '🐢', '🐛', '🐝', '🐜', '🐞', '🐌', '🐙', '🐚', '🐠', '🐟', '🐬', '🐳', '🐋', '🐄', '🐏', '🐀', '🐃', '🐅', '🐇', '🐉', '🐎', '🐐', '🐓', '🐕', '🐖', '🐁', '🐂', '🐲', '🐡', '🐊', '🐫', '🐪', '🐆', '🐈', '🐩', '🐾', '💐', '🌸', '🌷', '🍀', '🌹', '🌻', '🌺', '🍁', '🍃', '🍂', '🌿', '🌾', '🍄', '🌵', '🌴', '🌲', '🌳', '🌰', '🌱', '🌼', '🌐', '🌞', '🌝', '🌚', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌜', '🌛', '🌙', '🌍', '🌎', '🌏', '🌋', '🌌', '🌠', '⭐', '☀', '⛅', '☁', '⚡', '☔', '❄', '⛄', '🌀', '🌁', '🌈', '🌊', '🎍', '💝', '🎎', '🎒', '🎓', '🎏', '🎆', '🎇', '🎐', '🎑', '🎃', '👻', '🎅', '🎄', '🎁', '🎋', '🎉', '🎊', '🎈', '🎌', '🔮', '🎥', '📷', '📹', '📼', '💿', '📀', '💽', '💾', '💻', '📱', '☎', '📞', '📟', '📠', '📡', '📺', '📻', '🔊', '🔉', '🔈', '🔇', '🔔', '🔕', '📢', '📣', '⏳', '⌛', '⏰', '⌚', '🔓', '🔒', '🔏', '🔐', '🔑', '🔎', '💡', '🔦', '🔆', '🔅', '🔌', '🔋', '🔍', '🛁', '🛀', '🚿', '🚽', '🔧', '🔩', '🔨', '🚪', '🚬', '💣', '🔫', '🔪', '💊', '💉', '💰', '💴', '💵', '💷', '💶', '💳', '💸', '📲', '📧', '📥', '📤', '✉', '📩', '📨', '📯', '📫', '📪', '📬', '📭', '📮', '📦', '📝', '📄', '📃', '📑', '📊', '📈', '📉', '📜', '📋', '📅', '📆', '📇', '📁', '📂', '✂', '📌', '📎', '✒', '✏', '📏', '📐', '📕', '📗', '📘', '📙', '📓', '📔', '📒', '📚', '📖', '🔖', '📛', '🔬', '🔭', '📰', '🎨', '🎬', '🎤', '🎧', '🎼', '🎵', '🎶', '🎹', '🎻', '🎺', '🎷', '🎸', '👾', '🎮', '🃏', '🎴', '🀄', '🎲', '🎯', '🏈', '🏀', '⚽', '⚾', '🎾', '🎱', '🏉', '🎳', '⛳', '🚵', '🚴', '🏁', '🏇', '🏆', '🎿', '🏂', '🏊', '🏄', '🎣', '☕', '🍵', '🍶', '🍼', '🍺', '🍻', '🍸', '🍹', '🍷', '🍴', '🍕', '🍔', '🍟', '🍗', '🍖', '🍝', '🍛', '🍤', '🍱', '🍣', '🍥', '🍙', '🍘', '🍚', '🍜', '🍲', '🍢', '🍡', '🍳', '🍞', '🍩', '🍮', '🍦', '🍨', '🍧', '🎂', '🍰', '🍪', '🍫', '🍬', '🍭', '🍯', '🍎', '🍏', '🍊', '🍋', '🍒', '🍇', '🍉', '🍓', '🍑', '🍈', '🍌', '🍐', '🍍', '🍠', '🍆', '🍅', '🌽', '🏠', '🏡', '🏫', '🏢', '🏣', '🏥', '🏦', '🏪', '🏩', '🏨', '💒', '⛪', '🏬', '🏤', '🌇', '🌆', '🏯', '🏰', '⛺', '🏭', '🗼', '🗾', '🗻', '🌄', '🌅', '🌃', '🗽', '🌉', '🎠', '🎡', '⛲', '🎢', '🚢', '⛵', '🚤', '🚣', '⚓', '🚀', '✈', '💺', '🚁', '🚂', '🚊', '🚉', '🚞', '🚆', '🚄', '🚅', '🚈', '🚇', '🚝', '🚋', '🚃', '🚎', '🚌', '🚍', '🚙', '🚘', '🚗', '🚕', '🚖', '🚛', '🚚', '🚨', '🚓', '🚔', '🚒', '🚑', '🚐', '🚲', '🚡', '🚟', '🚠', '🚜', '💈', '🚏', '🎫', '🚦', '🚥', '⚠', '🚧', '🔰', '⛽', '🏮', '🎰', '♨', '🗿', '🎪', '🎭', '📍', '🚩', '⬆', '⬇', '⬅', '➡', '🔠', '🔡', '🔤', '↗', '↖', '↘', '↙', '↔', '↕', '🔄', '◀', '▶', '🔼', '🔽', '↩', '↪', 'ℹ', '⏪', '⏩', '⏫', '⏬', '⤵', '⤴', '🆗', '🔀', '🔁', '🔂', '🆕', '🆙', '🆒', '🆓', '🆖', '📶', '🎦', '🈁', '🈯', '🈳', '🈵', '🈴', '🈲', '🉐', '🈹', '🈺', '🈶', '🈚', '🚻', '🚹', '🚺', '🚼', '🚾', '🚰', '🚮', '🅿', '♿', '🚭', '🈷', '🈸', '🈂', 'Ⓜ', '🛂', '🛄', '🛅', '🛃', '🉑', '㊙', '㊗', '🆑', '🆘', '🆔', '🚫', '🔞', '📵', '🚯', '🚱', '🚳', '🚷', '🚸', '⛔', '✳', '❇', '❎', '✅', '✴', '💟', '🆚', '📳', '📴', '🅰', '🅱', '🆎', '🅾', '💠', '➿', '♻', '♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓', '⛎', '🔯', '🏧', '💹', '💲', '💱', '©', '®', '™', '〽', '〰', '🔝', '🔚', '🔙', '🔛', '🔜', '❌', '⭕', '❗', '❓', '❕', '❔', '🔃', '🕛', '🕧', '🕐', '🕜', '🕑', '🕝', '🕒', '🕞', '🕓', '🕟', '🕔', '🕠', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕡', '🕢', '🕣', '🕤', '🕥', '🕦', '✖', '➕', '➖', '➗', '♠', '♥', '♣', '♦', '💮', '💯', '✔', '☑', '🔘', '🔗', '➰', '🔱', '🔲', '🔳', '◼', '◻', '◾', '◽', '▪', '▫', '🔺', '⬜', '⬛', '⚫', '⚪', '🔴', '🔵', '🔻', '🔶', '🔷', '🔸', '🔹'
];
