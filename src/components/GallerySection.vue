<template>
  <section id="galerie">
    <div class="gallery-header fade-up">
      <p class="section-label">Portfólio</p>
      <h2 class="section-title">Galerie</h2>
      <div class="gold-line"></div>
      <p class="gallery-intro">
        Každý snímek je příběh. Prohlédněte si výběr z mé práce — od portrétů plných emocí
        až po krajiny zachycené v dokonalém světle.
      </p>
    </div>

    <!-- filter tabs -->
    <div class="filter-tabs fade-up">
      <button
        v-for="cat in categories"
        :key="cat.id"
        :class="['filter-btn', { active: activeCategory === cat.id }]"
        @click="activeCategory = cat.id"
        :id="`filter-${cat.id}`"
      >{{ cat.label }}</button>
    </div>

    <!-- grid -->
    <div class="gallery-grid">
      <div
        v-for="(photo, index) in filteredPhotos"
        :key="photo.id"
        class="gallery-item fade-up"
        :class="photo.size"
        @click="openLightbox(photo)"
        :id="`gallery-item-${photo.id}`"
        role="button"
        tabindex="0"
        @keyup.enter="openLightbox(photo)"
        :style="{ transitionDelay: `${(index % 6) * 0.08}s` }"
      >
        <img :src="photo.src" :alt="photo.title" loading="lazy" />
        <div class="gallery-item-overlay">
          <span class="gallery-item-icon">+</span>
          <p class="gallery-item-title">{{ photo.title }}</p>
          <p class="gallery-item-cat">{{ photo.categoryLabel }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLightbox } from '../composables/useLightbox'

const { openLightbox } = useLightbox()

const activeCategory = ref('all')

const categories = [
  { id: 'all',     label: 'Vše' },
  { id: 'portret', label: 'Portréty' },
  { id: 'krajina', label: 'Krajiny' },
  { id: 'svatba',  label: 'Svatby' },
  { id: 'priroda', label: 'Příroda' },
  { id: 'street',  label: 'Street' },
  { id: 'rodina',  label: 'Rodiny' },
]

const photos = [
  { id: 1, src: '/images/portrait.png',  title: 'Lesnní portrét',     category: 'portret', categoryLabel: 'Portrét',  size: 'tall' },
  { id: 2, src: '/images/landscape.png', title: 'Zlatá hodinka',      category: 'krajina', categoryLabel: 'Krajina',  size: 'wide' },
  { id: 3, src: '/images/wedding.png',   title: 'Podzimní láska',     category: 'svatba',  categoryLabel: 'Svatba',   size: 'normal' },
  { id: 4, src: '/images/nature.png',    title: 'Kapky na plátku',    category: 'priroda', categoryLabel: 'Příroda',  size: 'normal' },
  { id: 5, src: '/images/street.png',    title: 'Noční Praha',        category: 'street',  categoryLabel: 'Street',   size: 'tall' },
  { id: 6, src: '/images/family.png',    title: 'Rodinný moment',     category: 'rodina',  categoryLabel: 'Rodina',   size: 'wide' },
]

const filteredPhotos = computed(() =>
  activeCategory.value === 'all'
    ? photos
    : photos.filter(p => p.category === activeCategory.value)
)
</script>

<style scoped>
section { max-width: 1400px; margin: 0 auto; }

.gallery-header { text-align: center; margin-bottom: 2.5rem; }

.gallery-intro {
  max-width: 560px;
  margin: 0 auto;
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.8;
}

/* Filter tabs */
.filter-tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.6rem;
  margin-bottom: 3rem;
}
.filter-btn {
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted);
  padding: 0.5rem 1.3rem;
  border: 1px solid transparent;
  transition: all 0.3s;
}
.filter-btn:hover {
  color: var(--gold);
  border-color: var(--border);
}
.filter-btn.active {
  color: var(--gold);
  border-color: var(--gold);
  background: rgba(201,169,110,0.08);
}

/* Grid */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 300px;
  gap: 10px;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background: var(--bg-card);
}
.gallery-item.tall  { grid-row: span 2; }
.gallery-item.wide  { grid-column: span 2; }

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.gallery-item:hover img { transform: scale(1.07); }

.gallery-item-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 60%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s;
}
.gallery-item:hover .gallery-item-overlay { opacity: 1; }

.gallery-item-icon {
  font-size: 2.5rem;
  color: var(--gold);
  line-height: 1;
  margin-bottom: 0.6rem;
  transform: translateY(12px);
  transition: transform 0.4s;
}
.gallery-item:hover .gallery-item-icon { transform: translateY(0); }

.gallery-item-title {
  font-family: var(--font-serif);
  font-size: 1.15rem;
  color: var(--text);
  transform: translateY(12px);
  transition: transform 0.4s 0.05s;
}
.gallery-item:hover .gallery-item-title { transform: translateY(0); }

.gallery-item-cat {
  font-size: 0.65rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gold);
  transform: translateY(12px);
  transition: transform 0.4s 0.1s;
}
.gallery-item:hover .gallery-item-cat { transform: translateY(0); }

/* Responsive */
@media (max-width: 900px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 240px;
  }
  .gallery-item.wide { grid-column: span 2; }
}
@media (max-width: 580px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 260px;
  }
  .gallery-item.tall,
  .gallery-item.wide { grid-column: span 1; grid-row: span 1; }
}
</style>
