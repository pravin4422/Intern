let door = document.getElementById("door");
let isOpen = false;

window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        location.reload();
    }
});

door.addEventListener("click", () => 
    {
  if (!isOpen) {
    door.src="room 1 3/room back ground after game end@3x.jpg"
    isOpen = true;
  } else {
    door.src = "room 1 3/room back ground.jpg";   
    isOpen = false;
  }
}
);

function openSettings() {
    document.getElementById("settings").style.display = "flex";
  }
  
  function closeSettings() {
    document.getElementById("settings").style.display = "none";
  }