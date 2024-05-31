<script setup lang="ts">
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'
import weather from '../components/weather.vue'
import minNav from './minNav.vue'
</script>

<template>
  <div class="flex h-screen bg-gray-800 font-roboto">
    <Sidebar />
    <div class="flex-1 flex flex-col overflow-hidden">
      <Header />
      <minNav class="hidden lg:flex"/>
      <weather/>
  
      <main class="flex-1 overflow-x-hidden overflow-y-auto text-white">
        <div class="container transition transform duration-300 ease-in-out mx-auto px-6 py-8">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>
