const GAMES = [
    { id: 'dodge', name: 'Dodge Game', desc: 'Dodge the Minecraft cars!', icon: '🚗', unlocked: true },
    { id: 'flagquiz', name: 'World Flag Match', desc: 'Match flags to country outlines!', icon: '🌍', unlocked: true },
    { id: 'p1', name: 'Coming Soon', desc: 'New game on the way!', icon: '🔒', unlocked: false },
];

let userName = '';

function showScreen(name) {
    document.getElementById('passwordScreen').style.display = 'none';
    document.getElementById('hubScreen').style.display = 'none';
    document.getElementById('gameArea').style.display = 'none';
    document.getElementById('modeScreen').style.display = 'none';
    document.getElementById('quizArea').style.display = 'none';

    let target = null;
    if (name === 'password') {
        target = document.getElementById('passwordScreen');
        target.style.display = 'flex';
    } else if (name === 'hub') {
        target = document.getElementById('hubScreen');
        target.style.display = 'flex';
    } else if (name === 'game') {
        target = document.getElementById('gameArea');
        target.style.display = 'flex';
    } else if (name === 'mode') {
        target = document.getElementById('modeScreen');
        target.style.display = 'flex';
    } else if (name === 'quiz') {
        target = document.getElementById('quizArea');
        target.style.display = 'flex';
    }

    if (target) {
        target.classList.remove('screen-enter');
        void target.offsetWidth;
        target.classList.add('screen-enter');
    }
}

function goBackToMenu() {
    DodgeGame.stop();
    FlagQuizGame.stop();
    showScreen('hub');
}

function renderHub() {
    const grid = document.getElementById('hubGrid');
    grid.innerHTML = '';
    document.getElementById('hubWelcome').textContent = `Welcome back, ${userName}! 🎮`;
    GAMES.forEach(g => {
        const card = document.createElement('div');
        card.className = 'hub-card' + (g.unlocked ? '' : ' locked');
        card.innerHTML = `
            <div class="hub-icon">${g.icon}</div>
            <div class="hub-name">${g.name}</div>
            <div class="hub-desc">${g.desc}</div>
            ${g.unlocked ? '<button class="hub-play-btn">Play</button>' : '<div class="hub-locked-label">🔒</div>'}
        `;
        if (g.unlocked) {
            card.querySelector('.hub-play-btn').addEventListener('click', () => startGame(g.id));
        }
        grid.appendChild(card);
    });
}

function startGame(id) {
    if (id === 'dodge') {
        showScreen('game');
        DodgeGame.init(document.getElementById('gc'));
        DodgeGame.resetOverlay();
        document.getElementById('overlay').style.display = 'flex';
    } else if (id === 'flagquiz') {
        showScreen('mode');
    }
}

function checkPassword() {
    const input = document.getElementById('passwordInput');
    const error = document.getElementById('passwordError');
    if (input.value.toLowerCase() === 'afnan') {
        userName = input.value.charAt(0).toUpperCase() + input.value.slice(1).toLowerCase();
        input.value = '';
        error.textContent = '';
        renderHub();
        showScreen('hub');
    } else {
        error.textContent = 'Hmm, that\'s not quite right';
        input.value = '';
        input.focus();
    }
}

document.querySelectorAll('.mode-card').forEach(card => {
    card.addEventListener('click', () => {
        const mode = card.dataset.mode;
        FlagQuizGame.init();
        FlagQuizGame.start(mode);
    });
});

document.getElementById('modeBackBtn').addEventListener('click', goBackToMenu);
document.getElementById('quizBackBtn').addEventListener('click', goBackToMenu);

document.getElementById('passwordBtn').addEventListener('click', checkPassword);
document.getElementById('passwordInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') checkPassword();
});

document.getElementById('backBtn').addEventListener('click', goBackToMenu);

document.getElementById('hubLogoutBtn').addEventListener('click', () => {
    DodgeGame.stop();
    FlagQuizGame.stop();
    showScreen('password');
});

showScreen('password');
