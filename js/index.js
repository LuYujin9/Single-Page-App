console.clear();

const showAnswerButton1 = document.querySelector('[data-js="show-answer1"]');
const answer1 = document.querySelector('[data-js="answer1"]');
const showAnswerButton2 = document.querySelector('[data-js="show-answer2"]');
const answer2 = document.querySelector('[data-js="answer2"]');
const showAnswerButton3 = document.querySelector('[data-js="show-answer3"]');
const answer3 = document.querySelector('[data-js="answer3"]');

showAnswerButton1.addEventListener("click", () => {
  if (showAnswerButton1.textContent == "Show Answer") {
    showAnswerButton1.textContent = "Hide Answer";
    answer1.style.display = "block";
  } else {
    showAnswerButton1.textContent = "Show Answer";
    answer1.style.display = "none";
  }
});

showAnswerButton2.addEventListener("click", () => {
  if (showAnswerButton2.textContent == "Show Answer") {
    showAnswerButton2.textContent = "Hide Answer";
    answer2.style.display = "block";
  } else {
    showAnswerButton2.textContent = "Show Answer";
    answer2.style.display = "none";
  }
});

showAnswerButton3.addEventListener("click", () => {
  if (showAnswerButton3.textContent == "Show Answer") {
    showAnswerButton3.textContent = "Hide Answer";
    answer3.style.display = "block";
  } else {
    showAnswerButton3.textContent = "Show Answer";
    answer3.style.display = "none";
  }
});
