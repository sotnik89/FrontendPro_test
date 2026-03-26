// За допомогою запиту вивести виджет погоди. Ресурс API https://openweathermap.org/current
//
//     Також потрібно додати кнопку оновлення данних.

const url =     `https://api.openweathermap.org/data/2.5/weather?lat=46.48&lon=30.73&appid=26567086ca3cc96a017379cca2bb9c04&units=metric`;

const refreshBtn = document.querySelector("#refresh-btn");
const desc = document.querySelector("#desc");
const city = document.querySelector("#city");
const temp = document.querySelector("#temp");
const humidity = document.querySelector("#humidity");

function renderWeather(data) {
    city.textContent = data.name;
    temp.innerHTML = `
    Temperature: ${Math.round(data.main.temp)}°C <br>
    Feels like: ${Math.round(data.main.feels_like)}°C
    `;
    desc.textContent = data.weather[0].description;
    humidity.textContent = `Humidity: ${data.main.humidity} %`;
}
function getWeather() {
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            renderWeather(data);
            console.log("Data updated", data);
        })
        .catch(err => {
            console.error(err);
            desc.textContent = "Error connection";
        });
}
refreshBtn.addEventListener("click", getWeather);
getWeather();
