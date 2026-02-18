document.querySelectorAll('.level').forEach(level => {
    level.addEventListener('click', () => {
        const levelNum = level.dataset.level;
        if (levelNum == 12) {
            window.location.href = '../room12/index.html';
        } else if (levelNum == 13) {
            window.location.href = '../room 13/room13.html';
        } else if (levelNum == 14) {
            window.location.href = '../room 14/room14.html';
        } else if (levelNum == 11) {
            window.location.href = '../Room11/src/room11.html';
        } else if (levelNum == 15) {
            window.location.href = `level${levelNum}.html`;
        }
    });
});