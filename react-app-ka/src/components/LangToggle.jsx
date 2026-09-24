import { useLang } from '../i18n/LanguageContext.jsx'
import { LANGUAGES } from '../i18n/index.js'

export default function LangToggle() {
  const { lang, setLang } = useLang()
  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      {Object.values(LANGUAGES).map((l, i) => (
        <span key={l.code} style={{ display: 'contents' }}>
          {i > 0 && <span className="lang-sep">/</span>}
          <button type="button" className={lang === l.code ? 'active' : ''} onClick={() => setLang(l.code)} aria-pressed={lang === l.code}>{l.label}</button>
        </span>
      ))}
    </div>
  )
}
