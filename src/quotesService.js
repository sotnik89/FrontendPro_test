// У цьому модулі потрібно реалізувати такі функції:
// – getRandomQuote() – отримання випадкової цитати;
// – getNextQuote() – повертає наступну цитату із списку;
// – getPreviousQuote() – повертає попередню цитату із списку;
// – getCurrentIndex() – повертає індекс або номер цитати.

const quotes = [
    { text: "Go confidently in the direction of your dreams! Live the life you've imagined.", author: "Henry David Thoreau" },
    { text: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
    { text: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson" },
    { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
    { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" }
];

let currentIndex = 0;

export function getRandomQuote() {
    currentIndex = Math.floor(Math.random() * quotes.length);
    return quotes[currentIndex];
}

export function getNextQuote() {
    currentIndex = (currentIndex + 1) % quotes.length;
    return quotes[currentIndex];
}

export function getPreviousQuote() {
    currentIndex = (currentIndex - 1 + quotes.length) % quotes.length;
    return quotes[currentIndex];
}

export function getCurrentIndex() {
    return currentIndex;
}

export function getTotalCount() {
    return quotes.length;
}

