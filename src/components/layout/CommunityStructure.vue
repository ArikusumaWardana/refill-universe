<script setup> 
import { StructureData } from '@/assets/structure.js'
import { ref, computed, onMounted } from 'vue'

// Create a reactive variable to track whether the screen is considered 'mobile'
const isMobile = ref(false)

// Function to check if the screen width is within the 'mobile' range
const checkIfMobile = () => {
  isMobile.value = window.innerWidth <= 768
}

// When the component is mounted, check the screen size and add a resize listener to update 'isMobile'
onMounted(() => {
  checkIfMobile()
  window.addEventListener('resize', checkIfMobile)
})

// Computed property that reorders the StructureData array if in 'mobile' mode
const reorderedStructureData = computed(() => {
  if (isMobile.value) {
    // Create a copy of the StructureData array to avoid modifying the original
    const reordered = [...StructureData.value]
    // Extract the second item from the array
    const secondItem = reordered.splice(1, 1)[0]
    // Insert the second item at the beginning of the array
    reordered.unshift(secondItem)
    // Return the reordered array
    return reordered
  }
  // If not in 'mobile' mode, return the original StructureData array
  return StructureData.value
})

</script>

<template>
    <section id="community-structure" class="community-structure py-12 px-6 md:px-12 lg:px-24 bg-white min-h-screen">
        <div class="container mx-auto">
            <h2 class="text-3xl lg:text-4xl font-bold mb-8 text-center uppercase tracking-wide drop-shadow-lg">Community Structure</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
                <img v-for="(data, index) in reorderedStructureData" :key="index" :src="data.image" :alt="data.name" class="w-full h-auto">
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
