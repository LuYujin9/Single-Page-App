import { showAnswer } from "./components/Card/Card.js";
import { saveBookmark } from "./components/Card/Card.js";

const allPages = document.querySelectorAll('[data-js*="page"]');
const allLinks = document.querySelectorAll('[data-js*="link"]');
console.clear();
//links to pages
allLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    allPages.forEach((page) => page.classList.remove("current"));
    const herfAttribute = event.target.getAttribute("href");
    const currentPage = document.querySelector(herfAttribute);
    currentPage.classList.add("current");
  });
});

const form = document.querySelector('[data-js="form"]');
const pageHome = document.querySelector('[data-js="page-home"]');
const questionInput = document.getElementById("question");
const questionInputLength = document.querySelector(
  '[data-js="question-length"]'
);
const answerInput = document.getElementById("answer");
const answerInputLength = document.querySelector('[data-js="answer-length"]');

//length of input
function leftCharacters(inputLength) {
  const leftCharacters = 150 - event.target.value.length;
  inputLength.textContent = `${leftCharacters} characters left`;
  inputLength.classList.remove("block--invisible");
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

  const newCard = document.createElement("article");
  newCard.classList.add("card");

  const newH2 = document.createElement("h2");
  newH2.textContent = `${data.question}`;
  const bookmarkBtn = document.createElement("button");
  bookmarkBtn.classList.add("card__bookmark", "card__bookmark--visible");
  bookmarkBtn.setAttribute("data-js", "botton");
  bookmarkBtn.textContent = "📁";
  const hideBtn = document.createElement("button");
  hideBtn.classList.add("card__button");
  hideBtn.setAttribute("data-js", "show-answer-btn", "type", "button");
  hideBtn.textContent = "Hide Answer";

  const answer = document.createElement("p");
  answer.textContent = `${data.answer}`;

  const tags = document.createElement("ul");
  tags.classList.add("card__categories");
  tags.innerHTML = `<li># ${data.question}</li>`;

  //question.textContent = `${data.question}`;
  /*  newCard.innerHTML = `
  <h2>${data.question}</h2>
  <button
    class="card__bookmark card__bookmark--visible"
    aria-label="bookmark"
    data-js="button"
  >
    📁
  </button>
  <button
    type="button"
    class="card__button"
    aria-label="show answer button"
    data-js="show-answer-btn"
  >
    Hide Answer
  </button>
  <p>${data.answer}</p>
  <ul class="card__categories">
    <li># ${data.question}</li>
  </ul>
`; */

  newCard.append(newH2);
  newCard.append(bookmarkBtn);
  newCard.append(hideBtn);
  newCard.append(answer);
  newCard.append(tags);

  bookmarkBtn.addEventListener("click", () => {
    bookmarkBtn.classList.toggle("card__bookmark--color");
  });

  hideBtn.addEventListener("click", (event) => {
    const currentAnswer = hideBtn.nextSibling;
    if (currentAnswer.classList.contains("block--invisible")) {
      hideBtn.textContent = "Hide Answer";
    } else {
      hideBtn.textContent = "Show Answer";
    }
    currentAnswer.classList.toggle("block--invisible");
  });

  pageHome.append(newCard);
  /*  showAnswer();
  saveBookmark(); */
  event.target.reset();
  event.target.elements.question.focus();
  questionInputLength.classList.add("block--invisible");
  answerInputLength.classList.add("block--invisible");
});

showAnswer();
saveBookmark();
