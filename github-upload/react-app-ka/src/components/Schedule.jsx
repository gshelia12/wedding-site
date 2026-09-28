import Section from './Section.jsx'
import { useT } from '../i18n/LanguageContext.jsx'
import { SCHEDULE_ICONS } from '../data/icons.js'

export default function Schedule() {
  const t = useT()
  return (
    <Section id="schedule" label="Schedule" kicker={t.schedule.kicker} title={t.schedule.title}>
      <ol className="timeline">
        {t.schedule.items.map((item, i) => (
          <li key={item.time}>
            <span className="tl-icon" aria-hidden="true">
              <svg width="15" height="15" viewBox="0 0 256 256" fill="currentColor"><path d={SCHEDULE_ICONS[i + 1] || SCHEDULE_ICONS[0]} /></svg>
            </span>
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
