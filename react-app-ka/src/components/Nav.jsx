import { NAV_KEYS } from '../data/wedding.js'
import { useT } from '../i18n/LanguageContext.jsx'
import LangToggle from './LangToggle.jsx'

export default function Nav() {
  const t = useT()
  return (
    <nav className="nav">
      <div className="nav-inner">
        {NAV_KEYS.map(k => <a key={k} href={'#' + k}>{t.nav[k]}</a>)}
      </div>
      <LangToggle />
    </nav>
  )
}
