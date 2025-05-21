const questions = {
    start: {
        text: "Was the employee active for any day of the year?",
        options: [
            { text: "Yes", next: "fteQues" },
            { text: "No, not employed for the year", next: "oneG" }
        ]
    },
    fteQues: {
        text: "Did the employee meet the IRS's definition of Full-Time Employee for any month of the year?",
        options: [
            { text: "Yes", next: "waitques" },
            { text: "No", next: "covques" }
        ]
    },



waitques: {
    text: "Was the employee in a waiting period and therefore not eligible under this EIN the entire year?",
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
    text: "For the month in question, was this the primary EIN for the employee (worked the most hours in this EIN)?",
    options: [
        { text: "Yes", next: "overrideOne" },
        { text: "No", next: "oneH" }
    ]
},

overrideOne: {
    text: "Special scenario 1 (not common): Did the coverage offered provide Minimum Essential Coverage (MEC) and Minimum Value (MV) to the employee, at least MEC to the spouse, conditionally, and no MEC to dependents?",
    options: [
        { text: "Yes", next: "oneJ" },
        { text: "Not applicable", next: "overrideTwo" }
    ]
},

overrideTwo: {
    text: "Special scenario 2 (not common): Did the coverage offered provide Minimum Essential Coverage (MEC) and Minimum Value (MV) to the employee, at least MEC to the spouse, conditionally, and at least MEC to dependents?",
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

noForm: {text: "No 1095-C form is needed. All done! Click Start Over to begin again.", next: "start"},  
oneG: {text: "Great! Enter 1G for line 14. Click Next to move onto line 16.", next: "sixteenStart"},
oneH: {text: "Great! Enter 1H for line 14. Click Next to move onto line 16.", next: "sixteenStart"},
oneA: {text: "Great! Enter 1A for line 14. Click Next to move onto line 16.", next: "sixteenStart"},
oneE: {text: "Great! Enter 1E for line 14. Click Next to move onto line 16.", next: "sixteenStart"},
oneJ: {text: "Great! Enter 1J for line 14. Click Next to move onto line 16.", next: "sixteenStart"},
oneK: {text: "Great! Enter 1K for line 14. Click Next to move onto line 16.", next: "sixteenStart"},
oneF: {text: "Great! Enter 1F for line 14. Click Next to move onto line 16.", next: "sixteenStart"},
oneB: {text: "Great! Enter 1B for line 14. Click Next to move onto line 16.", next: "sixteenStart"},
oneC: {text: "Great! Enter 1C for line 14. Click Next to move onto line 16.", next: "sixteenStart"},
oneD: {text: "Great! Enter 1D for line 14. Click Next to move onto line 16.", next: "sixteenStart"},


sixteenStart: {
    text: "Was the employee part of a multi-employer arrangement for any day of the month, such as a union-sponsored plan?",
    options: [
        { text: "Yes", next: "twoE" },
        { text: "No", next: "scovQues" }
    
    ]
},

scovQues: {
    text: "Was the employee enrolled in self-insured coverage for any day of the month?",
    options: [
        { text: "Yes", next: "sPrimaryEIN" },
        { text: "No", next: "twoA" }
    
    ]
},

sPrimaryEIN: {
    text: "For the month in question, was this the primary EIN for the employee (worked the most hours in this EIN)?",
    options: [
        { text: "Yes", next: "actCov" },
        { text: "No", next: "twoA" }
    ]
},

actCov: {
    text: "Was the employee enrolled in a self-insured plan for EVERY day of the month?",
    options: [
        { text: "Yes", next: "twoC" },
        { text: "No", next: "midMonth" }
    ]
},

midMonth: {
    text: "Select the scenario that applies.",
    options: [
        { text: "The employee was a Full-Time Employee offered coverage for the full month but was not covered for the full month", next: "safeHarbor" },
        { text: "The employee was a Part-Time Employee for the month.", next: "twoB" },
        { text: "The employee was in an initial measurement period for the month.", next: "twoD" },
        { text: "The employee was in a waiting period on the first of the month or hired mid-month and therefore became newly eligible mid-month.", next: "twoD" },
        { text: "Coverage was offered the first of the month, but the employee terminated/retired/passed away mid-month.", next: "twoB" },
        
    ]
},

safeHarbor: {
    text: "Is an affordability Safe Harbor being used (i.e. Federal Poverty Line, Rate of Pay, or W-2 Safe Harbor)?",
    options: [
        { text: "Federal Poverty Line", next: "twoG" },
        { text: "Rate of Pay", next: "twoH" },
        { text: "W-2", next: "twoF" },
        { text: "No Safe Harbor applies", next: "blank" }
    ]
},

twoA: {text: "Great! Enter 2A for line 16. You're all set! I hope this was helpful. Click Start Over to return to the line 14 evaluation.", next: "start"},  
twoB: {text: "Great! Enter 2B for line 16. You're all set! I hope this was helpful. Click Start Over to return to the line 14 evaluation.", next: "start"},  
twoC: {text: "Great! Enter 2C for line 16. You're all set! I hope this was helpful. Click Start Over to return to the line 14 evaluation.", next: "start"},  
twoD: {text: "Great! Enter 2D for line 16. You're all set! I hope this was helpful. Click Start Over to return to the line 14 evaluation.", next: "start"},  
twoE: {text: "Great! Enter 2E for line 16. You're all set! I hope this was helpful. Click Start Over to return to the line 14 evaluation.", next: "start"},  
twoF: {text: "Great! Enter 2F for line 16. You're all set! I hope this was helpful. Click Start Over to return to the line 14 evaluation.", next: "start"},  
twoG: {text: "Great! Enter 2G for line 16. You're all set! I hope this was helpful. Click Start Over to return to the line 14 evaluation.", next: "start"},  
twoH: {text: "Great! Enter 2H for line 16. You're all set! I hope this was helpful. Click Start Over to return to the line 14 evaluation.", next: "start"},  
twoI: {text: "Great! Enter 2I for line 16. You're all set! I hope this was helpful. Click Start Over to return to the line 14 evaluation.", next: "start"},  
blank: {text: "Great! Leave line 16 blank since no Safe Harbor applies. You're all set! I hope this was helpful. Click Start Over to return to the line 14 evaluation.", next: "start"},  



};





let history = [];
let currentIndex = -1;

function startDecision() {
    showQuestion("start");
    document.getElementById("start-btn").style.display = "none";
    document.getElementById("restart-btn").style.display = "block";
}


function showQuestion(key) {
    const questionText = document.getElementById("question-text");
    const optionsDiv = document.getElementById("options");

    const question = questions[key];
    questionText.textContent = question.text;
    optionsDiv.innerHTML = "";

    if (question.options) {
        question.options.forEach(option => {
            const btn = document.createElement("button");
            btn.textContent = option.text;
            btn.className = "buttonQuestion";
            btn.onclick = () => {
                history.push(key); // Store current question in history
                currentIndex = history.length - 0; // Update index
                showQuestion(option.next);
                updateNavButtons();
            };
            optionsDiv.appendChild(btn);
        });

    } 

    else if (question.next) {
        if (["noForm", "oneG", "oneH", "oneA", "oneE", "oneJ", "oneK", "oneF", "oneB", "oneC", "oneD", "twoA", "twoB", "twoC", "twoD", "twoE", "twoF", "twoG", "twoH", "twoI","blank"].includes(key)) 
                {triggerFireworks(); // Trigger fireworks for conclusion screens
                }       
        
        // If the question has no options but has a "next" property, show a "Next" button
        const nextBtn = document.createElement("button");
        nextBtn.textContent = "Next";
        nextBtn.className = "buttonQuestion";
        nextBtn.onclick = () => {
            history.push(key); // Store current question in history
            currentIndex = history.length - 0; // Update index
            showQuestion(question.next);
            updateNavButtons();
        };
        optionsDiv.appendChild(nextBtn);
    }


    updateNavButtons();
}

function triggerFireworks() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

function goBack() {
    if (currentIndex > 0) {
        currentIndex--;
        const previousKey = history[currentIndex]; // Get the previous question key
        showQuestion(previousKey); // Show the previous question
        updateNavButtons(); // Update navigation buttons
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
   // document.getElementById("next-btn").disabled = currentIndex >= history.length - 1;
}

function restart() {
    location.reload("p2modeler.html");
}
