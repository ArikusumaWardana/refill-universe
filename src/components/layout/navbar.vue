<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import RefillLogo from '@/assets/refill-logo/refill-logo.png'

// Define navigation menu items with names and corresponding links
const navMenu = ref([
  { name: 'Home', link: '#home' },
  { name: 'About Us', link: '#about-us' },
  { name: 'Community Structure', link: '#community-structure' },
  { name: 'Gallery', link: '#gallery' }
])

// Reactive variable to track whether the menu is open (for mobile)
const isMenuOpen = ref(false)

// Reactive variable to track if the user has scrolled down
const isScrolled = ref(false)

// Reactive variable to store the currently active section
const activeSection = ref('')

// Reactive variable to store references to all sections on the page
const sections = ref([])

// Function to toggle the mobile menu open/closed
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// Function to handle scroll events and update active section
const handleScroll = () => {
  // Check if user has scrolled past a certain threshold
  isScrolled.value = window.scrollY > 50 ? true : false

  // Determine the currently active section based on scroll position
  let currentSection = ''
  sections.value.forEach((section) => {
    const rect = section.getBoundingClientRect()
    if (rect.top <= 100 && rect.bottom >= 100) {
      currentSection = section.id
    }
  })

  activeSection.value = currentSection
}

// Function to smoothly scroll to a given section
const scrollToSection = (link) => {
  const section = document.querySelector(link)
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    })
    // Close the mobile menu after scrolling
    isMenuOpen.value = false
  }
}

// When the component is mounted to the DOM...
onMounted(() => {
  // ...start listening for scroll events and call the handleScroll function when they occur.
  window.addEventListener('scroll', handleScroll)

  // ...get all the <section> elements on the page and store them in the sections array.
  sections.value = Array.from(document.querySelectorAll('section'))
})

// Before the component is unmounted from the DOM...
onBeforeUnmount(() => {
  // ...stop listening for scroll events to prevent memory leaks.
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div>
    <nav
      :class="['fixed w-full z-50 transition-all', { 'bg-gray-800 shadow-md': isScrolled }]"
      ref="navbar"
    >
      <div class="container mx-auto flex justify-between items-center py-4 px-8 lg:px-14">
        <!-- Logo dan Judul Website -->
        <div class="flex items-center space-x-2">
          <img :src="RefillLogo" alt="Logo" class="h-8 w-8" />
          <span class="text-xl font-bold text-white">Refill.Universe</span>
        </div>

        <!-- Menu -->
        <div class="hidden md:flex space-x-5">
          <a
            v-for="(data, index) in navMenu"
            :key="index"
            :href="data.link"
            class="menu-item text-white font-bold"
            :class="{ active: activeSection === data.link.slice(1) }"
            @click.prevent="scrollToSection(data.link)"
          >
            {{ data.name }}
          </a>
        </div>

        <!-- Icon Burger untuk Mobile -->
        <div class="md:hidden flex items-center">
          <button @click="toggleMenu" class="focus:outline-none">
            <i class="fas fa-bars text-xl text-white"></i>
          </button>
        </div>
      </div>

      <!-- Menu Mobile -->
      <div v-if="isMenuOpen" class="md:hidden">
        <a
          v-for="(data, index) in navMenu"
          :key="index"
          :href="data.link"
          class="block py-2 px-4 text-sm text-white hover:bg-gray-200 hover:text-gray-800 focus:text-gray-800"
          @click.prevent="scrollToSection(data.link)"
        >
          {{ data.name }}
        </a>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.menu-item {
  padding: 0.3rem 0.4rem;
  position: relative;
  text-decoration: none;
  transition: color 0.1s ease;
}

.menu-item::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  background: linear-gradient(to right, #019733, #025f8b);
  left: 50%;
  bottom: -2px;
  transition:
    width 0.1s ease,
    left 0.1s ease;
}

.menu-item:hover::after {
  width: 100%;
  left: 0;
}

.menu-item.active {
  color: white;
}

.menu-item.active::after {
  width: 100%;
  left: 0;
}
</style>