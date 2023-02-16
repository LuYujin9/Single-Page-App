console.clear();

const showAnswerButton1 = document.querySelector('[data-js="show-answer1"]');
const answer1 = document.querySelector('[data-js="answer1"]');
const showAnswerButton2 = document.querySelector('[data-js="show-answer2"]');
const answer2 = document.querySelector('[data-js="answer2"]');
const showAnswerButton3 = document.querySelector('[data-js="show-answer3"]');
const answer3 = document.querySelector('[data-js="answer3"]');
const bookmarkButton1 = document.querySelector('[data-js="button-1"]');
const bookmarkCard1 = document.querySelector('[data-js="card1"]');
const bookmarkButton2 = document.querySelector('[data-js="button-2"]');
const bookmarkCard2 = document.querySelector('[data-js="card2"]');
const bookmarkButton3 = document.querySelector('[data-js="button-3"]');
const bookmarkCard3 = document.querySelector('[data-js="card3"]');

//show answer button.
// button.textContent === "Show Answer" 需要点击2次才生效？
// answer.classList.contains("visible")
function showAnswerButton(button, answer) {
  if (answer.classList.contains("answer--visible")) {
    button.textContent = "Hide Answer";
  } else {
    button.textContent = "Show Answer";
  }
  answer.classList.toggle("answer--visible");
}

showAnswerButton1.addEventListener("click", () => {
  showAnswerButton(showAnswerButton1, answer1);
});

showAnswerButton2.addEventListener("click", () => {
  showAnswerButton(showAnswerButton2, answer2);
});

showAnswerButton3.addEventListener("click", () => {
  showAnswerButton(showAnswerButton3, answer3);
});

//bookmark button
bookmarkButton1.addEventListener("click", () => {
  bookmarkButton1.classList.toggle("card__bookmark--color");
});
bookmarkButton2.addEventListener("click", () => {
  bookmarkButton2.classList.toggle("card__bookmark--color");
});
bookmarkButton3.addEventListener("click", () => {
  bookmarkButton3.classList.toggle("card__bookmark--color");
});
