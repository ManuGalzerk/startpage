class WeatherForecastClient {
  constructor(lat, lon) {
    this.appId = "50a34e070dd5c09a99554b57ab7ea7e2"; // Sostituisci con la tua API Key
    this.url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${this.appId}`;
  }

  async getWeather() {
    return fetch(this.url)
      .then((res) => res.json())
      .then((data) => ({
        temperature: Math.round(data.main.temp),
        condition: data.weather[0].main.toLowerCase(),
      }))
      .catch((err) => console.warn("Errore API meteo:", err));
  }
}

// USO: Ottieni il meteo per la tua posizione
const client = new WeatherForecastClient(43.370096, 13.579037);
client.getWeather().then((data) => console.log(data));
