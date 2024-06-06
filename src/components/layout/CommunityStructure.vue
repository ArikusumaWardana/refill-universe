<script setup> 
import { StructureData } from '@/assets/structure.js'
</script>

<template>
    <section id="community-structure" class="community-structure py-12 px-6 md:px-12 lg:px-24 bg-white min-h-screen">
        <div class="container mx-auto">
            <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center uppercase tracking-wide drop-shadow-lg">Community Structure</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
                <img v-for="(data, index) in StructureData" :key="index" :src="data.image" :alt="data.name" class="w-full h-auto">
            </div>
        </div>
    </section>
</template>

<style scoped>

.community-structure .container h2 {
    background: linear-gradient(to right, #019733, #025F8B);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px rgb(3, 134, 134);
}

</style>