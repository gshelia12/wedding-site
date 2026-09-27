# სოფო & გიორგი — Wedding Site (React + Vite, ქართული / English)

```
npm install
npm run dev
```

Default language is Georgian; a toggle in the nav switches to English. The choice is saved in localStorage.

## Structure
- `src/i18n/ka.js`, `src/i18n/en.js` — all copy per language (same shape). Edit text here.
- `src/i18n/LanguageContext.jsx` — `LanguageProvider`, `useT()` (current strings) and `useLang()` (`{ lang, setLang }`).
- `src/data/wedding.js` — language-independent data (ceremony date, nav anchors).
- `src/components/` — one component per section.
- `src/hooks/useCountdown.js` — live countdown.
- `src/styles.css` — tokens + section styles. `html[lang="ka"]` rules swap in Noto Serif Georgian.

## RSVP → Google Sheets
The site posts each reply to a Google Apps Script web app bound to your sheet (`src/config.js` → `RSVP_ENDPOINT`). Rows land in the **RSVP** tab: Timestamp, Name, Attending, Language. File → Download → .xlsx for Excel.
To change the script: Extensions → Apps Script → edit → Deploy → Manage deployments → ✎ → New version → Deploy (URL stays the same).

## Adding logic
- RSVP submission: `src/lib/rsvp.js` (transport) and `src/components/Rsvp.jsx` (form state).
- Add a language: copy `en.js`, register it in `src/i18n/index.js`.
