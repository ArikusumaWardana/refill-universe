<script setup>
import AboutUsImage from '@/assets/about-us/logo-about-us.png'
</script>

<template>
    <section id="about-us" class="about-us py-12 px-6 md:px-12 lg:px-24 bg-white h-screen">
        <div class="container mx-auto flex flex-col md:flex-row items-center">
            <div class="flex-shrink-0 mb-6 md:mb-0 md:mr-10 w-full md:w-auto flex justify-center md:justify-start">
                <img :src="AboutUsImage" alt="About Us" class="w-full max-w-xs lg:max-w-md">
            </div>
            <div class="about-us-desc text-center md:text-left w-full md:w-auto">
                <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 uppercase drop-shadow-lg tracking-wide">About Us</h2>
                <p class="text-gray-700 text-base md:text-lg lg:text-xl">
                    Refill Universe adalah sebuah konsep yang menggabungkan inovasi dan keberlanjutan dalam industri makanan. 
                    Kami percaya bahwa dengan memanfaatkan sumber daya alam secara bijak dan bertanggung jawab, kita bisa menciptakan 
                    masa depan yang lebih baik. Kami berkomitmen untuk menyediakan produk makanan yang tidak hanya lezat tetapi juga 
                    mendukung keberlanjutan lingkungan.
                </p>
            </div>
        </div>
    </section>
</template>

<style scoped>
.about-us-desc h2 {
    background: linear-gradient(to right, #019733, #025F8B);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px rgb(3, 134, 134);
}
</style>
