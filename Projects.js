// Array of colors for bubbles
const colors = ["#6a0dad", "#8a2be2", "#9370db", "#663399", "#4b0082", "#7b68ee", "#9400d3", "#800080", "#ba55d3", "#9932cc"];


// Array of pages for navigation
//const pages = ["p1.html", "p2shuffle.html", "p3.html", "p4.html", "p5.html", "p6.html", "p7.html", "p8.html", "p9.html", "p10.html"];
const pages = ["p1.html", "p2shuffle.html", "p3.html", "p4.html", "p5.html"];

// Container for bubbles
const container = document.querySelector(".container");

// Store bubble positions and sizes
const bubbles = [];
const maxOverlapPercentage = 0.1; // Maximum 30% overlap

// Function to create a bubble
function createBubble(index) {
    const bubbleContainer = document.querySelector(".container");
    const bubble = document.createElement("div");
    const size = Math.floor(Math.random() * 60) + 50; // Random size between 50px and 110px

    // Calculate random positions ensuring the bubble stays within the container
    const x = Math.random() * (bubbleContainer.offsetWidth - size);
    const y = Math.random() * (bubbleContainer.offsetHeight - size);

    bubble.classList.add("bubble");
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.backgroundColor = getRandomColor();
    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;
    bubble.textContent = `Project ${index + 1}`; // Add bubble name

    bubble.onclick = () => expandAndFade(bubble, pages[index]);

    bubbleContainer.appendChild(bubble);
}

// Function to get a random color
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

// Function to expand and fade a bubble, then navigate to a page
function expandAndFade(bubble, page) {
    bubble.style.transform = "scale(5)";
    document.body.classList.add("fade-out");
    setTimeout(() => {
        window.location.href = page; // Navigate to the assigned page
    }, 1000);
}

// Create 5 bubbles when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < 5; i++) {
        createBubble(i);
    }
});