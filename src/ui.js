// Модуль ui.js – відповідає за інтерфейс сторінки.
// – знайти HTML-елементи та створити функції для відображення даних:
// – renderQuote(quote) – відображає текст цитати та автора;
// – renderQuoteIndex(index, total) – показує номер цитати (наприклад "Цитата 2 з 5").

const quoteText = document.querySelector('#quote-text');
const quoteAuthor = document.querySelector('#quote-author');
const quoteIndexInfo = document.querySelector('#quote-index');

export function renderQuote(quote) {
    quoteText.textContent = quote.text;
    quoteAuthor.textContent = `Author: ${quote.author}`;
}

export function renderQuoteIndex(index, total) {
    quoteIndexInfo.textContent = `Quote ${index + 1} from ${total}`;
}