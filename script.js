let lastScrollY = window.scrollY;

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
    },
    {
        question: "What do you do when the traffic light turns yellow?",
        choices: ["Speed up", "Stop", "Slow down", "Change lanes"],
        correctAnswer: "Slow down"
    },
    {
        question: "What is the speed limit for cars on the CCLEX (Cebu-Cordova Link Expressway)?",
        choices: ["40 km/h", "60 km/h", "80 km/h", "100 km/h"],
        correctAnswer: "80 km/h"
    },
    {
        question: "Under the Anti-Distracted Driving Act, when is it okay to hold your phone while driving in Cebu traffic?",
        choices: ["When stopped at a red light", "During heavy 'standstill' traffic in Mandaue", "Only in cases of emergency to call authorities", "When using Waze to find a shortcut"],
        correctAnswer: "Only in cases of emergency to call authorities"
    },
    {
        question: "What does this sign mean?",
        image: "images/slippery.png",
        choices: ["Slippery Road", "No U-Turn", "Road Narrows", "Steep Hill"],
        correctAnswer: "Slippery Road"
    },
    {
        question: "A Jeepney in front of you flashes its left signal but starts drifting to the right. This usually indicates:",
        choices: ["The driver is confused", "The driver is picking up/dropping off a passenger", "The electrical wiring is faulty", "The driver is giving you the right of way"],
        correctAnswer: "The driver is picking up/dropping off a passenger"
    },
    {
        question: "When entering a 'Yellow Box' at an intersection, you should:",
        choices: ["Enter it to make sure you beat the red light", "Only enter if there is enough space to exit on the other side", "Stop inside it if traffic stalls", "Honk to tell the car ahead to move out of the box"],
        correctAnswer: "Only enter if there is enough space to exit on the other side"
    },
    {
        question: "According to LTO, how many days do you have to settle a 'No Contact Apprehension' citation?",
        choices: ["3 days", "7 days", "15 days", "30 days"],
        correctAnswer: "7 days"
    },
    {
        question: "What should you do when driving through a flooded street in A.S. Fortuna?",
        choices: ["Drive fast to get through quickly", "Maintain a steady, low gear to keep exhaust pressure up", "Shift to neutral and coast", "Follow a bus very closely"],
        correctAnswer: "Maintain a steady, low gear to keep exhaust pressure up"
    },
    {
        question: "At a 4-way stop in a residential area like Banilad, who has the right of way?",
        choices: ["The vehicle that arrived first", "The larger vehicle", "The vehicle on the main road", "The vehicle that honks first"],
        correctAnswer: "The vehicle that arrived first"
    },
    {
        question: "What is the mandatory minimum distance you must keep from a cyclist in the Cebu bike lanes?",
        choices: ["0.5 meters", "1 meter", "1.5 meters", "2 meters"],
        correctAnswer: "1.5 meters"
    },
    {
        question: "When driving down the Transcentral Highway (Busay), the best way to control speed is:",
        choices: ["Relying solely on your foot brake", "Shifting to a lower gear (Engine Braking)", "Turning off the engine", "Zig-zagging across the road"],
        correctAnswer: "Shifting to a lower gear (Engine Braking)"
    },
    {
        question: "What is the meaning of a flashing red traffic light?",
        choices: ["Stop and wait for it to turn green", "Stop, then proceed when the way is clear (Treat as a Stop Sign)", "Slow down and proceed", "The light is broken, ignore it"],
        correctAnswer: "Stop, then proceed when the way is clear (Treat as a Stop Sign)"
    },
    {
        question: "In Cebu City, 'counter-flowing' is considered:",
        choices: ["A minor traffic discourtesy", "A reckless driving violation with high fines/impoundment", "Legal if the other lane is empty", "Acceptable during rush hour"],
        correctAnswer: "A reckless driving violation with high fines/impoundment"
    },
    {
        question: "Which document must you always carry while driving?",
        choices: ["Original Deed of Sale", "Valid OR and CR (original or LTO-accepted copy)", "LTO Receipt of registration only", "Voter's ID"],
        correctAnswer: "Valid OR and CR (original or LTO-accepted copy)"
    },
    {
        question: "When is it acceptable to use your hazard lights while moving?",
        choices: ["When it is raining heavily", "When you are part of a wedding convoy", "When you have a mechanical emergency or are a hazard", "When you want to park illegally"],
        correctAnswer: "When you have a mechanical emergency or are a hazard"
    },
    {
        question: "What is the proper etiquette when a driver flashes their high beams at you from behind?",
        choices: ["They are saying hello", "They intend to overtake you", "They want you to speed up", "They are angry at your speed"],
        correctAnswer: "They intend to overtake you"
    },
    {
        question: "In the Fuente Osmeña Rotunda, who has the right of way?",
        choices: ["Vehicles entering the circle", "Vehicles already inside the circle", "The vehicle with the most passengers", "Government vehicles only"],
        correctAnswer: "Vehicles already inside the circle"
    },
    {
        question: "What is the 'Three-Second Rule'?",
        choices: ["The time it takes to shift gears", "The safe following distance between you and the car in front", "How long you should wait at a green light before honking", "How long a pedestrian has to cross the street"],
        correctAnswer: "The safe following distance between you and the car in front"
    },
    {
        question: "When parking uphill with a curb, your front wheels should be turned:",
        choices: ["Toward the curb", "Away from the curb", "Parallel to the curb", "It doesn't matter"],
        correctAnswer: "Away from the curb"
    },
    {
        question: "A flashing yellow light at an intersection means:",
        choices: ["Speed up to avoid the red light", "Stop completely", "Proceed with caution", "Yield to pedestrians only"],
        correctAnswer: "Proceed with caution"
    },
    {
        question: "What does the 'No Right Turn on Red' sign mean?",
        choices: ["You can turn if no cars are coming", "You must wait for the green light to turn right", "Only motorcycles can turn right", "You can turn right after stopping for 3 seconds"],
        correctAnswer: "You must wait for the green light to turn right"
    },
    {
        question: "What is the penalty for a first-time seatbelt violation?",
        choices: ["PHP 500", "PHP 1,000", "PHP 5,000", "License Revocation"],
        correctAnswer: "PHP 1,000"
    },
    {
        question: "If you are involved in a minor property-damage accident, you should:",
        choices: ["Leave the cars in place until a lawyer arrives", "Take photos and move the cars to clear traffic", "Drive away immediately", "Wait for the Mayor"],
        correctAnswer: "Take photos and move the cars to clear traffic"
    },
    {
        question: "What is the maximum speed limit in a 'School Zone' in Cebu City?",
        choices: ["20 km/h", "30 km/h", "40 km/h", "15 km/h"],
        correctAnswer: "20 km/h"
    },
    {
        question: "Is it legal to use a modified muffler that creates excessive noise?",
        choices: ["Yes, for safety so people hear you", "No, it violates the LTO/local noise ordinance", "Only on weekends", "Only for big bikes"],
        correctAnswer: "No, it violates the LTO/local noise ordinance"
    },
    {
        question: "The 'Outer Lane' (rightmost) of a multi-lane highway is intended for:",
        choices: ["Overtaking", "Low-speed vehicles and public utility stops", "Emergency parking only", "Motorcycles only"],
        correctAnswer: "Low-speed vehicles and public utility stops"
    },
    {
        question: "What should you do if an ambulance with sirens is behind you on N. Bacalso Ave?",
        choices: ["Speed up to clear the way", "Pull over to the right and stop if possible", "Stop exactly where you are", "Follow it to beat the traffic"],
        correctAnswer: "Pull over to the right and stop if possible"
    },
    {
        question: "A 'Double Yellow Line' indicates:",
        choices: ["No overtaking but U-turns are okay", "Strictly no overtaking and no U-turns", "Overtaking allowed for motorcycles", "Parking allowed on both sides"],
        correctAnswer: "Strictly no overtaking and no U-turns"
    },
    {
        question: "What is the correct hand signal for a right turn (if your lights fail)?",
        choices: ["Arm pointing left", "Arm pointing straight up", "Arm pointing down", "Arm waving"],
        correctAnswer: "Arm pointing straight up"
    },
    {
        question: "What is the legal age to apply for a Student Driver's Permit?",
        choices: ["16 years old", "17 years old", "18 years old", "15 years old"],
        correctAnswer: "16 years old"
    },
    {
        question: "When driving at night, you should switch from high beams to low beams when an oncoming car is within:",
        choices: ["100 meters", "200 meters", "500 meters", "50 meters"],
        correctAnswer: "200 meters"
    },
    {
        question: "In Cebu City, double-parking on a main thoroughfare is:",
        choices: ["Allowed for 5 minutes", "Allowed if you leave the hazard lights on", "Illegal and subject to towing", "Allowed if a driver remains in the car"],
        correctAnswer: "Illegal and subject to towing"
    },
    {
        question: "What does a blue-painted lane on the road signify?",
        choices: ["Loading zone", "Bicycle lane", "VIP lane", "Ambulance lane"],
        correctAnswer: "Bicycle lane"
    },
    {
        question: "If you are blinded by the high beams of an oncoming vehicle, you should:",
        choices: ["Turn on your high beams too", "Look slightly to the right (the edge of the road)", "Close your eyes briefly", "Stop in the middle of the road"],
        correctAnswer: "Look slightly to the right (the edge of the road)"
    },
    {
        question: "What is the primary rule for the 'Zipper Merge' (used in traffic bottlenecks)?",
        choices: ["First come, first served", "One car from the left, then one car from the right", "The fastest car goes first", "Bus/Trucks always have priority"],
        correctAnswer: "One car from the left, then one car from the right"
    },
    {
        question: "When approaching a pedestrian lane (zebra crossing) with no traffic light or enforcer, what should a driver do if pedestrians are waiting to cross?",
        choices: ["Continue driving unless the pedestrian is already in the road", "Slow down but keep moving unless they step onto the lane", "Stop and give way to pedestrians waiting to cross", "Honk to signal the pedestrian before passing"],
        correctAnswer: "Stop and give way to pedestrians waiting to cross"
    },
    {
        question: "You’re driving in heavy traffic and another car signals to merge into your lane. What is the best driving etiquette?",
        choices: ["Block them so they stay in their lane", "Speed up so they cannot enter", "Slow down slightly and let them merge safely", "Honk repeatedly"],
        correctAnswer: "Slow down slightly and let them merge safely"
    },
    {
        question: "When a jeepney stops suddenly to drop off passengers, what should drivers behind it do?",
        choices: ["Overtake immediately without checking", "Stay patient and check for passengers crossing", "Honk continuously", "Drive very close behind it"],
        correctAnswer: "Stay patient and check for passengers crossing"
    },
    {
        question: "What is the most courteous way to use your horn in city traffic?",
        choices: ["Use it whenever traffic is slow", "Use it only as a warning for safety", "Use it to express frustration", "Use it every time the light turns green"],
        correctAnswer: "Use it only as a warning for safety"
    },
    {
        question: "When driving near motorcycles weaving through traffic, what should you do?",
        choices: ["Ignore them completely", "Maintain a safe distance and stay predictable", "Block them from passing", "Race them to the next lane"],
        correctAnswer: "Maintain a safe distance and stay predictable"
    },
    {
        question: "When you see a vehicle signaling to turn but waiting for pedestrians, what should you do behind them?",
        choices: ["Honk to pressure them", "Overtake immediately", "Wait patiently", "Flash your headlights repeatedly"],
        correctAnswer: "Wait patiently"
    },
    {
        question: "When driving in rain on Cebu roads, what is a courteous thing drivers should remember?",
        choices: ["Drive the same speed as normal", "Turn off lights to save battery", "Slow down and increase following distance", "Use hazard lights constantly"],
        correctAnswer: "Slow down and increase following distance"
    },
    {
        question: "When driving behind a large truck or bus, what is the safest habit?",
        choices: ["Tailgate closely", "Maintain enough distance to see around it", "Overtake immediately without checking", "Honk until it moves faster"],
        correctAnswer: "Maintain enough distance to see around it"
    },
    {
        question: "When approaching a blind curve on mountain roads like those in Busay, what is the best driving behavior?",
        choices: ["Accelerate through the curve", "Stay in your lane and slow down (you may honk gently to alert oncoming drivers)", "Overtake quickly", "Honk aggressively"],
        correctAnswer: "Stay in your lane and slow down (you may honk gently to alert oncoming drivers)"
    },
    {
        question: "When making a U-turn at a designated U-turn slot on a busy Cebu road, who has the right-of-way?",
        choices: ["The vehicle making the U-turn", "Vehicles already traveling straight on the main road", "The larger vehicle", "Motorcycles only"],
        correctAnswer: "Vehicles already traveling straight on the main road"
    }
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function prepareQuiz() {
    // 1. Create a fresh copy of the master array
    activeQuiz = [...quizData];
    
    // 2. Shuffle the temporary copy
    shuffle(activeQuiz);
    
    // 3. Keep only the first 20 items (slice does not destroy the array)
    activeQuiz = activeQuiz.slice(0, 20); 
}

let activeQuiz = [];
let currentQuestionIndex = 0;
let score = 0;

// --- Phase 2: Stopwatch Engine ---
let stopwatchInterval;
let totalSeconds = 0;

function startStopwatch() {
    clearInterval(stopwatchInterval); // Prevents multiple clocks from running at once
    stopwatchInterval = setInterval(() => {
        totalSeconds++;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
        
        // Formats the numbers to always have two digits (e.g., 01:05)
        const formattedTime = 
            (minutes < 10 ? "0" : "") + minutes + ":" + 
            (seconds < 10 ? "0" : "") + seconds;
            
        document.getElementById("time-left").textContent = formattedTime;
    }, 1000);
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
}

function resetStopwatch() {
    stopStopwatch();
    totalSeconds = 0;
    document.getElementById("time-left").textContent = "00:00";
}

function launchConfetti() {
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

document.addEventListener('DOMContentLoaded', function() {
    // 1. Select all UI elements
    const questionText = document.getElementById("question-text");
    const choicesContainer = document.getElementById("choices-container");
    const feedbackText = document.getElementById("feedback-text");
    const nextBtn = document.getElementById("next-btn");
    const retryBtn = document.getElementById("retry-btn");
    const quizImg = document.getElementById("quiz-image");
    const seeMoreBtn = document.getElementById('see-more-btn');
    const wrapper = document.getElementById('infographic-wrapper');
    const startBtn = document.getElementById("start-btn");
    const traffic = document.getElementById("traffic-sequence");
    const startScreen = document.getElementById("start-screen");
    const quizContainer = document.getElementById("quiz-container");

    // 2. Quiz Functions
    function loadQuestion() {
        if (!activeQuiz[currentQuestionIndex]) return;

        feedbackText.textContent = "";
        nextBtn.classList.add("hidden");
        choicesContainer.innerHTML = "";

        // --- Phase 2: Update Progress HUD ---
        const progressText = document.getElementById("progress-text");
        if (progressText) {
            progressText.textContent = `Question ${currentQuestionIndex + 1} / ${activeQuiz.length}`;
        }

        const currentQuestion = activeQuiz[currentQuestionIndex];

        // Handle Image display
        if (quizImg) {
            if (currentQuestion.image) {
                quizImg.src = currentQuestion.image;
                quizImg.classList.remove("hidden");
            } else {
                quizImg.src = "";
                quizImg.classList.add("hidden");
            }
        }   

        questionText.textContent = currentQuestion.question;

        shuffle(currentQuestion.choices);

        currentQuestion.choices.forEach(choice => {
            const button = document.createElement("button");
            button.textContent = choice;
            button.addEventListener("click", () => checkAnswer(choice, currentQuestion.correctAnswer));
            choicesContainer.appendChild(button);
        });
    }

    function checkAnswer(selected, correct) {
        const buttons = choicesContainer.querySelectorAll("button");

        if (selected === correct) {
            feedbackText.textContent = "Correct! Well done.";
            feedbackText.style.color = "green";
            score++;
        } else {
            feedbackText.textContent = `Incorrect. The correct answer is: ${correct}`;
            feedbackText.style.color = "red";
        }

        // Apply traffic light colors to the choices
        buttons.forEach(btn => {
            btn.disabled = true; // Lock all buttons
            if (btn.textContent === correct) {
                btn.classList.add("correct-btn"); 
            } else if (btn.textContent === selected) {
                btn.classList.add("wrong-btn"); 
            }
        });

        nextBtn.classList.remove("hidden");
        if (currentQuestionIndex === activeQuiz.length - 1) {
            nextBtn.textContent = "Finish Quiz";
        }
    }

    // 3. Event Listeners
    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            currentQuestionIndex++;
            if (currentQuestionIndex < activeQuiz.length) {
                loadQuestion();
            } else {
                // --- Phase 3: Show Gamified Results ---
                stopStopwatch(); 
                
                // Hide the HUD and Question, show the Results Screen
                document.getElementById("quiz-hud").classList.add("hidden");
                document.getElementById("question-area").classList.add("hidden");
                document.getElementById("results-screen").classList.remove("hidden");

                // Populate final stats
                document.getElementById("final-score").textContent = `${score} / ${activeQuiz.length}`;
                document.getElementById("final-time").textContent = document.getElementById("time-left").textContent;
                
                const ratingTitle = document.getElementById("rating-title");
                const advocacyMsg = document.getElementById("advocacy-message");

                // Dynamic Rating Logic & Easter Egg
                if (score === activeQuiz.length) {
                    // THE PERFECT SCORE EASTER EGG
                    ratingTitle.textContent = "Flawless!";
                    ratingTitle.style.color = "var(--traffic-yellow)"; 
                    advocacyMsg.textContent = "You own the streets of Cebu! (Respectfully, of course).";
                    launchConfetti();
                    triggerEasterEgg(); // Fires the car and sounds!
                } else if (score >= 18) {
                    ratingTitle.textContent = "Road Etiquette Champion!";
                    ratingTitle.style.color = "#16a34a"; // Green
                    advocacyMsg.textContent = "Great job! Responsible driving helps make Cebu roads safer for everyone.";
                    launchConfetti();
                } else if (score >= 14) {
                    ratingTitle.textContent = "Safe Driver!";
                    ratingTitle.style.color = "var(--traffic-yellow)";
                    advocacyMsg.textContent = "Good effort! Driving with patience and respect prevents accidents.";
                } else {
                    ratingTitle.textContent = "Needs Practice!";
                    ratingTitle.style.color = "var(--traffic-red)";
                    advocacyMsg.textContent = "Keep learning! Understanding the rules is the first step to moving Cebu forward.";
                }
            }
        });
    }

    // --- Phase 3: Replay Buttons ---
    const retrySameBtn = document.getElementById("retry-same-btn");
    const tryNewBtn = document.getElementById("try-new-btn");

    function resetQuizUI() {
        score = 0;
        currentQuestionIndex = 0;
        document.getElementById("results-screen").classList.add("hidden");
        document.getElementById("quiz-hud").classList.remove("hidden");
        document.getElementById("question-area").classList.remove("hidden");
        nextBtn.textContent = "Next Question";
        resetStopwatch();
        startStopwatch();
        loadQuestion();
    }

    if (retrySameBtn) {
        retrySameBtn.addEventListener("click", () => {
            // Re-runs the exact same activeQuiz array
            resetQuizUI();
        });
    }

    if (tryNewBtn) {
        tryNewBtn.addEventListener("click", () => {
            // Shuffles a brand new set of 20 from the master list!
            prepareQuiz(); 
            resetQuizUI();
        });
    }

    // --- Phase 2: HUD Restart Button ---
    const restartHudBtn = document.getElementById("restart-hud-btn");
    if (restartHudBtn) {
        restartHudBtn.addEventListener("click", () => {
            // Adds a quick safety check so they don't accidentally lose their progress
            if (confirm("Are you sure you want to restart the quiz?")) {
                prepareQuiz(); // Shuffles a brand new set of 20 questions!
                resetQuizUI();
            }
        });
    }

// 4. Infographic Toggle Logic (Cinematic Fade)
    const seeMoreText = document.getElementById('see-more-text'); 

    if (seeMoreBtn && wrapper) {
        seeMoreBtn.addEventListener('click', function() {
            wrapper.classList.toggle('collapsed');
            const isExpanded = wrapper.classList.toggle('expanded');
            
            this.classList.toggle('flipped');

            // The Cinematic Text Fade
            if (seeMoreText) {
                seeMoreText.style.opacity = 0; // 1. Fade out the current text
                
                setTimeout(() => {
                    // 2. Change the words while it is invisible
                    if (isExpanded) {
                        seeMoreText.textContent = "Collapse infographic";
                    } else {
                        seeMoreText.textContent = "Click to see more";
                    }
                    
                    // 3. Fade the new words back in
                    seeMoreText.style.opacity = 1; 
                }, 300); // 300ms perfectly matches the CSS transition time!
            }
        });
    }

    // 5. Dynamic Speedometer Logic (From INCOMING)
    let lastScrollTop = 0;
    let lastTime = Date.now();
    let targetSpeed = 0;
    let displayedSpeed = 0;
    const speedNumber = document.getElementById("speed-number");
    const speedIndicator = document.getElementById("speed-indicator");

    window.addEventListener("scroll", () => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const currentTime = Date.now();
        const distance = Math.abs(currentScrollTop - lastScrollTop);
        const timeElapsed = currentTime - lastTime;

        if (timeElapsed > 0) {
            targetSpeed = Math.round((distance / timeElapsed) * 5); 
        }

        lastScrollTop = currentScrollTop;
        lastTime = currentTime;
    });

    function updateSpeedometer() {
        displayedSpeed += (targetSpeed - displayedSpeed) * 0.1;
        const roundedSpeed = Math.round(displayedSpeed);
        
        if (speedNumber) speedNumber.textContent = roundedSpeed;

        if (roundedSpeed >= 80) {
            if (speedIndicator) {
                speedIndicator.style.backgroundColor = "white";
                speedIndicator.style.borderColor = "#cc0000"; 
            }
            if (speedNumber) speedNumber.style.color = "red";        
        } else {
            if (speedIndicator) {
                speedIndicator.style.backgroundColor = "white";
                speedIndicator.style.borderColor = "#cc0000";
            }
            if (speedNumber) speedNumber.style.color = "black";
        }

        targetSpeed *= 0.95; 
        if (targetSpeed < 0.1) targetSpeed = 0;

        requestAnimationFrame(updateSpeedometer);

        setTimeout(() => {
            const loader = document.getElementById("page-loader");
            if(loader){
                loader.style.opacity = "0";
                setTimeout(()=> loader.remove(),1000);
            }
        }, 3200);
    }
    
    // Start Quiz Button & Traffic Light Sequence
    const missionBriefing = document.getElementById('mission-briefing');
    const trafficSequence = document.getElementById('traffic-sequence');

    const lightRed = document.getElementById('light-red');
    const lightYellow = document.getElementById('light-yellow');
    const lightGreen = document.getElementById('light-green');

    if (startBtn) {
        startBtn.addEventListener('click', () => {
            // 1. Hide the text and button
            missionBriefing.style.display = 'none';
            
            // 2. Show the traffic light pill
            trafficSequence.classList.remove('hidden');

            // 3. Trigger the sequence with precise timing
            setTimeout(() => { lightRed.classList.add('active-red'); }, 400); // Red on
            
            setTimeout(() => {
                lightRed.classList.remove('active-red');
                lightYellow.classList.add('active-yellow'); 
            }, 1200); // Yellow on
            
            setTimeout(() => {
                lightYellow.classList.remove('active-yellow');
                lightGreen.classList.add('active-green'); 
            }, 2000); // Green on
            
            setTimeout(() => {
                // 4. Hide the entire start screen and show the quiz!
                startScreen.classList.add('hidden');
                quizContainer.classList.remove('hidden');
                
                resetStopwatch();
                startStopwatch();
                loadQuestion(); 
            }, 2600);
        });
    }
    
    updateSpeedometer();

    // --- Scroll Reveal (Stable Version - Preserved from CURRENT) ---
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const element = entry.target;

            if (entry.isIntersecting) {
                element.classList.add("active");
            } else {
                element.classList.remove("active");

                if (entry.boundingClientRect.top < 0) {
                    element.classList.add("fade-only");
                } 
                else {
                    element.classList.remove("fade-only");
                }
            }
        });
    }, {
        rootMargin: "-50px 0px",
        threshold: 0
    });

    reveals.forEach(section => observer.observe(section));

    // 6. Initialize
    prepareQuiz();
    loadQuestion();
});

// --- Phase 3: The Speedrunner Easter Egg (Instant Win Sound, Delayed Car) ---
function triggerEasterEgg() {
    // 1. Play the Win Sound IMMEDIATELY (Syncs perfectly with the confetti)
    const winSound = new Audio("audio/success.mp3");
    winSound.play().catch(e => console.log("Audio play prevented."));

    // 2. Delay the Car and the Engine Sound by 800ms
    setTimeout(() => {
        const engineSound = new Audio("audio/sports-car.mp3");
        engineSound.volume = 0.5;
        engineSound.play().catch(e => console.log("Audio play prevented."));

        // Spawn and Animate the Detailed Sports Car SVG
        let car = document.getElementById("easter-egg-car");
        
        if (!car) {
            car = document.createElement("div");
            car.id = "easter-egg-car";
            
            // Detailed Sports Car with Internal Animations (Spokes, Smoke, Bounce)
            car.innerHTML = `
                <svg viewBox="0 0 240 80" width="240" height="80" xmlns="http://www.w3.org/2000/svg">
                    <circle class="smoke smoke-1" cx="30" cy="60" r="12" fill="#d1d5db" opacity="0.8" />
                    <circle class="smoke smoke-2" cx="15" cy="50" r="16" fill="#e5e7eb" opacity="0.6" />
                    <circle class="smoke smoke-3" cx="45" cy="55" r="10" fill="#9ca3af" opacity="0.5" />
                    
                    <ellipse cx="130" cy="72" rx="70" ry="6" fill="#000000" opacity="0.3" />

                    <g class="car-chassis">
                        <path d="M 60 55 L 60 40 Q 60 30 75 25 L 110 20 L 150 25 L 195 40 Q 205 45 205 55 Z" fill="#ff3333" />
                        
                        <path d="M 110 22 L 140 26 L 160 38 L 110 38 Z" fill="#1b2a41" />
                        <path d="M 105 22 L 105 38 L 75 38 Q 75 30 85 25 Z" fill="#1b2a41" />

                        <path d="M 195 45 L 202 45 L 200 50 L 195 50 Z" fill="#ffcc00" />
                        <path d="M 60 45 L 65 45 L 65 50 L 60 50 Z" fill="#ffcc00" />
                        
                        <path d="M 60 52 L 203 52 L 202 55 L 60 55 Z" fill="#ffffff" />

                        <g class="wheel" style="transform-origin: 90px 60px;">
                            <circle cx="90" cy="60" r="14" fill="#111111" />
                            <circle cx="90" cy="60" r="6" fill="#e2e8f0" />
                            <line x1="90" y1="46" x2="90" y2="74" stroke="#ffffff" stroke-width="2" opacity="0.5" />
                            <line x1="76" y1="60" x2="104" y2="60" stroke="#ffffff" stroke-width="2" opacity="0.5" />
                        </g>
                        
                        <g class="wheel" style="transform-origin: 165px 60px;">
                            <circle cx="165" cy="60" r="14" fill="#111111" />
                            <circle cx="165" cy="60" r="6" fill="#e2e8f0" />
                            <line x1="165" y1="46" x2="165" y2="74" stroke="#ffffff" stroke-width="2" opacity="0.5" />
                            <line x1="151" y1="60" x2="179" y2="60" stroke="#ffffff" stroke-width="2" opacity="0.5" />
                        </g>
                    </g>
                </svg>
            `;
            document.body.appendChild(car);
        }
        
        // Reset the car's position
        car.style.transition = "none";
        car.style.transform = "translateX(0)"; 
        
        void car.offsetWidth; // Force a reflow

        // Hit the gas! Drives the car across the screen
        car.style.transition = "transform 2s cubic-bezier(0.4, 0, 0.2, 1)";
        car.style.transform = "translateX(calc(100vw + 350px))";
        
    }, 1000); 
}

const backToTopBtn = document.getElementById("back-to-top");

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});