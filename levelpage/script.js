document.querySelectorAll('.level').forEach(level => {
    level.addEventListener('click', () => {
        window.location.href = `level${level.dataset.level}.html`;
    });
});