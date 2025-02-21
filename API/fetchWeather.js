import fetch from "node-fetch";

const fetchWeather = async (city) => {
    const apiKey = process.env.API_KEY;

    if (!city) {
        throw new Error("City name is required");
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${encodeURIComponent(city)}&appid=${apiKey}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error("City not found");
    }

    const data = await response.json();
    return data;
};

export default fetchWeather;
