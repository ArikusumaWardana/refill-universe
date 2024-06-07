<script setup>
// Import About Us Image
import AboutUsImage from '@/assets/about-us/logo-about-us.png'
</script>

<template>
    <!-- About Us Section -->
    <section id="about-us" class="about-us py-12 px-6 md:px-12 lg:px-24 bg-white h-screen">
        <div class="container mx-auto flex flex-col md:flex-row items-center">
            <div class="flex-shrink-0 mb-6 md:mb-0 md:mr-10 w-full md:w-auto flex justify-center md:justify-start">
                <img :src="AboutUsImage" alt="About Us" class="w-full max-w-xs lg:max-w-md">
            </div>
            <div class="about-us-desc text-center md:text-left w-full md:w-auto">
                <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 uppercase drop-shadow-lg tracking-wide">About Us</h2>
                <p class="text-gray-700 text-base md:text-lg lg:text-xl text-justify md:text-start">
                    <span class="font-bold">Refill Universe</span> is a community of students from the Morning Informatics 2 class who have a passion for exploring and 
                    discovering food places that offer a filling culinary experience. places that offer a satisfying culinary experience. 
                    This community is not just about sharing recommendations, but also builds togetherness through exciting and rewarding 
                    culinary journeys. With a spirit of exploration and sense of togetherness, Refill Universe becomes a place for its members 
                    to exchange information and enjoy the moments of togetherness in every bite of food they find.
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
