



document.addEventListener("DOMContentLoaded", function() {
    const questions = [
        { question: "What is the name of the long stick used to push the pucks in shuffleboard?", answer: "Tang" },
        { question: "In shuffleboard, what is the term for the player who goes last?", answer: "Hammer" },
        { question: "What is the standard length of a table shuffleboard court?", answer: "22 feet" },
        { question: "Which country won the first-ever European Shuffleboard Championship in 2005?", answer: "Germany" },
        { question: "In shuffleboard, what is the term for the area where the pucks must land to score points?", answer: "Scoring area" },
        { question: "What is the name of the annual international shuffleboard tournament held in St. Petersburg, Florida?", answer: "St. Petersburg Shuffleboard Club World Championship" },
        { question: "The game was played and gambled over by what king?", answer: "King Henry VIII of England, who prohibited commoners from playing." },
        { question: "What was shuffleboard originally called?", answer: "Shovel-penny. The original game was played by sliding a large British coin down a table." },
    ];

    function displayRandomQuestion() {
        const randomIndex = Math.floor(Math.random() * questions.length);
        document.getElementById("question").textContent = questions[randomIndex].question;
        document.getElementById("answer").textContent = "Answer: " + questions[randomIndex].answer;
    }

    // Display a random question when the page loads
    displayRandomQuestion();

    // Add event listener for button click
    document.getElementById("newQuestionBtn").addEventListener("click", displayRandomQuestion);
});

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.getElementById("introScreen").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("introScreen").style.display = "none";
            document.getElementById("mainContent").style.display = "block";
        }, 2000);
    }, 2000); // Delay before fade starts
});


let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? "block" : "none";
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

// Initialize the slideshow
showSlide(slideIndex);

const words = ["shuffle", "n", "flow"];
let delay = 1000;

words.forEach((word, index) => {
    setTimeout(() => {
        let element = document.getElementById(word);
        element.style.transition = "left 1s ease-out, opacity 1s ease-out";
        element.style.left = "0";
        element.style.opacity = "1";
    }, index * delay);
});

//Expand photos
function openModal(image) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");

    modalImg.src = image.src;
    modal.classList.add("show");
}

function closeModal() {
    document.getElementById("imageModal").classList.remove("show");
}