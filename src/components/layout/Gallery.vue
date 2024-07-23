<script setup>
import { ref } from 'vue'
import { gallery } from '@/assets/gallery.js'

const displayedImages = ref(gallery.value.slice(0, 6))
const showLoadLessButton = ref(false)

const loadMoreImages = () => {
  const currentLength = displayedImages.value.length
  const newImages = gallery.value.slice(currentLength, currentLength + 6)
  displayedImages.value = displayedImages.value.concat(newImages)
  
  // Tampilkan tombol "Load Less" jika seluruh gambar sudah ditampilkan
  if (displayedImages.value.length === gallery.value.length) {
    showLoadLessButton.value = true
  }
}

const loadLessImages = () => {
  displayedImages.value = gallery.value.slice(0, 6)
  showLoadLessButton.value = false
}

</script>

<template>
    <section id="gallery" class="gallery py-12 px-6 md:px-12 lg:px-24 bg-white min-h-screen lg:mb-24">
        <div class="container mx-auto">
            <h2 class="text-3xl lg:text-4xl font-bold mb-8 text-center uppercase tracking-wide drop-shadow-lg">Gallery</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-1">
                <img v-for="(item, index) in displayedImages" :key="index" :src="item.image" alt="Gallery Image" class="w-full w-100 h-auto md:h-80 object-cover rounded-sm">
            </div>
            <div class="btn-load flex justify-center mt-2">
                <button @click="loadMoreImages" v-if="displayedImages.length < gallery.length" class="px-6 py-2 w-full text-white text-base font-semibold transition-all tracking-wide">
                <span>Load More</span> <i class="fa-solid fa-caret-down"></i>
                </button>
                <button @click="loadLessImages" v-if="showLoadLessButton" class="px-6 py-2 w-full text-white text-base font-semibold transition-all tracking-wide">
                <span>Load Less</span> <i class="fa-solid fa-caret-up"></i>
                </button>
            </div>
        </div>
    </section>
</template>

<style scoped>

.gallery .container h2 {
    background: linear-gradient(to right, #019733, #025F8B);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px rgb(3, 134, 134);
}

.btn-load button {
    background: linear-gradient(to right, #019733, #025F8B);
}

.btn-load button {
    background: linear-gradient(to right, #019733, #025F8B);
}

</style>