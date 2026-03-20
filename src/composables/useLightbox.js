import { ref, computed } from 'vue'

// Singleton state shared across all components
const isOpen = ref(false)
const photos = ref([])
const currentIndex = ref(0)

const current = computed(() => photos.value[currentIndex.value] ?? null)

function openLightbox(photo) {
    // If we receive a single photo, make an array with just that
    // (gallery could pass the full array in the future)
    photos.value = photo.allPhotos ?? [photo]
    currentIndex.value = photo.allPhotos
        ? photo.allPhotos.findIndex(p => p.id === photo.id)
        : 0
    isOpen.value = true
}

function close() {
    isOpen.value = false
}

function next() {
    if (photos.value.length > 1) {
        currentIndex.value = (currentIndex.value + 1) % photos.value.length
    }
}

function prev() {
    if (photos.value.length > 1) {
        currentIndex.value = (currentIndex.value - 1 + photos.value.length) % photos.value.length
    }
}

export function useLightbox() {
    return { isOpen, current, openLightbox, close, next, prev }
}
