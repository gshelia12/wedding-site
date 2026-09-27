import Section from './Section.jsx'
import { useT } from '../i18n/LanguageContext.jsx'

const MAP_EMBED = 'https://www.google.com/maps?q=Tsinandali+Estate,+Kakheti,+Georgia&z=12&output=embed'
const MAP_LINK = 'https://www.google.com/maps/search/?api=1&query=Tsinandali+Estate+Kakheti+Georgia'

export default function Location() {
  const t = useT()
  return (
    <Section id="location" label="Location" kicker={t.location.kicker} title={t.location.title} titleClass="h2-tight">
      <div className="loc-address">{t.location.address}</div>
      <div className="map-frame">
        <iframe title="Map — Tsinandali Estate" src={MAP_EMBED} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
      <a className="map-link" href={MAP_LINK} target="_blank" rel="noopener">{t.location.mapLink}</a>
      <div className="ways-grid">
        {t.location.ways.map(w => (
          <div key={w.title}><h4>{w.title}</h4><p>{w.body}</p></div>
        ))}
      </div>
    </Section>
  )
}
