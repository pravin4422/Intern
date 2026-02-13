const levels = document.querySelectorAll(".level");
let unlockedLevel = parseInt(localStorage.getItem('unlockedLevel')) || 1;

// Unlock levels on page load
for (let i = 2; i <= unlockedLevel; i++) {
    document.querySelector(`.level${i}`).classList.remove("locked");
} 

levels.forEach((level) => {
    level.addEventListener("click", (e) => {
        e.stopPropagation();
        const levelNum = Number(level.dataset.level);
        console.log("Clicked level:", levelNum); 

        if (levelNum <= unlockedLevel) {
            if (levelNum === 1) {
                document.querySelector(".mobile-screen").classList.add("hidden");
                document.getElementById("room1").classList.remove("hidden");
                history.pushState({ page: 'room1' }, '', '#room1');
            } else if (levelNum === 2) {
                document.querySelector(".mobile-screen").classList.add("hidden");
                document.getElementById("room2").classList.remove("hidden");
                history.pushState({ page: 'room2' }, '', '#room2');
            } else if (levelNum === 3) {
                document.querySelector(".mobile-screen").classList.add("hidden");
                document.getElementById("room3").classList.remove("hidden");
                history.pushState({ page: 'room3' }, '', '#room3');
            } else if (levelNum === 4) {
                document.querySelector(".mobile-screen").classList.add("hidden");
                document.getElementById("room4").classList.remove("hidden");
                history.pushState({ page: 'room4' }, '', '#room4');
            } else if (levelNum === 5) {
                document.querySelector(".mobile-screen").classList.add("hidden");
                document.getElementById("room5").classList.remove("hidden");
                history.pushState({ page: 'room5' }, '', '#room5');
            } else if (levelNum === 6) {
                document.querySelector(".mobile-screen").classList.add("hidden");
                document.getElementById("room6").classList.remove("hidden");
                history.pushState({ page: 'room6' }, '', '#room6');
            } else {
                window.location.href = `levelpage/level${levelNum}.html`;
            }
        }
    });
});

window.addEventListener('popstate', (e) => {
    if (!e.state || !['room1', 'room2', 'room3', 'room4', 'room5', 'room6'].includes(e.state.page)) {
        resetRoom1();
        resetRoom2();
        resetRoom3();
        resetRoom4();
        resetRoom5();
        resetRoom6();
        document.getElementById("room1").classList.add("hidden");
        document.getElementById("room2").classList.add("hidden");
        document.getElementById("room3").classList.add("hidden");
        document.getElementById("room4").classList.add("hidden");
        document.getElementById("room5").classList.add("hidden");
        document.getElementById("room6").classList.add("hidden");
        document.querySelector(".mobile-screen").classList.remove("hidden");
    }
});

function resetRoom1() {
    overlay.classList.add("hidden");
    lastoptions.style.display = 'none';
    finalCloseBtn.classList.add("hidden");
    bgImage.classList.remove("blur");
    bgImage.src = "room 1/room final 2@1.5x@1.5x.png";
    carpet.classList.remove("hidden", "moved");
    key.classList.add("hidden");
    keyArea.classList.add("disabled");
    doorArea.classList.add("disabled");
    slot1.innerHTML = "";
    carpetMoved = false;
    keyCollected = false;
}

// Room 1 Game Logic
const carpet = document.getElementById("carpet");
const key = document.getElementById("key");
const carpetArea = document.getElementById("carpetArea");
const slot1 = document.getElementById("slot1");
const keyArea = document.getElementById("keyArea");
const bgImage = document.getElementById("bgImage");
const doorArea = document.getElementById("doorArea");
const overlay = document.getElementById("overlay");
const finalCloseBtn = document.getElementById("finalCloseBtn");
const lastoptions = document.getElementById("lastoptions");

let carpetMoved = false;
let keyCollected = false;

carpetArea.addEventListener("click", () => {
    if (!carpetMoved) {
        carpet.classList.add("moved");
        carpetMoved = true;
        setTimeout(() => {
            key.classList.remove("hidden");
        });
        keyArea.classList.remove("disabled");
    }
});

keyArea.addEventListener("click", () => {
    if (keyCollected) return;
    
    keyCollected = true;
    key.classList.add("hidden");
    
    const inventoryKey = document.createElement("img");
    inventoryKey.src = "room 1/key to open the door for room 1.png";
    inventoryKey.style.width = "40px";
    inventoryKey.draggable = true;
    inventoryKey.id = "inventoryKey";
    
    slot1.appendChild(inventoryKey);
    bgImage.src = "room 1/room1img.png";
    carpet.classList.add("hidden");
    doorArea.classList.remove("disabled");
});

document.addEventListener("dragstart", (e) => {
    if (e.target.id === "inventoryKey") {
        e.dataTransfer.setData("text/plain", "inventoryKey");
    }
    if (e.target.id === "inventoryButton") {
        e.dataTransfer.setData("text/plain", "inventoryButton");
    }
});

doorArea.addEventListener("dragover", (e) => {
    e.preventDefault();
});

doorArea.addEventListener("drop", (e) => {
    e.preventDefault();
    
    bgImage.src = "room 1/room back ground after game end@3x.jpg";
    inventoryKey.classList.add("hidden");

    setTimeout(() => {
        bgImage.classList.add("blur");
        overlay.classList.remove("hidden");
        lastoptions.style.display = 'block';
        finalCloseBtn.classList.remove("hidden");
    }, 1200);
});

document.querySelector(".nextbtn").addEventListener("click", () => {
    unlockedLevel = 2;
    localStorage.setItem('unlockedLevel', unlockedLevel);
    document.querySelector(".level2").classList.remove("locked");
    resetRoom1();
    document.getElementById("room1").classList.add("hidden");
    document.querySelector(".mobile-screen").classList.remove("hidden");
});

finalCloseBtn.addEventListener("click", () => {
    resetRoom1();
});

// Room 2 Game Logic
const bgImage2 = document.getElementById("bgImage2");
const leaf = document.getElementById("leaf");
const floorButton = document.getElementById("floorButton");
const closeBtn = document.getElementById("closeButton");
const leafArea = document.getElementById("leafArea");
const buttonArea = document.getElementById("buttonArea");
const doorArea2 = document.getElementById("doorArea2");
const slot2 = document.getElementById("slot2");
const levelPanel = document.getElementById("levelCompletePanel");
const panelCloseBtn = document.getElementById("panelCloseBtn");

let leafMoved = false;
let buttonCollected = false;

leafArea.addEventListener("click", () => {
    if (!leafMoved) {
        leaf.src = "Room2/images/room2/game play 3@3x.png";
        leaf.classList.add("moved");
        bgImage2.classList.add("blur-bg");
        closeBtn.classList.remove("hidden");
        setTimeout(() => {
            if (!buttonCollected) {
                floorButton.classList.remove("hidden");
            }
        }, 200);
        leafMoved = true;
        leafArea.style.display = "none";
    }
});

function resetLeafState() {
    leaf.src = "Room2/images/room2/game play 1@3x.png";
    leaf.classList.remove("moved");
    bgImage2.classList.remove("blur-bg");
    closeBtn.classList.add("hidden");
    floorButton.classList.add("hidden");
    leafMoved = false;
    leafArea.style.display = "block";
}

closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    resetLeafState();
});

buttonArea.addEventListener("click", () => {
    if (leafMoved && !buttonCollected) {
        buttonCollected = true;
        const invItem = document.createElement("img");
        invItem.src = "Room2/images/room2/button_3x-removebg-preview.png";
        invItem.id = "inventoryButton";
        invItem.draggable = true;
        invItem.style.width = "40px";
        invItem.style.height = "40px";
        slot2.appendChild(invItem);
        
        invItem.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", e.target.id);
            e.dataTransfer.effectAllowed = "move";
            e.dataTransfer.setDragImage(e.target, 20, 20);
        });
        
        doorArea2.classList.remove("disabled");
        resetLeafState();
    }
});

doorArea2.addEventListener("dragover", (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
});

doorArea2.addEventListener("drop", (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    const item = document.getElementById(id);
    if (item && item.id === "inventoryButton") {
        item.remove();
        leaf.classList.add("hidden");
        closeBtn.classList.add("hidden");
        floorButton.classList.add("hidden");
        bgImage2.src = "Room2/images/room2/game over bg@3x.jpg";
        bgImage2.classList.remove("blur-bg");
        setTimeout(() => {
            if (levelPanel) {
                levelPanel.classList.remove("hidden");
                bgImage2.classList.add("blur-bg");
            }
        }, 1500);
    }
});

document.getElementById("homeBtn").addEventListener("click", () => {
    resetRoom2();
    document.getElementById("room2").classList.add("hidden");
    document.querySelector(".mobile-screen").classList.remove("hidden");
});

document.getElementById("nextBtn").addEventListener("click", () => {
    unlockedLevel = 3;
    localStorage.setItem('unlockedLevel', unlockedLevel);
    document.querySelector(".level3").classList.remove("locked");
    resetRoom2();
    document.getElementById("room2").classList.add("hidden");
    document.querySelector(".mobile-screen").classList.remove("hidden");
});

if (panelCloseBtn) {
    panelCloseBtn.addEventListener("click", () => {
        levelPanel.classList.add("hidden");
    });
}

function resetRoom2() {
    leaf.src = "Room2/images/room2/game play 1@3x.png";
    leaf.classList.remove("hidden", "moved");
    bgImage2.src = "Room2/images/room2/room 2 background@3x@3x.jpg";
    bgImage2.classList.remove("blur-bg");
    closeBtn.classList.add("hidden");
    floorButton.classList.add("hidden");
    levelPanel.classList.add("hidden");
    leafArea.style.display = "block";
    doorArea2.classList.add("disabled");
    slot2.innerHTML = "";
    leafMoved = false;
    buttonCollected = false;
}

// Room 3 Game Logic
const smallBox = document.getElementById("smallBox");
const zoomOverlay = document.getElementById("zoomOverlay");
const box1 = document.getElementById("box1");
const closeBtn3 = document.getElementById("closeBtn3");
const bgImage3 = document.getElementById("bgImage3");
const key3 = document.getElementById("key3");
const doorlock3 = document.getElementById("doorlock3");
const finalPanel3 = document.getElementById("finalPanel3");
const lastoptions3 = document.getElementById("lastoptions3");

let isBoxOpen = false;
let hasKeyBeenTaken = false;
let isBoxActive = true;

smallBox.addEventListener('click', () => {
    if (isBoxActive) {
        zoomOverlay.style.display = 'block';
    }
});

box1.addEventListener('click', function() {
    if (!isBoxOpen) {
        this.src = 'room 3/room 3/gameplay 2 @3x@3x.png';
        isBoxOpen = true;
    } else if (isBoxOpen && !hasKeyBeenTaken) {
        this.src = "room 3/room 3/gameplay 3 @3x@3x.png";
        key3.style.display = 'block';
        hasKeyBeenTaken = true;
        isBoxActive = false;
        smallBox.style.pointerEvents = 'none';
        smallBox.style.cursor = 'default';
    }
});

closeBtn3.addEventListener('click', () => {
    zoomOverlay.style.display = 'none';
    box1.src = 'room 3/room 3/gameplay 1@3x.png';
});

key3.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData("text", e.target.id);
});

doorlock3.addEventListener('dragover', (e) => {
    e.preventDefault();
});

doorlock3.addEventListener('drop', (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text");
    if (data === "key3") {
        bgImage3.src = "room 3/room 3/game play bg final@3x@3x.jpg";
        key3.style.display = 'none';
        doorlock3.style.display = 'none';
        setTimeout(() => {
            finalPanel3.style.display = 'block';
            lastoptions3.style.display = 'flex';
        }, 500);
    }
});

document.getElementById("homeBtn3").addEventListener("click", () => {
    resetRoom3();
    document.getElementById("room3").classList.add("hidden");
    document.querySelector(".mobile-screen").classList.remove("hidden");
});

document.getElementById("nextBtn3").addEventListener("click", () => {
    unlockedLevel = 4;
    localStorage.setItem('unlockedLevel', unlockedLevel);
    document.querySelector(".level4").classList.remove("locked");
    resetRoom3();
    document.getElementById("room3").classList.add("hidden");
    document.querySelector(".mobile-screen").classList.remove("hidden");
});

function resetRoom3() {
    bgImage3.src = "room 3/room 3/1st bg@3x.jpg";
    box1.src = 'room 3/room 3/gameplay 1@3x.png';
    zoomOverlay.style.display = 'none';
    key3.style.display = 'none';
    doorlock3.style.display = 'block';
    finalPanel3.style.display = 'none';
    lastoptions3.style.display = 'none';
    isBoxOpen = false;
    hasKeyBeenTaken = false;
    isBoxActive = true;
    smallBox.style.pointerEvents = 'auto';
    smallBox.style.cursor = 'pointer';
}

// Room 4 Game Logic
const hitbox4 = document.getElementById("hitbox4");
const hitbox4_2 = document.getElementById("hitbox4_2");
const hitbox4_3 = document.getElementById("hitbox4_3");
const clueItem4 = document.getElementById("clueItem4");
const clueItem4_2 = document.getElementById("clueItem4_2");
const clueOverlay4 = document.getElementById("clue-overlay4");
const clueOverlay4_2 = document.getElementById("clue-overlay4_2");
const closebtn4 = document.getElementById("closebtn4");
const closebtn4_2 = document.getElementById("closebtn4_2");
const closebtn4_3 = document.getElementById("closebtn4_3");
const boxoverlay4 = document.getElementById("boxoverlay4");
const box4_1 = document.getElementById("box4_1");
const keypadWrapper4 = document.getElementById("keypadWrapper4");
const buttonGrid4 = document.getElementById("buttonGrid4");
const doorOverlay4 = document.getElementById("doorOverlay4");
const doorButtonGrid4 = document.getElementById("doorButtonGrid4");
const closeDoorBtn4 = document.getElementById("closeDoorBtn4");
const bgImage4 = document.getElementById("bgImage4");
const finalPanel4 = document.getElementById("finalPanel4");
const lastoptions4 = document.getElementById("lastoptions4");

let hasScrollBeenTaken4 = false;
let hasSeenClue4 = false;
let isBoxOpen4 = false;
let enteredCode4 = "";
const correctCode4 = "160";
let isPaperCollected4 = false;
let hasSeenClue4_2 = false;
let doorEnteredCode4 = "";
const correctDoorCode4 = "0714";

// Create keypad buttons
const digits = ['1','2','3','4','5','6','7','8','9','w','0','e'];
digits.forEach(val => {
    const btn = document.createElement('img');
    btn.src = `room 4/digital lock/${val}@3x.png`;
    btn.className = 'num-btn';
    btn.dataset.val = val;
    buttonGrid4.appendChild(btn);
});

digits.forEach(val => {
    const btn = document.createElement('img');
    btn.src = `room 4/digital lock/${val}@3x.png`;
    btn.className = 'door-btn';
    btn.dataset.val = val;
    doorButtonGrid4.appendChild(btn);
});

hitbox4.addEventListener('click', () => {
    if (!hasScrollBeenTaken4) {
        clueItem4.style.display = 'block';
        hasScrollBeenTaken4 = true;
        hitbox4.style.cursor = 'default';
    }
});

clueItem4.addEventListener('click', () => {
    if (hasScrollBeenTaken4) {
        clueOverlay4.style.display = 'block';
        clueItem4.style.visibility = 'hidden';
        hasSeenClue4 = true;
        hitbox4_2.style.pointerEvents = 'auto';
    }
});

closebtn4.addEventListener('click', () => {
    clueOverlay4.style.display = 'none';
    clueItem4.style.visibility = 'visible';
});

hitbox4_2.addEventListener('click', () => {
    if (hasSeenClue4 && !isPaperCollected4) {
        boxoverlay4.style.display = 'block';
        clueItem4.style.visibility = 'hidden';
    }
});

box4_1.addEventListener('click', function() {
    if (!isBoxOpen4) {
        this.src = 'room 4/room 4/8@3x.png';
        keypadWrapper4.style.display = 'block';
        isBoxOpen4 = true;
    } else if (isBoxOpen4 && enteredCode4 === correctCode4) {
        this.src = 'room 4/room 4/clue 5@3x@3x@3x@3x.png';
        clueItem4_2.style.display = 'block';
        clueItem4.style.display = 'none';
        isPaperCollected4 = true;
        this.style.pointerEvents = 'none';
        hitbox4_2.style.pointerEvents = 'none';
    }
});

buttonGrid4.addEventListener('pointerdown', (e) => {
    if (!isBoxOpen4 || !e.target.classList.contains('num-btn')) return;
    const val = e.target.dataset.val;
    e.target.src = `room 4/when we click/${val}@3x.png`;
    setTimeout(() => e.target.src = `room 4/digital lock/${val}@3x.png`, 150);
    
    if (val !== 'w' && val !== 'e') {
        enteredCode4 += val;
        if (enteredCode4 === correctCode4) {
            setTimeout(() => {
                box4_1.src = 'room 4/room 4/clue 4@3x@3x@3x.png';
                keypadWrapper4.style.display = 'none';
            }, 300);
        } else if (enteredCode4.length >= 3) {
            setTimeout(() => enteredCode4 = "", 300);
        }
    } else if (val === 'w') {
        enteredCode4 = "";
    }
});

closebtn4_2.addEventListener('click', () => {
    boxoverlay4.style.display = 'none';
    isBoxOpen4 = false;
    box4_1.src = 'room 4/room 4/clue 3@3x@3x.png';
    keypadWrapper4.style.display = 'none';
    enteredCode4 = "";
});

clueItem4_2.addEventListener('click', () => {
    clueOverlay4_2.style.display = 'block';
    clueItem4_2.style.visibility = 'hidden';
    clueItem4.style.visibility = 'hidden';
    hasSeenClue4_2 = true;
});

closebtn4_3.addEventListener('click', () => {
    clueOverlay4_2.style.display = 'none';
    clueItem4_2.style.visibility = 'visible';
    bgImage4.src = "room 4/room 4/1@3x@3x.png";
    hitbox4_3.style.pointerEvents = 'auto';
});

hitbox4_3.addEventListener('click', () => {
    doorOverlay4.style.display = 'block';
    doorEnteredCode4 = "";
    clueItem4_2.style.visibility = 'hidden';
    clueItem4.style.visibility = 'hidden';
});

doorButtonGrid4.addEventListener('pointerdown', (e) => {
    if (!e.target.classList.contains('door-btn')) return;
    const val = e.target.dataset.val;
    e.target.src = `room 4/when we click/${val}@3x.png`;
    setTimeout(() => e.target.src = `room 4/digital lock/${val}@3x.png`, 150);
    
    if (val !== 'w' && val !== 'e') {
        doorEnteredCode4 += val;
        if (doorEnteredCode4 === correctDoorCode4) {
            setTimeout(() => {
                doorOverlay4.style.display = 'none';
                bgImage4.src = "room 4/room 4/door open@3x.png";
                hitbox4_3.style.pointerEvents = 'none';
                doorEnteredCode4 = "";
            }, 100);
            setTimeout(() => {
                finalPanel4.style.display = 'block';
                lastoptions4.style.display = 'flex';
            }, 500);
        } else if (doorEnteredCode4.length >= 4) {
            setTimeout(() => doorEnteredCode4 = "", 300);
        }
    } else if (val === 'w') {
        doorEnteredCode4 = "";
    }
});

closeDoorBtn4.addEventListener('click', () => {
    doorOverlay4.style.display = 'none';
    clueItem4_2.style.visibility = 'visible';
    doorEnteredCode4 = "";
});

document.getElementById("homeBtn4").addEventListener("click", () => {
    resetRoom4();
    document.getElementById("room4").classList.add("hidden");
    document.querySelector(".mobile-screen").classList.remove("hidden");
});

document.getElementById("nextBtn4").addEventListener("click", () => {
    unlockedLevel = 5;
    localStorage.setItem('unlockedLevel', unlockedLevel);
    document.querySelector(".level5").classList.remove("locked");
    resetRoom4();
    document.getElementById("room4").classList.add("hidden");
    document.querySelector(".mobile-screen").classList.remove("hidden");
});

function resetRoom4() {
    bgImage4.src = "room 4/room 4/1@3x.png";
    clueItem4.style.display = 'none';
    clueItem4.style.visibility = 'visible';
    clueItem4_2.style.display = 'none';
    clueItem4_2.style.visibility = 'visible';
    clueOverlay4.style.display = 'none';
    clueOverlay4_2.style.display = 'none';
    boxoverlay4.style.display = 'none';
    doorOverlay4.style.display = 'none';
    finalPanel4.style.display = 'none';
    lastoptions4.style.display = 'none';
    box4_1.src = 'room 4/room 4/clue 3@3x@3x.png';
    box4_1.style.pointerEvents = 'auto';
    keypadWrapper4.style.display = 'none';
    hitbox4.style.cursor = 'pointer';
    hitbox4_2.style.pointerEvents = 'none';
    hitbox4_3.style.pointerEvents = 'none';
    hasScrollBeenTaken4 = false;
    hasSeenClue4 = false;
    isBoxOpen4 = false;
    enteredCode4 = "";
    isPaperCollected4 = false;
    hasSeenClue4_2 = false;
    doorEnteredCode4 = "";
}

// Room 5 Game Logic
const sceneImage5 = document.getElementById("sceneImage5");
const leftPot5 = document.getElementById("leftPot5");
const key5 = document.getElementById("key5");
const key5_2 = document.getElementById("key5_2");
const clickArea5 = document.getElementById("clickArea5");
const overlay5 = document.getElementById("overlay5");
const blur5 = document.getElementById("blur5");
const inventoryKey5 = document.getElementById("inventoryKey5");
const inventoryKey5_2 = document.getElementById("inventoryKey5_2");
const finalKey5 = document.getElementById("finalKey5");
const finalKey5_2 = document.getElementById("finalKey5_2");
const finalOverlay5 = document.getElementById("finalOverlay5");
const closeBtn5 = document.getElementById("closeBtn5");
const finalCloseBtn5 = document.getElementById("finalCloseBtn5");
const lastoptions5 = document.getElementById("lastoptions5");

let keyCollected5 = false;
let keyCollected5_2 = false;
let boxOpened5 = false;

leftPot5.addEventListener("click", () => {
    sceneImage5.src = "room 5/2nd bg while click on pot.png";
    leftPot5.style.display = "none";
    key5.classList.remove("disabled");
});

key5.addEventListener("click", () => {
    keyCollected5 = true;
    key5.style.opacity = "0.4";
    inventoryKey5.classList.remove("hidden");
    clickArea5.classList.remove("disabled");
    finalKey5_2.classList.remove("disabled");
});

clickArea5.addEventListener("click", () => {
    if (!keyCollected5) return;
    sceneImage5.classList.add("blur");
    overlay5.classList.remove("hidden");
    overlay5.src = "room 5/letter box.png";
    closeBtn5.classList.remove("hidden");
    blur5.classList.add("active");
    clickArea5.classList.add("disabled");
});

inventoryKey5.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", "key");
});

inventoryKey5_2.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", "key2");
});

finalKey5_2.addEventListener("dragover", (e) => {
    e.preventDefault();
});

finalKey5.addEventListener("dragover", (e) => {
    e.preventDefault();
});

finalKey5_2.addEventListener("drop", (e) => {
    e.preventDefault();
    const item = e.dataTransfer.getData("text/plain");
    if (item === "key") {
        overlay5.src = "room 5/letter box 2.png";
        overlay5.classList.remove("hidden");
        closeBtn5.classList.remove("hidden");
        blur5.classList.add("active");
        sceneImage5.classList.add("blur");
        inventoryKey5.classList.add("hidden");
        key5_2.classList.remove("disabled");
        finalKey5_2.classList.add("disabled");
    }
});

function collectKey5_2(event) {
    boxOpened5 = true;
    event.stopPropagation();
    key5_2.style.display = "none";
    inventoryKey5_2.classList.remove("hidden");
    overlay5.src = "room 5/letter box 3.png";
}

key5_2.addEventListener("click", collectKey5_2);

closeBtn5.addEventListener("click", () => {
    if (!keyCollected5_2) {
        overlay5.classList.add("hidden");
        blur5.classList.remove("active");
        sceneImage5.src = "room 5/3rd after collected key.png";
        closeBtn5.classList.add("hidden");
        clickArea5.classList.remove("disabled");
        return;
    }
    overlay5.classList.add("hidden");
    sceneImage5.src = "room 5/3rd after collected key.png";
    blur5.classList.add("hidden");
    finalKey5.classList.remove("disabled");
    closeBtn5.classList.add("hidden");
});

finalKey5.addEventListener("drop", (e) => {
    e.preventDefault();
    const item = e.dataTransfer.getData("text/plain");
    if (item === "key2") {
        overlay5.src = "room 5/final bg after door open.png";
        inventoryKey5_2.classList.add("hidden");
        key5_2.classList.remove("disabled");
        keyCollected5_2 = true;
        setTimeout(() => {
            overlay5.classList.add("blur");
            finalOverlay5.classList.remove("hidden");
            lastoptions5.style.display = 'block';
            finalCloseBtn5.classList.remove("hidden");
        }, 1200);
    }
});

function collectKey5() {
    key5.style.display = "none";
    sceneImage5.src = "room 5/3rd after collected key.png";
    inventoryKey5.classList.remove("hidden");
}

document.getElementById("homeBtn5").addEventListener("click", () => {
    resetRoom5();
    document.getElementById("room5").classList.add("hidden");
    document.querySelector(".mobile-screen").classList.remove("hidden");
});

document.getElementById("nextBtn5").addEventListener("click", () => {
    unlockedLevel = 6;
    localStorage.setItem('unlockedLevel', unlockedLevel);
    document.querySelector(".level6").classList.remove("locked");
    resetRoom5();
    document.getElementById("room5").classList.add("hidden");
    document.querySelector(".mobile-screen").classList.remove("hidden");
});

function resetRoom5() {
    sceneImage5.src = "room 5/1st bg before collecting key.png";
    sceneImage5.classList.remove("blur");
    leftPot5.style.display = "block";
    key5.classList.add("disabled");
    key5.style.opacity = "1";
    key5_2.classList.add("disabled");
    key5_2.style.display = "block";
    clickArea5.classList.add("disabled");
    overlay5.classList.add("hidden");
    overlay5.src = "room 5/letter box.png";
    blur5.classList.remove("active");
    inventoryKey5.classList.add("hidden");
    inventoryKey5_2.classList.add("hidden");
    finalKey5.classList.add("disabled");
    finalKey5_2.classList.add("disabled");
    finalOverlay5.classList.add("hidden");
    closeBtn5.classList.add("hidden");
    finalCloseBtn5.classList.add("hidden");
    lastoptions5.style.display = 'none';
    keyCollected5 = false;
    keyCollected5_2 = false;
    boxOpened5 = false;
}

// Room 6 Game Logic
const mainBg6 = document.getElementById("mainBg6");
const openDoor6 = document.getElementById("openDoor6");
const hitbox6_1 = document.getElementById("hitbox6_1");
const hitbox6_2 = document.getElementById("hitbox6_2");
const hitbox6_3 = document.getElementById("hitbox6_3");
const hitbox6_4 = document.getElementById("hitbox6_4");
const hitbox6_5 = document.getElementById("hitbox6_5");
const clue6_1 = document.getElementById("clue6_1");
const clue6_2 = document.getElementById("clue6_2");
const clue6_3 = document.getElementById("clue6_3");
const clue6_4 = document.getElementById("clue6_4");
const closebtn6 = document.getElementById("closebtn6");
const keypadWrapper6 = document.getElementById("keypadWrapper6");
const buttonGrid6 = document.getElementById("buttonGrid6");
const colorButtons6 = document.getElementById("colorButtons6");
const redBtn6 = document.getElementById("redBtn6");
const whiteBtn6 = document.getElementById("whiteBtn6");
const yellowBtn6 = document.getElementById("yellowBtn6");
const finalPanel6 = document.getElementById("finalPanel6");
const lastoptions6 = document.getElementById("lastoptions6");

let isBoxOpen6 = false;
let enteredCode6 = "";
const correctCode6 = "68";
let lockOpened6 = false;
let redBtnState6 = 0;
let whiteBtnState6 = 0;
let yellowBtnState6 = 0;

// Create keypad buttons for Room 6
const digits6 = ['1','2','3','4','5','6','7','8','9','w','0','e'];
digits6.forEach(val => {
    const btn = document.createElement('img');
    btn.src = `Room 6/digital lock croped/${val}@3x.png`;
    btn.className = 'num-btn';
    btn.dataset.val = val;
    buttonGrid6.appendChild(btn);
});

hitbox6_1.addEventListener('click', () => {
    clue6_1.style.display = 'block';
    closebtn6.style.display = 'block';
    mainBg6.style.filter = "blur(3px)";
});

hitbox6_2.addEventListener('click', () => {
    clue6_2.style.display = 'block';
    closebtn6.style.display = 'block';
    mainBg6.style.filter = "blur(3px)";
});

hitbox6_3.addEventListener('click', () => {
    clue6_3.style.display = 'block';
    closebtn6.style.display = 'block';
    mainBg6.style.filter = "blur(3px)";
});

hitbox6_4.addEventListener('click', () => {
    clue6_4.style.display = 'block';
    closebtn6.style.display = 'block';
    mainBg6.style.filter = "blur(3px)";
});

clue6_4.addEventListener('click', function() {
    if (!isBoxOpen6) {
        this.src = 'Room 6/8@3x.png';
        setTimeout(() => {
            keypadWrapper6.style.display = 'block';
        }, 500);
        isBoxOpen6 = true;
    } else if (isBoxOpen6 && enteredCode6 === correctCode6) {
        this.src = 'Room 6/toy.png';
    }
});

buttonGrid6.addEventListener('pointerdown', (e) => {
    if (!isBoxOpen6 || !e.target.classList.contains('num-btn')) return;
    const val = e.target.dataset.val;
    e.target.src = `Room 6/when we click/${val}@3x.png`;
    
    if (val !== 'w' && val !== 'e') {
        enteredCode6 += val;
        if (enteredCode6 === correctCode6) {
            lockOpened6 = true;
            setTimeout(() => {
                clue6_4.src = 'Room 6/lock open.png';
                keypadWrapper6.style.display = 'none';
            }, 50);
        } else if (enteredCode6.length >= 2) {
            setTimeout(() => {
                enteredCode6 = "";
                buttonGrid6.querySelectorAll('.num-btn').forEach(btn => {
                    const v = btn.dataset.val;
                    btn.src = `Room 6/digital lock croped/${v}@3x.png`;
                });
            }, 300);
        }
    } else if (val === 'w') {
        enteredCode6 = "";
        buttonGrid6.querySelectorAll('.num-btn').forEach(btn => {
            const v = btn.dataset.val;
            btn.src = `Room 6/digital lock croped/${v}@3x.png`;
        });
    }
});

closebtn6.addEventListener('click', () => {
    clue6_1.style.display = 'none';
    clue6_2.style.display = 'none';
    clue6_3.style.display = 'none';
    clue6_4.style.display = 'none';
    clue6_4.src = 'Room 6/lock.png';
    mainBg6.style.filter = "none";
    closebtn6.style.display = 'none';
    keypadWrapper6.style.display = 'none';
    colorButtons6.style.display = 'none';
    isBoxOpen6 = false;
    enteredCode6 = "";
});

hitbox6_5.addEventListener('click', () => {
    colorButtons6.style.display = 'flex';
    closebtn6.style.display = 'block';
    mainBg6.style.filter = "blur(3px)";
});

redBtn6.addEventListener('click', () => {
    redBtnState6++;
    if (redBtnState6 > 2) redBtnState6 = 0;
    if (redBtnState6 === 0) redBtn6.src = "Room 6/red button.png";
    else if (redBtnState6 === 1) redBtn6.src = "Room 6/yellow.png";
    else if (redBtnState6 === 2) redBtn6.src = "Room 6/white button.png";
    checkColorPuzzle6();
});

whiteBtn6.addEventListener('click', () => {
    whiteBtnState6++;
    if (whiteBtnState6 > 2) whiteBtnState6 = 0;
    if (whiteBtnState6 === 0) whiteBtn6.src = "Room 6/white button.png";
    else if (whiteBtnState6 === 1) whiteBtn6.src = "Room 6/red button.png";
    else if (whiteBtnState6 === 2) whiteBtn6.src = "Room 6/yellow.png";
    checkColorPuzzle6();
});

yellowBtn6.addEventListener('click', () => {
    yellowBtnState6++;
    if (yellowBtnState6 > 2) yellowBtnState6 = 0;
    if (yellowBtnState6 === 0) yellowBtn6.src = "Room 6/yellow.png";
    else if (yellowBtnState6 === 1) yellowBtn6.src = "Room 6/red button.png";
    else if (yellowBtnState6 === 2) yellowBtn6.src = "Room 6/white button.png";
    checkColorPuzzle6();
});

function checkColorPuzzle6() {
    console.log(`States: red=${redBtnState6}, yellow=${yellowBtnState6}, white=${whiteBtnState6}, lockOpened=${lockOpened6}`);
    if (lockOpened6 && redBtnState6 === 2 && yellowBtnState6 === 1 && whiteBtnState6 === 2) {
        setTimeout(() => {
            openDoor6.classList.add('show-door');
        }, 100);
        
        [hitbox6_1, hitbox6_2, hitbox6_3, hitbox6_4, hitbox6_5].forEach(box => {
            box.style.pointerEvents = 'none';
        });
        
        mainBg6.style.filter = "none";
        colorButtons6.style.display = 'none';
        closebtn6.style.display = 'none';
        
        setTimeout(() => {
            finalPanel6.style.display = 'block';
            lastoptions6.style.display = 'flex';
        }, 500);
    }
}

document.getElementById("homeBtn6").addEventListener("click", () => {
    resetRoom6();
    document.getElementById("room6").classList.add("hidden");
    document.querySelector(".mobile-screen").classList.remove("hidden");
});

document.getElementById("nextBtn6").addEventListener("click", () => {
    unlockedLevel = 7;
    localStorage.setItem('unlockedLevel', unlockedLevel);
    document.querySelector(".level7").classList.remove("locked");
    resetRoom6();
    document.getElementById("room6").classList.add("hidden");
    document.querySelector(".mobile-screen").classList.remove("hidden");
});

function resetRoom6() {
    mainBg6.style.filter = "none";
    openDoor6.classList.remove('show-door');
    clue6_1.style.display = 'none';
    clue6_2.style.display = 'none';
    clue6_3.style.display = 'none';
    clue6_4.style.display = 'none';
    clue6_4.src = 'Room 6/lock.png';
    closebtn6.style.display = 'none';
    keypadWrapper6.style.display = 'none';
    colorButtons6.style.display = 'none';
    finalPanel6.style.display = 'none';
    lastoptions6.style.display = 'none';
    redBtn6.src = "Room 6/red button.png";
    whiteBtn6.src = "Room 6/white button.png";
    yellowBtn6.src = "Room 6/yellow.png";
    [hitbox6_1, hitbox6_2, hitbox6_3, hitbox6_4, hitbox6_5].forEach(box => {
        box.style.pointerEvents = 'auto';
    });
    isBoxOpen6 = false;
    enteredCode6 = "";
    lockOpened6 = false;
    redBtnState6 = 0;
    whiteBtnState6 = 0;
    yellowBtnState6 = 0;
}
