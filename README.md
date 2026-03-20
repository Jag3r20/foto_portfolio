# Portfolio – Petula Trávníčková 📸

Elegantní a responzivní jednostránkové portfolio pro profesionální fotografku. Vytvořeno pomocí Vue.js a Vite.

## Funkce
- 🎨 **Elegantní tmavý design** s jemnými zlatými akcenty
- 🖼️ **Responsivní galerie** s filtrováním podle kategorií a integrovaným fullscreen lightboxem
- 👩 **Sekce O mně** s interaktivními statistikami
- ✉️ **Kontaktní sekce** s formulářem
- 📱 **Plně responzivní layout** (včetně funkčního mobilního hamburger menu)
- ✨ **Plynulé animace** (fade-in efekty při scrollování stránky)

## Spuštění projektu pro vývoj

Projekt vyžaduje nainstalovaný [Node.js](https://nodejs.org/).

```bash
# Instalace závislostí
npm install

# Spuštění vývojového serveru
npm run dev
```

Následně otevřete v prohlížeči adresu, která se zobrazí v terminálu (typicky `http://localhost:5173`).

## Sestavení pro produkci (Build)

Pro nasazení webu na internet (hosting) je nutné projekt "sestavit":

```bash
npm run build
```

Tento příkaz vytvoří složku `dist` s optimalizovanými soubory. Tyto soubory pak můžete jednoduše nahrát na jakýkoliv webhosting, nebo projekt propojit se službami jako Vercel či Netlify pro automatické nasazení.

## Jak upravit obsah
- **Fotografie:** Nahraď placeholder fotky za své vlastní ve složce `public/images/`. 
- **Texty a kontakty:** Obsah, včetně e-mailů a odkazů na sítě, upravíš v příslušných Vue komponentách ve složce `src/components/`.
- **Fotky v galerii:** Nastavení galerie (cesty k obrázkům, kategorie a nadpisy) najdeš v souboru `src/components/GallerySection.vue`.
