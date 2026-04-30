// Correct answers for questions
const answers = {
    q1: "c",
    q2: "c",
    q3: "b",
    q4: "a",
    q5: "a",
};

function Quizgrade() {
    const form = document.getElementById("TFQUIZ");

    // Check unanswered questions first
    for (let question in answers) {
        let selected = form.querySelector(`input[name="${question}"]:checked`);

        if (!selected) {
            alert("Please answer all questions before submitting!");
            return;
        }
    }

    // Displays Confirmation popup in window
    let confirmSubmit = confirm("Are you sure you want to submit your answers?");

    if (!confirmSubmit) {
        return; // user clicked Cancel
    }

    // Continue grading
    let score = 0;

    document.querySelectorAll("label").forEach(label => {
        label.classList.remove("correct", "wrong");
    });

    for (let question in answers) {
        let selected = form.querySelector(`input[name="${question}"]:checked`);
        let label = selected.parentElement;

        // adds point to each if answered correctly
        if (selected.value === answers[question]) {
            score++;
            label.classList.add("correct");
        } else {
            label.classList.add("wrong");

            let correct = form.querySelector(
                `input[name="${question}"][value="${answers[question]}"]`
            );
            correct.parentElement.classList.add("correct");
        }
    }

    // Displays Final Score
    document.getElementById("result").innerHTML =
        "You scored " + score + " out of 5!";

    document.getElementById("submitbutton").disabled = true;
}

// function to reset the quiz once the Retake Quiz button is clicked
function Quizreset() {
    const form = document.getElementById("TFQUIZ");

    // Clears all selected answers
    form.reset();

    // Removes correct/wrong highlights
    document.querySelectorAll("label").forEach(label => {
        label.classList.remove("correct", "wrong");
    });

    // Clears score text
    document.getElementById("result").innerHTML = "";

    // Re-enables submit button
    document.getElementById("submitbutton").disabled = false;
}
