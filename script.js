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
    },
    {
        question: "What does a solid yellow line in the middle of the road mean?",
        choices: ["Overtaking is allowed anytime", "Overtaking is not allowed", "Road is under construction", "Only motorcycles may pass"],
        correctAnswer: "Overtaking is not allowed"
    },
    {
        question: "What does a single solid white line in the middle of the road mean?",
        choices: ["Overtaking at any times is allowed", "No overtaking and changing lanes", "Motorcycle overtaking only", "Emergency Vehicle overtaking only"],
        correctAnswer: "No overtaking and changing lanes"
    },
    { 
        question: "What do broken lines on the road mean?",
        choices: ["Lane changes and overtaking is allowed", "Overtaking is highly prohibited", "Lane switching is not allowed", "VIP and authority lane only"],
        correctAnswer: "Lane changes and overtaking is allowed"
	}
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
function prepareQuiz() {
    shuffle(quizData);
    quizData.splice(20); 
}
let currentQuestionIndex = 0;
let score = 0;

// Grab the HTML elements we need to change
const questionText = document.getElementById("question-text");
const choicesContainer = document.getElementById("choices-container");
const feedbackText = document.getElementById("feedback-text");
const nextBtn = document.getElementById("next-btn");
const retryBtn = document.getElementById("retry-btn");

// Function to display the current question
function loadQuestion() {
    // Clear old data
    feedbackText.textContent = "";
    nextBtn.classList.add("hidden");
    retryBtn.classList.add("hidden");
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
        score++; // +1 point for correct na answer
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
        if (score >= quizData.length) {
        questionText.textContent = `Perfect Score! (${score}/${quizData.length}) Drive Safe!`;
         } else {
        questionText.textContent = `Your final score is: ${score}/${quizData.length}. Wanna try again?`;
         } 
        choicesContainer.innerHTML = "";
        feedbackText.textContent = "";
        nextBtn.classList.add("hidden");
        retryBtn.classList.remove("hidden");
    }
});
retryBtn.addEventListener("click", () => {
    score = 0;
    currentQuestionIndex = 0;

    prepareQuiz();          
    retryBtn.classList.add("hidden");
    nextBtn.textContent = "Next";
 
    loadQuestion();
});
// Start the quiz when the page loads
prepareQuiz();
loadQuestion();

document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('see-more-btn');
    const wrapper = document.getElementById('infographic-wrapper');

    if (btn && wrapper) {
        btn.addEventListener('click', function() {
            // Toggle the image height
            wrapper.classList.toggle('collapsed');
            wrapper.classList.toggle('expanded');
            
            // Toggle the arrow rotation class
            btn.classList.toggle('flipped');
        });
    }
});