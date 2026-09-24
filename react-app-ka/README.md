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
1. Create a Google Sheet. Extensions → Apps Script. Replace the contents with `google-apps-script/Code.gs`. Save.
2. Deploy → New deployment → type "Web app". Execute as: **Me**. Who has access: **Anyone**. Deploy, authorize, copy the Web app URL (ends in `/exec`).
3. Paste it into `src/config.js` as `RSVP_ENDPOINT`.
4. Each reply appends a row (Timestamp, Name, Attending, Language) to a sheet tab named "RSVP". File → Download → Microsoft Excel (.xlsx) whenever you need the file.
Note: re-deploy (New deployment) after any change to Code.gs — the URL stays the same only if you "Manage deployments → Edit → New version".

## Adding logic
- RSVP submission: `src/lib/rsvp.js` (transport) and `src/components/Rsvp.jsx` (form state).
- Add a language: copy `en.js`, register it in `src/i18n/index.js`.
