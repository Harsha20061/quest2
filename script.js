
const loveNotes = [
    "You make my heart skip a beat like a race condition in my code! 🏃💨",
    "You're the CSS to my HTML - without you, I'm just plain text! 🎨",
    "My love for you is like an infinite loop - it never terminates! ♾️",
    "You're the Git to myHub - together we're version control soulmates! 🗂️",
    "I Promise() to love you forever, no async needed! 📜",
    "You + Me = The perfect merge, no conflicts! 🔀",
    "My heart compiles only for you - you're my main function! ⚡",
    "You're the WiFi signal I can't live without - always strong! 📶",
    "Our love story has zero bugs and infinite features! 🐛✨",
    "You're my API - I can't function without you! 🔌",
    "Together we're like Docker: containerizing all the love! 📦",
    "You're the debugger to my broken heart - you fix everything! 🔧"
];


function calculateLove() {
    const yourName = document.getElementById('yourName').value.trim();
    const crushName = document.getElementById('crushName').value.trim();


    if (!yourName || !crushName) {
        alert("⚠️ Error: Both names are required for the love algorithm!");
        return;
    }


    if (checkEasterEgg(yourName, crushName)) {
        showEasterEgg();
        return;
    }

    const compatibility = calculateHash(yourName, crushName);

    displayResults(compatibility, yourName, crushName);
}


function calculateHash(name1, name2) {
    const combined = (name1 + name2).toLowerCase();
    let hash = 0;


    for (let i = 0; i < combined.length; i++) {
        const char = combined.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }


    const absoluteHash = Math.abs(hash);
    const result = (absoluteHash % 51) + 50;

    return result;
}


function checkEasterEgg(name1, name2) {
    const names = [name1.toLowerCase(), name2.toLowerCase()];
    const secretCombo = ['developer', 'code', 'syntax', 'binary'];


    return names.every(n => secretCombo.includes(n));
}

function displayResults(compatibility, yourName, crushName) {
    const outputSection = document.getElementById('outputSection');
    const percentageDisplay = document.getElementById('percentageDisplay');
    const compatibilityMessage = document.getElementById('compatibilityMessage');
    const loveMessage = document.getElementById('loveMessage');
    const loveNote = document.getElementById('loveNote');


    outputSection.style.display = 'block';


    let currentPercent = 0;
    const animation = setInterval(() => {
        if (currentPercent >= compatibility) {
            clearInterval(animation);
            percentageDisplay.textContent = compatibility + '%';
        } else {
            currentPercent++;
            percentageDisplay.textContent = currentPercent + '%';
        }
    }, 20);


    const message = getCompatibilityMessage(compatibility);
    compatibilityMessage.textContent = message;


    const techMessage = generateLoveMessage(yourName, crushName, compatibility);
    loveMessage.textContent = techMessage;


    const randomNote = loveNotes[Math.floor(Math.random() * loveNotes.length)];
    loveNote.textContent = "💡 " + randomNote;


    const randomArt = asciiArts[Math.floor(Math.random() * asciiArts.length)];
    document.getElementById('asciiHeart').textContent = randomArt;


    playHeartbeat();
}


function getCompatibilityMessage(percentage) {
    if (percentage >= 90) return "🔥 PERFECT MATCH! Run away together! 🔥";
    if (percentage >= 75) return "💖 Amazing compatibility!";
    if (percentage >= 50) return "😊 Good potential!";
    if (percentage >= 25) return "🤔 Needs more commits...";
    return "💔 Time to refactor your feelings!";
}


function generateLoveMessage(name1, name2, percentage) {
    const messages = [
        `Dear ${name2},\n\nSince our paths crossed, my heart has been running an infinite loop of love.\n\nwhile (alive) {\n  thinkAbout('${name2}');\n  smile();\n  love();\n}\n\nOur compatibility: ${percentage}%\n\nYours in code and love,\n${name1}`,

        `To ${name2} from ${name1},\n\nif (love === true) {\n  return "Forever together";\n}\n\nOur algorithm says ${percentage}% match!\n\nYou are the missing semicolon in my code of life.\n\n// Always and forever`,

        `${name2},\n\nMy feelings for you are like:\n- No bugs\n- Pure features\n- Infinite scalability\n- 100% uptime\n\nCurrent compatibility: ${percentage}%\n\nAwaiting your merge,\n${name1}`
    ];

    return messages[Math.floor(Math.random() * messages.length)];
}

function showEasterEgg() {
    document.getElementById('easterEgg').style.display = 'flex';
}

function closeEasterEgg() {
    document.getElementById('easterEgg').style.display = 'none';

    displayResults(100, "Developer", "Code");
}

function playHeartbeat() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.setValueAtTime(100, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(50, audioContext.currentTime + 0.1);

        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {

    }
}


function initMatrix() {
    const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = Math.floor(canvas.width / 20);
    const drops = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    const chars = '01010101💖💻❤️';

    function draw() {
        ctx.fillStyle = 'rgba(13, 13, 26, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00ff41';
        ctx.font = '14px monospace';

        for (let i = 0; i < drops.length; i++) {
            const char = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(char, i * 20, drops[i] * 20);

            if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 50);
}


window.addEventListener('load', initMatrix);


document.getElementById('crushName').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        calculateLove();
    }
});


window.addEventListener('resize', function () {
    const canvas = document.getElementById('matrixCanvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
