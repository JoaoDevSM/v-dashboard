<script setup>
import { ref } from 'vue'
import card from '../components/dashboard/card.vue'
</script>

<template>
    <main class="lg:flex lg:space-x-4 lg:space-y-0 space-y-4">
        <div class="lg:w-[60%] w-full h-full flex-shrink-0">
            <card>
                <div class="font-semibold">
                    Pontos de alagamento
                </div>
            </card>
        </div>
        <div class="flex w-full gap-4 flex-shrink flex-col">
            <card>
                <div class="font-semibold">Céu encoberto e potencial para chuvas isoladas</div>
                <p> 27/05/2024 16:03 - Segunda-feira</p>
            </card>
            <card>
                <div class="font-semibold">Sobre o projeto</div>
            </card>
        </div>
    </main>
</template>
