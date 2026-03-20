<template>
  <div id="app-root">
    <NavBar />
    <HeroSection />
    <GallerySection />
    <AboutSection />
    <ContactSection />
    <FooterSection />
    <Lightbox />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import GallerySection from './components/GallerySection.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
import Lightbox from './components/Lightbox.vue'
import { useLightbox } from './composables/useLightbox'
import { useFadeIn } from './composables/useFadeIn'
import { onMounted } from 'vue'

const { } = useLightbox()

onMounted(() => {
  useFadeIn()
})
</script>

<style scoped>
#app-root {
  min-height: 100vh;
}
</style>
