const levels = document.querySelectorAll(".level");
let unlockedLevel = parseInt(localStorage.getItem('unlockedLevel')) || 1;

// Homepage navigation
const playBtn = document.getElementById("playBtn");
const levelsBtn = document.getElementById("levelsBtn");
const gamesBtn = document.getElementById("gamesBtn");
const homepageScreen = document.querySelector(".homepage-screen");
const mobileScreen = document.querySelector(".mobile-screen");
const settingsBtn = document.getElementById("settingsBtn");
const settingsPopup = document.getElementById("settings");
const closeSettingsBtn = document.getElementById("closeSettingsBtn");
const soundToggle = document.getElementById("soundToggle");
const musicToggle = document.getElementById("musicToggle");
const homeBtnLevel = document.getElementById("homeBtnLevel");
const nextBtnLevel = document.getElementById("nextBtnLevel");
const mobileScreen2 = document.querySelector(".mobile-screen-2");

playBtn.addEventListener("click", () => {
    homepageScreen.classList.add("hidden");
    mobileScreen.classList.add("hidden");
    const roomId = `room${unlockedLevel}`;
    document.getElementById(roomId).classList.remove("hidden");
    history.pushState({ page: roomId, from: 'homepage' }, '', `#${roomId}`);
});

levelsBtn.addEventListener("click", () => {
    homepageScreen.classList.add("hidden");
    mobileScreen.classList.remove("hidden");
    history.pushState({ page: 'levels' }, '', '#levels');
});

gamesBtn.addEventListener("click", () => {
    alert("More games coming soon!");
});

settingsBtn.addEventListener("click", () => {
    settingsPopup.style.display = "flex";
});

closeSettingsBtn.addEventListener("click", () => {
    settingsPopup.style.display = "none";
});

soundToggle.addEventListener("click", function() {
    const isActive = this.dataset.active === "true";
    this.src = isActive ? "homepage/panneldesign/volume mute button.png" : "homepage/panneldesign/volume button.png";
    this.dataset.active = !isActive;
});

musicToggle.addEventListener("click", function() {
    const isActive = this.dataset.active === "true";
    this.src = isActive ? "homepage/panneldesign/volume mute button.png" : "homepage/panneldesign/volume button.png";
    this.dataset.active = !isActive;
});

homeBtnLevel.addEventListener("click", () => {
    mobileScreen.classList.add("hidden");
    homepageScreen.classList.remove("hidden");
    history.pushState({ page: 'home' }, '', '#home');
});

nextBtnLevel.addEventListener("click", () => {
    mobileScreen.classList.add("hidden");
    mobileScreen2.classList.remove("hidden");
});

const prevBtnLevel = document.getElementById("prevBtnLevel");
if (prevBtnLevel) {
    prevBtnLevel.addEventListener("click", () => {
        mobileScreen2.classList.add("hidden");
        mobileScreen.classList.remove("hidden");
    });
}

// Always show next button
nextBtnLevel.style.display = 'block';

// Unlock levels on page load
for (let i = 2; i <= unlockedLevel; i++) {
    if (i <= 10) {
        document.querySelector(`.level${i}`).classList.remove("locked");
    } else if (i === 11) {
        const level11 = document.querySelector(".level11");
        if (level11) level11.classList.remove("locked");
    } else {
        document.querySelector(`.level${i}`)?.classList.remove("locked");
    }
} 

levels.forEach((level) => {
    level.addEventListener("click", (e) => {
        e.stopPropagation();
        const levelNum = Number(level.dataset.level);
        console.log("Clicked level:", levelNum); 

        if (levelNum === 1) {
            document.querySelector(".mobile-screen").classList.add("hidden");
            document.getElementById("room1").classList.remove("hidden");
            history.pushState({ page: 'room1', from: 'levels' }, '', '#room1');
        } else if (levelNum === 2) {
            document.querySelector(".mobile-screen").classList.add("hidden");
            document.getElementById("room2").classList.remove("hidden");
            history.pushState({ page: 'room2', from: 'levels' }, '', '#room2');
        } else if (levelNum === 3) {
            document.querySelector(".mobile-screen").classList.add("hidden");
            document.getElementById("room3").classList.remove("hidden");
            history.pushState({ page: 'room3', from: 'levels' }, '', '#room3');
        } else if (levelNum === 4) {
            document.querySelector(".mobile-screen").classList.add("hidden");
            document.getElementById("room4").classList.remove("hidden");
            history.pushState({ page: 'room4', from: 'levels' }, '', '#room4');
        } else if (levelNum === 5) {
            document.querySelector(".mobile-screen").classList.add("hidden");
            document.getElementById("room5").classList.remove("hidden");
            history.pushState({ page: 'room5', from: 'levels' }, '', '#room5');
        } else if (levelNum === 6) {
            document.querySelector(".mobile-screen").classList.add("hidden");
            document.getElementById("room6").classList.remove("hidden");
            history.pushState({ page: 'room6', from: 'levels' }, '', '#room6');
        } else if (levelNum === 7) {
            document.querySelector(".mobile-screen").classList.add("hidden");
            document.getElementById("room7").classList.remove("hidden");
            history.pushState({ page: 'room7', from: 'levels' }, '', '#room7');
        } else if (levelNum === 8) {
            document.querySelector(".mobile-screen").classList.add("hidden");
            document.getElementById("room8").classList.remove("hidden");
            history.pushState({ page: 'room8', from: 'levels' }, '', '#room8');
        } else if (levelNum === 9) {
            document.querySelector(".mobile-screen").classList.add("hidden");
            document.getElementById("room9").classList.remove("hidden");
            history.pushState({ page: 'room9', from: 'levels' }, '', '#room9');
        } else if (levelNum === 10) {
            document.querySelector(".mobile-screen").classList.add("hidden");
            document.getElementById("room10").classList.remove("hidden");
            history.pushState({ page: 'room10', from: 'levels' }, '', '#room10');
        } else if (levelNum === 11) {
            mobileScreen2.classList.add("hidden");
            homepageScreen.classList.add("hidden");
            document.getElementById("room11").classList.remove("hidden");
            history.pushState({ page: 'room11', from: 'levels' }, '', '#room11');
        } else if (levelNum === 12) {
            mobileScreen2.classList.add("hidden");
            document.getElementById("room12").classList.remove("hidden");
            history.pushState({ page: 'room12', from: 'levels' }, '', '#room12');
        } else if (levelNum === 13) {
            mobileScreen2.classList.add("hidden");
            document.getElementById("room13").classList.remove("hidden");
            history.pushState({ page: 'room13', from: 'levels' }, '', '#room13');
        } else if (levelNum === 14) {
            mobileScreen2.classList.add("hidden");
            document.getElementById("room14").classList.remove("hidden");
            history.pushState({ page: 'room14', from: 'levels' }, '', '#room14');
        } else if (levelNum === 15) {
            mobileScreen2.classList.add("hidden");
            alert(`Level ${levelNum} game coming soon!`);
            mobileScreen2.classList.remove("hidden");
        } else {
            window.location.href = `levelpage/level${levelNum}.html`;
        }
    });
});

window.addEventListener('popstate', (e) => {
    resetRoom1();
    resetRoom2();
    resetRoom3();
    resetRoom4();
    resetRoom5();
    resetRoom6();
    resetRoom7();
    resetRoom8();
    resetRoom9();
    resetRoom10();
    resetRoom11();
    resetRoom12();
    resetRoom13();
    document.getElementById("room1").classList.add("hidden");
    document.getElementById("room2").classList.add("hidden");
    document.getElementById("room3").classList.add("hidden");
    document.getElementById("room4").classList.add("hidden");
    document.getElementById("room5").classList.add("hidden");
    document.getElementById("room6").classList.add("hidden");
    document.getElementById("room7").classList.add("hidden");
    document.getElementById("room8").classList.add("hidden");
    document.getElementById("room9").classList.add("hidden");
    document.getElementById("room10").classList.add("hidden");
    document.getElementById("room11").classList.add("hidden");
    document.getElementById("room12").classList.add("hidden");
    document.getElementById("room13").classList.add("hidden");
    mobileScreen.classList.add("hidden");
    mobileScreen2.classList.add("hidden");
    homepageScreen.classList.add("hidden");
    
    if (e.state && e.state.page === 'levels') {
        mobileScreen.classList.remove("hidden");
    } else if (e.state && e.state.page === 'home') {
        homepageScreen.classList.remove("hidden");
    } else {
        homepageScreen.classList.remove("hidden");
    }
});

function resetRoom1() {
    levelPanel1.classList.add("hidden");
    bgImage.classList.remove("blur");
    bgImage.src = "room 1/room final 2@1.5x@1.5x.png";
    carpet.classList.remove("hidden", "moved");
    key.classList.add("hidden");
    keyArea.classList.add("disabled");
    keyArea.innerHTML = "";
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
const levelPanel1 = document.getElementById("levelCompletePanel1");
const panelCloseBtn1 = document.getElementById("panelCloseBtn1");

let carpetMoved = false;
let keyCollected = false;

carpetArea.addEventListener("click", () => {
    if (!carpetMoved) {
        carpet.classList.add("moved");
        carpetMoved = true;
        carpetArea.style.cursor = "default";
        setTimeout(() => {
            key.classList.remove("hidden");
            const keyImg = document.createElement("img");
            keyImg.src = "room 1/key to open the door for room 1.png";
            keyImg.style.width = "50px";
            keyImg.style.height = "auto";
            keyImg.style.position = "absolute";
            keyArea.appendChild(keyImg);
        });
        keyArea.classList.remove("disabled");
    }
});

keyArea.addEventListener("click", () => {
    if (keyCollected) return;
    
    keyCollected = true;
    key.classList.add("hidden");
    keyArea.innerHTML = "";
    keyArea.style.cursor = "default";
    
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
    
    const keyId = e.dataTransfer.getData("text/plain");
    const draggedKey = document.getElementById(keyId);
    
    if (draggedKey) {
        draggedKey.classList.add("hidden");
        bgImage.src = "room 1/room back ground after game end@3x.jpg";
        
        setTimeout(() => {
            bgImage.classList.add("blur");
            levelPanel1.classList.remove("hidden");
        }, 1200);
    }
});

document.getElementById("nextBtn1").addEventListener("click", () => {
    unlockedLevel = 2;
    localStorage.setItem('unlockedLevel', unlockedLevel);
    document.querySelector(".level2").classList.remove("locked");
    resetRoom1();
    document.getElementById("room1").classList.add("hidden");
    document.querySelector(".mobile-screen").classList.remove("hidden");
});

document.getElementById("homeBtn1").addEventListener("click", () => {
    resetRoom1();
    document.getElementById("room1").classList.add("hidden");
    document.querySelector(".homepage-screen").classList.remove("hidden");
});

document.getElementById("closeSettingsRoom1").addEventListener("click", () => {
    document.getElementById("settingsRoom1").style.display = "none";
});

document.getElementById("soundToggleRoom1").addEventListener("click", function() {
    const isActive = this.dataset.active === "true";
    this.src = isActive ? "homepage/panneldesign/volume mute button.png" : "homepage/panneldesign/volume button.png";
    this.dataset.active = !isActive;
});

document.getElementById("musicToggleRoom1").addEventListener("click", function() {
    const isActive = this.dataset.active === "true";
    this.src = isActive ? "homepage/panneldesign/volume mute button.png" : "homepage/panneldesign/volume button.png";
    this.dataset.active = !isActive;
});

if (panelCloseBtn1) {
    panelCloseBtn1.addEventListener("click", () => {
        levelPanel1.classList.add("hidden");
        bgImage.classList.remove("blur");
        bgImage.src = "room 1/room final 2@1.5x@1.5x.png";
        carpet.classList.remove("hidden", "moved");
        key.classList.add("hidden");
        keyArea.classList.add("disabled");
        keyArea.innerHTML = "";
        doorArea.classList.add("disabled");
        slot1.innerHTML = "";
        carpetMoved = false;
        keyCollected = false;
    });
}

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
        leafArea.style.cursor = "default";
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
        buttonArea.style.cursor = "default";
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
    document.querySelector(".homepage-screen").classList.remove("hidden");
});

document.getElementById("closeSettingsRoom2").addEventListener("click", () => {
    document.getElementById("settingsRoom2").style.display = "none";
});

document.getElementById("soundToggleRoom2").addEventListener("click", function() {
    const isActive = this.dataset.active === "true";
    this.src = isActive ? "homepage/panneldesign/volume mute button.png" : "homepage/panneldesign/volume button.png";
    this.dataset.active = !isActive;
});

document.getElementById("musicToggleRoom2").addEventListener("click", function() {
    const isActive = this.dataset.active === "true";
    this.src = isActive ? "homepage/panneldesign/volume mute button.png" : "homepage/panneldesign/volume button.png";
    this.dataset.active = !isActive;
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
        resetRoom2();
        document.getElementById("room2").classList.add("hidden");
        document.querySelector(".mobile-screen").classList.remove("hidden");
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
            bgImage3.classList.add("blur");
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

document.getElementById("closeSettingsRoom3").addEventListener("click", () => {
    document.getElementById("settingsRoom3").style.display = "none";
});

document.getElementById("soundToggleRoom3").addEventListener("click", function() {
    const isActive = this.dataset.active === "true";
    this.src = isActive ? "homepage/panneldesign/volume mute button.png" : "homepage/panneldesign/volume button.png";
    this.dataset.active = !isActive;
});

document.getElementById("musicToggleRoom3").addEventListener("click", function() {
    const isActive = this.dataset.active === "true";
    this.src = isActive ? "homepage/panneldesign/volume mute button.png" : "homepage/panneldesign/volume button.png";
    this.dataset.active = !isActive;
});

document.getElementById("nextBtn3").addEventListener("click", () => {
    unlockedLevel = 4;
    localStorage.setItem('unlockedLevel', unlockedLevel);
    document.querySelector(".level4").classList.remove("locked");
    resetRoom3();
    document.getElementById("room3").classList.add("hidden");
    document.querySelector(".mobile-screen").classList.remove("hidden");
});

if (document.getElementById("panelCloseBtn3")) {
    document.getElementById("panelCloseBtn3").addEventListener("click", () => {
        resetRoom3();
    });
}

function resetRoom3() {
    bgImage3.src = "room 3/room 3/1st bg@3x.jpg";
    bgImage3.classList.remove("blur");
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
                bgImage4.classList.add("blur");
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

document.getElementById("closeSettingsRoom4").addEventListener("click", () => {
    document.getElementById("settingsRoom4").style.display = "none";
});

document.getElementById("soundToggleRoom4").addEventListener("click", function() {
    const isActive = this.dataset.active === "true";
    this.src = isActive ? "homepage/panneldesign/volume mute button.png" : "homepage/panneldesign/volume button.png";
    this.dataset.active = !isActive;
});

document.getElementById("musicToggleRoom4").addEventListener("click", function() {
    const isActive = this.dataset.active === "true";
    this.src = isActive ? "homepage/panneldesign/volume mute button.png" : "homepage/panneldesign/volume button.png";
    this.dataset.active = !isActive;
});

document.getElementById("nextBtn4").addEventListener("click", () => {
    unlockedLevel = 5;
    localStorage.setItem('unlockedLevel', unlockedLevel);
    document.querySelector(".level5").classList.remove("locked");
    resetRoom4();
    document.getElementById("room4").classList.add("hidden");
    document.querySelector(".mobile-screen").classList.remove("hidden");
});

if (document.getElementById("panelCloseBtn4")) {
    document.getElementById("panelCloseBtn4").addEventListener("click", () => {
        resetRoom4();
    });
}

function resetRoom4() {
    bgImage4.src = "room 4/room 4/1@3x.png";
    bgImage4.classList.remove("blur");
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
    key5.style.display = "none";
    sceneImage5.src = "room 5/3rd after collected key.png";
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
    if (!boxOpened5) {
        overlay5.classList.add("hidden");
        blur5.classList.remove("active");
        sceneImage5.classList.remove("blur");
        sceneImage5.src = "room 5/3rd after collected key.png";
        closeBtn5.classList.add("hidden");
        clickArea5.classList.remove("disabled");
        return;
    }
    overlay5.classList.add("hidden");
    blur5.classList.remove("active");
    sceneImage5.classList.remove("blur");
    sceneImage5.src = "room 5/3rd after collected key.png";
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
            sceneImage5.classList.add("blur");
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

document.getElementById("closeSettingsRoom5").addEventListener("click", () => {
    document.getElementById("settingsRoom5").style.display = "none";
});

document.getElementById("soundToggleRoom5").addEventListener("click", function() {
    const isActive = this.dataset.active === "true";
    this.src = isActive ? "homepage/panneldesign/volume mute button.png" : "homepage/panneldesign/volume button.png";
    this.dataset.active = !isActive;
});

document.getElementById("musicToggleRoom5").addEventListener("click", function() {
    const isActive = this.dataset.active === "true";
    this.src = isActive ? "homepage/panneldesign/volume mute button.png" : "homepage/panneldesign/volume button.png";
    this.dataset.active = !isActive;
});

document.getElementById("nextBtn5").addEventListener("click", () => {
    unlockedLevel = 6;
    localStorage.setItem('unlockedLevel', unlockedLevel);
    document.querySelector(".level6").classList.remove("locked");
    resetRoom5();
    document.getElementById("room5").classList.add("hidden");
    document.querySelector(".mobile-screen").classList.remove("hidden");
});

if (document.getElementById("finalCloseBtn5")) {
    document.getElementById("finalCloseBtn5").addEventListener("click", () => {
        resetRoom5();
    });
}

function resetRoom5() {
    sceneImage5.src = "room 5/1st bg before collecting key.png";
    sceneImage5.classList.remove("blur");
    leftPot5.style.display = "block";
    key5.classList.add("disabled");
    key5.style.display = "block";
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
    setTimeout(() => e.target.src = `Room 6/digital lock croped/${val}@3x.png`, 150);
    
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
    buttonGrid6.querySelectorAll('.num-btn').forEach(btn => {
        const v = btn.dataset.val;
        btn.src = `Room 6/digital lock croped/${v}@3x.png`;
    });
    redBtn6.src = "Room 6/red button.png";
    whiteBtn6.src = "Room 6/white button.png";
    yellowBtn6.src = "Room 6/yellow.png";
    redBtnState6 = 0;
    whiteBtnState6 = 0;
    yellowBtnState6 = 0;
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
            
            [hitbox6_1, hitbox6_2, hitbox6_3, hitbox6_4, hitbox6_5].forEach(box => {
                box.style.pointerEvents = 'none';
            });
            
            mainBg6.style.filter = "none";
            colorButtons6.style.display = 'none';
            closebtn6.style.display = 'none';
            
            setTimeout(() => {
                finalPanel6.style.display = 'block';
                lastoptions6.style.display = 'flex';
                mainBg6.style.filter = "blur(3px)";
                if (document.getElementById("panelCloseBtn6")) {
                    document.getElementById("panelCloseBtn6").style.display = 'block';
                }
            }, 500);
        }, 800);
    }
}

document.getElementById("homeBtn6").addEventListener("click", () => {
    resetRoom6();
    document.getElementById("room6").classList.add("hidden");
    document.querySelector(".mobile-screen").classList.remove("hidden");
});

document.getElementById("closeSettingsRoom6").addEventListener("click", () => {
    document.getElementById("settingsRoom6").style.display = "none";
});

document.getElementById("soundToggleRoom6").addEventListener("click", function() {
    const isActive = this.dataset.active === "true";
    this.src = isActive ? "homepage/panneldesign/volume mute button.png" : "homepage/panneldesign/volume button.png";
    this.dataset.active = !isActive;
});

document.getElementById("musicToggleRoom6").addEventListener("click", function() {
    const isActive = this.dataset.active === "true";
    this.src = isActive ? "homepage/panneldesign/volume mute button.png" : "homepage/panneldesign/volume button.png";
    this.dataset.active = !isActive;
});

document.getElementById("nextBtn6").addEventListener("click", () => {
    unlockedLevel = 7;
    localStorage.setItem('unlockedLevel', unlockedLevel);
    document.querySelector(".level7").classList.remove("locked");
    resetRoom6();
    document.getElementById("room6").classList.add("hidden");
    document.querySelector(".mobile-screen").classList.remove("hidden");
});

if (document.getElementById("panelCloseBtn6")) {
    document.getElementById("panelCloseBtn6").addEventListener("click", () => {
        resetRoom6();
    });
}

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
    if (document.getElementById("panelCloseBtn6")) {
        document.getElementById("panelCloseBtn6").style.display = 'none';
    }
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

// Room 7 Game Logic
const sceneImage7 = document.getElementById("sceneImage7");
const key7 = document.getElementById("key7");
const crowBar7 = document.getElementById("crowBar7");
const overlay7 = document.getElementById("overlay7");
const closeBtn7 = document.getElementById("closeBtn7");
const finalCrowBarArea7 = document.getElementById("finalCrowBarArea7");
const lockedBoxArea7 = document.getElementById("lockedBoxArea7");
const lockedBoxKeyArea7 = document.getElementById("lockedBoxKeyArea7");
const slot7 = document.getElementById("slot7");
const slot7_1 = document.getElementById("slot7_1");
const lockedBox7 = document.getElementById("lockedBox7");
const finalKeyArea7 = document.getElementById("finalKeyArea7");
const finalDoorArea7 = document.getElementById("finalDoorArea7");
const finalOverlay7 = document.getElementById("finalOverlay7");
const finalCloseBtn7 = document.getElementById("finalCloseBtn7");
const lastoptions7 = document.getElementById("lastoptions7");

let key1Collected7 = false;
let crowbarCollected7 = false;
let key1CollectedFirst7 = false;
let crowbarCollectedFirst7 = false;
let finalKeyCollected7 = false;

key7.addEventListener("click", () => {
    key1Collected7 = true;
    collectKey7();
});

crowBar7.addEventListener("click", () => {
    crowbarCollected7 = true;
    collectKey7();
});

lockedBox7.addEventListener("click", () => {
    finalCrowBarArea7.classList.remove("disabled");
    sceneImage7.classList.add("blur");
    overlay7.classList.remove("hidden");
    closeBtn7.classList.remove("hidden");
});

closeBtn7.addEventListener("click", () => {
    finalCrowBarArea7.classList.add("disabled");
    sceneImage7.classList.remove("blur");
    overlay7.classList.add("hidden");
    closeBtn7.classList.add("hidden");
});

function collectKey7() {
    if (key1Collected7 && !crowbarCollected7) {
        const inventoryKey = document.createElement("img");
        inventoryKey.src = "room 7/key.png";
        inventoryKey.style.width = "30px";
        inventoryKey.draggable = true;
        inventoryKey.id = "invKey7_1";
        slot7.appendChild(inventoryKey);
        sceneImage7.src = "room 7/3 bg.jpg";
        key7.style.display = "none";
        key1CollectedFirst7 = true;
        inventoryKey.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", "key");
        });
    }

    if (!key1Collected7 && crowbarCollected7) {
        const inventoryKey = document.createElement("img");
        inventoryKey.src = "room 7/crowbar.png";
        inventoryKey.style.width = "30px";
        inventoryKey.draggable = true;
        inventoryKey.id = "invCrowbar7_1";
        slot7.appendChild(inventoryKey);
        sceneImage7.src = "room 7/2 bg.jpg";
        crowBar7.style.display = "none";
        crowbarCollectedFirst7 = true;
        inventoryKey.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", "crowbar");
        });
    }

    if (key1Collected7 && crowbarCollected7) {
        if (crowbarCollectedFirst7) {
            const inventoryKey1 = document.createElement("img");
            inventoryKey1.src = "room 7/key.png";
            inventoryKey1.style.width = "30px";
            inventoryKey1.draggable = true;
            inventoryKey1.id = "invKey7_2";
            slot7_1.appendChild(inventoryKey1);
            sceneImage7.src = "room 7/4 bg.jpg";
            key7.style.display = "none";
            finalCrowBarArea7.classList.remove("disabled");
            inventoryKey1.addEventListener("dragstart", (e) => {
                e.dataTransfer.setData("text/plain", "key");
            });
        }
        if (key1CollectedFirst7) {
            const inventoryKey1 = document.createElement("img");
            inventoryKey1.src = "room 7/crowbar.png";
            inventoryKey1.style.width = "30px";
            inventoryKey1.draggable = true;
            inventoryKey1.id = "invCrowbar7_2";
            slot7_1.appendChild(inventoryKey1);
            sceneImage7.src = "room 7/4 bg.jpg";
            crowBar7.style.display = "none";
            inventoryKey1.addEventListener("dragstart", (e) => {
                e.dataTransfer.setData("text/plain", "crowbar");
            });
        }
    }
}

finalCrowBarArea7.addEventListener("dragover", (e) => {
    e.preventDefault();
});

finalCrowBarArea7.addEventListener("drop", (e) => {
    e.preventDefault();
    const item = e.dataTransfer.getData("text/plain");
    if (item === "crowbar") {
        overlay7.src = "room 7/wooden box open.png";
        if (crowbarCollectedFirst7) slot7.style.display = "none";
        if (key1CollectedFirst7) slot7_1.style.display = "none";
        finalCrowBarArea7.classList.add("disabled");
        lockedBoxArea7.classList.remove("disabled");
        sceneImage7.src = "room 7/5 bg.png";
    }
});

lockedBoxArea7.addEventListener("click", () => {
    overlay7.src = "room 7/locked box.png";
    lockedBoxArea7.classList.add("disabled");
    lockedBoxKeyArea7.classList.remove("disabled");
});

lockedBoxKeyArea7.addEventListener("dragover", (e) => {
    e.preventDefault();
});

lockedBoxKeyArea7.addEventListener("drop", (e) => {
    e.preventDefault();
    const item = e.dataTransfer.getData("text/plain");
    if (item === "key") {
        overlay7.src = "room 7/locked box 2.png";
        if (crowbarCollectedFirst7) slot7_1.style.display = "none";
        if (key1CollectedFirst7) slot7.style.display = "none";
        lockedBoxKeyArea7.classList.add("disabled");
        finalKeyArea7.classList.remove("disabled");
    }
});

finalKeyArea7.addEventListener("click", () => {
    finalKeyCollected7 = true;
    overlay7.src = "room 7/locked box 3.png";
    slot7.style.display = "block";
    slot7.innerHTML = "";
    const inventoryKey = document.createElement("img");
    inventoryKey.src = "room 7/key to open the door for room 1.png";
    inventoryKey.style.width = "45px";
    inventoryKey.draggable = true;
    inventoryKey.id = "finalKey7";
    slot7.appendChild(inventoryKey);
    finalDoorArea7.classList.remove("disabled");
    inventoryKey.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", "finalKey");
    });
});

finalDoorArea7.addEventListener("dragover", (e) => {
    e.preventDefault();
});

finalDoorArea7.addEventListener("drop", (e) => {
    e.preventDefault();
    const item = e.dataTransfer.getData("text/plain");
    if (item === "finalKey") {
        sceneImage7.src = "room 7/6 bg.jpg";
        slot7.style.display = "none";
        finalDoorArea7.classList.add("disabled");
        setTimeout(() => {
            sceneImage7.classList.add("blur");
            finalOverlay7.classList.remove("hidden");
            finalCloseBtn7.classList.remove("hidden");
            lastoptions7.style.display = 'block';
        }, 1200);
    }
});

document.getElementById("homeBtn7").addEventListener("click", () => {
    resetRoom7();
    document.getElementById("room7").classList.add("hidden");
    document.querySelector(".mobile-screen").classList.remove("hidden");
});

document.getElementById("closeSettingsRoom7").addEventListener("click", () => {
    document.getElementById("settingsRoom7").style.display = "none";
});

document.getElementById("soundToggleRoom7").addEventListener("click", function() {
    const isActive = this.dataset.active === "true";
    this.src = isActive ? "homepage/panneldesign/volume mute button.png" : "homepage/panneldesign/volume button.png";
    this.dataset.active = !isActive;
});

document.getElementById("musicToggleRoom7").addEventListener("click", function() {
    const isActive = this.dataset.active === "true";
    this.src = isActive ? "homepage/panneldesign/volume mute button.png" : "homepage/panneldesign/volume button.png";
    this.dataset.active = !isActive;
});

document.getElementById("nextBtn7").addEventListener("click", () => {
    unlockedLevel = 8;
    localStorage.setItem('unlockedLevel', unlockedLevel);
    document.querySelector(".level8").classList.remove("locked");
    resetRoom7();
    document.getElementById("room7").classList.add("hidden");
    document.querySelector(".mobile-screen").classList.remove("hidden");
});

if (document.getElementById("finalCloseBtn7")) {
    document.getElementById("finalCloseBtn7").addEventListener("click", () => {
        resetRoom7();
    });
}

function resetRoom7() {
    sceneImage7.src = "room 7/1 bg.jpg";
    sceneImage7.classList.remove("blur");
    overlay7.src = "room 7/wooden box.png";
    overlay7.classList.add("hidden");
    closeBtn7.classList.add("hidden");
    finalOverlay7.classList.add("hidden");
    finalCloseBtn7.classList.add("hidden");
    lastoptions7.style.display = 'none';
    key7.style.display = "block";
    crowBar7.style.display = "block";
    slot7.style.display = "block";
    slot7.innerHTML = "";
    slot7_1.innerHTML = "";
    finalCrowBarArea7.classList.add("disabled");
    lockedBoxArea7.classList.add("disabled");
    lockedBoxKeyArea7.classList.add("disabled");
    finalKeyArea7.classList.add("disabled");
    finalDoorArea7.classList.add("disabled");
    key1Collected7 = false;
    crowbarCollected7 = false;
    key1CollectedFirst7 = false;
    crowbarCollectedFirst7 = false;
    finalKeyCollected7 = false;
}

// Room 8 Game Logic
const bg8_1 = document.getElementById("bg8_1");
const bg8_2 = document.getElementById("bg8_2");
const hitbox8_1 = document.getElementById("hitbox8_1");
const scissor8 = document.getElementById("scissor8");
const hitbox8_2 = document.getElementById("hitbox8_2");
const letterbox8 = document.getElementById("letterbox8");
const closebtn8 = document.getElementById("closebtn8");
const inventoryKey8 = document.getElementById("inventoryKey8");
const doorHitbox8 = document.getElementById("doorHitbox8");
const finalPanel8 = document.getElementById("finalPanel8");
const lastoptions8 = document.getElementById("lastoptions8");

let isBoxOpen8 = false;
let isScissorGrabbed8 = false;
let isKeyShow8 = false;

hitbox8_1.addEventListener('click', () => {
    scissor8.style.display = 'block';
    bg8_2.style.visibility = "visible";
    bg8_2.style.opacity = "1";
    hitbox8_2.style.pointerEvents = 'auto';
});

hitbox8_2.addEventListener('click', () => {
    letterbox8.style.display = 'block';
    closebtn8.style.display = 'block';
    bg8_2.style.filter = "blur(3px)";
});

closebtn8.addEventListener('click', () => {
    letterbox8.style.display = 'none';
    closebtn8.style.display = 'none';
    bg8_2.style.filter = "none";
});

letterbox8.addEventListener('click', function() {
    if (!isBoxOpen8) {
        this.src = 'ROOM 8/letter.png';
        isBoxOpen8 = true;
    } else if (isBoxOpen8 && isKeyShow8) {
        inventoryKey8.style.display = 'block';
        this.style.display = 'none';
        closebtn8.style.display = 'none';
        bg8_2.style.filter = "none";
    }
});

scissor8.setAttribute('draggable', 'true');

scissor8.addEventListener('dragstart', (e) => {
    isScissorGrabbed8 = true;
    e.dataTransfer.setData("text", "scissor8");
    e.dataTransfer.effectAllowed = "move";
});

letterbox8.addEventListener('dragover', (e) => {
    e.preventDefault();
});

letterbox8.addEventListener('drop', (e) => {
    e.preventDefault();
    if (isScissorGrabbed8) {
        letterbox8.src = 'ROOM 8/key with letter.png';
        scissor8.style.display = 'none';
        isBoxOpen8 = true;
        isScissorGrabbed8 = false;
        isKeyShow8 = true;
    }
});

inventoryKey8.setAttribute('draggable', 'true');

inventoryKey8.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData("text", "inventoryKey8");
});

doorHitbox8.addEventListener('dragover', (e) => {
    e.preventDefault();
});

doorHitbox8.addEventListener('drop', (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text");
    if (data === "inventoryKey8") {
        inventoryKey8.style.display = 'none';
        bg8_2.src = "ROOM 8/final bg.jpg";
        bg8_2.style.opacity = "1";
        bg8_2.style.visibility = "visible";
        setTimeout(() => {
            finalPanel8.style.display = 'block';
            lastoptions8.style.display = 'block';
            if (document.getElementById("panelCloseBtn8")) {
                document.getElementById("panelCloseBtn8").style.display = 'block';
            }
        }, 1000);
    }
});

document.getElementById("homeBtn8").addEventListener("click", () => {
    resetRoom8();
    document.getElementById("room8").classList.add("hidden");
    document.querySelector(".mobile-screen").classList.remove("hidden");
});

document.getElementById("closeSettingsRoom8").addEventListener("click", () => {
    document.getElementById("settingsRoom8").style.display = "none";
});

document.getElementById("soundToggleRoom8").addEventListener("click", function() {
    const isActive = this.dataset.active === "true";
    this.src = isActive ? "homepage/panneldesign/volume mute button.png" : "homepage/panneldesign/volume button.png";
    this.dataset.active = !isActive;
});

document.getElementById("musicToggleRoom8").addEventListener("click", function() {
    const isActive = this.dataset.active === "true";
    this.src = isActive ? "homepage/panneldesign/volume mute button.png" : "homepage/panneldesign/volume button.png";
    this.dataset.active = !isActive;
});

document.getElementById("nextBtn8").addEventListener("click", () => {
    unlockedLevel = 9;
    localStorage.setItem('unlockedLevel', unlockedLevel);
    document.querySelector(".level9").classList.remove("locked");
    resetRoom8();
    document.getElementById("room8").classList.add("hidden");
    document.querySelector(".mobile-screen").classList.remove("hidden");
});

if (document.getElementById("panelCloseBtn8")) {
    document.getElementById("panelCloseBtn8").addEventListener("click", () => {
        resetRoom8();
    });
}

function resetRoom8() {
    bg8_1.src = "ROOM 8/1 BG.jpg";
    bg8_2.src = "ROOM 8/2 BG.jpg";
    bg8_2.style.visibility = "hidden";
    bg8_2.style.opacity = "0";
    bg8_2.style.filter = "none";
    scissor8.style.display = 'none';
    letterbox8.style.display = 'none';
    letterbox8.src = 'ROOM 8/letter box.png';
    closebtn8.style.display = 'none';
    inventoryKey8.style.display = 'none';
    finalPanel8.style.display = 'none';
    lastoptions8.style.display = 'none';
    if (document.getElementById("panelCloseBtn8")) {
        document.getElementById("panelCloseBtn8").style.display = 'none';
    }
    hitbox8_2.style.pointerEvents = 'none';
    isBoxOpen8 = false;
    isScissorGrabbed8 = false;
    isKeyShow8 = false;
}

// Room 9 Game Logic
const clueArea9 = document.getElementById("clueArea9");
const overlay9 = document.getElementById("overlay9");
const sceneImage9 = document.getElementById("sceneImage9");
const closeBtn9 = document.getElementById("closeBtn9");
const boxArea9 = document.getElementById("boxArea9");
const lockArea9 = document.getElementById("lockArea9");
const keyArea9 = document.getElementById("keyArea9");
const finalLockArea9 = document.getElementById("finalLockArea9");
const keypadWrapper9 = document.getElementById("keypadWrapper9");
const buttonGrid9 = document.getElementById("buttonGrid9");
const lastoptions9 = document.getElementById("lastoptions9");
const finalCloseBtn9 = document.getElementById("finalCloseBtn9");
const slot9 = document.getElementById("slot9");

const correctCode9 = "042";
let isBoxOpen9 = false;
let enteredCode9 = "";
let keyCollected9 = false;

const digits9 = ['1','2','3','4','5','6','7','8','9','w','0','e'];
digits9.forEach(val => {
    const btn = document.createElement('img');
    btn.src = `room 9/digital lock croped/${val}@3x.png`;
    btn.className = 'num-btn9';
    btn.dataset.val = val;
    buttonGrid9.appendChild(btn);
});

clueArea9.addEventListener("click", () => {
    overlay9.src = "room 9/clue.png";
    overlay9.style.left = "10px";
    overlay9.style.top = "20px";
    overlay9.style.width = "95%";
    overlay9.style.height = "95%";
    sceneImage9.classList.add("blur");
    overlay9.classList.remove("hidden");
    closeBtn9.classList.remove("hidden");
    clueArea9.classList.add("disabled");
});

closeBtn9.addEventListener("click", () => {
    sceneImage9.classList.remove("blur");
    overlay9.classList.add("hidden");
    closeBtn9.classList.add("hidden");
    clueArea9.classList.remove("disabled");
    lockArea9.classList.add("disabled");
    boxArea9.classList.remove("disabled");
    overlay9.src = 'room 9/lock.png';
    keypadWrapper9.style.display = 'none';
    isBoxOpen9 = false;
    enteredCode9 = "";
    buttonGrid9.querySelectorAll('.num-btn9').forEach(btn => {
        const v = btn.dataset.val;
        btn.src = `room 9/digital lock croped/${v}@3x.png`;
    });
    keyArea9.classList.add("disabled");
});

boxArea9.addEventListener("click", () => {
    overlay9.src = "room 9/box.png";
    overlay9.style.left = "10px";
    overlay9.style.top = "20px";
    overlay9.style.width = "95%";
    overlay9.style.height = "95%";
    sceneImage9.classList.add("blur");
    overlay9.classList.remove("hidden");
    closeBtn9.classList.remove("hidden");
    clueArea9.classList.add("disabled");
    lockArea9.classList.remove("disabled");
    boxArea9.classList.add("disabled");
});

lockArea9.addEventListener('click', () => {
    if (!isBoxOpen9 && !keyCollected9) {
        overlay9.src = 'room 9/lock.png';
        overlay9.style.left = "40px";
        overlay9.style.top = "100px";
        overlay9.style.width = "75%";
        overlay9.style.height = "70%";
        setTimeout(() => {
            keypadWrapper9.style.display = 'block';
        }, 500);
        isBoxOpen9 = true;
    }
});

buttonGrid9.addEventListener('pointerdown', (e) => {
    if (!isBoxOpen9 || !e.target.classList.contains('num-btn9')) return;
    const val = e.target.dataset.val;
    e.target.src = `room 9/digital lock croped/when we clcik/${val}@3x.png`;
    setTimeout(() => e.target.src = `room 9/digital lock croped/${val}@3x.png`, 150);
    
    if (val !== 'w' && val !== 'e') {
        enteredCode9 += val;
        if (enteredCode9 === correctCode9) {
            setTimeout(() => {
                overlay9.src = 'room 9/box 2.png';
                lockArea9.classList.add("disabled");
                keypadWrapper9.style.display = 'none';
                keyArea9.classList.remove("disabled");
            }, 50);
        } else if (enteredCode9.length >= 3) {
            setTimeout(() => {
                enteredCode9 = "";
                buttonGrid9.querySelectorAll('.num-btn9').forEach(btn => {
                    const v = btn.dataset.val;
                    btn.src = `room 9/digital lock croped/${v}@3x.png`;
                });
            }, 300);
        }
    } else if (val === 'w' || val === 'e') {
        enteredCode9 = "";
        buttonGrid9.querySelectorAll('.num-btn9').forEach(btn => {
            const v = btn.dataset.val;
            btn.src = `room 9/digital lock croped/${v}@3x.png`;
        });
    }
});

keyArea9.addEventListener("click", () => {
    overlay9.src = "room 9/box 3.png";
    const inventoryKey = document.createElement("img");
    inventoryKey.src = "room 9/key.png";
    inventoryKey.style.width = "50px";
    inventoryKey.draggable = true;
    inventoryKey.id = "invKey9";
    slot9.appendChild(inventoryKey);
    keyCollected9 = true;
    sceneImage9.src = "room 9/2 bg.jpg";
    boxArea9.classList.add("hidden");
    keyArea9.classList.add("hidden");
    finalLockArea9.classList.remove("disabled");
    inventoryKey.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", "finalKey");
    });
});

finalLockArea9.addEventListener("dragover", (e) => {
    e.preventDefault();
});

finalLockArea9.addEventListener("drop", (e) => {
    e.preventDefault();
    const item = e.dataTransfer.getData("text/plain");
    if (item === "finalKey") {
        sceneImage9.src = "room 9/3 bg.jpg";
        slot9.style.display = "none";
        finalLockArea9.classList.add("disabled");
        setTimeout(() => {
            sceneImage9.classList.add("blur");
            overlay9.src = "room 9/final panel 7- 15/final panel 9@2x@2x.png";
            overlay9.classList.remove("hidden");
            overlay9.style.height = '100%';
            overlay9.style.width = '100%';
            overlay9.style.top = '0px';
            overlay9.style.left = '0px';
            finalCloseBtn9.classList.remove("hidden");
            lastoptions9.style.display = 'block';
        }, 100);
    }
});

document.getElementById("homeBtn9").addEventListener("click", () => {
    resetRoom9();
    document.getElementById("room9").classList.add("hidden");
    document.querySelector(".mobile-screen").classList.remove("hidden");
});

document.getElementById("closeSettingsRoom9").addEventListener("click", () => {
    document.getElementById("settingsRoom9").style.display = "none";
});

document.getElementById("soundToggleRoom9").addEventListener("click", function() {
    const isActive = this.dataset.active === "true";
    this.src = isActive ? "homepage/panneldesign/volume mute button.png" : "homepage/panneldesign/volume button.png";
    this.dataset.active = !isActive;
});

document.getElementById("musicToggleRoom9").addEventListener("click", function() {
    const isActive = this.dataset.active === "true";
    this.src = isActive ? "homepage/panneldesign/volume mute button.png" : "homepage/panneldesign/volume button.png";
    this.dataset.active = !isActive;
});

document.getElementById("nextBtn9").addEventListener("click", () => {
    unlockedLevel = 10;
    localStorage.setItem('unlockedLevel', unlockedLevel);
    document.querySelector(".level10").classList.remove("locked");
    resetRoom9();
    document.getElementById("room9").classList.add("hidden");
    document.querySelector(".mobile-screen").classList.remove("hidden");
});

if (document.getElementById("finalCloseBtn9")) {
    document.getElementById("finalCloseBtn9").addEventListener("click", () => {
        resetRoom9();
    });
}

function resetRoom9() {
    sceneImage9.src = "room 9/1 bg.jpg";
    sceneImage9.classList.remove("blur");
    overlay9.src = "room 9/clue.png";
    overlay9.classList.add("hidden");
    closeBtn9.classList.add("hidden");
    finalCloseBtn9.classList.add("hidden");
    lastoptions9.style.display = 'none';
    clueArea9.classList.remove("disabled");
    boxArea9.classList.remove("disabled");
    boxArea9.classList.remove("hidden");
    lockArea9.classList.add("disabled");
    keyArea9.classList.add("disabled");
    keyArea9.classList.remove("hidden");
    finalLockArea9.classList.add("disabled");
    keypadWrapper9.style.display = 'none';
    slot9.style.display = "block";
    slot9.innerHTML = "";
    isBoxOpen9 = false;
    enteredCode9 = "";
    keyCollected9 = false;
}

// Room 10 Game Logic (Color Puzzle)
const bgImage10 = document.getElementById("bgImage10");
const hitbox10 = document.getElementById("hitbox10");
const zoomOverlay10 = document.getElementById("zoomoverlay10");
const closebtn10 = document.getElementById("closebtn10");
const slots10 = document.querySelectorAll('.slot10');
const finalPanel10 = document.getElementById("finalPanel10");
const closebtn10_2 = document.getElementById("closebtn10_2");
const lastoptions10 = document.getElementById("lastoptions10");

let firstSelectedSlot10 = null;

hitbox10.addEventListener('click', () => {
    zoomOverlay10.style.display = 'flex';
    closebtn10.style.display = 'block';
    bgImage10.style.filter = "blur(5px)";
});

closebtn10.addEventListener('click', () => {
    zoomOverlay10.style.display = 'none';
    closebtn10.style.display = 'none';
    bgImage10.style.filter = "none";
});

function setupBoxColors10() {
    const order = ['pink', 'red', 'blue', 'red', 'pink', 'red', 'pink', 'blue', 'blue'];
    order.forEach((color, index) => {
        const slot = document.getElementById(`slot10_${index + 1}`);
        slot.classList.remove('pink10', 'red10', 'blue10');
        slot.classList.add(color + '10');
    });
}
setupBoxColors10();

slots10.forEach((slot, index) => {
    slot.addEventListener('click', () => {
        if (!firstSelectedSlot10) {
            firstSelectedSlot10 = { element: slot, index: index };
            slot.classList.add('selected10');
        } else {
            if (isNeighbor10(firstSelectedSlot10.index, index)) {
                swapSlots10(firstSelectedSlot10.element, slot);
            }
            firstSelectedSlot10.element.classList.remove('selected10');
            firstSelectedSlot10 = null;
        }
    });
});

function isNeighbor10(idx1, idx2) {
    const row1 = Math.floor(idx1 / 3);
    const col1 = idx1 % 3;
    const row2 = Math.floor(idx2 / 3);
    const col2 = idx2 % 3;
    return (Math.abs(row1 - row2) + Math.abs(col1 - col2) === 1);
}

function swapSlots10(slot1, slot2) {
    const colorClasses = ['pink10', 'red10', 'blue10'];
    let color1 = colorClasses.find(c => slot1.classList.contains(c));
    let color2 = colorClasses.find(c => slot2.classList.contains(c));
    if (color1 && color2) {
        slot1.classList.add('rotating10');
        slot2.classList.add('rotating10');
        slot1.classList.remove(color1);
        slot2.classList.remove(color2);
        slot1.classList.add(color2);
        slot2.classList.add(color1);
        setTimeout(() => {
            slot1.classList.remove('rotating10');
            slot2.classList.remove('rotating10');
            checkWinCondition10();
        }, 1000);
    }
}

const winningOrder10 = ['pink10', 'red10', 'blue10', 'pink10', 'red10', 'blue10', 'pink10', 'red10', 'blue10'];

function checkWinCondition10() {
    const currentSlots = document.querySelectorAll('.slot10');
    let isWin = true;
    currentSlots.forEach((slot, index) => {
        if (!slot.classList.contains(winningOrder10[index])) {
            isWin = false;
        }
    });
    if (isWin) {
        handleWin10();
    }
}

function handleWin10() {
    zoomOverlay10.style.display = 'none';
    bgImage10.src = "room 10/2.jpg";
    closebtn10.style.display = 'none';
    bgImage10.style.filter = "none";
    hitbox10.style.pointerEvents = "none";
    setTimeout(() => {
        bgImage10.src = "room 10/3.jpg";
    }, 50);
    setTimeout(() => {
        finalPanel10.style.display = 'block';
        lastoptions10.style.display = 'flex';
        closebtn10_2.style.display = 'block';
        bgImage10.style.filter = "blur(5px)";
    }, 100);
}

document.getElementById("homeBtn10").addEventListener("click", () => {
    resetRoom10();
    document.getElementById("room10").classList.add("hidden");
    document.querySelector(".mobile-screen").classList.remove("hidden");
});

document.getElementById("closeSettingsRoom10").addEventListener("click", () => {
    document.getElementById("settingsRoom10").style.display = "none";
});

document.getElementById("soundToggleRoom10").addEventListener("click", function() {
    const isActive = this.dataset.active === "true";
    this.src = isActive ? "homepage/panneldesign/volume mute button.png" : "homepage/panneldesign/volume button.png";
    this.dataset.active = !isActive;
});

document.getElementById("musicToggleRoom10").addEventListener("click", function() {
    const isActive = this.dataset.active === "true";
    this.src = isActive ? "homepage/panneldesign/volume mute button.png" : "homepage/panneldesign/volume button.png";
    this.dataset.active = !isActive;
});

document.getElementById("nextBtn10").addEventListener("click", () => {
    unlockedLevel = 11;
    localStorage.setItem('unlockedLevel', unlockedLevel);
    document.querySelector(".level11").classList.remove("locked");
    resetRoom10();
    document.getElementById("room10").classList.add("hidden");
    mobileScreen2.classList.remove("hidden");
});

if (document.getElementById("closebtn10_2")) {
    document.getElementById("closebtn10_2").addEventListener("click", () => {
        resetRoom10();
    });
}

function resetRoom10() {
    bgImage10.src = "room 10/1.jpg";
    bgImage10.style.filter = "none";
    zoomOverlay10.style.display = 'none';
    closebtn10.style.display = 'none';
    closebtn10_2.style.display = 'none';
    finalPanel10.style.display = 'none';
    lastoptions10.style.display = 'none';
    hitbox10.style.pointerEvents = "auto";
    firstSelectedSlot10 = null;
    setupBoxColors10();
}

// Room 11 Game Logic
const handle11 = document.querySelector("#room11 #handle");
const popup11 = document.querySelector("#room11 #popup");
const popup11_2 = document.querySelector("#room11 #popup2");
const popupImg11 = document.querySelector("#room11 #popup-img");
const arrows11 = document.querySelectorAll("#room11 .arrow-btn");
const doorContainer11 = document.querySelector("#room11 .door-container");
const openDoor11 = document.querySelector("#room11 #open-door");
const finalPanel11 = document.getElementById("finalPanel11");
const lastoptions11 = document.getElementById("lastoptions11");
const panelCloseBtn11 = document.getElementById("panelCloseBtn11");

const KEY_POSITIONS = [{id:0,top:230,left:230},{id:1,top:230,left:265},{id:2,top:230,left:316},{id:3,top:160,left:290},{id:4,top:130,left:315},{id:5,top:180,left:360},{id:6,top:90,left:270},{id:7,top:280,left:300},{id:8,top:230,left:358},{id:9,top:280,left:354},{id:10,top:320,left:320},{id:11,top:363,left:270},{id:12,top:367,left:347},{id:13,top:410,left:290},{id:14,top:410,left:230},{id:15,top:410,left:160},{id:16,top:355,left:110},{id:17,top:355,left:160},{id:18,top:359,left:220},{id:19,top:317,left:220},{id:20,top:317,left:257},{id:21,top:320,left:130},{id:22,top:304,left:180},{id:23,top:270,left:146},{id:24,top:230,left:135},{id:25,top:180,left:150},{id:26,top:140,left:210},{id:27,top:90,left:210},{id:28,top:120,left:140},{id:29,top:99,left:88},{id:30,top:160,left:40},{id:31,top:228,left:40},{id:32,top:297,left:40}];
const VALID_PATHS = [[0,1,2,3,4,5],[0,1,2,3,4,6],[0,1,2,3],[0,1,2,7,3,8],[0,1,2,8,9,10,11],[0,1,2,8,9,10,12,13,14,15,16,21,17,18,19,20,22,23,24,25,26,27,28,29,30,31,32],[0,1,2,8,9,10,12,13,14,15,16,21,17,18,19,20,22,23,24,25,26,27,28,29,30,31],[3,8],[3,4,6],[3,2],[2,7,3,8],[2,8,9,10,11],[2,8,9,10,12,13],[2,8,9,10,12,13,14,15,16,21,17,18,19,20,22,23,24,25,26,27,28,29,30,31],[2,8,9,10,12,13,14,15,16,21,17,18,19,20,22,23,24,25,26,27,28,29,30,31],[0,1],[1,2],[2,3],[3,4],[4,5],[4,6],[7,3],[2,8],[8,9],[9,10],[10,11],[10,12],[12,13],[13,14,15,16,21,17,18,19,20,22,23,24,25,26,27,28,29,30,31,32],[13,14,15,16,21,17,18,19,20,22,23,24,25,26,27,28,29,30,31],[2,7],[19,20,22,23,24,25,26,27,28,29,30,31,32],[19,22],[19,20],[22,23],[23,24,25,26,27,28,29,30,31,32],[24,25],[25,26],[26,27],[27,28],[28,29],[29,30],[30,31],[31,32]];

let currentID11 = 0;
let visitedPath11 = [0];
let handleClicked11 = false;
let keyUsed11 = false;

function getValidNextMoves11(path) {
    const validNext = new Set();
    const currentPos = path[path.length - 1];
    VALID_PATHS.forEach(validPath => {
        if (validPath.length <= path.length) return;
        let matches = true;
        for (let i = 0; i < path.length; i++) {
            if (validPath[i] !== path[i]) { matches = false; break; }
        }
        if (matches) validNext.add(validPath[path.length]);
    });
    VALID_PATHS.forEach(validPath => {
        if (validPath[0] === currentPos && validPath.length > 1) validNext.add(validPath[1]);
    });
    if (path.length > 1) validNext.add(path[path.length - 2]);
    return Array.from(validNext);
}

function showKey11(id) {
    KEY_POSITIONS.forEach(k => {
        const el = document.querySelector(`#room11 #key${k.id}`);
        if (el) el.style.display = k.id === id ? 'block' : 'none';
    });
}

function moveKey11(dir) {
    if (currentID11 === 31 && dir === "left") {
        popup11_2.style.display = "none";
        doorContainer11.style.display = "block";
        document.getElementById('inventoryKey').style.display = "block";
        return;
    }
    const currentPos = KEY_POSITIONS[currentID11];
    const validNext = getValidNextMoves11(visitedPath11);
    const prevPos = visitedPath11.length > 1 ? visitedPath11[visitedPath11.length - 2] : -1;
    const candidates = validNext.map(nextID => {
        const pos = KEY_POSITIONS[nextID];
        const dx = pos.left - currentPos.left;
        const dy = pos.top - currentPos.top;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const isBacktrack = nextID === prevPos;
        let score = 0;
        if (dir === "right" && dx > 0) score = dx * 2 - Math.abs(dy);
        else if (dir === "left" && dx < 0) score = Math.abs(dx) * 2 - Math.abs(dy);
        else if (dir === "up" && dy < 0) score = Math.abs(dy) * 2 - Math.abs(dx);
        else if (dir === "down" && dy > 0) score = dy * 2 - Math.abs(dx);
        return { id: nextID, score, distance, isBacktrack };
    }).filter(c => c.score > 0);
    if (candidates.length === 0) return;
    candidates.sort((a, b) => {
        if (a.isBacktrack !== b.isBacktrack) return b.isBacktrack - a.isBacktrack;
        if (b.score !== a.score) return b.score - a.score;
        return a.distance - b.distance;
    });
    const bestID = candidates[0].id;
    if (visitedPath11.length > 1 && visitedPath11[visitedPath11.length - 2] === bestID) {
        visitedPath11.pop();
        currentID11 = bestID;
    } else {
        currentID11 = bestID;
        visitedPath11.push(currentID11);
    }
    showKey11(currentID11);
}

if (handle11) {
    handle11.addEventListener("click", () => {
        if (!handleClicked11 && !keyUsed11) {
            handleClicked11 = true;
            popup11.style.display = "flex";
        }
    });
}
if (popupImg11) {
    popupImg11.addEventListener("click", (e) => {
        e.stopPropagation();
        popup11.style.display = "none";
        popup11_2.style.display = "flex";
        currentID11 = 0;
        visitedPath11 = [0];
        showKey11(0);
    });
}
if (popup11) {
    popup11.addEventListener("click", (e) => { if (e.target !== popupImg11) popup11.style.display = "none"; });
}
if (popup11_2) {
    popup11_2.addEventListener("click", (e) => { if (e.target === popup11_2) popup11_2.style.display = "none"; });
}
arrows11.forEach(arrow => {
    arrow.addEventListener("click", (e) => {
        e.stopPropagation();
        moveKey11(arrow.dataset.dir);
    });
});

document.addEventListener("keydown", (e) => {
    if (popup11_2 && popup11_2.style.display === "flex") {
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
            e.preventDefault();
            if (e.key === "ArrowUp") moveKey11("up");
            if (e.key === "ArrowDown") moveKey11("down");
            if (e.key === "ArrowLeft") moveKey11("left");
            if (e.key === "ArrowRight") moveKey11("right");
        }
    }
});

// Drag and drop key to handle (Room 11)
const inventoryKey11 = document.getElementById('inventoryKey');
const slot11 = document.getElementById('slot11');

console.log('Room 11 - inventoryKey11:', inventoryKey11);
console.log('Room 11 - handle11:', handle11);

if (inventoryKey11) {
    inventoryKey11.setAttribute('draggable', 'true');
    console.log('Room 11 - Key draggable set to true');
    
    inventoryKey11.addEventListener('dragstart', (e) => {
        console.log('Room 11 - Drag started');
        e.dataTransfer.setData('text/plain', 'inventoryKey');
        inventoryKey11.classList.add('dragging');
    });

    inventoryKey11.addEventListener('dragend', () => {
        console.log('Room 11 - Drag ended');
        inventoryKey11.classList.remove('dragging');
    });
}

if (handle11) {
    handle11.addEventListener('dragover', (e) => {
        console.log('Room 11 - Drag over handle');
        e.preventDefault();
    });

    handle11.addEventListener('drop', (e) => {
        console.log('Room 11 - Drop event triggered');
        e.preventDefault();
        const item = e.dataTransfer.getData('text/plain');
        console.log('Room 11 - Dropped item:', item, 'keyUsed11:', keyUsed11);
        if (item === 'inventoryKey' && !keyUsed11) {
            console.log('Room 11 - Opening door!');
            keyUsed11 = true;
            doorContainer11.style.display = 'none';
            openDoor11.style.display = 'block';
            
            setTimeout(() => {
                finalPanel11.style.display = 'block';
                lastoptions11.style.display = 'flex';
                panelCloseBtn11.style.display = 'block';
            }, 1000);
        }
    });
}

document.getElementById("homeBtn11").addEventListener("click", () => {
    resetRoom11();
    document.getElementById("room11").classList.add("hidden");
    mobileScreen2.classList.remove("hidden");
});

document.getElementById("nextBtn11").addEventListener("click", () => {
    unlockedLevel = 12;
    localStorage.setItem('unlockedLevel', unlockedLevel);
    document.querySelector(".level12").classList.remove("locked");
    resetRoom11();
    document.getElementById("room11").classList.add("hidden");
    mobileScreen2.classList.remove("hidden");
});

if (panelCloseBtn11) {
    panelCloseBtn11.addEventListener("click", () => { resetRoom11(); });
}

function resetRoom11() {
    if (doorContainer11) doorContainer11.style.display = "block";
    if (openDoor11) openDoor11.style.display = "none";
    if (popup11) popup11.style.display = "none";
    if (popup11_2) popup11_2.style.display = "none";
    if (finalPanel11) finalPanel11.style.display = "none";
    if (lastoptions11) lastoptions11.style.display = "none";
    if (panelCloseBtn11) panelCloseBtn11.style.display = "none";
    const invKey = document.getElementById('inventoryKey');
    if (invKey) invKey.style.display = 'none';
    currentID11 = 0;
    visitedPath11 = [0];
    handleClicked11 = false;
    keyUsed11 = false;
    KEY_POSITIONS.forEach(k => {
        const el = document.querySelector(`#room11 #key${k.id}`);
        if (el) el.style.display = 'none';
    });
}

// Room 12 Game Logic
let isKnobRevealed12 = false;
let mazeGameActive12 = false;
let moveKeys12 = { Up: false, Down: false, Left: false, Right: false };

let player12 = {
    x: 0, y: 0,
    hitbox: 6,
    visual: 30,
    speed: 2
};

const bgImage12 = document.getElementById("bgImage12");
const doorKnobImg12 = document.getElementById("doorKnobImg12");
const doorKnobHitbox12 = document.getElementById("doorKnobHitbox12");
const doorDropZone12 = document.getElementById("doorArea12");
const slot12 = document.getElementById("slot12");
const closeBtn12 = document.getElementById("closeButton12");
const levelPanel12 = document.getElementById("levelCompletePanel12");
const mazeOverlay12 = document.getElementById('mazeOverlay12');
const mazeCanvas12 = document.getElementById('mazeCanvas12');
const ctx12 = mazeCanvas12.getContext('2d', { willReadFrequently: true });

const mazeImg12 = new Image();
mazeImg12.src = "room12/images/room12/puzzle.png";

const keyImg12 = new Image();
keyImg12.src = "room12/images/room12/key to open the door for room 1.png";

function handleKnobInteraction12() {
    if (!isKnobRevealed12) {
        doorKnobImg12.classList.remove("hidden");
        closeBtn12.classList.remove("hidden");
        setTimeout(() => {
            doorKnobImg12.classList.add("moved");
            doorKnobHitbox12.classList.add("moved");
            bgImage12.classList.add("blur-bg");
        }, 50);
        isKnobRevealed12 = true;
    } else {
        closeBtn12.classList.add("hidden");
        startMazeGame12();
    }
}

doorKnobHitbox12.addEventListener("click", handleKnobInteraction12);
doorKnobImg12.addEventListener("click", handleKnobInteraction12);

closeBtn12.addEventListener("click", (e) => {
    e.stopPropagation();
    doorKnobImg12.classList.add("hidden");
    closeBtn12.classList.add("hidden");
    bgImage12.classList.remove("blur-bg");
    doorKnobImg12.classList.remove("moved");
    doorKnobHitbox12.classList.remove("moved");
    isKnobRevealed12 = false;
});

function startMazeGame12() {
    mazeOverlay12.classList.remove("hidden");
    mazeGameActive12 = true;
    mazeCanvas12.width = 300;
    mazeCanvas12.height = 300;
    player12.x = 150;
    player12.y = 125;
    requestAnimationFrame(updateMaze12);
}

function updateMaze12() {
    if (!mazeGameActive12) return;
    ctx12.clearRect(0, 0, mazeCanvas12.width, mazeCanvas12.height);
    ctx12.drawImage(mazeImg12, 0, 0, mazeCanvas12.width, mazeCanvas12.height);
    let nextX = player12.x;
    let nextY = player12.y;
    if (moveKeys12.Up) nextY -= player12.speed;
    if (moveKeys12.Down) nextY += player12.speed;
    if (moveKeys12.Left) nextX -= player12.speed;
    if (moveKeys12.Right) nextX += player12.speed;
    if (!checkCollision12(nextX, nextY)) {
        player12.x = nextX;
        player12.y = nextY;
    }
    let drawX = player12.x - (player12.visual / 2) + (player12.hitbox / 2);
    let drawY = player12.y - (player12.visual / 2) + (player12.hitbox / 2);
    ctx12.drawImage(keyImg12, drawX, drawY, player12.visual, player12.visual);
    checkWin12();
    requestAnimationFrame(updateMaze12);
}

function checkCollision12(x, y) {
    const points = [
        {x: x, y: y},
        {x: x + player12.hitbox, y: y},
        {x: x, y: y + player12.hitbox},
        {x: x + player12.hitbox, y: y + player12.hitbox}
    ];
    for (let point of points) {
        if (point.x < 0 || point.x >= mazeCanvas12.width || point.y < 0 || point.y >= mazeCanvas12.height) continue;
        const pixel = ctx12.getImageData(point.x, point.y, 1, 1).data;
        if (pixel[2] < 100 && pixel[0] > 100 && pixel[1] > 100) {
            return true;
        }
    }
    return false;
}

function checkWin12() {
    if (player12.x <= 5 || player12.x >= mazeCanvas12.width - 5 ||
        player12.y <= 5 || player12.y >= mazeCanvas12.height - 5) {
        endMazeGame12();
    }
}

function endMazeGame12() {
    mazeGameActive12 = false;
    mazeOverlay12.classList.add("hidden");
    bgImage12.classList.remove("blur-bg");
    doorKnobImg12.classList.add("hidden");
    doorKnobHitbox12.style.display = "none";
    addKeyToInventory12();
}

function addKeyToInventory12() {
    const invKey = document.createElement("img");
    invKey.src = keyImg12.src;
    invKey.draggable = true;
    invKey.id = "inventoryKey12";
    invKey.style.width = "40px";
    invKey.style.height = "40px";
    slot12.appendChild(invKey);
    invKey.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", e.target.id);
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setDragImage(e.target, 20, 20);
    });
    doorDropZone12.classList.remove("disabled");
}

doorDropZone12.addEventListener("dragover", (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
});

doorDropZone12.addEventListener("drop", (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    const item = document.getElementById(id);
    if (item && item.id === "inventoryKey12") {
        item.remove();
        doorKnobImg12.classList.add("hidden");
        doorKnobHitbox12.style.display = "none";
        bgImage12.src = "room12/images/room12/2 bg.png";
        setTimeout(() => {
            levelPanel12.classList.remove("hidden");
            bgImage12.classList.add("blur-bg");
        }, 1000);
    }
});

window.addEventListener("keydown", (e) => {
    if (mazeGameActive12) {
        if (e.key === "ArrowUp") moveKeys12.Up = true;
        if (e.key === "ArrowDown") moveKeys12.Down = true;
        if (e.key === "ArrowLeft") moveKeys12.Left = true;
        if (e.key === "ArrowRight") moveKeys12.Right = true;
    }
});

window.addEventListener("keyup", (e) => {
    if (mazeGameActive12) {
        if (e.key === "ArrowUp") moveKeys12.Up = false;
        if (e.key === "ArrowDown") moveKeys12.Down = false;
        if (e.key === "ArrowLeft") moveKeys12.Left = false;
        if (e.key === "ArrowRight") moveKeys12.Right = false;
    }
});

const setupBtn12 = (id, dir) => {
    const btn = document.getElementById(id);
    if (!btn) return;
    const start = (e) => { e.preventDefault(); moveKeys12[dir] = true; };
    const end = (e) => { e.preventDefault(); moveKeys12[dir] = false; };
    btn.addEventListener("mousedown", start);
    btn.addEventListener("mouseup", end);
    btn.addEventListener("touchstart", start);
    btn.addEventListener("touchend", end);
};

setupBtn12("btnUp12", "Up");
setupBtn12("btnDown12", "Down");
setupBtn12("btnLeft12", "Left");
setupBtn12("btnRight12", "Right");

document.getElementById("homeBtn12").addEventListener("click", () => {
    resetRoom12();
    document.getElementById("room12").classList.add("hidden");
    mobileScreen2.classList.remove("hidden");
});

document.getElementById("nextBtn12").addEventListener("click", () => {
    unlockedLevel = 13;
    localStorage.setItem('unlockedLevel', unlockedLevel);
    document.querySelector(".level13").classList.remove("locked");
    resetRoom12();
    document.getElementById("room12").classList.add("hidden");
    mobileScreen2.classList.remove("hidden");
});

function resetRoom12() {
    bgImage12.src = "room12/images/room12/1 bg.png";
    bgImage12.classList.remove("blur-bg");
    doorKnobImg12.classList.add("hidden");
    doorKnobImg12.classList.remove("moved");
    doorKnobHitbox12.classList.remove("moved");
    doorKnobHitbox12.style.display = "block";
    closeBtn12.classList.add("hidden");
    levelPanel12.classList.add("hidden");
    mazeOverlay12.classList.add("hidden");
    slot12.innerHTML = "";
    doorDropZone12.classList.add("disabled");
    isKnobRevealed12 = false;
    mazeGameActive12 = false;
    moveKeys12 = { Up: false, Down: false, Left: false, Right: false };
    player12.x = 150;
    player12.y = 125;
}

// Room 13 Game Logic
const clueArea13 = document.getElementById("clueArea13");
const overlay13 = document.getElementById("overlay13");
const sceneImage13 = document.getElementById("sceneImage13");
const closeBtn13 = document.getElementById("closeBtn13");
const boxArea13 = document.getElementById("boxArea13");
const lockArea13 = document.getElementById("lockArea13");
const keyArea13 = document.getElementById("keyArea13");
const finalLockArea13 = document.getElementById("finalLockArea13");
const keypadWrapper13 = document.getElementById("keypadWrapper13");
const lastoptions13 = document.getElementById("lastoptions13");
const finalCloseBtn13 = document.getElementById("finalCloseBtn13");
const slot13 = document.getElementById("slot13");
const correctCode13 = "41";
let isBoxOpen13 = false;
let enteredCode13 = "";
let keyCollected13 = false;

for (let i = 0; i <= 9; i++) {
    const btn = document.createElement("img");
    btn.src = `room 13/digital lock croped/${i}@3x.png`;
    btn.className = "num-btn";
    btn.dataset.val = i;
    document.getElementById("buttonGrid13").appendChild(btn);
}
const wBtn = document.createElement("img");
wBtn.src = "room 13/digital lock croped/w@3x.png";
wBtn.className = "num-btn";
wBtn.dataset.val = "w";
document.getElementById("buttonGrid13").insertBefore(wBtn, document.getElementById("buttonGrid13").children[9]);
const eBtn = document.createElement("img");
eBtn.src = "room 13/digital lock croped/e@3x.png";
eBtn.className = "num-btn";
eBtn.dataset.val = "e";
document.getElementById("buttonGrid13").appendChild(eBtn);

clueArea13.addEventListener("click", () => {
    overlay13.src = "room 13/clue paper@3x.png";
    overlay13.style.left = "10px";
    overlay13.style.top = "20px";
    overlay13.style.width = "95%";
    overlay13.style.height = "95%";
    sceneImage13.classList.add("blur");
    overlay13.classList.remove("hidden");
    closeBtn13.classList.remove("hidden");
    clueArea13.classList.add("disabled");
});

closeBtn13.addEventListener("click", () => {
    sceneImage13.classList.remove("blur");
    overlay13.classList.add("hidden");
    closeBtn13.classList.add("hidden");
    clueArea13.classList.remove("disabled");
    lockArea13.classList.add("disabled");
    boxArea13.classList.remove("disabled");
    overlay13.src = "room 13/lock@3x.png";
    keypadWrapper13.style.display = "none";
    isBoxOpen13 = false;
    resetKeypad13();
    keyArea13.classList.add("disabled");
});

boxArea13.addEventListener("click", () => {
    overlay13.src = "room 13/box@3x.png";
    overlay13.style.left = "10px";
    overlay13.style.top = "20px";
    overlay13.style.width = "95%";
    overlay13.style.height = "95%";
    sceneImage13.classList.add("blur");
    overlay13.classList.remove("hidden");
    closeBtn13.classList.remove("hidden");
    clueArea13.classList.add("disabled");
    lockArea13.classList.remove("disabled");
    boxArea13.classList.add("disabled");
});

lockArea13.addEventListener("click", () => {
    if (!isBoxOpen13 && !keyCollected13) {
        overlay13.src = "room 13/lock@3x.png";
        overlay13.style.left = "40px";
        overlay13.style.top = "100px";
        overlay13.style.width = "75%";
        overlay13.style.height = "70%";
        setTimeout(() => {
            keypadWrapper13.style.display = "block";
        }, 500);
        isBoxOpen13 = true;
    }
});

document.getElementById("buttonGrid13").addEventListener("pointerdown", (e) => {
    if (!isBoxOpen13 || !e.target.classList.contains("num-btn")) return;
    e.preventDefault();
    const val = e.target.dataset.val;
    const clickedPath = `room 13/digital lock croped/when we clcik/${val}@3x.png`;
    e.target.src = clickedPath;
    if (val !== "w" && val !== "e") {
        enteredCode13 += val;
        checkCode13();
    } else {
        resetKeypad13();
    }
});

function checkCode13() {
    if (enteredCode13 === correctCode13) {
        setTimeout(() => {
            overlay13.src = "room 13/box@3x 2@3x.png";
            lockArea13.classList.add("disabled");
            keypadWrapper13.style.display = "none";
            keyArea13.classList.remove("disabled");
        }, 50);
    } else if (enteredCode13.length >= 2) {
        setTimeout(() => {
            resetKeypad13();
        }, 300);
    }
}

function resetKeypad13() {
    enteredCode13 = "";
    document.querySelectorAll("#buttonGrid13 .num-btn").forEach(btn => {
        const val = btn.dataset.val;
        btn.src = `room 13/digital lock croped/${val}@3x.png`;
    });
}

keyArea13.addEventListener("click", () => {
    overlay13.src = "room 13/box@3x 2@3x 3@3x.png";
    const inventoryKey = document.createElement("img");
    inventoryKey.src = "room 13/key@3x.png";
    inventoryKey.style.width = "50px";
    inventoryKey.draggable = true;
    slot13.appendChild(inventoryKey);
    keyCollected13 = true;
    sceneImage13.src = "room 13/2bg@3x@3x.png";
    keyArea13.classList.add("disabled");
    finalLockArea13.classList.remove("disabled");
    slot13.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", "finalKey");
    });
});

finalLockArea13.addEventListener("dragover", (e) => {
    e.preventDefault();
});

finalLockArea13.addEventListener("drop", (e) => {
    e.preventDefault();
    const item = e.dataTransfer.getData("text/plain");
    if (item === "finalKey") {
        sceneImage13.src = "room 13/3bg@3x@3x@3x.png";
        slot13.style.display = "none";
        finalLockArea13.classList.add("disabled");
        setTimeout(() => {
            sceneImage13.classList.add("blur");
            overlay13.src = "room 13/final panel 7- 15/final panel 13@2x.png";
            overlay13.classList.remove("hidden");
            lastoptions13.style.display = "block";
            finalCloseBtn13.classList.remove("hidden");
            overlay13.style.height = "100%";
            overlay13.style.width = "100%";
            overlay13.style.top = "0px";
            overlay13.style.left = "0px";
        }, 1200);
    }
});

document.getElementById("homeBtn13").addEventListener("click", () => {
    resetRoom13();
    document.getElementById("room13").classList.add("hidden");
    mobileScreen2.classList.remove("hidden");
});

document.getElementById("nextBtn13").addEventListener("click", () => {
    unlockedLevel = 14;
    localStorage.setItem("unlockedLevel", unlockedLevel);
    document.querySelector(".level14").classList.remove("locked");
    resetRoom13();
    document.getElementById("room13").classList.add("hidden");
    mobileScreen2.classList.remove("hidden");
});

if (finalCloseBtn13) {
    finalCloseBtn13.addEventListener("click", () => { resetRoom13(); });
}

function resetRoom13() {
    sceneImage13.src = "room 13/1bg@3x.png";
    sceneImage13.classList.remove("blur");
    overlay13.classList.add("hidden");
    overlay13.src = "room 13/clue paper@3x.png";
    closeBtn13.classList.add("hidden");
    finalCloseBtn13.classList.add("hidden");
    clueArea13.classList.remove("disabled");
    boxArea13.classList.remove("disabled");
    lockArea13.classList.add("disabled");
    keyArea13.classList.add("disabled");
    finalLockArea13.classList.add("disabled");
    keypadWrapper13.style.display = "none";
    lastoptions13.style.display = "none";
    slot13.innerHTML = "";
    slot13.style.display = "block";
    isBoxOpen13 = false;
    enteredCode13 = "";
    keyCollected13 = false;
    resetKeypad13();
}

// Room 14 Game Logic
const clueArea14 = document.getElementById("clueArea14");
const overlay14 = document.getElementById("overlay14");
const sceneImage14 = document.getElementById("sceneImage14");
const closeBtn14 = document.getElementById("closeBtn14");
const letterArea14 = document.getElementById("letterArea14");
const letterOpenArea14 = document.getElementById("letterOpenArea14");
const clickArea14 = document.getElementById("clickArea14");
const colorButtons14 = document.getElementById("colorButtons14");
const redBtn14 = document.getElementById("redBtn14");
const whiteBtn14 = document.getElementById("whiteBtn14");
const yellowBtn14 = document.getElementById("yellowBtn14");
const keyArea14 = document.getElementById("keyArea14");
const slot14 = document.getElementById("slot14");
const finalLockArea14 = document.getElementById("finalLockArea14");
const lastoptions14 = document.getElementById("lastoptions14");
const finalCloseBtn14 = document.getElementById("finalCloseBtn14");

// Preload Room 14 images
if (sceneImage14) {
    const preloadImages14 = ["room 14/2 bg@3x@3x.png", "room 14/3 bg@3x@3x@3x.png", "room 14/letter 14@3x.png", "room 14/letter open 14@3x@3x.png", "room 14/rip box 1@3x.png", "room 14/rip box 2@3x@3x.png", "room 14/rip box 3@3x@3x@3x.png"];
    preloadImages14.forEach(src => { const img = new Image(); img.src = src; });
}

let isLetterOpen14 = false;
let isRipBoxOpen14 = false;
let redBtnState14 = 0;
let whiteBtnState14 = 0;
let yellowBtnState14 = 0;
let keyCollected14 = false;

clueArea14.addEventListener("click", () => {
    overlay14.src = isLetterOpen14 ? "room 14/letter open 14@3x@3x.png" : "room 14/letter box 14@3x.png";
    overlay14.style.left = "10px";
    overlay14.style.top = "20px";
    overlay14.style.width = "95%";
    overlay14.style.height = "95%";
    sceneImage14.classList.add("blur");
    overlay14.classList.remove("hidden");
    closeBtn14.classList.remove("hidden");
    clueArea14.classList.add("disabled");
    letterArea14.classList.remove("disabled");
});

closeBtn14.addEventListener("click", () => {
    sceneImage14.classList.remove("blur");
    overlay14.classList.add("hidden");
    closeBtn14.classList.add("hidden");
    clueArea14.classList.remove("disabled");
    letterArea14.classList.add("disabled");
    colorButtons14.style.display = 'none';
});

letterArea14.addEventListener("click", () => {
    overlay14.src = "room 14/letter 14@3x.png";
    clueArea14.classList.add("disabled");
    letterArea14.classList.add("disabled");
    letterOpenArea14.classList.remove("disabled");
});

letterOpenArea14.addEventListener("click", () => {
    isLetterOpen14 = true;
    overlay14.src = "room 14/letter open 14@3x@3x.png";
    letterOpenArea14.classList.add("disabled");
    colorButtons14.style.top = "40.5%";
});

clickArea14.addEventListener("click", () => {
    if (!isRipBoxOpen14) {
        sceneImage14.classList.add("blur");
        overlay14.classList.remove("hidden");
        letterOpenArea14.classList.add("disabled");
        overlay14.src = "room 14/rip box 1@3x.png";
        closeBtn14.classList.remove("hidden");
        colorButtons14.style.display = 'flex';
    } else {
        sceneImage14.classList.add("blur");
        overlay14.classList.remove("hidden");
        overlay14.src = "room 14/rip box 3@3x@3x@3x.png";
        closeBtn14.classList.remove("hidden");
        colorButtons14.style.display = 'none';
    }
});

redBtn14.addEventListener('click', () => {
    redBtnState14++;
    if (redBtnState14 > 2) redBtnState14 = 0;
    if (redBtnState14 === 0) redBtn14.src = "room 14/red button.png";
    else if (redBtnState14 === 1) redBtn14.src = "room 14/yellow.png";
    else if (redBtnState14 === 2) redBtn14.src = "room 14/white button.png";
    checkColorPuzzle14();
});

whiteBtn14.addEventListener('click', () => {
    whiteBtnState14++;
    if (whiteBtnState14 > 2) whiteBtnState14 = 0;
    if (whiteBtnState14 === 0) whiteBtn14.src = "room 14/white button.png";
    else if (whiteBtnState14 === 1) whiteBtn14.src = "room 14/red button.png";
    else if (whiteBtnState14 === 2) whiteBtn14.src = "room 14/yellow.png";
    checkColorPuzzle14();
});

yellowBtn14.addEventListener('click', () => {
    yellowBtnState14++;
    if (yellowBtnState14 > 2) yellowBtnState14 = 0;
    if (yellowBtnState14 === 0) yellowBtn14.src = "room 14/yellow.png";
    else if (yellowBtnState14 === 1) yellowBtn14.src = "room 14/red button.png";
    else if (yellowBtnState14 === 2) yellowBtn14.src = "room 14/white button.png";
    checkColorPuzzle14();
});

function checkColorPuzzle14() {
    if (redBtnState14 === 2 && yellowBtnState14 === 0 && whiteBtnState14 === 1) {
        overlay14.src = "room 14/rip box 2@3x@3x.png";
        colorButtons14.style.display = 'none';
        keyArea14.classList.remove("disabled");
    }
}

keyArea14.addEventListener("click", () => {
    overlay14.src = "room 14/rip box 3@3x@3x@3x.png";
    isRipBoxOpen14 = true;
    const inventoryKey = document.createElement("img");
    inventoryKey.src = "room 14/key copy 3.png";
    inventoryKey.style.width = "30px";
    inventoryKey.draggable = true;
    slot14.appendChild(inventoryKey);
    keyCollected14 = true;
    sceneImage14.src = "room 14/2 bg@3x@3x.png";
    keyArea14.classList.add("disabled");
    finalLockArea14.classList.remove("disabled");
    slot14.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", "finalKey");
    });
});

finalLockArea14.addEventListener("dragover", (e) => {
    e.preventDefault();
});

finalLockArea14.addEventListener("drop", (e) => {
    e.preventDefault();
    const item = e.dataTransfer.getData("text/plain");
    if (item === "finalKey") {
        sceneImage14.src = "room 14/3 bg@3x@3x@3x.png";
        slot14.style.display = "none";
        finalLockArea14.classList.add("disabled");
        clickArea14.classList.add("disabled");
        setTimeout(() => {
            sceneImage14.classList.add("blur");
            overlay14.src = "room 14/final panel 7- 15/final panel 14@2x.png";
            overlay14.classList.remove("hidden");
            lastoptions14.style.display = 'block';
            finalCloseBtn14.classList.remove("hidden");
        }, 1200);
    }
});

document.getElementById("homeBtn14").addEventListener("click", () => {
    resetRoom14();
    document.getElementById("room14").classList.add("hidden");
    mobileScreen2.classList.remove("hidden");
});

document.getElementById("nextBtn14").addEventListener("click", () => {
    unlockedLevel = 15;
    localStorage.setItem('unlockedLevel', unlockedLevel);
    document.querySelector(".level15").classList.remove("locked");
    resetRoom14();
    document.getElementById("room14").classList.add("hidden");
    mobileScreen2.classList.remove("hidden");
});

if (finalCloseBtn14) {
    finalCloseBtn14.addEventListener("click", () => { resetRoom14(); });
}

function resetRoom14() {
    sceneImage14.src = "room 14/1 bg@3x.png";
    sceneImage14.classList.remove("blur");
    overlay14.classList.add("hidden");
    overlay14.src = "room 14/letter box 14@3x.png";
    closeBtn14.classList.add("hidden");
    finalCloseBtn14.classList.add("hidden");
    clueArea14.classList.remove("disabled");
    letterArea14.classList.add("disabled");
    letterOpenArea14.classList.add("disabled");
    clickArea14.classList.remove("disabled");
    colorButtons14.style.display = 'none';
    keyArea14.classList.add("disabled");
    finalLockArea14.classList.add("disabled");
    lastoptions14.style.display = 'none';
    slot14.innerHTML = "";
    slot14.style.display = "block";
    isLetterOpen14 = false;
    isRipBoxOpen14 = false;
    redBtnState14 = 0;
    whiteBtnState14 = 0;
    yellowBtnState14 = 0;
    keyCollected14 = false;
    redBtn14.src = "room 14/red button.png";
    whiteBtn14.src = "room 14/white button.png";
    yellowBtn14.src = "room 14/yellow.png";
}




