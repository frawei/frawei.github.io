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
   
'Negasi Haylu Abreha',
'Edoardo Affini',
'Julian Alaphilippe',
'Alex Aranburu',
'Nikias Arndt',
'Kasper Asgreen',
'Mattia Bais',
'Davide Ballerini',
'Alexandre Balmer',
'Warren Barguil',
'Leonardo Basso',
'Cesare Benedetti',
'Sam Bennett',
'Alberto Bettiol',
'Simone Bevilacqua',
'Pello Bilbao',
'Stefan Bissegger',
'Pavel Bittner',
'Maciej Bodnar',
'Cees Bol',
'Gianluca Brambilla',
'Damiano Caruso',
'Mark Cavendish',
'Davide Cimolai',
'Simone Consonni',
'Bryan Coquard',
'Magnus Cort',
'Benoît Cosnefroy',
'Alessandro Covi',
'Jasper de Buyst',
'Arnaud de Lie',
'Tim Declercq',
'John Degenkolb',
'Alexandre Delettre',
'Arnaud Démare',
'Nico Denz',
'Dries Devenyns',
'Silvan Dillier',
'Matthew Dinham',
'Mark Donovan',
'Jarrad Drizners',
'Sandy Dujardin',
'Nils Eekhoff',
'Caleb Ewan',
'Alessandro Fedeli',
'Yevgeniy Fedorov',
'Valentin Ferron',
'Frederik Frison',
'Davide Gabburo',
'Filippo Ganna',
'Iván García cortina',
'Francesco Gavazzi',
'Fernando Gaviria',
'Derek Gee',
'Kevin Geniets',
'Biniam Girmay',
'Felix Grossschartne',
'Jacopo Guarnieri',
'Marco Haller',
'Jaakko Hänninen',
'Kim Heiduk',
'Michael Hepburn',
'Quinten Hermans',
'Mikkel Frølich Honoré',
'Hugo Houle',
'Daryl Impey',
'Johan Jacobs',
'Alex Kirsch',
'Ignatas Konovalovas',
'Søren Kragh andersen',
'Michał Kwiatkowski',
'Yves Lampaert',
'Christophe Laporte',
'Oier Lazkano',
'Matis Louvel',
'Riccardo Lucca',
'Tobias Ludvigsson',
'Jan Maas',
'Mirco Maestri',
'Filippo Magli',
'David Martin',
'Lluís Mas',
'Marius Mayrhofer',
'Luka Mezgec',
'Jonathan Milan',
'Matej Mohorič',
'Rudy Molard',
'Matteo Moschetti',
'Luca Mozzato',
'Ryan Mullen',
'Henok Mulubrhan',
'Lawrence Naesen',
'Oliver Naesen',
'Jhonatan Narváez',
'Krists Neilands',
'Domen Novak',
'Daniel Oss',
'Quentin Pacher',
'Andrea Pasqualon',
'Mads Pedersen',
'Jasper Philipsen',
'Tadej Pogačar',
'Nils Politt',
'Lukas Pöstlberger',
'Neilson Powless',
'Antonio Puppio',
'Alexis Renard',
'Alexandr Riabushenko',
'Samuele Rivi',
'Luke Rowe',
'Jonas Rutsch',
'Peter Sagan',
'Kristian Sbaragli',
'Michael Schär',
'Miles Scotson',
'Florian Sénéchal',
'Gonzalo Serrano',
'Diego Pablo Sevilla',
'Magnus Sheffield',
'Matteo Sobrero',
'Geoffrey Soupe',
'Jake Stewart',
'Florian Stork',
'Corbin Strong',
'Jasper Stuyven',
'Zdeněk Štybar',
'Ben Swift',
'Gleb Syritsa',
'Manuele Tarozzi',
'Mike Teunissen',
'Benjamin Thomas',
'Alessandro Tonelli',
'Jan Tratnik',
'Matteo Trentin',
'Anthony Turgis',
'Diego Ulissi',
'Attila Valter',
'Wout van Aert',
'Mathieu van der Poel',
'Maxim van Gils',
'Nathan van Hooydonck',
'Danny van Poppel',
'Sep Vanmarcke',
'Simone Velasco',
'Andrea Vendrame',
'Kevin Vermaerke',
'Gianni Vermeersch',
'Larry Warbasse',
'Tim Wellens',
'Łukasz Wiśniowski',
'Harrison Wood',
'Fred Wright',
'Mads Würtz Schmidt',
'Samuele Zoccarato'

];

var phThese = [
    "attacks on the Poggio",
    "pushes 6w/kg (the song) for preparation",
    "pushes 6w/kg (both the song and the power)",
    "early breakaway with three teammates",
    "attacks on the descent",
    "wins the bunch sprint",
    "wins the sprint from a reduced group",
    "cracks on the Poggio",
    "DSQed (sock length)",
    "DNF (f*cking SRAM)",
    "monument victory",
    "TV attack 100km to go",
    "destroys everyone",
    "first on the Poggio, last on the finish line",
    "DSQed (drafting)",
    "did a recon of the whole route",
    "60km solo",
    "chases the break for 5 hours straight",
    "uses a dropper post",
    "wins in the style of a finisseur",
    "wins the sprint for 2nd place",
    "DNF (crash on km 5)",
    "DSQed (sprint deviation)",
    "DSQed (sticky bottle on Poggio)",
    "attack on the Cipressa, caught before the Poggio"

];

var emojis = [
    '😄', '😃', '😀', '😊', '☺', '😉', '😍', '😘', '😚', '😗', '😙', '😜', '😝', '😛', '😳', '😁', '😔', '😌', '😒', '😞', '😣', '😢', '😂', '😭', '😪', '😥', '😰', '😅', '😓', '😩', '😫', '😨', '😱', '😠', '😡', '😤', '😖', '😆', '😋', '😷', '😎', '😴', '😵', '😲', '😟', '😦', '😧', '😈', '👿', '😮', '😬', '😐', '😕', '😯', '😶', '😇', '😏', '😑', '👲', '👳', '👮', '👷', '💂', '👶', '👦', '👧', '👨', '👩', '👴', '👵', '👱', '👼', '👸', '😺', '😸', '😻', '😽', '😼', '🙀', '😿', '😹', '😾', '👹', '👺', '🙈', '🙉', '🙊', '💀', '👽', '💩', '🔥', '✨', '🌟', '💫', '💥', '💢', '💦', '💧', '💤', '💨', '👂', '👀', '👃', '👅', '👄', '👍', '👎', '👌', '👊', '✊', '✌', '👋', '✋', '👐', '👆', '👇', '👉', '👈', '🙌', '🙏', '☝', '👏', '💪', '🚶', '🏃', '💃', '👫', '👪', '👬', '👭', '💏', '💑', '👯', '🙆', '🙅', '💁', '🙋', '💆', '💇', '💅', '👰', '🙎', '🙍', '🙇', '🎩', '👑', '👒', '👟', '👞', '👡', '👠', '👢', '👕', '👔', '👚', '👗', '🎽', '👖', '👘', '👙', '💼', '👜', '👝', '👛', '👓', '🎀', '🌂', '💄', '💛', '💙', '💜', '💚', '❤', '💔', '💗', '💓', '💕', '💖', '💞', '💘', '💌', '💋', '💍', '💎', '👤', '👥', '💬', '👣', '💭', '🐶', '🐺', '🐱', '🐭', '🐹', '🐰', '🐸', '🐯', '🐨', '🐻', '🐷', '🐽', '🐮', '🐗', '🐵', '🐒', '🐴', '🐑', '🐘', '🐼', '🐧', '🐦', '🐤', '🐥', '🐣', '🐔', '🐍', '🐢', '🐛', '🐝', '🐜', '🐞', '🐌', '🐙', '🐚', '🐠', '🐟', '🐬', '🐳', '🐋', '🐄', '🐏', '🐀', '🐃', '🐅', '🐇', '🐉', '🐎', '🐐', '🐓', '🐕', '🐖', '🐁', '🐂', '🐲', '🐡', '🐊', '🐫', '🐪', '🐆', '🐈', '🐩', '🐾', '💐', '🌸', '🌷', '🍀', '🌹', '🌻', '🌺', '🍁', '🍃', '🍂', '🌿', '🌾', '🍄', '🌵', '🌴', '🌲', '🌳', '🌰', '🌱', '🌼', '🌐', '🌞', '🌝', '🌚', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌜', '🌛', '🌙', '🌍', '🌎', '🌏', '🌋', '🌌', '🌠', '⭐', '☀', '⛅', '☁', '⚡', '☔', '❄', '⛄', '🌀', '🌁', '🌈', '🌊', '🎍', '💝', '🎎', '🎒', '🎓', '🎏', '🎆', '🎇', '🎐', '🎑', '🎃', '👻', '🎅', '🎄', '🎁', '🎋', '🎉', '🎊', '🎈', '🎌', '🔮', '🎥', '📷', '📹', '📼', '💿', '📀', '💽', '💾', '💻', '📱', '☎', '📞', '📟', '📠', '📡', '📺', '📻', '🔊', '🔉', '🔈', '🔇', '🔔', '🔕', '📢', '📣', '⏳', '⌛', '⏰', '⌚', '🔓', '🔒', '🔏', '🔐', '🔑', '🔎', '💡', '🔦', '🔆', '🔅', '🔌', '🔋', '🔍', '🛁', '🛀', '🚿', '🚽', '🔧', '🔩', '🔨', '🚪', '🚬', '💣', '🔫', '🔪', '💊', '💉', '💰', '💴', '💵', '💷', '💶', '💳', '💸', '📲', '📧', '📥', '📤', '✉', '📩', '📨', '📯', '📫', '📪', '📬', '📭', '📮', '📦', '📝', '📄', '📃', '📑', '📊', '📈', '📉', '📜', '📋', '📅', '📆', '📇', '📁', '📂', '✂', '📌', '📎', '✒', '✏', '📏', '📐', '📕', '📗', '📘', '📙', '📓', '📔', '📒', '📚', '📖', '🔖', '📛', '🔬', '🔭', '📰', '🎨', '🎬', '🎤', '🎧', '🎼', '🎵', '🎶', '🎹', '🎻', '🎺', '🎷', '🎸', '👾', '🎮', '🃏', '🎴', '🀄', '🎲', '🎯', '🏈', '🏀', '⚽', '⚾', '🎾', '🎱', '🏉', '🎳', '⛳', '🚵', '🚴', '🏁', '🏇', '🏆', '🎿', '🏂', '🏊', '🏄', '🎣', '☕', '🍵', '🍶', '🍼', '🍺', '🍻', '🍸', '🍹', '🍷', '🍴', '🍕', '🍔', '🍟', '🍗', '🍖', '🍝', '🍛', '🍤', '🍱', '🍣', '🍥', '🍙', '🍘', '🍚', '🍜', '🍲', '🍢', '🍡', '🍳', '🍞', '🍩', '🍮', '🍦', '🍨', '🍧', '🎂', '🍰', '🍪', '🍫', '🍬', '🍭', '🍯', '🍎', '🍏', '🍊', '🍋', '🍒', '🍇', '🍉', '🍓', '🍑', '🍈', '🍌', '🍐', '🍍', '🍠', '🍆', '🍅', '🌽', '🏠', '🏡', '🏫', '🏢', '🏣', '🏥', '🏦', '🏪', '🏩', '🏨', '💒', '⛪', '🏬', '🏤', '🌇', '🌆', '🏯', '🏰', '⛺', '🏭', '🗼', '🗾', '🗻', '🌄', '🌅', '🌃', '🗽', '🌉', '🎠', '🎡', '⛲', '🎢', '🚢', '⛵', '🚤', '🚣', '⚓', '🚀', '✈', '💺', '🚁', '🚂', '🚊', '🚉', '🚞', '🚆', '🚄', '🚅', '🚈', '🚇', '🚝', '🚋', '🚃', '🚎', '🚌', '🚍', '🚙', '🚘', '🚗', '🚕', '🚖', '🚛', '🚚', '🚨', '🚓', '🚔', '🚒', '🚑', '🚐', '🚲', '🚡', '🚟', '🚠', '🚜', '💈', '🚏', '🎫', '🚦', '🚥', '⚠', '🚧', '🔰', '⛽', '🏮', '🎰', '♨', '🗿', '🎪', '🎭', '📍', '🚩', '⬆', '⬇', '⬅', '➡', '🔠', '🔡', '🔤', '↗', '↖', '↘', '↙', '↔', '↕', '🔄', '◀', '▶', '🔼', '🔽', '↩', '↪', 'ℹ', '⏪', '⏩', '⏫', '⏬', '⤵', '⤴', '🆗', '🔀', '🔁', '🔂', '🆕', '🆙', '🆒', '🆓', '🆖', '📶', '🎦', '🈁', '🈯', '🈳', '🈵', '🈴', '🈲', '🉐', '🈹', '🈺', '🈶', '🈚', '🚻', '🚹', '🚺', '🚼', '🚾', '🚰', '🚮', '🅿', '♿', '🚭', '🈷', '🈸', '🈂', 'Ⓜ', '🛂', '🛄', '🛅', '🛃', '🉑', '㊙', '㊗', '🆑', '🆘', '🆔', '🚫', '🔞', '📵', '🚯', '🚱', '🚳', '🚷', '🚸', '⛔', '✳', '❇', '❎', '✅', '✴', '💟', '🆚', '📳', '📴', '🅰', '🅱', '🆎', '🅾', '💠', '➿', '♻', '♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓', '⛎', '🔯', '🏧', '💹', '💲', '💱', '©', '®', '™', '〽', '〰', '🔝', '🔚', '🔙', '🔛', '🔜', '❌', '⭕', '❗', '❓', '❕', '❔', '🔃', '🕛', '🕧', '🕐', '🕜', '🕑', '🕝', '🕒', '🕞', '🕓', '🕟', '🕔', '🕠', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕡', '🕢', '🕣', '🕤', '🕥', '🕦', '✖', '➕', '➖', '➗', '♠', '♥', '♣', '♦', '💮', '💯', '✔', '☑', '🔘', '🔗', '➰', '🔱', '🔲', '🔳', '◼', '◻', '◾', '◽', '▪', '▫', '🔺', '⬜', '⬛', '⚫', '⚪', '🔴', '🔵', '🔻', '🔶', '🔷', '🔸', '🔹'
];
