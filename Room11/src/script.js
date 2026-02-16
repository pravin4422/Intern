const handle = document.getElementById("handle");
const popup = document.getElementById("popup");
const popup2 = document.getElementById("popup2");
const popupImg = document.getElementById("popup-img");
const arrows = document.querySelectorAll(".arrow");

const KEY_POSITIONS = [
  { id: 0, top: 230, left: 230 },
  { id: 1, top: 230, left: 265 },
  { id: 2, top: 230, left: 316 },
  { id: 3, top: 160, left: 290 },
  { id: 4, top: 130, left: 315 },
  { id: 5, top: 180, left: 360 },
  { id: 6, top: 90, left: 270 },
  { id: 7, top: 280, left: 300 },
  { id: 8, top: 230, left: 358 },
  { id: 9, top: 280, left: 354 },
  { id: 10, top: 320, left: 320 },
  { id: 11, top: 363, left: 270 },
  { id: 12, top: 367, left: 347 },
  { id: 13, top: 410, left: 290 },
  { id: 14, top: 410, left: 230 },
  { id: 15, top: 410, left: 160 },
  { id: 16, top: 355, left: 110 },
  { id: 17, top: 355, left: 160 },
  { id: 18, top: 359, left: 220 },
  { id: 19, top: 317, left: 220 },
  { id: 20, top: 317, left: 257 },
  { id: 21, top: 320, left: 130 },
  { id: 22, top: 304, left: 180 },
  { id: 23, top: 270, left: 146 },
  { id: 24, top: 230, left: 135 },
  { id: 25, top: 180, left: 150 },
  { id: 26, top: 140, left: 210 },
  { id: 27, top: 90, left: 210 },
  { id: 28, top: 120, left: 140 },
  { id: 29, top: 99, left: 88 },
  { id: 30, top: 160, left: 40 },
  { id: 31, top: 228, left: 40 },
  { id: 32, top: 297, left: 40 }
];

const VALID_PATHS = [
  [0,1,2,3,4,5],
  [0,1,2,3,4,6],
  [0,1,2,3],
  [0,1,2,7,3,8],
  [0,1,2,8,9,10,11],
  [0,1,2,8,9,10,12,13,14,15,16,21,17,18,19,20,22,23,24,25,26,27,28,29,30,31,32],
  [0,1,2,8,9,10,12,13,14,15,16,21,17,18,19,20,22,23,24,25,26,27,28,29,30,31],
  [3,8],
  [3,4,6],
  [3,2],
  [2,7,3,8],
  [2,8,9,10,11],
  [2,8,9,10,12,13],
  [2,8,9,10,12,13,14,15,16,21,17,18,19,20,22,23,24,25,26,27,28,29,30,31],
  [2,8,9,10,12,13,14,15,16,21,17,18,19,20,22,23,24,25,26,27,28,29,30,31],
  [0,1],
  [1,2],
  [2,3],
  [3,4],
  [4,5],
  [4,6],
  [7,3],
  [2,8],
  [8,9],
  [9,10],
  [10,11],
  [10,12],
  [12,13],
  [13,14,15,16,21,17,18,19,20,22,23,24,25,26,27,28,29,30,31,32],
  [13,14,15,16,21,17,18,19,20,22,23,24,25,26,27,28,29,30,31],
  [2,7],
  [19,20,22,23,24,25,26,27,28,29,30,31,32],
  [19,22],
  [19,20],
  [22,23],
  [23,24,25,26,27,28,29,30,31,32],
  [24,25],
  [25,26],
  [26,27],
  [27,28],
  [28,29],
  [29,30],
  [30,31],
  [31,32]
];

function getValidNextMoves(path) {
  const validNext = new Set();
  const currentPos = path[path.length - 1];
  
  // Allow moving forward on valid paths that continue from current path
  VALID_PATHS.forEach(validPath => {
    if (validPath.length <= path.length) return;
    let matches = true;
    for (let i = 0; i < path.length; i++) {
      if (validPath[i] !== path[i]) {
        matches = false;
        break;
      }
    }
    if (matches) validNext.add(validPath[path.length]);
  });
  
  // Allow branching to new paths that start from current position
  VALID_PATHS.forEach(validPath => {
    if (validPath[0] === currentPos && validPath.length > 1) {
      validNext.add(validPath[1]);
    }
  });
  
  // Allow backtracking to immediate previous position
  if (path.length > 1) {
    validNext.add(path[path.length - 2]);
  }
  
  return Array.from(validNext);
}

let currentID = 0;
let visitedPath = [0];
let validPath = null; // Track if current path is valid

function isValidPath() {
  return VALID_PATHS.some(validPath => {
    if (validPath.length < visitedPath.length) return false;
    for (let i = 0; i < visitedPath.length; i++) {
      if (validPath[i] !== visitedPath[i]) return false;
    }
    return true;
  });
}

function onIDChange(id) {
  validPath = isValidPath();
  console.log('Current ID:', id, 'Valid Path:', validPath);
}

function showKey(id) {
  KEY_POSITIONS.forEach(k => {
    const el = document.getElementById(`key${k.id}`);
    if (el) {
      el.style.display = k.id === id ? 'block' : 'none';
    }
  });
  onIDChange(id);
}

function moveKey(dir) {
  // Check if at position 31 and left arrow is pressed
  if (currentID === 31 && dir === "left") {
    popup2.style.display = "none";
    document.querySelector('.door-container').style.display = "none";
    document.getElementById('open-door').style.display = "block";
    
    // Show level complete panel after 2 seconds
    setTimeout(() => {
      document.getElementById('finalPanel11').style.display = "block";
      document.getElementById('lastoptions11').style.display = "flex";
      document.getElementById('panelCloseBtn11').style.display = "block";
    }, 2000);
    return;
  }
  
  const currentPos = KEY_POSITIONS[currentID];
  const validNext = getValidNextMoves(visitedPath);
  const prevPos = visitedPath.length > 1 ? visitedPath[visitedPath.length - 2] : -1;
  
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
  
  // Prioritize: backtrack > score > distance
  candidates.sort((a, b) => {
    if (a.isBacktrack !== b.isBacktrack) return b.isBacktrack - a.isBacktrack;
    if (b.score !== a.score) return b.score - a.score;
    return a.distance - b.distance;
  });
  
  const bestID = candidates[0].id;
  
  // Check if backtracking
  if (visitedPath.length > 1 && visitedPath[visitedPath.length - 2] === bestID) {
    visitedPath.pop();
    currentID = bestID;
  } else {
    // Moving forward or branching
    currentID = bestID;
    visitedPath.push(currentID);
  }
  showKey(currentID);
}

handle.addEventListener("click", () => {
  popup.style.display = "flex";
});

popupImg.addEventListener("click", (e) => {
  e.stopPropagation();
  popup.style.display = "none";
  popup2.style.display = "flex";
  currentID = 0;
  visitedPath = [0];
  showKey(0);
});

popup.addEventListener("click", (e) => {
  if (e.target !== popupImg) {
    popup.style.display = "none";
  }
});

popup2.addEventListener("click", (e) => {
  if (e.target === popup2) {
    popup2.style.display = "none";
  }
});

arrows.forEach(arrow => {
  arrow.addEventListener("click", (e) => {
    e.stopPropagation();
    moveKey(arrow.dataset.dir);
  });
});

document.addEventListener("keydown", (e) => {
  if (popup2.style.display === "flex") {
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
      e.preventDefault();
      if (e.key === "ArrowUp") moveKey("up");
      if (e.key === "ArrowDown") moveKey("down");
      if (e.key === "ArrowLeft") moveKey("left");
      if (e.key === "ArrowRight") moveKey("right");
    }
  }
});
