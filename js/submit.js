const form = document.querySelector('[data-js="form"]');
const newCards = document.querySelector('[data-js="new-cards"]');
const questionInput = document.getElementById("question");
const questionInputLength = document.querySelector(
  '[data-js="question-length"]'
);
const answerInput = document.getElementById("answer");
const answerInputLength = document.querySelector('[data-js="answer-length"]');

console.clear();
//length of input
function leftCharacters(inputLength) {
  const leftCharacters = 150 - event.target.value.length;
  inputLength.textContent = `${leftCharacters} characters left`;
  inputLength.classList.remove("invisible");
}

questionInput.addEventListener("input", (event) => {
  leftCharacters(questionInputLength);
});
answerInput.addEventListener("input", (event) => {
  leftCharacters(answerInputLength);
});

//submit
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  const cards = document.createElement("li");
  //const question = document.createElement("h2");
  const answer = document.createElement("p");
  //const tag = document.createElement("p");

  cards.setAttribute("class", "card");
  //question.textContent = `${data.question}`;
  answer.textContent = `${data.question} ${data.answer} # ${data.tag} `;
  //tag.textContent = `#${data.tag}`;

  cards.append(answer);
  newCards.append(cards);

  event.target.reset();
  event.target.elements.question.focus();
  questionInputLength.classList.add("invisible");
  answerInputLength.classList.add("invisible");
});
