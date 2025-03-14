function openTab(event, tabName) {
    let tabs = document.getElementsByClassName("tab-content");
    let buttons = document.getElementsByClassName("tab-button");

    for (let tab of tabs) {
        tab.style.display = "none";
    }
    for (let button of buttons) {
        button.classList.remove("active");
    }

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}

function calculateGrade(tabId) {
    let majorExamInput = document.querySelector(`#${tabId} .major-exam`);
    let quizInputs = document.querySelectorAll(`#${tabId} .quiz`);
    let performanceInputs = document.querySelectorAll(`#${tabId} .performance-task`);
    let journalInput = document.querySelector(`#${tabId} .reflective-journal`);

    // Major Exam (40%)
    let majorExamScore = parseFloat(majorExamInput.value) || 0;
    let majorExam = (majorExamScore / 100) * 40;

    // Quizzes (30%)
    let totalQuizScore = 0, quizCount = 0;
    quizInputs.forEach(input => {
        if (input.value) {
            totalQuizScore += parseFloat(input.value);
            quizCount++;
        }
    });
    let quizPercentage = quizCount > 0 ? (totalQuizScore / (quizCount * 15)) * 30 : 0;

    // Performance Task (25%)
    let totalPerformanceScore = 0, performanceCount = 0;
    performanceInputs.forEach(input => {
        if (input.value) {
            totalPerformanceScore += parseFloat(input.value);
            performanceCount++;
        }
    });
    let performancePercentage = performanceCount > 0 ? (totalPerformanceScore / (performanceCount * 30)) * 25 : 0;

    // Reflective Journal (5%)
    let journalScore = parseFloat(journalInput.value) || 0;
    let journalPercentage = (journalScore / 5) * 5;

    // Final Grade Calculation
    let finalGrade = (majorExam + quizPercentage + performancePercentage + journalPercentage).toFixed(2);

    // Display Result
    document.querySelector(`#${tabId} .result`).textContent = `Final Grade: ${finalGrade}`;
}

document.addEventListener("DOMContentLoaded", function() {
    const faqButtons = document.querySelectorAll(".faq-question");

    faqButtons.forEach(button => {
        button.addEventListener("click", function() {
            const faq = this.parentElement;
            const answer = faq.querySelector(".faq-answer");

            // Close other open FAQs (optional)
            document.querySelectorAll(".faq-answer").forEach(item => {
                if (item !== answer) {
                    item.style.maxHeight = null;
                    item.style.padding = "0 15px";
                }
            });

            // Toggle the active class
            faq.classList.toggle("active");

            // Smoothly expand/collapse the answer
            if (faq.classList.contains("active")) {
                answer.style.maxHeight = answer.scrollHeight + "px";
                answer.style.padding = "10px 15px";
            } else {
                answer.style.maxHeight = null;
                answer.style.padding = "0 15px";
            }
        });
    });
});
