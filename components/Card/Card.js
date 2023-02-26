const showAnswerButtons = document.querySelectorAll(
  "[data-js*=show-answer-btn]"
);

export function showAnswer() {
  showAnswerButtons.forEach((showAnswerButton) => {
    showAnswerButton.addEventListener("click", (event) => {
      const currentBtn = event.target;
      const currentAnswer = currentBtn.nextSibling.nextSibling;
      if (currentAnswer.classList.contains("answer--visible")) {
        currentBtn.textContent = "Hide Answer";
      } else {
        currentBtn.textContent = "Show Answer";
      }
      currentAnswer.classList.toggle("answer--visible");
    });
  });
}
