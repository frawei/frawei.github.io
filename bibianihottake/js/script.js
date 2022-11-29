var hottakeButton = document.querySelector("#hottake-button");
var subjectText = document.querySelector("#subject-text");
var theseText = document.querySelector("#these-text");
var currentSubject = "FKW ist der beste Podcast";

window.onload = function() {
    numberRandom = generaRandom(phSubject.length);
    subjectText.innerHTML = phSubject[numberRandom];
    numberRandom = generaRandom(phThese.length);
    theseText.innerHTML = phThese[numberRandom];
};

hottakeButton.addEventListener('click', game);

function game() {
    const attempts = numberAttempts(3, 12);
    let t1 = 0,
        t2 = 0;

    let slot1 = setInterval(function() {
        numberRandom = generaRandom(phSubject.length);
        subjectText.innerHTML = phSubject[numberRandom];
        console.log(phSubject[numberRandom]);
        t1++;
        if (t1 == attempts) {
            clearInterval(slot1);
            return null;
        }
    }, 100);

    let slot2 = setInterval(function() {
        t2++;
        if (t2 == attempts) {
            clearInterval(slot2);
            return null;
        }
        numberRandom = generaRandom(phThese.length);
        theseText.innerHTML = phThese[numberRandom];
        console.log(phThese[numberRandom]);
    }, 100);
}

function generaRandom(max) {
    return Math.floor((Math.random() * max));
}

function numberAttempts(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

var phSubject = [
    /*
    "Pizza Hawaii",
    "Alex Baudin",
    "Clement Berthet",
    "Geoffrey Bouchard",
    "Mikaël Chérel",
    "Benoît Cosnefroy",
    "Stan Dewulf",
    "Felix Gall",
    "Pierre Gautherat",
    "Dorian Godon",
    "Jaakko Hänninen",
    "Paul Lapeira",
    "Lawrence Naesen",
    "Oliver Naesen",
    "Ben O'Connor",
    "Aurélien Paret-Peintre",
    "Valentin Paret-Peintre",
    "Nans Peters",
    "Nicolas Prodhomme",
    "Antoine Raugel",
    "Valentin Retailleau",
    "Marc Sarreau",
    "Michael Schär",
    "Damien Touzé",
    "Bastien Tronchon",
    "Greg van Avermaet",
    "Andrea Vendrame",
    "Clément Venturini",
    "Lawrence Warbasse",
    "Das komplette AG2R Citroën Team",
    */
    /*
    "Jeder Faher von Cofidis",
    "Piet Allegaert",
    "François Bidard",
    "André Carvalho",
    "Thomas Champion",
    "Davide Cimolai",
    "Simone Consonni",
    "Bryan Coquard",
    "Alexandre Delettre",
    "Ruben Fernandez",
    "Eddy Finé",
    "Simon Geschke",
    "Jesus Herrada",
    "Jose Herrada",
    "Ion Izagirre",
    "Wesley Kreder",
    "Victor Lafay",
    "Jonathan Lastra",
    "Axel Mariault",
    "Guillaume Martin",
    "Christophe Noppe",
    "Anthony Perez",
    "Pierre-Luc Périchon",
    "Alexis Renard",
    "Rémy Rochas",
    "Benjamin Thomas",
    "Hugo Toumire",
    "Jelle Wallays",
    "Max Walscheid",
    "Harrison Wood",
    "Axel Zingle"
    */
    
    /* BORA*/
    "Das Team BORA-hansgrohe",
    "Giovanni Aleotti",
    "Shane Archbold",
    "Cesare Benedetti",
    "Sam Bennett",
    "Emanuel Buchmann",
    "Nico Denz",
    "Matteo Fabbro",
    "Patrick Gamper",
    "Marco Haller",
    "Sergio Higuita",
    "Jai Hindley",
    "Bob Jungels",
    "Jonas Koch",
    "Patrick Konrad",
    "Lennard Kämna",
    "Florian Lipowitz",
    "Luis-Joe Lührs",
    "Jordi Meeus",
    "Ryan Mullen",
    "Anton Palzer",
    "Nils Politt",
    "Maximilian Schachmann",
    "Ide Schelling",
    "Cian Uijtdebroeks",
    "Danny Van poppel",
    "Aleksandr Vlasov",
    "Matthew Walls",
    "Frederik Wandahl",
    "Ben Zwiehoff",
    "Jeder einzelne Raublinger Radlbua",
    "Tadej Pogacar",
"Wout Van aert",
"Remco Evenepoel",
"Jonas Vingegaard",
"Aleksandr Vlasov",
"Arnaud De lie",
"Stefan Küng",
"Alexander Kristoff",
"Mathieu Van der poel",
"Michael Matthews",
"Alejandro Valverde",
"Sergio Higuita",
"Christophe Laporte",
"Daniel Martinez",
"Arnaud Démare",
"Biniam Girmay",
"Pello Bilbao",
"Richard Carapaz",
"Benoît Cosnefroy",
"Mads Pedersen",
"Enric Mas",
"Jasper Philipsen",
"Primoz Roglic",
"Jai Hindley",
"Juan Ayuso",
"Adam Yates",
"Tim Merlier",
"Matej Mohoric",
"Carlos Rodriguez",
"Mikel Landa",
"Nairo Quintana",
"Geraint Thomas",
"Thymen Arensman",
"Dylan Teuns",
"Guillaume Martin",
"Dylan Groenewegen",
"Joao Almeida",
"Valentin Madouas",
"Hugo Hofstetter",
"Warren Barguil",
"Simon Yates",
"Ben O'connor",
"Ethan Hayter",
"Dylan Van baarle",
"Matteo Trentin",
"David Gaudu",
"Dries Van gestel",
"Fabio Jakobsen",
"Lorenzo Rota",
"Mattias Skjelmose jensen",
"Olav Kooij",
"Tiesj Benoot",
"Neilson Powless",
"Romain Bardet",
"Quinten Hermans",
"Louis Meintjes",
"Sam Bennett",
"Diego Ulissi",
"Marc Hirschi",
"Iván García cortina",
"Axel Zingle",
"Miguel Ángel López",
"Brandon Mcnulty",
"Benjamin Thomas",
"Julien Simon",
"Jesus Herrada",
"Luca Mozzato",
"Amaury Capiot",
"Mauro Schmid",
"Damiano Caruso",
"Matis Louvel",
"Greg Van avermaet",
"Bauke Mollema",
"Simone Consonni",
"Tom Pidcock",
"Tim Wellens",
"Danny Van poppel",
"Anthony Turgis",
"Jan Hirt",
"Ion Izagirre",
"Max Walscheid",
"Victor Campenaerts",
"Vincenzo Nibali",
"Alex Aranburu",
"Andrea Piccolo",
"Caleb Ewan",
"Domenico Pozzovivo",
"Alexis Vuillermoz",
"Jakob Fuglsang",
"Giacomo Nizzolo",
"Mark Cavendish",
"Pavel Sivakov",
"Magnus Sheffield",
"Rigoberto Uran",
"Toms Skujins",
"Ruben Guerreiro",
"Nacer Bouhanni",
"Michael Woods",
"Jasper Stuyven",
"Esteban Chaves"



];

var phThese = [
    "ist komplet overrated",
    "kann nicht abfahren",
    "ist doch schon viel zu alt",
    "ist underrated",
    "... noch nie gehört",
    "👎👎👎",
    "ist unglaublich unsympathisch",
    "ist super sympatisch",
    "wird keine Grand Tour gewinnen",
    "holt kein Top 10 Ergebnis",
    "ist Bahnfahrer, aber nix für die Straße",
    "sollte nicht zur Tour fahren",
    "dem fehlt einfach der Punch",
    "ist mehr so der punchy Typ",
    "ist ein absoluter Sexmann",
    "👍👍👍",
    "hat beim Giro keine Chance",
    "gewinnt noch zwei Monumente",
    "weiß ich nicht...",
    "Sprinter naja",
    "verschenktes Potenzial",
    "an erster Stelle nur im Besenwagen",
    "gewinnt vielleicht als Gravelprofi nochmal was",
    "die größte Hoffnung seit Simon Geschke im Bergtrikot", 
    "ist in 1-2 Jahren einer für Isreal", 
    "sollte mal sein Trikot zumachen"

];

var emojis = [
    '😄', '😃', '😀', '😊', '☺', '😉', '😍', '😘', '😚', '😗', '😙', '😜', '😝', '😛', '😳', '😁', '😔', '😌', '😒', '😞', '😣', '😢', '😂', '😭', '😪', '😥', '😰', '😅', '😓', '😩', '😫', '😨', '😱', '😠', '😡', '😤', '😖', '😆', '😋', '😷', '😎', '😴', '😵', '😲', '😟', '😦', '😧', '😈', '👿', '😮', '😬', '😐', '😕', '😯', '😶', '😇', '😏', '😑', '👲', '👳', '👮', '👷', '💂', '👶', '👦', '👧', '👨', '👩', '👴', '👵', '👱', '👼', '👸', '😺', '😸', '😻', '😽', '😼', '🙀', '😿', '😹', '😾', '👹', '👺', '🙈', '🙉', '🙊', '💀', '👽', '💩', '🔥', '✨', '🌟', '💫', '💥', '💢', '💦', '💧', '💤', '💨', '👂', '👀', '👃', '👅', '👄', '👍', '👎', '👌', '👊', '✊', '✌', '👋', '✋', '👐', '👆', '👇', '👉', '👈', '🙌', '🙏', '☝', '👏', '💪', '🚶', '🏃', '💃', '👫', '👪', '👬', '👭', '💏', '💑', '👯', '🙆', '🙅', '💁', '🙋', '💆', '💇', '💅', '👰', '🙎', '🙍', '🙇', '🎩', '👑', '👒', '👟', '👞', '👡', '👠', '👢', '👕', '👔', '👚', '👗', '🎽', '👖', '👘', '👙', '💼', '👜', '👝', '👛', '👓', '🎀', '🌂', '💄', '💛', '💙', '💜', '💚', '❤', '💔', '💗', '💓', '💕', '💖', '💞', '💘', '💌', '💋', '💍', '💎', '👤', '👥', '💬', '👣', '💭', '🐶', '🐺', '🐱', '🐭', '🐹', '🐰', '🐸', '🐯', '🐨', '🐻', '🐷', '🐽', '🐮', '🐗', '🐵', '🐒', '🐴', '🐑', '🐘', '🐼', '🐧', '🐦', '🐤', '🐥', '🐣', '🐔', '🐍', '🐢', '🐛', '🐝', '🐜', '🐞', '🐌', '🐙', '🐚', '🐠', '🐟', '🐬', '🐳', '🐋', '🐄', '🐏', '🐀', '🐃', '🐅', '🐇', '🐉', '🐎', '🐐', '🐓', '🐕', '🐖', '🐁', '🐂', '🐲', '🐡', '🐊', '🐫', '🐪', '🐆', '🐈', '🐩', '🐾', '💐', '🌸', '🌷', '🍀', '🌹', '🌻', '🌺', '🍁', '🍃', '🍂', '🌿', '🌾', '🍄', '🌵', '🌴', '🌲', '🌳', '🌰', '🌱', '🌼', '🌐', '🌞', '🌝', '🌚', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌜', '🌛', '🌙', '🌍', '🌎', '🌏', '🌋', '🌌', '🌠', '⭐', '☀', '⛅', '☁', '⚡', '☔', '❄', '⛄', '🌀', '🌁', '🌈', '🌊', '🎍', '💝', '🎎', '🎒', '🎓', '🎏', '🎆', '🎇', '🎐', '🎑', '🎃', '👻', '🎅', '🎄', '🎁', '🎋', '🎉', '🎊', '🎈', '🎌', '🔮', '🎥', '📷', '📹', '📼', '💿', '📀', '💽', '💾', '💻', '📱', '☎', '📞', '📟', '📠', '📡', '📺', '📻', '🔊', '🔉', '🔈', '🔇', '🔔', '🔕', '📢', '📣', '⏳', '⌛', '⏰', '⌚', '🔓', '🔒', '🔏', '🔐', '🔑', '🔎', '💡', '🔦', '🔆', '🔅', '🔌', '🔋', '🔍', '🛁', '🛀', '🚿', '🚽', '🔧', '🔩', '🔨', '🚪', '🚬', '💣', '🔫', '🔪', '💊', '💉', '💰', '💴', '💵', '💷', '💶', '💳', '💸', '📲', '📧', '📥', '📤', '✉', '📩', '📨', '📯', '📫', '📪', '📬', '📭', '📮', '📦', '📝', '📄', '📃', '📑', '📊', '📈', '📉', '📜', '📋', '📅', '📆', '📇', '📁', '📂', '✂', '📌', '📎', '✒', '✏', '📏', '📐', '📕', '📗', '📘', '📙', '📓', '📔', '📒', '📚', '📖', '🔖', '📛', '🔬', '🔭', '📰', '🎨', '🎬', '🎤', '🎧', '🎼', '🎵', '🎶', '🎹', '🎻', '🎺', '🎷', '🎸', '👾', '🎮', '🃏', '🎴', '🀄', '🎲', '🎯', '🏈', '🏀', '⚽', '⚾', '🎾', '🎱', '🏉', '🎳', '⛳', '🚵', '🚴', '🏁', '🏇', '🏆', '🎿', '🏂', '🏊', '🏄', '🎣', '☕', '🍵', '🍶', '🍼', '🍺', '🍻', '🍸', '🍹', '🍷', '🍴', '🍕', '🍔', '🍟', '🍗', '🍖', '🍝', '🍛', '🍤', '🍱', '🍣', '🍥', '🍙', '🍘', '🍚', '🍜', '🍲', '🍢', '🍡', '🍳', '🍞', '🍩', '🍮', '🍦', '🍨', '🍧', '🎂', '🍰', '🍪', '🍫', '🍬', '🍭', '🍯', '🍎', '🍏', '🍊', '🍋', '🍒', '🍇', '🍉', '🍓', '🍑', '🍈', '🍌', '🍐', '🍍', '🍠', '🍆', '🍅', '🌽', '🏠', '🏡', '🏫', '🏢', '🏣', '🏥', '🏦', '🏪', '🏩', '🏨', '💒', '⛪', '🏬', '🏤', '🌇', '🌆', '🏯', '🏰', '⛺', '🏭', '🗼', '🗾', '🗻', '🌄', '🌅', '🌃', '🗽', '🌉', '🎠', '🎡', '⛲', '🎢', '🚢', '⛵', '🚤', '🚣', '⚓', '🚀', '✈', '💺', '🚁', '🚂', '🚊', '🚉', '🚞', '🚆', '🚄', '🚅', '🚈', '🚇', '🚝', '🚋', '🚃', '🚎', '🚌', '🚍', '🚙', '🚘', '🚗', '🚕', '🚖', '🚛', '🚚', '🚨', '🚓', '🚔', '🚒', '🚑', '🚐', '🚲', '🚡', '🚟', '🚠', '🚜', '💈', '🚏', '🎫', '🚦', '🚥', '⚠', '🚧', '🔰', '⛽', '🏮', '🎰', '♨', '🗿', '🎪', '🎭', '📍', '🚩', '⬆', '⬇', '⬅', '➡', '🔠', '🔡', '🔤', '↗', '↖', '↘', '↙', '↔', '↕', '🔄', '◀', '▶', '🔼', '🔽', '↩', '↪', 'ℹ', '⏪', '⏩', '⏫', '⏬', '⤵', '⤴', '🆗', '🔀', '🔁', '🔂', '🆕', '🆙', '🆒', '🆓', '🆖', '📶', '🎦', '🈁', '🈯', '🈳', '🈵', '🈴', '🈲', '🉐', '🈹', '🈺', '🈶', '🈚', '🚻', '🚹', '🚺', '🚼', '🚾', '🚰', '🚮', '🅿', '♿', '🚭', '🈷', '🈸', '🈂', 'Ⓜ', '🛂', '🛄', '🛅', '🛃', '🉑', '㊙', '㊗', '🆑', '🆘', '🆔', '🚫', '🔞', '📵', '🚯', '🚱', '🚳', '🚷', '🚸', '⛔', '✳', '❇', '❎', '✅', '✴', '💟', '🆚', '📳', '📴', '🅰', '🅱', '🆎', '🅾', '💠', '➿', '♻', '♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓', '⛎', '🔯', '🏧', '💹', '💲', '💱', '©', '®', '™', '〽', '〰', '🔝', '🔚', '🔙', '🔛', '🔜', '❌', '⭕', '❗', '❓', '❕', '❔', '🔃', '🕛', '🕧', '🕐', '🕜', '🕑', '🕝', '🕒', '🕞', '🕓', '🕟', '🕔', '🕠', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕡', '🕢', '🕣', '🕤', '🕥', '🕦', '✖', '➕', '➖', '➗', '♠', '♥', '♣', '♦', '💮', '💯', '✔', '☑', '🔘', '🔗', '➰', '🔱', '🔲', '🔳', '◼', '◻', '◾', '◽', '▪', '▫', '🔺', '⬜', '⬛', '⚫', '⚪', '🔴', '🔵', '🔻', '🔶', '🔷', '🔸', '🔹'
];
