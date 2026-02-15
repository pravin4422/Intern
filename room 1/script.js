const carpet = document.getElementById("carpet");
const key = document.getElementById("key");
const carpetArea = document.getElementById("carpetArea");
const slot1 = document.getElementById("slot1");
const keyArea = document.getElementById("keyArea");
const bgImage = document.getElementById("bgImage");
const doorArea = document.getElementById("doorArea");
const overlay = document.getElementById("overlay");
const finalCloseBtn= document.getElementById("finalCloseBtn");
const lastoptions = document.getElementById("lastoptions");

let carpetMoved = false;
let keyCollected = false;
let isPaused = false;

window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        location.reload();
    }
});

carpetArea.addEventListener("click", () => {
    if (!carpetMoved && !isPaused) {
        carpet.classList.add("moved");
        carpetMoved = true;
        setTimeout(() => {
            key.classList.remove("hidden");
        });
        keyArea.classList.remove("disabled")
    }
  });

keyArea.addEventListener("click", () => {
    if (keyCollected || isPaused) return;
  
    keyCollected = true;
    key.classList.add("hidden");
  
    const inventoryKey = document.createElement("img");
    inventoryKey.src = "key to open the door for room 1 copy.png";
    inventoryKey.className = "key";
    inventoryKey.draggable = true;
    inventoryKey.id = "inventoryKey";
  
    slot1.appendChild(inventoryKey);
    bgImage.src = "room1img.png"
    carpet.classList.add("hidden")
    doorArea.classList.remove("disabled")
  });

doorArea.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

doorArea.addEventListener("drop", (e) => {
    e.preventDefault();
    const keyId = e.dataTransfer.getData("text/plain");
    const draggedKey = document.getElementById(keyId);
    if (draggedKey) draggedKey.classList.add("hidden");
    bgImage.src = "room back ground after game end@3x.jpg";

    setTimeout(() => {
      bgImage.classList.add("blur");
      overlay.classList.remove("hidden")
      lastoptions.style.display = 'block';
      finalCloseBtn.classList.remove("hidden")
      localStorage.setItem('unlockedLevel', '2');
    }, 1200)
  });

document.addEventListener("dragstart", (e) => {
    if (e.target.id === "inventoryKey") {
      e.dataTransfer.setData("text/plain", "inventoryKey");
    }
  });

const pauseBtn = document.querySelector(".pausebtn-game");
const playBtn = document.querySelector(".playbtn-game");
const homeBtn = document.querySelector(".homebtn-game");

homeBtn.addEventListener("click", () => {
  window.location.href = "../index.html";
});

pauseBtn.addEventListener("click", () => {
  isPaused = true;
  pauseBtn.classList.add("hidden");
  playBtn.classList.remove("hidden");
  document.body.style.pointerEvents = "none";
  pauseBtn.style.pointerEvents = "auto";
  playBtn.style.pointerEvents = "auto";
  homeBtn.style.pointerEvents = "auto";
});

playBtn.addEventListener("click", () => {
  isPaused = false;
  playBtn.classList.add("hidden");
  pauseBtn.classList.remove("hidden");
  document.body.style.pointerEvents = "auto";
});

document.querySelector(".lastoptions .homebtn").addEventListener("click", () => {
  window.location.href = "../index.html";
});

document.querySelector(".nextbtn").addEventListener("click", () => {
  window.location.href = "../room 2/index.html";
});