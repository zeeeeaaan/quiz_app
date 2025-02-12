let questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Paris", "Madrid", "Rome"],
        correctIndex: 1
    },
    {
        question: "Which is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        correctIndex: 3
    },
    {
        question: "What is 5 + 3?",
        options: ["5", "8", "7", "10"],
        correctIndex: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;
let studentName = "";
let selectedAnswers = [];

function startQuiz() {
    studentName = document.getElementById("student-name").value;
    if (!studentName) {
        alert("Please enter your name");
        return;
    }
    document.getElementById("login-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    let questionText = document.getElementById("question-text");
    let optionsContainer = document.getElementById("options-container");
    let nextBtn = document.getElementById("next-btn");
    let submitBtn = document.getElementById("submit-btn");

    optionsContainer.innerHTML = "";

    let question = questions[currentQuestionIndex];
    questionText.innerText = question.question;

    question.options.forEach((option, index) => {
        let label = document.createElement("label");
        label.classList.add("option");

        let input = document.createElement("input");
        input.type = "checkbox";
        input.name = "option";
        input.value = index;
        input.onclick = () => selectOption(index);

        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        optionsContainer.appendChild(label);
    });

    nextBtn.style.display = "none";
    submitBtn.style.display = "none";
}

function selectOption(index) {
    selectedAnswers[currentQuestionIndex] = index;

    // Uncheck other checkboxes
    let checkboxes = document.querySelectorAll('input[name="option"]');
    checkboxes.forEach((checkbox, i) => {
        checkbox.checked = i === index;
    });

    // Show "Next" button only after selecting an answer
    document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
    if (selectedAnswers[currentQuestionIndex] === undefined) {
        alert("Please select an answer before proceeding.");
        return;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    score = 0;
    selectedAnswers.forEach((answer, i) => {
        if (answer === questions[i].correctIndex) {
            score++;
        }
    });

    document.getElementById("quiz-container").innerHTML = `
        <h2>Quiz Completed</h2>
        <p>Your Score: ${score} / ${questions.length}</p>
        <p>🎉 Great job, ${studentName}! 🎉</p>
    `;
    saveResult(studentName, score);
}

function saveResult(name, score) {
    fetch("save_quiz_result.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name, score: score })
    }).then(response => response.text())
      .then(data => console.log(data));
}
