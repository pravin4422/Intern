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

carpetArea.addEventListener("click", () => {
    if (!carpetMoved) {
        carpet.classList.add("moved");
        carpetMoved = true;
        // Show key after carpet moves
        setTimeout(() => {
            key.classList.remove("hidden");
        });

        keyArea.classList.remove("disabled")
    }
  });

// Step 2: Collect key
keyArea.addEventListener("click", () => {
    if (keyCollected) return;
  
    keyCollected = true;
    key.classList.add("hidden");
  
    const inventoryKey = document.createElement("img");
    inventoryKey.src = "key to open the door for room 1.png";
    inventoryKey.style.width = "40px";
    inventoryKey.draggable = true;
    inventoryKey.id = "inventoryKey";
  
    slot1.appendChild(inventoryKey);
    bgImage.src = "room1img.png"
    carpet.classList.add("hidden")
    doorArea.classList.remove("disabled")
  });

/* START DRAG */
document.addEventListener("dragstart", (e) => {
    if (e.target.id === inventoryKey) {
      e.dataTransfer.setData("text/plain", e.target.id);
    }
  });

/* ALLOW DROP */
doorArea.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

/* DROP KEY ON DOOR */
doorArea.addEventListener("drop", (e) => {
    e.preventDefault();
  
    // Open door
    bgImage.src = "room back ground after game end@3x.jpg";
  
    //Remove key from inventory
    inventoryKey.classList.add("hidden");

    // Get dragged element
    const keyId = e.dataTransfer.getData("text/plain");
    const draggedKey = document.getElementById(keyId);

    setTimeout(() => {
      bgImage.classList.add("blur");
      overlay.classList.remove("hidden")
      lastoptions.style.display = 'block';

      finalCloseBtn.classList.remove("hidden")

    }, 1200)
  });

document.addEventListener("dragstart", (e) => {
    if (e.target.id === "inventoryKey") {
      e.dataTransfer.setData("text/plain", "inventoryKey");
    }
  });
  



 
    