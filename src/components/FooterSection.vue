<template>
  <footer id="footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <span class="footer-name">Petula Trávníčková</span>
        <span class="footer-tagline">Fotografie</span>
      </div>

      <nav class="footer-nav" aria-label="Patička navigace">
        <a href="#galerie">Galerie</a>
        <a href="#o-mne">O mně</a>
        <a href="#kontakt">Kontakt</a>
      </nav>

      <div class="footer-socials">
        <a href="#" aria-label="Instagram" class="social-link" id="footer-instagram">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="2" y="2" width="20" height="20" rx="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
          </svg>
        </a>
        <a href="#" aria-label="Facebook" class="social-link" id="footer-facebook">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
        </a>
      </div>
    </div>

    <div class="footer-copy">
      <span>© {{ year }} Petula Trávníčková · Všechna práva vyhrazena</span>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
footer {
  background: var(--bg-card);
  border-top: 1px solid var(--border);
  padding: 3rem 5vw 1.5rem;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border);
  margin-bottom: 1.5rem;
}

.footer-brand {
  display: flex;
  flex-direction: column;
}
.footer-name {
  font-family: var(--font-serif);
  font-size: 1.3rem;
  color: var(--text);
}
.footer-tagline {
  font-size: 0.65rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--gold);
}

.footer-nav {
  display: flex;
  gap: 2rem;
}
.footer-nav a {
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-muted);
  transition: color 0.3s;
}
.footer-nav a:hover { color: var(--gold); }

.footer-socials {
  display: flex;
  gap: 1rem;
}
.social-link {
  color: var(--text-muted);
  transition: color 0.3s;
}
.social-link:hover { color: var(--gold); }

.footer-copy {
  text-align: center;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  color: var(--text-muted);
}

@media (max-width: 600px) {
  .footer-inner { flex-direction: column; align-items: flex-start; }
  .footer-nav { flex-wrap: wrap; gap: 1rem; }
}
</style>
