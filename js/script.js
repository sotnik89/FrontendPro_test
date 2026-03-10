// Пишемо свій слайдер зображень, який повинен:
//
//     Відображати зображення та кнопки Next, Prev з боків від зображення.
//     При кліку на Next - показуємо наступне зображення.
//     При кліку на Prev - попереднє
// При досягненні останнього зображення - ховати кнопку Next. Аналогічно з першим зображенням і кнопкою Prev
// Кількість слайдів може бути будь-якою
// Додати можливість навігації через точки під слайдами
const slides = document.querySelector("#slide");
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const dotsBox = document.querySelector("#dotsBox");

let currentIndex = 0;

// Створюємо точки, використовуючи деструктуризацію масиву в параметрах (пропускаємо елемент)
slides.forEach(([,], index) => {
    const dot = document.createElement('span');
    dot.className = 'dot';
    dot.onclick = () => showSlide(index);
    dotsBox.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    currentIndex = index;

    // Оновлюємо активні класи
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentIndex);
        dots[i].classList.toggle('active', i === currentIndex);
    });

    // Керуємо видимістю кнопок (true/false логіка)
    prevButton.style.visibility = currentIndex === 0 ? 'hidden' : 'visible';
    nextButton.style.visibility = currentIndex === slides.length - 1 ? 'hidden' : 'visible';
}

// Обробники подій
nextButton.onclick = () => showSlide(currentIndex + 1);
prevButton.onclick = () => showSlide(currentIndex - 1);

// Стартова ініціалізація
showSlide(0);


// const images = [
//     {},
//     {},
//     {},
//     {}
// ]
