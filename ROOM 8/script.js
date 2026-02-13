const mainbg=document.querySelector(".bg1");
const mainbg2= document.querySelector(".bg2");
const hitbox1=document.querySelector(".hitbox1");
const scissor = document.querySelector(".scissor");
const hitbox2=document.querySelector(".hitbox2");
const letterbox=document.querySelector(".letterbox");
const closebtn=document.querySelector(".closebtn");
const inventoryKey = document.getElementById("inventoryKey");
const doorHitbox = document.getElementById("doorHitbox");
const finalPanel = document.getElementById("finalPanel");


let isBoxOPen = false;
let isScissorGrabbed = false;
let iskeyshow = false;


hitbox1.addEventListener('click', () => {

    scissor.style.display = 'block';

    mainbg2.style.visibility = "visible";
    mainbg2.style.opacity="1";
    
    hitbox2.style.pointerEvents = 'auto';
    

    console.log("clue1");

});
hitbox2.addEventListener('click', () => {
    letterbox.style.display = 'block';
    closebtn.style.display= 'block';
    mainbg2.style.filter = "blur(3px)";
});
closebtn.addEventListener('click', () => {
    letterbox.style.display = 'none';
    closebtn.style.display = 'none';
    mainbg2.style.filter = "none";
    
    
});
letterbox.addEventListener('click', function() {
    if (!isBoxOPen) {
        
        this.src = 'letter.png';
        
        
        isBoxOPen = true;
        console.log("Keypad Active");
    }
    else if (isBoxOPen && iskeyshow) {
        // Show the key in the inventory slot
        inventoryKey.style.display = 'block';
        
        // Hide the zoomed-in letter and close button
        this.style.display = 'none';
        closebtn.style.display = 'none';
        
        // Remove the background blur
        mainbg2.style.filter = "none";
        
        console.log("Key collected and added to inventory!");
    }
    
});


letterbox.addEventListener('drop', (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text");

    // Check if the dragged item is the scissor
    if (data === "scissor" || isScissorGrabbed) {
        openLetterWithScissor();
    }
});

// 1. Make Scissor Draggable
scissor.setAttribute('draggable', 'true');

scissor.addEventListener('dragstart', (e) => {
    isScissorGrabbed = true;
    e.dataTransfer.setData("text", e.target.id);
    e.dataTransfer.setDragImage(scissor, 20, 20);
    // Makes the original ghost image invisible while dragging if desired
    e.dataTransfer.effectAllowed = "move";
    
    console.log("Scissor drag started");
});

// 2. Prepare Letterbox as a Drop Zone
letterbox.addEventListener('dragover', (e) => {
    e.preventDefault(); // Necessary to allow a drop
    letterbox.classList.add('drag-over');
});

letterbox.addEventListener('dragleave', () => {
    letterbox.classList.remove('drag-over');
});

letterbox.addEventListener('drop', (e) => {
    e.preventDefault();
    letterbox.classList.remove('drag-over');

    if (isScissorGrabbed) {
        openLetterWithScissor();
    }
});

// 3. Logic to open the letter
function openLetterWithScissor() {
    // Change letter image
    letterbox.src = 'key with letter.png';
    
    // Hide scissors
    scissor.style.display = 'none';
    
    // Update state
    isBoxOPen = true;
    isScissorGrabbed = false;
    iskeyshow = true;
    
    console.log("Letter opened with scissors!");
}

// 4. Mobile Support (Touch Events)
scissor.addEventListener('touchmove', (e) => {
    e.preventDefault();
    let touch = e.touches[0];
    scissor.style.position = 'fixed';
    scissor.style.left = touch.clientX - 20 + 'px';
    scissor.style.top = touch.clientY - 20 + 'px';
});

scissor.addEventListener('touchend', (e) => {
    let touch = e.changedTouches[0];
    let elementAtPoint = document.elementFromPoint(touch.clientX, touch.clientY);
    
    if (elementAtPoint === letterbox) {
        openLetterWithScissor();
    } else {
        // Reset scissor position if missed
        scissor.style.position = 'absolute';
        scissor.style.bottom = '18px';
        scissor.style.left = '30px';
    }
});
// 1. Make the Key Draggable
inventoryKey.setAttribute('draggable', 'true');

inventoryKey.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData("text", e.target.id);
    e.dataTransfer.setDragImage(inventoryKey, 20, 20);
});

// 2. Setup Door Hitbox to accept the Key
doorHitbox.addEventListener('dragover', (e) => {
    e.preventDefault(); // Required to allow drop
});

doorHitbox.addEventListener('drop', (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text");

    if (data === "inventoryKey") {
        openDoor();
    }
});

// 3. Logic to Open Door and Finish Level
function openDoor() {
    // Hide the key from inventory
    inventoryKey.style.display = 'none';
    
    // Change background to show open door
    mainbg2.src = "final bg.jpg"; 
    mainbg2.style.opacity = "1";
    mainbg2.style.visibility = "visible";
    
    // Show "Level Completed" panel after a short delay
    setTimeout(() => {
        finalPanel.style.display = 'block';
        console.log("Level 6 Completed!");
    }, 1000);
}