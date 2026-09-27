import Section from './Section.jsx'
import { useT } from '../i18n/LanguageContext.jsx'
import { DRIVE_URL } from '../config.js'

export default function Photos() {
  const t = useT()
  return (
    <Section id="photos" label="Photos" kicker={t.photos.kicker} title={t.photos.title}>
      <p className="lede photos-lede">{t.photos.body}</p>
      <a className="drive-btn" href={DRIVE_URL} target="_blank" rel="noopener">
        <svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M216,72H130.67L102.93,51.2a16.12,16.12,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72Zm0,128H40V64H93.33l27.74,20.8a16.12,16.12,0,0,0,9.6,3.2H216Z" /></svg>
        {t.photos.button}
      </a>
    </Section>
  )
}
