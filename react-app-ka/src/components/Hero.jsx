mport { WEDDING } from '../data/wedding.js'
import { useCountdown } from '../hooks/useCountdown.js'
import { useT } from '../i18n/LanguageContext.jsx'
import { googleCalendarUrl } from '../lib/calendar.js'
const sealUrl = import.meta.env.BASE_URL + 'seal.png'

export default function Hero() {
  const t = useT()
  const cd = useCountdown(WEDDING.ceremonyAt)
  const units = [['days', cd.days], ['hours', cd.hours], ['minutes', cd.minutes], ['seconds', cd.seconds]]
  return (
    <section className="hero" data-screen-label="Hero">
      <img className="hero-seal" src={sealUrl} alt="S&G wax seal" />
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
      <div className="add-cal">
        <a href={googleCalendarUrl(t.hero)} target="_blank" rel="noopener">
          <svg width="15" height="15" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z" /></svg>
          {t.hero.gcal}
        </a>
      </div>
    </section>
  )
}
