<template>
  <section id="kontakt">
    <div class="kontakt-inner">
      <div class="kontakt-info fade-up">
        <p class="section-label">Kontakt</p>
        <h2 class="section-title">Pojďme spolu<br /><em>tvořit</em></h2>
        <div class="gold-line"></div>
        <p class="kontakt-desc">
          Máte zájem o focení? Ráda se s vámi potkám a popovídáme o projektu.
          Neváhejte se ozvat — odpovídám do 24 hodin.
        </p>

        <div class="kontakt-details">
          <div class="kontakt-item">
            <span class="kontakt-icon">✉</span>
            <div>
              <span class="kontakt-item-label">Email</span>
              <a href="mailto:petula@example.cz" class="kontakt-item-value">petula@example.cz</a>
            </div>
          </div>
          <div class="kontakt-item">
            <span class="kontakt-icon">☎</span>
            <div>
              <span class="kontakt-item-label">Telefon</span>
              <a href="tel:+420000000000" class="kontakt-item-value">+420 000 000 000</a>
            </div>
          </div>
          <div class="kontakt-item">
            <span class="kontakt-icon">◈</span>
            <div>
              <span class="kontakt-item-label">Instagram</span>
              <a href="#" class="kontakt-item-value">@petula.foto</a>
            </div>
          </div>
        </div>
      </div>

      <form class="kontakt-form fade-up" @submit.prevent="handleSubmit" id="contact-form">
        <div class="form-group">
          <label for="name">Jméno</label>
          <input id="name" v-model="form.name" type="text" placeholder="Vaše jméno" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" v-model="form.email" type="email" placeholder="vas@email.cz" required />
        </div>
        <div class="form-group">
          <label for="subject">Typ focení</label>
          <select id="subject" v-model="form.subject">
            <option value="">Vyberte typ...</option>
            <option>Portrét</option>
            <option>Svatba</option>
            <option>Rodina</option>
            <option>Krajina / Příroda</option>
            <option>Street</option>
            <option>Jiné</option>
          </select>
        </div>
        <div class="form-group">
          <label for="message">Zpráva</label>
          <textarea id="message" v-model="form.message" rows="5" placeholder="Napište mi..." required></textarea>
        </div>
        <button type="submit" class="form-submit" :class="{ sent: submitted }" id="submit-btn">
          <span v-if="!submitted">Odeslat zprávu →</span>
          <span v-else>✓ Odesláno, brzy se ozvu!</span>
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({ name: '', email: '', subject: '', message: '' })
const submitted = ref(false)

function handleSubmit() {
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    Object.assign(form, { name: '', email: '', subject: '', message: '' })
  }, 4000)
}
</script>

<style scoped>
section { max-width: 1300px; margin: 0 auto; }

.kontakt-inner {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 6vw;
  align-items: start;
}

/* Info side */
.kontakt-desc {
  color: var(--text-muted);
  font-size: 0.96rem;
  line-height: 1.85;
  margin-bottom: 3rem;
}

.kontakt-details { display: flex; flex-direction: column; gap: 1.6rem; }

.kontakt-item {
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
}
.kontakt-icon {
  font-size: 1.1rem;
  color: var(--gold);
  margin-top: 2px;
  min-width: 22px;
}
.kontakt-item-label {
  display: block;
  font-size: 0.65rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 0.15rem;
}
.kontakt-item-value {
  font-size: 0.95rem;
  color: var(--text);
  transition: color 0.3s;
}
.kontakt-item-value:hover { color: var(--gold); }

/* Form */
.kontakt-form {
  background: var(--bg-card);
  border: 1px solid var(--border);
  padding: 2.8rem;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  transition-delay: 0.15s;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.form-group label {
  font-size: 0.68rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--text-muted);
}
.form-group input,
.form-group select,
.form-group textarea {
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  color: var(--text);
  padding: 0.85rem 1rem;
  font-family: var(--font-sans);
  font-size: 0.92rem;
  outline: none;
  transition: border-color 0.3s;
  resize: vertical;
}
.form-group select option { background: var(--bg-elevated); }

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--gold);
}
.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--text-muted);
}

.form-submit {
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #0a0a0a;
  background: var(--gold);
  padding: 1rem 2rem;
  transition: background 0.3s, letter-spacing 0.3s;
  margin-top: 0.4rem;
}
.form-submit:hover { background: var(--gold-light); }
.form-submit.sent {
  background: #3a6b4a;
  color: #f0ebe4;
  letter-spacing: 0.08em;
}

/* Responsive */
@media (max-width: 900px) {
  .kontakt-inner {
    grid-template-columns: 1fr;
  }
  .kontakt-form { padding: 2rem; }
}
</style>
