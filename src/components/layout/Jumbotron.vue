<script setup>
import RefillLogo from '@/assets/refill-logo/refill-logo.png'
</script>

<template>

    <!-- Section Jumbotron -->
    <section id="home"class="jumbotron relative flex items-center justify-center min-h-screen h-screen max-h-screen bg-cover bg-center" style="background-image: url('/jumbotron/jumbotron.png')">
        <div class="overlay absolute inset-0 bg-black"></div>
        <div class="content relative text-center text-white px-4">
            <img :src="RefillLogo" alt="Logo" class="mx-auto mb-4 w-24 h-24 md:w-32 md:h-32 drop-shadow">
            <h1 class="text-xl md:text-3xl lg:text-5xl uppercase font-bold">welcome to</h1>
            <h2 class="text-3xl md:text-4xl lg:text-7xl font-bold mt-2 uppercase tracking-wide drop-shadow-md">refill universe</h2>
            <span class="text-sm md:text-base font-medium text-gray-400">- Eat More For Better Tomorrow -</span>
        </div>
    </section>
    
</template>
  
<style scoped>
.jumbotron {
    position: relative;
    overflow: hidden;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
}

.content {
    position: relative;
    z-index: 10;
}

.content h1 {
    -webkit-text-stroke: 0.5px blue;
    text-shadow: 2px 2px 0.5px #019733;
}

@media (min-width: 768px) {
    .content h1 {
    -webkit-text-stroke: 1.5px blue;
    text-shadow: 3.5px 3.5px 0.5px #019733;
}
}

.content h2 {
    background: linear-gradient(to right, #019733, #025F8B);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px rgb(3, 134, 134);
}

.jumbotron::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px);
}
</style>
  