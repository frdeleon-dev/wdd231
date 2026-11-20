const firstTemp = document.querySelector('#first-temp');
const firstWeatherIcon = document.querySelector('#first-icon');
const firstCaptionDesc = document.querySelector('#first-description');

const secondTemp = document.querySelector('#second-temp');
const secondWeatherIcon = document.querySelector('#second-icon');
const secondCaptionDesc = document.querySelector('#second-description');

const thirdTemp = document.querySelector('#third-temp');
const thirdWeatherIcon = document.querySelector('#third-icon');
const thirdCaptionDesc = document.querySelector('#third-description');

const firstDay = document.querySelector('#first-day');
const secondDay = document.querySelector('#second-day');
const thirdDay = document.querySelector('#third-day');

const myForecastKey = "e4eb580d16faf33e244ecb81175d4bc9"
const myForecastLat = "49.75"
const myForecastLong = "6.64"


const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${myForecastLat}&lon=${myForecastLong}&appid=${myForecastKey}&units=imperial`;

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
    const forecastDays = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);
    const day1 = forecastDays[0];
    const day2 = forecastDays[1];
    const day3 = forecastDays[2];

    const dayName1 = new Date(day1.dt_txt).toLocaleDateString(
        "en-US",
        { weekday: "long" }
    );

    const dayName2 = new Date(day2.dt_txt).toLocaleDateString(
        "en-US",
        { weekday: "long" }
    );

    const dayName3 = new Date(day3.dt_txt).toLocaleDateString(
        "en-US",
        { weekday: "long" }
    );

    firstDay.textContent = dayName1;
    secondDay.textContent = dayName2;
    thirdDay.textContent = dayName3;

    console.log(forecastDays);
    console.log(day1.weather);
    console.log(day2.weather);
    console.log(day3.weather);

    firstTemp.innerHTML = `${(day1.main.temp)}&deg;F`;
    firstWeatherIcon.src = `https://openweathermap.org/img/wn/${day1.weather[0].icon}@2x.png`;
    firstWeatherIcon.alt = day1.weather[0].description;
    firstCaptionDesc.textContent = day1.weather[0].description;

    secondTemp.innerHTML = `${(day2.main.temp)}&deg;F`;
    secondWeatherIcon.src = `https://openweathermap.org/img/wn/${day2.weather[0].icon}@2x.png`;
    secondWeatherIcon.alt = day2.weather[0].description;
    secondCaptionDesc.textContent = day2.weather[0].description;

    thirdTemp.innerHTML = `${(day3.main.temp)}&deg;F`;
    thirdWeatherIcon.src = `https://openweathermap.org/img/wn/${day3.weather[0].icon}@2x.png`;
    thirdWeatherIcon.alt = day3.weather[0].description;
    thirdCaptionDesc.textContent = day3.weather[0].description;

}

forecastApiFetch();
