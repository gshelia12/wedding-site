import { useEffect, useState } from 'react'
import { NAV_KEYS } from '../data/wedding.js'
import { useT } from '../i18n/LanguageContext.jsx'
import LangToggle from './LangToggle.jsx'

export default function Nav() {
  const t = useT()
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const close = () => { if (window.innerWidth >= 860) setOpen(false) }
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])
  return (
    <nav className={'nav' + (open ? ' is-open' : '')}>
      <div className="nav-bar">
        <a className="nav-brand" href="#top">S <span>&amp;</span> G</a>
        <div className="nav-links">
          {NAV_KEYS.map(k => <a key={k} href={'#' + k}>{t.nav[k]}</a>)}
        </div>
        <div className="nav-right">
          <LangToggle />
          <button type="button" className="nav-burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(o => !o)}>
            <span /><span /><span />
          </button>
        </div>
      </div>
      {open && (
        <div className="nav-drawer">
          {NAV_KEYS.map(k => <a key={k} href={'#' + k} onClick={() => setOpen(false)}>{t.nav[k]}</a>)}
        </div>
      )}
    </nav>
  )
}
