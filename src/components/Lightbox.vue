<template>
  <Teleport to="body">
    <Transition name="lightbox">
      <div
        v-if="isOpen"
        class="lightbox-backdrop"
        @click.self="close"
        @keydown.left="prev"
        @keydown.right="next"
        @keydown.esc="close"
        tabindex="0"
        ref="backdropRef"
        id="lightbox-overlay"
      >
        <button class="lb-close" @click="close" aria-label="Zavřít" id="lightbox-close">✕</button>
        <button class="lb-arrow lb-prev" @click="prev" aria-label="Předchozí">‹</button>
        <button class="lb-arrow lb-next" @click="next" aria-label="Další">›</button>

        <div class="lb-content">
          <Transition name="lb-img" mode="out-in">
            <img
              :key="current?.id"
              :src="current?.src"
              :alt="current?.title"
              class="lb-image"
            />
          </Transition>
          <div class="lb-caption">
            <p class="lb-title">{{ current?.title }}</p>
            <p class="lb-cat">{{ current?.categoryLabel }}</p>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'
import { useLightbox } from '../composables/useLightbox'

const { isOpen, current, close, prev, next } = useLightbox()
const backdropRef = ref(null)

watch(isOpen, async (val) => {
  if (val) {
    document.body.style.overflow = 'hidden'
    await nextTick()
    backdropRef.value?.focus()
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
.lightbox-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(5, 5, 5, 0.96);
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
}

.lb-content {
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
}
.lb-image {
  max-width: 90vw;
  max-height: 78vh;
  object-fit: contain;
  box-shadow: 0 30px 80px rgba(0,0,0,0.6);
}

.lb-caption {
  text-align: center;
}
.lb-title {
  font-family: var(--font-serif);
  font-size: 1.2rem;
  color: var(--text);
}
.lb-cat {
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold);
  margin-top: 0.25rem;
}

.lb-close {
  position: fixed;
  top: 1.5rem;
  right: 1.8rem;
  font-size: 1.4rem;
  color: var(--text-muted);
  transition: color 0.3s;
}
.lb-close:hover { color: var(--gold); }

.lb-arrow {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  font-size: 3rem;
  color: var(--text-muted);
  padding: 0.5rem 1rem;
  transition: color 0.3s;
}
.lb-arrow:hover { color: var(--gold); }
.lb-prev { left: 1rem; }
.lb-next { right: 1rem; }

/* Transitions */
.lightbox-enter-active,
.lightbox-leave-active { transition: opacity 0.35s; }
.lightbox-enter-from,
.lightbox-leave-to   { opacity: 0; }

.lb-img-enter-active,
.lb-img-leave-active { transition: opacity 0.25s, transform 0.25s; }
.lb-img-enter-from   { opacity: 0; transform: scale(0.96); }
.lb-img-leave-to     { opacity: 0; transform: scale(1.04); }
</style>
