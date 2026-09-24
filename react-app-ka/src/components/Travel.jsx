import Section from './Section.jsx'
import { useT } from '../i18n/LanguageContext.jsx'
const gardensUrl = import.meta.env.BASE_URL + 'photos/estate-gardens.jpg'

export default function Travel() {
  const t = useT()
  return (
    <Section id="travel" label="Travel" kicker={t.travel.kicker} title={t.travel.title}>
      <figure className="travel-photo">
        <img src={gardensUrl} alt={t.travel.alt} style={{ objectPosition: '70% 55%' }} />
      </figure>
      <div className="travel-grid">
        {t.travel.cards.map(c => (
          <div key={c.title}><h4>{c.title}</h4><p>{c.body}</p>{c.linkHref && <a className="travel-link" href={c.linkHref} target="_blank" rel="noopener">{c.linkText}</a>}{c.price && <div className="travel-price">{c.price}</div>}</div>
        ))}
      </div>
    </Section>
  )
}
