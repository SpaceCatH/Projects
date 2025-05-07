const questions = {
    start: {
        text: "Was the employee active for any day of the year?",
        options: [
            { text: "Yes", next: "FTEques" },
            { text: "No", next: "oneG" }
        ]
    },
    FTEques: {
        text: "Was the employee a Full-Time Employee for any month of the year?",
        options: [
            { text: "Yes", next: "waitques" },
            { text: "No", next: "covques" }
        ]
    },



waitques: {
    text: "Was the employee in a waiting period the entire year?",
    options: [
        { text: "Yes", next: "noForm" },
        { text: "No", next: "monthcovques" }
    ]
},

covques: {
    text: "Was the employee enrolled in self-insured coverage for any month of the year?",
    options: [
        { text: "Yes", next: "oneG" },
        { text: "No", next: "noForm" }
    ]
},

monthcovques: {
    text: "Was there an offer of coverage for the month in question?",
    options: [
        { text: "Yes", next: "primaryEIN" },
        { text: "No", next: "oneH" }
    ]
},

primaryEIN: {
    text: "For the month in question, was this the primary EIN for the employee?",
    options: [
        { text: "Yes", next: "overrideOne" },
        { text: "No", next: "oneH" }
    ]
},

overrideOne: {
    text: "Special scenario 1 (not common): Did the coverage offered provide MEC and MV to the employee, at least MEC to the spouse, conditionally, and no MEC to dependents?",
    options: [
        { text: "Yes", next: "oneJ" },
        { text: "Not applicable", next: "overrideTwo" }
    ]
},

overrideTwo: {
    text: "Special scenario 2 (not common): Did the coverage offered provide MEC and MV to the employee, at least MEC to the spouse, conditionally, and at least MEC to dependents?",
    options: [
        { text: "Yes", next: "oneK" },
        { text: "Not applicable", next: "coverageOffer" }
    ]
},

coverageOffer: {
    text: "Who was offered coverage?",
    options: [
        { text: "Employee Only", next: "oneB" },
        { text: "Employee + Child(ren) Only", next: "oneC" },
        { text: "Employee + Spouse Only", next: "oneD" },
        { text: "Employee + Family", next: "oneE" },
        { text: "No offer of coverage", next: "oneH" },
    ]
},

noForm: {text: "No 1095-C form is needed."},
oneG: {text: "Enter 1G for line 14."},
oneH: {text: "Enter 1H for line 14."},
oneA: {text: "Enter 1A for line 14."},
oneE: {text: "Enter 1E for line 14."},
oneJ: {text: "Enter 1J for line 14."},
oneK: {text: "Enter 1K for line 14."},
oneF: {text: "Enter 1F for line 14."},
oneB: {text: "Enter 1B for line 14."},
oneC: {text: "Enter 1C for line 14."},
oneD: {text: "Enter 1D for line 14."},



};

let history = [];
let currentIndex = -1;

function startDecision() {
    showQuestion("start");
    document.getElementById("start-btn").style.display = "none";
}

function showQuestion(key) {
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const optionsDiv = document.getElementById("options");

    const question = questions[key];
    questionText.textContent = question.text;
    optionsDiv.innerHTML = "";

    if (question.options) {
        question.options.forEach(option => {
            const btn = document.createElement("buttonQuestion");
            btn.textContent = option.text;
            btn.onclick = () => {
                history.push(key);
                currentIndex++;
                showQuestion(option.next);
                updateNavButtons();
            };
            optionsDiv.appendChild(btn);
        });
    }

    updateNavButtons();
}

function goBack() {
    if (currentIndex > 0) {
        currentIndex--;
        showQuestion(history[currentIndex]);
    }
}

function goNext() {
    if (currentIndex < history.length - 1) {
        currentIndex++;
        showQuestion(history[currentIndex + 1]);
    }
}

function updateNavButtons() {
    document.getElementById("prev-btn").disabled = currentIndex <= 0;
    document.getElementById("next-btn").disabled = currentIndex >= history.length - 1;
}

