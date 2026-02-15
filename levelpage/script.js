const levels = document.querySelectorAll(".level");
let unlockedLevel = parseInt(localStorage.getItem('unlockedLevel')) || 1;

window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        unlockedLevel = parseInt(localStorage.getItem('unlockedLevel')) || 1;
        updateLevelStates();
    }
});

function updateLevelStates() {
    levels.forEach((level) => {
        const levelNum = Number(level.dataset.level);
        if (levelNum <= unlockedLevel) {
            level.parentElement.classList.remove('locked');
        } else {
            level.parentElement.classList.add('locked');
        }
    });
}

updateLevelStates();

levels.forEach((level) => {
    level.addEventListener("click", (e) => {
        e.stopPropagation();
        const levelNum = Number(level.dataset.level);
        if (levelNum <= unlockedLevel) {
            window.location.href = `level${levelNum}.html`;
        }
    });
});