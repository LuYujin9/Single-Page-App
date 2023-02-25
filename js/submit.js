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

  const newCard = document.createElement("li");
  newCard.setAttribute("list-style", "none");

  //question.textContent = `${data.question}`;
  newCards.innerHTML = `<article class="card">
        <h2>${data.question} </h2>
        <button class="card__bookmark" aria-label="bookmark" data-js="button-1">
          📁
        </button>
        <button
          type="button"
          class="card__button"
          aria-label="show answer button"
          data-js="show-answer1"
        >
          Show Answer
        </button>
        <p class="answer--visible" data-js="answer1">${data.answer}</p>
        <ul class="card__categories">
          <li># ${data.tag}</li>
        </ul>
      </article>`;

  //tag.textContent = `#${data.tag}`;

  newCards.append(newCard);

  event.target.reset();
  event.target.elements.question.focus();
  questionInputLength.classList.add("invisible");
  answerInputLength.classList.add("invisible");
});
