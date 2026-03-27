// Реалізувати таймер відліку:
//
//     Початок таймера визначати із змінної
// Відобразити на сторінці час у форматі 01:25
// Коли закінчився таймер зупинити його
const displayTimer = document.querySelector(".displayTimer")
const timer_stopped = document.querySelector(".timer_stopped")
let timer = 90;

function formatTimer (value){
    let minutes = Math.floor(value / 60);
    let seconds = value % 60;
    const showMinutes = String(minutes).padStart(2, '0');
    const showSeconds = String(seconds).padStart(2, '0');
    return `${showMinutes}:${showSeconds}`;
};

const countDown = setInterval(() => {
    displayTimer.innerHTML = `Сountdown timer:<br> ${formatTimer(timer)}`;
    if (timer <= 0) {
        clearInterval(countDown);
        timer_stopped.textContent = "Timer stopped";
        timer_stopped.classList.add('timer_stopped');
    } else {
        timer--;
    }
}, 1000);


