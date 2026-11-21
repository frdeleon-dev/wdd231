const forecastContainer = document.querySelector("#forecast-container");

const myForecastKey = "e4eb580d16faf33e244ecb81175d4bc9"
const myForecastLat = "14.63"
const myForecastLong = "-90.50"


const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${myForecastLat}&lon=${myForecastLong}&appid=${myForecastKey}&units=metric`;

//forecast function
async function forecastApiFetch() {
    try {
        const forecastResponse = await fetch(forecastURL);
        if (forecastResponse.ok) {
            const foreCastData = await forecastResponse.json();
            
            displayForecastResult(foreCastData); 
        } else {
            throw new Error(await forecastResponse.text());
        }
    } catch (error) {
        console.error(error);
    }
} 

function displayForecastResult(data) {

    const forecastDays = data.list
        .filter(item => item.dt_txt.includes("12:00:00"))
        .slice(0, 3);

    forecastContainer.innerHTML = "";

    forecastDays.forEach(day => {

        const dayName = new Date(day.dt_txt).toLocaleDateString(
            "en-US",
            { weekday: "long" }
        );

        const iconUrl =
            `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;

        const forecastCard = document.createElement("div");

        forecastCard.innerHTML = `
            <h3>${dayName}</h3>
            <img
                src="${iconUrl}"
                alt="${day.weather[0].description}"
                width="100"
                height="100"
                loading="lazy">
            <p>${(day.main.temp)}&deg;C</p>
            <p>${day.weather[0].description}</p>
        `;

        forecastContainer.appendChild(forecastCard);
    });
}

forecastApiFetch();
