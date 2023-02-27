const showAnswerButtons = document.querySelectorAll(
  '[data-js*="show-answer-btn"]'
);
const bookmarkButtons = document.querySelectorAll(
  '[data-js*="bookmark-button"]'
);

export function showAnswer() {
  showAnswerButtons.forEach((showAnswerButton) => {
    showAnswerButton.addEventListener("click", (event) => {
      const currentBtn = event.target;
      const currentAnswer = currentBtn.nextSibling.nextSibling;
      if (currentAnswer.classList.contains("block--invisible")) {
        currentBtn.textContent = "Hide Answer";
      } else {
        currentBtn.textContent = "Show Answer";
      }
      currentAnswer.classList.toggle("block--invisible");
    });
  });
}

export function saveBookmark() {
  bookmarkButtons.forEach((bookmarkButton) => {
    bookmarkButton.addEventListener("click", () => {
      bookmarkButton.classList.toggle("card__bookmark--color");
    });
  });
}
