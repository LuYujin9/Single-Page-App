import { showAnswer } from "./components/Card/Card.js";

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

//showAnswer();
