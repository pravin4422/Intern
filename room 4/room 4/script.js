const pillow = document.querySelector(".hitbox");
const scrollItem = document.getElementById("clueItem");
const clueOverlay = document.getElementById("clue-overlay");
const closeClueBtn = document.getElementById("closebtn");
const hitbox2 = document.getElementById("hitbox2");
const boxoverlay = document.getElementById("boxoverlay");
const closebtn2 = document.getElementById("closebtn2");
const box1 = document.querySelector(".box1");
const keypadWrapper = document.getElementById("keypadWrapper");
const buttons = document.querySelectorAll('.num-btn');
const clueItem2=document.getElementById("clueItem2")
const clueOverlay2 = document.getElementById("clue-overlay2");
const closeClueBtn2 = document.getElementById("closebtn3");
const mainBg=document.getElementById("mainBg");
const doorlockBg=new Image();
doorlockBg.src='room 4/1@3x@3x.png';
const hitbox3 = document.getElementById("hitbox3");
const doorOverlay = document.getElementById("doorOverlay");
const closeDoorBtn = document.getElementById("closeDoorBtn");
const doorButtons = document.querySelectorAll('.door-btn');


// --- Game State Variables ---
let hasScrollBeenTaken = false;
let hasSeenClue = false;
let isBoxOPen = false; // "false" means looking at the safe, "true" means keypad is active
let enteredCode = "";
const correctCode = "160";
let isPaperCollected =false;
let hasScrollBeenTaken2 = false;
let hasSeenClue2 = false;

let doorEnteredCode = "";
const correctDoorCode = "0714";

// --- 1. Pillow & Clue Logic ---
pillow.addEventListener('click', () => {
    if (!hasScrollBeenTaken) {
        scrollItem.style.display = 'block';
        hasScrollBeenTaken = true;
        pillow.style.cursor = 'default';
        console.log("You found a hidden sheet behind the pillow!");
    }
});

scrollItem.addEventListener('click', () => {
    if (hasScrollBeenTaken) {
        clueOverlay.style.display = 'block';
        scrollItem.style.visibility = 'hidden';
        hasSeenClue = true;
        hitbox2.style.pointerEvents = 'auto';
        console.log("Viewing clue: 160");
    }
});

closeClueBtn.addEventListener('click', () => {
    clueOverlay.style.display = 'none';
    scrollItem.style.visibility = 'visible';
});

// --- 2. Safe Zoom & Keypad Activation ---
hitbox2.addEventListener('click', () => {
    if (hasSeenClue && !isPaperCollected) {
        boxoverlay.style.display = 'block';
        scrollItem.style.visibility = 'hidden';
    }
    else if(isPaperCollected){
        console.log("no need to lock");
        hitbox2.style.pointerEvents='none';
    }
});

box1.addEventListener('click', function() {
    if (!isBoxOPen) {
        // Change the safe door image to the keypad background
        this.src = 'room 4/8@3x.png';
        keypadWrapper.style.display = 'block';
        isBoxOPen = true;
        console.log("Keypad Active");
    }
    else if (isBoxOPen && correctCode) {
        // 1. Change safe image to empty version
        this.src = 'room 4/clue 5@3x@3x@3x@3x.png';
        
        // 2. Show the paper in your inventory bar
        clueItem2.style.display = 'block';
        isPaperCollected=true;
        this.style.pointerEvents = 'none'; 
        hitbox2.style.pointerEvents = 'none';
        
        console.log("Paper collected! Safe is now empty.");
    }

});

// --- 3. Keypad Number Logic ---
buttons.forEach(btn => {
    const val = btn.getAttribute('data-val');
    
    // Paths for image swapping
    const normalPath = `digital lock/${val}@3x.png`;
    const clickedPath = `when we click/${val}@3x.png`; // Removed the leading slash

    btn.addEventListener('pointerdown', (e) => {
        if (!isBoxOPen) return;
        e.preventDefault();
        
        // Visual Feedback: Show clicked image (yellow/pressed)
        btn.src = clickedPath;
        
        // Wait 150ms then swap back to normal (the blink effect)
        

        // Logic for buttons
        if (val !== 'w' && val !== 'e') {
            enteredCode += val;
            console.log("Current Code: " + enteredCode);
            checkCode();
        } else if (val === 'w') {
            resetKeypad(); 
        }
    });
});

function checkCode() {
    if (enteredCode === correctCode) {
        setTimeout(() => {
        
            // Change safe to opened image
            box1.src = 'room 4/clue 4@3x@3x@3x.png'; 
            keypadWrapper.style.display = 'none';
        }, 300); // 300ms delay so user sees the last digit click
    } else if (enteredCode.length >= 3) {
        setTimeout(() => {
            
            resetKeypad();
        }, 300);
    }
}

function resetKeypad() {
    enteredCode = "";
    buttons.forEach(btn => {
        const val = btn.getAttribute('data-val');
        btn.src = `digital lock/${val}@3x.png`;
    });
}

// --- 4. Close Button / Reset Everything ---
closebtn2.addEventListener('click', () => {
    boxoverlay.style.display = 'none';
    scrollItem.style.visibility = 'visible';
    
    // Reset Safe/Keypad for next time
    isBoxOPen = false;
    box1.src = 'room 4/clue 3@3x@3x.png';
    keypadWrapper.style.display = 'none';
    resetKeypad();
});

clueItem2.addEventListener('click', () => {
    
        clueOverlay2.style.display = 'block';
        clueItem2.style.visibility = 'hidden';
        scrollItem.style.visibility = 'hidden';
        hasSeenClue2 =true;
        console.log("get 2nd clue");
    
    
});
closeClueBtn2.addEventListener('click', () => {
    clueOverlay2.style.display = 'none';
    clueItem2.style.visibility = 'visible';
    mainBg.src="room 4/1@3x@3x.png";
    console.log("keypad door");
    hitbox3.style.pointerEvents = 'auto';
});
hitbox3.addEventListener('click', () => {
    doorOverlay.style.display = 'block';
    doorEnteredCode ="";
    clueItem2.style.visibility = 'hidden';
    scrollItem.style.visibility = 'hidden';

});
doorButtons.forEach(btn => {
    const val = btn.getAttribute('data-val');
    
    // Define exact paths for Normal and Clicked states
    const normalPath = `digital lock/${val}@3x.png`;
    const clickedPath = `when we click/${val}@3x.png`;

    btn.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        
        // 1. Change to clicked image
        btn.src = clickedPath;
        
        // 2. Logic for buttons
        if (val !== 'w' && val !== 'e') {
            doorEnteredCode += val;
            console.log("Current Code: " + doorEnteredCode);
            doorcheckCode();
        } else if (val === 'w') {
            resetKeypad1(); 
        }
    });
});


function doorcheckCode() {
    // We use a small timeout so the user sees the last button turn yellow
    if (doorEnteredCode === correctDoorCode) {
        setTimeout(() => {
            doorOverlay.style.display = 'none';
            mainBg.src  ="room 4/door open@3x.png";
            hitbox3.style.pointerEvents = 'none';
            doorEnteredCode ="";
        }, 300);
    } else if (doorEnteredCode.length >= 4) { // Changed to 3 since your code is "160"
        setTimeout(() => {
            
            resetKeypad1();
        }, 300);
    }
}

function resetKeypad1() {
    doorEnteredCode = "";
    doorButtons.forEach(btn => {
        const val = btn.getAttribute('data-val');
        // Force the path back to the base 'digital lock' folder
        btn.src = `digital lock/${val}@3x.png`;
    });
    console.log("Keypad Reset - Absolute paths restored.");
}
closeDoorBtn.addEventListener('click', () => {
    doorOverlay.style.display = 'none';
    clueItem2.style.visibility = 'visible';
    
    // Reset Safe/Keypad for next time
    
    keypadWrapper.style.display = 'none';
    resetKeypad1();
});
