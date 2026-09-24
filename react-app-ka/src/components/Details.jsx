import Section from './Section.jsx'
import { useT } from '../i18n/LanguageContext.jsx'

export default function Details() {
  const t = useT()
  return (
    <Section id="details" label="Details" kicker={t.details.kicker} title={t.details.title}>
      <p className="lede">{t.details.lede}</p>
      {t.details.events.map(ev => (
        <div key={ev.kicker} className="event-card">
          <div className="event-kicker">{ev.kicker}</div>
          <div className="event-title">{ev.title}</div>
          <div className="event-sub">{ev.sub}</div>
          <div className="diamond" />
          <div className="facts">
            {ev.facts.map(f => (
              <div key={f.label}><div className="fact-label">{f.label}</div><div className="fact-value">{f.value}</div>{f.note && <div className="fact-note">{f.note}</div>}{f.linkHref && <a className="fact-link" href={f.linkHref} target="_blank" rel="noopener">{f.linkText}</a>}</div>
            ))}
          </div>
        </div>
      ))}
    </Section>
  )
}
