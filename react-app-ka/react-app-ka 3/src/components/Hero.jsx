import { WEDDING } from '../data/wedding.js'
import { useCountdown } from '../hooks/useCountdown.js'
import { useT } from '../i18n/LanguageContext.jsx'

export default function Hero() {
  const t = useT()
  const cd = useCountdown(WEDDING.ceremonyAt)
  const units = [['days', cd.days], ['hours', cd.hours], ['minutes', cd.minutes], ['seconds', cd.seconds]]
  return (
    <section className="hero" data-screen-label="Hero">
      <img className="hero-seal" src="/seal.png" alt="S&G wax seal" />
      {t.hero.eyebrow && <div className="hero-eyebrow">{t.hero.eyebrow}</div>}
      <h1 className="hero-names">{t.hero.her}<span className="amp">&amp;</span>{t.hero.him}</h1>
      <div className="ornament"><span /><span>❦</span><span /></div>
      <div className="hero-date">{t.hero.dateLong}</div>
      <div className="hero-place">{t.hero.place}</div>
      <div className="countdown">
        {units.map(([k, n]) => (
          <div key={k}><div className="cd-num">{n}</div><div className="cd-label">{t.hero.units[k]}</div></div>
        ))}
      </div>
    </section>
  )
}
