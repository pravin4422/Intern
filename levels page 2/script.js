const levels = document.querySelectorAll(".level");
let unlockedLevel = 1; 

levels.forEach((level) => {
    level.addEventListener("click", (e) => {
        
        e.stopPropagation();
        
        const levelNum = Number(level.dataset.level);
        console.log("Clicked level:", levelNum); 

        if (levelNum <= unlockedLevel) {
            window.location.href = `level${levelNum}.html`;
        }
    });
});