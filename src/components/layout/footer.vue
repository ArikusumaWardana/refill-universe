<script setup>

import logo from '@/assets/refill-logo/refill-logo.png'

</script>

<template>
  <footer class="bg-gray-800 text-white py-8">
    <div class="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
      <div class="flex flex-col items-center md:items-start">
        <img :src="logo" alt="Logo" class="h-10 w-10 mb-2">
        <h2 class="text-xl font-semibold">Refill.Universe</h2>
        <p class="text-gray-400 text-sm">Eat More For Better Tomorrow</p>
      </div>

      <div class="flex flex-col items-center md:items-start">
        <h3 class="text-lg font-semibold">Follow Us</h3>
        <div class="mt-2 flex space-x-4">
          <a href="https://github.com/ArikusumaWardana/refill-universe" target="_blank" class="hover:text-gray-400 text-lg"><i class="fab fa-github"></i></a>
          <a href="https://www.instagram.com/refill.universe/" target="_blank" class="hover:text-gray-400 text-lg"><i class="fab fa-instagram"></i></a>
        </div>
    </div>
    </div>
    <div class="mt-8 text-center text-gray-400 text-sm">
      &copy; 2024 Refill Universe. All rights reserved.
    </div>
  </footer>
</template>
