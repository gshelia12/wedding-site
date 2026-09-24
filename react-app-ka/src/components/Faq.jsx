import { useState } from 'react'
import Section from './Section.jsx'
import { useT } from '../i18n/LanguageContext.jsx'

export default function Faq() {
  const t = useT()
  const [open, setOpen] = useState(null)
  return (
    <Section id="faq" label="FAQ" kicker={t.faq.kicker} title={t.faq.title}>
      <div className="faq">
        {t.faq.items.map((f, i) => {
          const isOpen = open === i
          return (
            <div key={i} className="faq-item">
              <button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)}>
                {f.q}<span className={'plus' + (isOpen ? ' open' : '')}>+</span>
              </button>
              <div className={'faq-body' + (isOpen ? ' open' : '')}><div><p>{f.a}</p></div></div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
