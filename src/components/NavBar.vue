<template>
  <nav :class="{ scrolled: isScrolled, 'menu-open': menuOpen }" id="navbar">
    <div class="nav-inner">
      <a href="#hero" class="nav-logo" @click="closeMenu">
        Petula Trávníčková
      </a>

      <button
        class="hamburger"
        @click="toggleMenu"
        :aria-expanded="menuOpen"
        aria-label="Otevřít menu"
        id="hamburger-btn"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul class="nav-links" :class="{ open: menuOpen }">
        <li v-for="link in links" :key="link.id">
          <a
            :href="`#${link.id}`"
            :class="{ active: activeSection === link.id }"
            @click="closeMenu"
          >{{ link.label }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)
const activeSection = ref('hero')

const links = [
  { id: 'galerie', label: 'Galerie' },
  { id: 'o-mne', label: 'O mně' },
  { id: 'kontakt', label: 'Kontakt' },
]

function toggleMenu() { menuOpen.value = !menuOpen.value }
function closeMenu() { menuOpen.value = false }

function onScroll() {
  isScrolled.value = window.scrollY > 60

  const sections = ['hero', 'galerie', 'o-mne', 'kontakt']
  for (const id of [...sections].reverse()) {
    const el = document.getElementById(id)
    if (el && window.scrollY >= el.offsetTop - 120) {
      activeSection.value = id
      break
    }
  }
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background 0.4s, backdrop-filter 0.4s, box-shadow 0.4s;
  padding: 0 5vw;
}

nav.scrolled {
  background: rgba(10, 10, 10, 0.88);
  backdrop-filter: blur(16px);
  box-shadow: 0 1px 0 var(--border);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.nav-logo {
  font-family: var(--font-serif);
  font-size: 1.35rem;
  font-weight: 400;
  letter-spacing: 0.04em;
  color: var(--text);
  transition: color 0.3s;
}
.nav-logo:hover { color: var(--gold); }

.nav-links {
  list-style: none;
  display: flex;
  gap: 2.5rem;
}

.nav-links a {
  font-family: var(--font-sans);
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-muted);
  position: relative;
  padding-bottom: 4px;
  transition: color 0.3s;
}
.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--gold);
  transition: width 0.3s;
}
.nav-links a:hover,
.nav-links a.active {
  color: var(--gold);
}
.nav-links a:hover::after,
.nav-links a.active::after {
  width: 100%;
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 6px;
  padding: 4px;
  z-index: 1001;
}
.hamburger span {
  display: block;
  width: 26px;
  height: 1.5px;
  background: var(--text);
  transition: transform 0.3s, opacity 0.3s;
}
.menu-open .hamburger span:nth-child(1) {
  transform: translateY(7.5px) rotate(45deg);
}
.menu-open .hamburger span:nth-child(2) {
  opacity: 0;
}
.menu-open .hamburger span:nth-child(3) {
  transform: translateY(-7.5px) rotate(-45deg);
}

@media (max-width: 768px) {
  .hamburger { display: flex; }
  .nav-links {
    position: fixed;
    inset: 0;
    background: rgba(10,10,10,0.97);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    transform: translateX(100%);
    transition: transform 0.4s cubic-bezier(0.77, 0, 0.18, 1);
  }
  .nav-links.open {
    transform: translateX(0);
  }
  .nav-links a {
    font-size: 1.1rem;
    letter-spacing: 0.2em;
  }
}
</style>
