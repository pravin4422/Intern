const clueArea = document.getElementById("clueArea");
const overlay = document.getElementById("overlay");
const sceneImage = document.getElementById("sceneImage");
const closeBtn = document.getElementById("closeBtn");
const letterArea = document.getElementById("letterArea");
const letterOpenArea = document.getElementById("letterOpenArea");



clueArea.addEventListener("click", () => {
    overlay.src="letter box 14@3x.png";
    overlay.style.left= "10px";
    overlay.style.top= "20px";
    overlay.style.width = "95%";
    overlay.style.height = "95%";
    sceneImage.classList.add("blur");
    overlay.classList.remove("hidden");
    closeBtn.classList.remove("hidden");
    clueArea.classList.add("disabled");
    letterArea.classList.remove("disabled");
  });

closeBtn.addEventListener("click", closeOverlayOnce);

function closeOverlayOnce() {
    // clueArea.classList.add("disabled")
    sceneImage.classList.remove("blur");
    overlay.classList.add("hidden");
    closeBtn.classList.add("hidden");
    clueArea.classList.remove("disabled");
    // lockArea.classList.add("disabled");
    // boxArea.classList.remove("disabled");
    // overlay.src =""
    // keypadWrapper.style.display = 'none';
    // isBoxOPen = false;
    // resetKeypad();
    // console.log("closed");
    // keyArea.classList.add("disabled");

  }

  letterArea.addEventListener("click", () => {
    overlay.src="letter 14@3x.png";
    overlay.style.left= "10px";
    overlay.style.top= "20px";
    overlay.style.width = "95%";
    overlay.style.height = "95%";
    sceneImage.classList.add("blur");
    overlay.classList.remove("hidden");
    closeBtn.classList.remove("hidden");
    clueArea.classList.add("disabled");
    // lockArea.classList.remove("disabled");
    letterArea.classList.add("disabled");
    letterOpenArea.classList.remove("disabled");


  });

  letterOpenArea.addEventListener("click", () => {
    overlay.src="box@3x.png";
    overlay.style.left= "10px";
    overlay.style.top= "20px";
    overlay.style.width = "95%";
    overlay.style.height = "95%";
    sceneImage.classList.add("blur");
    overlay.classList.remove("hidden");
    closeBtn.classList.remove("hidden");
    clueArea.classList.add("disabled");
    lockArea.classList.remove("disabled");
    boxArea.classList.add("disabled");
  });