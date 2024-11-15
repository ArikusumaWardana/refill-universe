  <script setup>
// Import About Us Image
import AboutUsImage from '@/assets/about-us/logo-about-us.png'
</script>

<template>
    <!-- About Us Section -->
    <section id="about-us" class="about-us py-12 px-6 md:px-12 lg:px-24 bg-white lg:my-5">
        <div class="container mx-auto flex flex-col lg:flex-row items-center">
            <div class="flex-shrink-0 mb-6 md:mb-0 md:mr-10 w-full md:w-auto flex justify-center md:justify-start">
                <img :src="AboutUsImage" alt="About Us" class="w-full max-w-xs lg:max-w-md">
            </div>
            <div class="about-us-desc text-center md:text-left w-full md:w-auto">
                <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 uppercase drop-shadow-lg tracking-wide">About Us</h2>
                <p class="text-gray-700 text-base md:text-md lg:text-lg text-justify lg:text-start">
                    <span class="font-bold">Refill Universe</span> adalah komunitas mahasiswa dari kelas Informatika Pagi 2
                    yang memiliki semangat menjelajahi dan menemukan tempat makan dengan pengalaman kuliner
                    yang memuaskan. Tidak hanya sekadar berbagi rekomendasi, komunitas ini juga bertujuan membangun kebersamaan
                    melalui perjalanan kuliner yang seru dan berkesan. Dalam setiap kunjungan ke tempat makan baru, anggota
                    Refill Universe menikmati proses eksplorasi yang tidak hanya menggugah selera, tetapi juga mempererat
                    hubungan antaranggota komunitas.
                </p>
                <p class="text-gray-700 text-base md:text-md lg:text-lg text-justify lg:text-start">
                    Dengan semangat eksplorasi dan kebersamaan, Refill Universe menjadi wadah untuk saling
                    bertukar informasi, berbagi cerita, dan menikmati momen kebahagiaan di setiap gigitan makanan
                    yang ditemukan. Komunitas ini mengedepankan nilai kebersamaan dalam pengalaman kuliner, menjadikan
                    setiap perjalanan terasa lebih bermakna. Melalui acara, diskusi, dan perjalanan kuliner bersama,
                    Refill Universe terus memperkuat jalinan persaudaraan sembari menikmati pengalaman gastronomi yang
                    memuaskan.
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
