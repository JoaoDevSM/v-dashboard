<script setup>
import { ref, onMounted, computed } from 'vue';
import { useWeatherStore } from '../composables/weather.js';
const weatherStore = useWeatherStore();
onMounted(async () => {
    await weatherStore.getLocation();
});

const currentWeather = computed(() => weatherStore.currentWeather);
const currentWeatherUnits = computed(() => weatherStore.currentWeatherUnits);

const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Janeiro é 0!
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};

const date = ref(formatDate(new Date()));
</script>

<template>
    <div v-if="currentWeather && currentWeatherUnits"
        class="w-full mt-2 px-4 py-2 border-y- text-white bg-gray-900 border-primary">
        <div class="flex justify-between items-center ">
            <main class="flex items-center divide-x divide-gray-500 space-x-2">
                <div class="flex items-center px-2 space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi w-6 h-6 bi-thermometer-high" viewBox="0 0 16 16">
                        <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585a1.5 1.5 0 0 1 1 1.415z" />
                        <path
                            d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z" />
                    </svg>
                    <p>{{ currentWeather.temperature }} {{ currentWeatherUnits.temperature }}</p>
                </div>
                <div class="flex px-2 items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi w-6 h-6 bi-wind" viewBox="0 0 16 16">
                        <path
                            d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z" />
                    </svg>
                    <p>{{ currentWeather.windspeed }} {{ currentWeatherUnits.windspeed }}</p>
                </div>
            </main>
            <footer>
                {{ date }}
            </footer>
        </div>
    </div>
</template>
