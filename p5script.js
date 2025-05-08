const story = [
    { text: "It was a Tuesday. I was sitting at my desk at the office, working on a pivot table.", image: "p5images/p42.png" },
    { text: "Something caught my attention out of the corner of my eye—a tiny black spot sat on my desk.", image: "p5images/p43.png" },
    { text: "I scratched at it, trying to remove it, but suddenly it grew to the size of a quarter.", image: "spot-growing.jpg" },
    { text: "I turned to my coworkers, but none of them noticed either the spot or my frantic activity.", image: "coworkers-working.jpg" },
    { text: "I ignored it, returned to my pivot table, but kept glancing back. Then, it was gone!", image: "empty-desk.jpg" },
    { text: "I reached for my mouse, and to my horror—the spot had moved to the top of my hand.", image: "hand-with-spot.jpg" },
    { text: "I scrubbed, but the spot kept growing, now covering my entire hand and forearm.", image: "p5images/p43.png" },
    { text: "Nobody noticed when I fell completely into the dark void.", image: "p5images/p44.png" },
    { text: "All I saw was darkness, except for one tiny window—my coworkers celebrating Nancy’s birthday.", image: "p5images/p47.png" },
    { text: "I tried calling out, but the darkness consumed my voice. A familiar comfort surrounded me.", image: "p5images/p46.png" },
    { text: "I surrendered, sinking fully into the black void, disappearing from the world forever.", image: "p5images/p45.png" }
];

let currentScreen = 0;

function updateScreen() {
    document.getElementById("text1").innerHTML = story[currentScreen].text;
    document.getElementById("image1").src = story[currentScreen].image;
}

function nextScreen() {
    if (currentScreen < story.length - 1) {
        currentScreen++;
        document.getElementById("screen").style.opacity = "0";
        setTimeout(() => {
            updateScreen();
            document.getElementById("screen").style.opacity = "1";
        }, 500);
    }
}

function prevScreen() {
    if (currentScreen > 0) {
        currentScreen--;
        document.getElementById("screen").style.opacity = "0";
        setTimeout(() => {
            updateScreen();
            document.getElementById("screen").style.opacity = "1";
        }, 500);
    }
}

function startBook() {
    document.getElementById("cover").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("cover").style.display = "none";
        document.getElementById("book").style.display = "block";
        document.getElementById("screen").style.opacity = "1";
        updateScreen();
    }, 1000);
}

updateScreen();