<template>
  <section id="o-mne" class="about-section">
    <div class="about-image fade-up">
      <div class="about-img-frame">
        <img src="/images/about.png" alt="Petula Trávníčková – fotografka" />
      </div>
      <div class="about-img-accent"></div>
    </div>

    <div class="about-content fade-up">
      <p class="section-label">O mně</p>
      <h2 class="section-title">Vítejte za objektem</h2>
      <div class="gold-line"></div>

      <p class="about-text">
        Jsem Petula Trávníčková — fotografka s vášní pro autentické okamžiky a přirozené světlo.
        Fotografuji portréty, svatby, krajiny i rodinné momenty po celé České republice.
      </p>
      <p class="about-text">
        Věřím, že každý člověk má svůj příběh, a mým posláním je ho zachytit způsobem,
        který bude dojímat po celý život. Ať už hledáte elegantní portréty nebo reportáž
        z vašeho nejdůležitějšího dne — jsem tu pro vás.
      </p>

      <div class="about-stats">
        <div class="stat">
          <span class="stat-number">5+</span>
          <span class="stat-label">Let zkušeností</span>
        </div>
        <div class="stat">
          <span class="stat-number">200+</span>
          <span class="stat-label">Spokojených klientů</span>
        </div>
        <div class="stat">
          <span class="stat-number">15+</span>
          <span class="stat-label">Zachycených svateb</span>
        </div>
      </div>

      <a href="#kontakt" class="about-cta" id="about-cta-btn">Pojďme spolupracovat →</a>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5vw;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
}

/* Image */
.about-image {
  position: relative;
  transition-delay: 0s;
}
.about-img-frame {
  position: relative;
  z-index: 1;
}
.about-img-frame img {
  width: 100%;
  height: 560px;
  object-fit: cover;
  object-position: top;
  filter: grayscale(15%);
  transition: filter 0.5s;
}
.about-img-frame img:hover { filter: grayscale(0%); }

.about-img-accent {
  position: absolute;
  top: 24px;
  left: 24px;
  right: -24px;
  bottom: -24px;
  border: 1px solid var(--gold);
  z-index: 0;
  pointer-events: none;
}

/* Content */
.about-content { transition-delay: 0.15s; }

.about-text {
  color: var(--text-muted);
  font-size: 0.98rem;
  line-height: 1.85;
  margin-bottom: 1.3rem;
}

/* Stats */
.about-stats {
  display: flex;
  gap: 2.5rem;
  margin: 2.5rem 0;
  padding: 2rem 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
.stat {
  display: flex;
  flex-direction: column;
}
.stat-number {
  font-family: var(--font-serif);
  font-size: 2.4rem;
  font-weight: 300;
  color: var(--gold);
  line-height: 1;
}
.stat-label {
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-top: 0.35rem;
}

/* CTA */
.about-cta {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--gold);
  border-bottom: 1px solid var(--gold);
  padding-bottom: 3px;
  transition: color 0.3s, padding-left 0.3s;
}
.about-cta:hover {
  color: var(--gold-light);
  padding-left: 6px;
}

/* Responsive */
@media (max-width: 900px) {
  .about-section {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .about-img-frame img { height: 400px; }
}
</style>
