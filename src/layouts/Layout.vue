<script setup>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <NavBar />
  <main>
    <router-view />
  </main>
  <Footer />
</template>
