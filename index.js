

        const quizData = [
            { question: "What is the capital of India?", options: ["New Delhi", "Mumbai", "Gujrat", "Pune"], answer: "New Delhi" },
            { question: "Which is the longest river in the world?", options: ["Amazon River", "Nile River", " Yangtze River", "Ganges River"], answer: "Nile River" },
            { question: "Which is the largest planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Jupiter" },
            { question: "Who was the first President of India?", options: [" Dr. B.R. Ambedkar", "Dr. Rajendra Prasad", "Jawaharlal Nehru", " Sardar Vallabhbhai Patel"], answer: "Dr. Rajendra Prasad" },
            { question: "Who is known as the 'Father of the Indian Constitution?'", options: ["Mahatma Gandhi", "Sardar Patel", "B.R. Ambedkar", "Jawaharlal Nehru"], answer: "B.R. Ambedkar"},
            { question: "Which Mughal emperor built the Taj Mahal?", options: ["Akbar", "Shah Jahan", "Babur", "Aurangzeb"], answer: "Shah Jahan"},
            { question: "What is the chemical symbol for gold?", options: ["Ag", "Au", "Pb", "Fe"], answer: "Au"},
            { question: "Which planet is known as the 'Red Planet'?", options: ["Venus", "Jupiter", "Mars", "Saturn"], answer: "Mars"},
            { question: "What is the national animal of India?", options: ["Lion", "Tiger", "Elephant", "Peacock"], answer: "Tiger"},
            { question: "How many players are there in a football (soccer) team?", options: ["9", "10", "11", "12"], answer: "11"},
            
        ];
        
        let currentQuestionIndex = 0;
        let score = 0;
        
        function loadQuestion() {
            const questionData = quizData[currentQuestionIndex];
            document.getElementById("question").textContent = questionData.question;
            document.getElementById("options").innerHTML = "";
            document.getElementById("feedback").textContent = "";
            
            questionData.options.forEach(option => {
                const btn = document.createElement("button");
                btn.textContent = option;
                btn.classList.add("option");
                btn.onclick = () => checkAnswer(option, btn);
                document.getElementById("options").appendChild(btn);
            });
        }
        
        function checkAnswer(selected, button) {
            const correctAnswer = quizData[currentQuestionIndex].answer;
            if (selected === correctAnswer) {
                button.classList.add("correct");
                document.getElementById("feedback").textContent = "Correct!";
                score++;
                document.getElementById("score").textContent = score;
            } else {
                button.classList.add("incorrect");
                document.getElementById("feedback").textContent = "Wrong! The correct answer is " + correctAnswer;
            }
            document.querySelectorAll(".option").forEach(btn => btn.onclick = null);
        }
        
        function loadNextQuestion() {
            currentQuestionIndex++;
            if (currentQuestionIndex < quizData.length) {
                loadQuestion();
            } else {
                document.getElementById("quiz-container").innerHTML = `<h2>Quiz Complete!</h2><p>Final Score: ${score}</p>`;
            }
        }
        
        loadQuestion();
  

