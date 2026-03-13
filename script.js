// Tell your groupmates to add their questions to this array
const quizData = [
    {
        question: "Who has the right-of-way at an intersection without traffic lights?",
        choices: ["The first vehicle to arrive", "The largest vehicle", "The vehicle on the left", "Motorcycles always"],
        correctAnswer: "The first vehicle to arrive"
    },
    {
        question: "When should you use your turn signal?",
        choices: ["Only when there are other cars", "When changing lanes or turning", "Only at night", "Never"],
        correctAnswer: "When changing lanes or turning"
    }
];

let currentQuestionIndex = 0;

// Grab the HTML elements we need to change
const questionText = document.getElementById("question-text");
const choicesContainer = document.getElementById("choices-container");
const feedbackText = document.getElementById("feedback-text");
const nextBtn = document.getElementById("next-btn");

// Function to display the current question
function loadQuestion() {
    // Clear old data
    feedbackText.textContent = "";
    nextBtn.classList.add("hidden");
    choicesContainer.innerHTML = "";

    const currentQuestion = quizData[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    // Create a button for each choice
    currentQuestion.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        
        // Listen for a click on the choice
        button.addEventListener("click", function() {
            checkAnswer(choice, currentQuestion.correctAnswer);
        });
        
        choicesContainer.appendChild(button);
    });
}

// Function to check if the clicked answer is correct
function checkAnswer(selected, correct) {
    if (selected === correct) {
        feedbackText.textContent = "Correct! Well done.";
        feedbackText.style.color = "green";
    } else {
        feedbackText.textContent = `Incorrect. The correct answer is: ${correct}`;
        feedbackText.style.color = "red";
    }

    // Disable all buttons after answering
    const buttons = choicesContainer.querySelectorAll("button");
    buttons.forEach(btn => btn.disabled = true);

    // Show the "Next" button if there are more questions
    if (currentQuestionIndex < quizData.length - 1) {
        nextBtn.classList.remove("hidden");
    } else {
        nextBtn.classList.remove("hidden");
        nextBtn.textContent = "Finish Quiz";
    }
}

// Listen for clicks on the "Next" button to move forward
nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        questionText.textContent = "Quiz Complete! Drive safe!";
        choicesContainer.innerHTML = "";
        feedbackText.textContent = "";
        nextBtn.classList.add("hidden");
    }
});

// Start the quiz when the page loads
loadQuestion();