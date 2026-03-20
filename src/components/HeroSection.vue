<template>
  <section id="hero">
    <div class="hero-bg" :style="{ backgroundImage: `url(${bgImage})` }"></div>
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <p class="hero-tagline fade-up">Zachycuji okamžiky, které trvají navždy</p>
      <h1 class="hero-title fade-up">
        Petula<br />
        <em>Trávníčková</em>
      </h1>
      <div class="hero-divider fade-up"></div>
      <p class="hero-sub fade-up">Profesionální fotografka · Portréty · Svatby · Příroda</p>
      <a href="#galerie" class="hero-cta fade-up" id="hero-cta-btn">
        Prohlédnout galerii
        <span class="arrow">→</span>
      </a>
    </div>
    <button class="scroll-indicator fade-up" @click="scrollDown" aria-label="Scrollovat dolů">
      <span class="mouse">
        <span class="mouse-dot"></span>
      </span>
      <span class="scroll-text">Scrolluj</span>
    </button>
  </section>
</template>

<script setup>
const bgImage = '/images/landscape.png'

function scrollDown() {
  document.getElementById('galerie')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
section {
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transform: scale(1.04);
  animation: slow-zoom 20s ease-in-out infinite alternate;
}

@keyframes slow-zoom {
  from { transform: scale(1.04); }
  to   { transform: scale(1.12); }
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(10,10,10,0.55) 0%,
    rgba(10,10,10,0.38) 50%,
    rgba(10,10,10,0.75) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 700px;
  padding: 0 2rem;
}

.hero-tagline {
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1.4rem;
  transition-delay: 0.1s;
}

.hero-title {
  font-family: var(--font-serif);
  font-size: clamp(3.5rem, 9vw, 8rem);
  font-weight: 300;
  line-height: 1.0;
  color: var(--text);
  letter-spacing: 0.02em;
  margin-bottom: 1.8rem;
  transition-delay: 0.2s;
}
.hero-title em {
  font-style: italic;
  color: var(--gold-light);
}

.hero-divider {
  width: 50px;
  height: 1px;
  background: var(--gold);
  margin: 0 auto 1.8rem;
  transition-delay: 0.3s;
}

.hero-sub {
  font-size: 0.85rem;
  letter-spacing: 0.12em;
  color: rgba(240, 235, 228, 0.75);
  margin-bottom: 2.8rem;
  transition-delay: 0.4s;
}

.hero-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text);
  border: 1px solid var(--gold);
  padding: 1rem 2.4rem;
  transition: background 0.35s, color 0.35s, gap 0.35s;
  transition-delay: 0.5s;
}
.hero-cta:hover {
  background: var(--gold);
  color: #0a0a0a;
  gap: 1.2rem;
}

.scroll-indicator {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: rgba(240,235,228,0.5);
  transition: color 0.3s;
}
.scroll-indicator:hover { color: var(--gold); }

.mouse {
  width: 22px;
  height: 34px;
  border: 1px solid currentColor;
  border-radius: 11px;
  display: flex;
  justify-content: center;
  padding-top: 6px;
}
.mouse-dot {
  width: 4px;
  height: 4px;
  background: currentColor;
  border-radius: 50%;
  animation: mouse-scroll 1.8s ease-in-out infinite;
}
@keyframes mouse-scroll {
  0%   { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(12px); opacity: 0; }
}

.scroll-text {
  font-size: 0.6rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

.fade-up { transition-delay: 0s; }
</style>
