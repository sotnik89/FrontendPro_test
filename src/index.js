// Створити застосунок "Генератор цитат".
// Користувач повинен мати можливість:
// – показати випадкову цитату;
// – перейти до наступної цитати;
// – повернутися до попередньої цитати;
// – побачити автора цитати;
// – побачити номер поточної цитати.
// Важлива умова: код повинен бути розділений на модулі.

import { getRandomQuote, getNextQuote, getPreviousQuote, getCurrentIndex, getTotalCount } from './quotesService.js';
import { renderQuote, renderQuoteIndex } from './ui.js';
import './index.css'


const btnRandom = document.querySelector('#btn-random');
const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');
const statusText = document.querySelector('#status-text');

function updateUI(quote) {
    renderQuote(quote);
    renderQuoteIndex(getCurrentIndex(), getTotalCount());
}

btnRandom.addEventListener('click', () => {
    updateUI(getRandomQuote());
    statusText.textContent = "Random quote displayed";
});

btnNext.addEventListener('click', () => {
    updateUI(getNextQuote());
    statusText.textContent = "";
});

btnPrev.addEventListener('click', () => {
    updateUI(getPreviousQuote());
    statusText.textContent = "";
});

updateUI(getNextQuote());