// Show/Hide Surprise Message with Zoom-Out Animation
function showMessage() {
    const surprise = document.getElementById("surprise");
    if (surprise.classList.contains("hidden")) {
        surprise.classList.remove("hidden");
        surprise.classList.add("show");
        surprise.style.animation = "zoomOut 0.5s ease-in-out";
        surprise.addEventListener("animationend", () => {
            surprise.style.animation = "";
        }, { once: true });
    } else {
        surprise.classList.remove("show");
        surprise.classList.add("hidden");
    }
}

// Function to create a random number between min and max
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

// Create Fireworks
function createFirework() {
    const firework = document.createElement("div");
    firework.classList.add("firework");
    
    firework.style.left = getRandom(0, window.innerWidth - 20) + "px"; // Reduced buffer
    firework.style.top = getRandom(0, window.innerHeight - 20) + "px";
    
    const colors = ["#ffeb3b", "#f44336", "#ff9800"];
    firework.style.backgroundColor = colors[Math.floor(getRandom(0, colors.length))];
    
    firework.style.animationDelay = getRandom(0, 2) + "s";
    
    document.body.appendChild(firework);
    
    setTimeout(() => firework.remove(), 2000);
}

// Create Flowers
function createFlower() {
    const flower = document.createElement("div");
    flower.classList.add("flower");
    
    flower.style.left = getRandom(0, window.innerWidth - 20) + "px"; // Reduced buffer
    flower.style.top = getRandom(0, window.innerHeight - 20) + "px";
    
    const colors = ["#e91e63", "#9c27b0", "#ffffff"];
    flower.style.backgroundColor = colors[Math.floor(getRandom(0, colors.length))];
    
    flower.style.animationDelay = getRandom(0, 3) + "s";
    
    document.body.appendChild(flower);
    
    setTimeout(() => flower.remove(), 3000);
}

// Generate multiple fireworks and flowers
setInterval(createFirework, 500);
setInterval(createFlower, 700);