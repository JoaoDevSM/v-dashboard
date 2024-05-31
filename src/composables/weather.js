// stores/weather.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useWeatherStore = defineStore('weather', {
    state: () => ({
        date: new Date(),
        currentWeather: {},
        currentWeatherUnits: null,
        dailyWeather: {},
        dailyWeatherUnits: null
    }),
    actions: {
        getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
            } else {
                console.log("Geolocalização não é suportada por este navegador.");
            }
        },
        showPosition(position) {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            this.getWeather(lat, lon);
        },
        showError(error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    console.log("Usuário negou a solicitação de Geolocalização.");
                    break;
                case error.POSITION_UNAVAILABLE:
                    console.log("Informação de localização não está disponível.");
                    break;
                case error.TIMEOUT:
                    console.log("A solicitação para obter a localização do usuário expirou.");
                    break;
                case error.UNKNOWN_ERROR:
                    console.log("Um erro desconhecido ocorreu.");
                    break;
            }
        },
        async getWeather(lat, lon) {
            let apiURL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto`;

            try {
                let response = await axios.get(apiURL);
                this.displayWeather(response.data);
            } catch (error) {
                console.log("Erro ao obter dados climáticos: " + error);
            }
        },
        displayWeather(data) {
            this.currentWeather = data.current_weather;
            this.currentWeatherUnits = data.current_weather_units;
            this.dailyWeather = data.daily;
            this.dailyWeatherUnits = data.daily_units;
        }
    }
});
