<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import RefillLogo from '@/assets/refill-logo/refill-logo.png'

const navMenu = ref([
  { name: 'Home', link: '#home' },
  { name: 'About Us', link: '#about-us' },
  { name: 'Community Structure', link: '#community-structure' },
  { name: 'Gallery', link: '#gallery' }
])

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const activeSection = ref('')

const sections = ref([])

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleScroll = () => {
  if (window.scrollY > 50) {
    isScrolled.value = true
  } else {
    isScrolled.value = false
  }

  let currentSection = ''
  sections.value.forEach(section => {
    const rect = section.getBoundingClientRect()
    if (rect.top <= 100 && rect.bottom >= 100) {
      currentSection = section.id
    }
  })

  activeSection.value = currentSection
}

const scrollToSection = (link) => {
  const section = document.querySelector(link)
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    })
    isMenuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  sections.value = Array.from(document.querySelectorAll('section'))
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div>
    <nav :class="['fixed w-full z-50 transition-all', { 'bg-gray-800 shadow-md': isScrolled }]" ref="navbar">
      <div class="container mx-auto flex justify-between items-center py-4 px-8 lg:px-14">
        <!-- Logo dan Judul Website -->
        <div class="flex items-center space-x-2">
          <img :src="RefillLogo" alt="Logo" class="h-8 w-8">
          <span class="text-xl font-bold text-white">Refill.Universe</span>
        </div>

        <!-- Menu -->
        <div class="hidden md:flex space-x-5">
          <a
            v-for="(data, index) in navMenu"
            :key="index"
            :href="data.link"
            class="menu-item text-white"
            :class="{ 'active': activeSection === data.link.slice(1) }"
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
          class="block py-2 px-4 text-sm text-white hover:bg-gray-200 focus:text-gray-800"
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
  background: linear-gradient(to right, #019733, #025F8B);
  left: 50%;
  bottom: -2px;
  transition: width 0.1s ease, left 0.1s ease;
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