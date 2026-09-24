import Section from './Section.jsx'
import { useT } from '../i18n/LanguageContext.jsx'

export default function Schedule() {
  const t = useT()
  return (
    <Section id="schedule" label="Schedule" kicker={t.schedule.kicker} title={t.schedule.title}>
      <ol className="timeline">
        {t.schedule.items.map(item => (
          <li key={item.time}>
            <div className="tl-time">{item.time}</div>
            <div className="tl-name">{item.name}</div>
            <div className="tl-desc">{item.desc}</div>
          </li>
        ))}
      </ol>
      {t.schedule.note && <p className="schedule-note">{t.schedule.note}</p>}
    </Section>
  )
}
