// Пишемо свій слайдер зображень, який повинен:
//
// Відображати зображення та кнопки Next, Prev з боків від зображення.
// При кліку на Next - показуємо наступне зображення.
// При кліку на Prev - попереднє
// При досягненні останнього зображення - ховати кнопку Next. Аналогічно з першим зображенням і кнопкою Prev
// Кількість слайдів може бути будь-якою
// Додати можливість навігації через точки під слайдами

const images = [
    { link: 'images/1_.jpg', alt: 'Слайд 1' },
    { link: 'images/2_.jpg', alt: 'Слайд 2' },
    { link: 'images/3_.jpg', alt: 'Слайд 3' },
    { link: 'images/4_.jpg', alt: 'Слайд 4' }
];
let currentIndex = 0;
// Отримуємо посилання на контейнери
const wrapper = document.querySelector('#slidesWrapper');
const dotsBox = document.querySelector('#dotsBox');
const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');

// 1. Створюємо елементи (зображення та точки)
images.forEach((imgData, index) => {
    // Створення зображення
    const img = document.createElement('img');
    img.src = imgData.link;
    img.alt = imgData.alt;
    img.className = 'slide';
    wrapper.appendChild(img);

    // Створення точки
    const dot = document.createElement('span');
    dot.className = 'dot';
    // Додаємо клік на точку через addEventListener
    dot.addEventListener('click', () => updateSlider(index));
    dotsBox.appendChild(dot);
});

// Отримуємо колекції після створення
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

// 2. Основна функція оновлення стану
function updateSlider(index) {
    currentIndex = index;

    // Перемикаємо класи активності
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentIndex);
        dots[i].classList.toggle('active', i === currentIndex);
    });

    // Логіка видимості кнопок
    prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
    nextButton.style.display = currentIndex === images.length - 1 ? 'none' : 'block';
}

// 3. Призначаємо події на кнопки через addEventListener
nextButton.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        updateSlider(currentIndex + 1);
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        updateSlider(currentIndex - 1);
    }
});
// Ініціалізація першого слайда
updateSlider(0);
