<script setup>
import { routes } from '../composables/routes.js'
import { useRoute } from 'vue-router';
const router = useRoute();
</script>
<template>
    <nav class="flex bg-base-300 p-2 border-b-[3px] border-primary items-center space-x-2">
        <button :class="{ 'bg-primary': route.route.split('/')[1] === router.path.split('/')[1] }"
            @click="$router.push(route.route)" v-for="route in routes"
            class="flex items-center duration-200 hover:bg-primary/40 rounded bg-gray-700/50 p-1 py-2">
            <span class="mx-4 text-white">{{ route.name }} </span>
        </button>
    </nav>
</template>