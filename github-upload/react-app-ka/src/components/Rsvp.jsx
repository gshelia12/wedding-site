import { useState } from 'react'
import Section from './Section.jsx'
import { useT, useLang } from '../i18n/LanguageContext.jsx'
import { submitRsvp } from '../lib/rsvp.js'

export default function Rsvp() {
  const t = useT()
  const { lang } = useLang()
  const [name, setName] = useState('')
  const [attending, setAttending] = useState(null)
  const [bus, setBus] = useState(null)
  const [status, setStatus] = useState('idle') // idle | sending | done | error
  const canSubmit = name.trim() && attending !== null && (attending === false || bus !== null) && status !== 'sending'

  async function handleSubmit(e) {
    e.preventDefault()
    if (!canSubmit) return
    setStatus('sending')
    try {
      await submitRsvp({ name: name.trim(), attending, bus: attending ? bus : null, lang })
      setStatus('done')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <Section id="rsvp" label="RSVP" kicker={t.rsvp.kicker} title={<>{t.rsvp.title}<br /><span className="rsvp-deadline"><span className="rsvp-day">{t.rsvp.deadlineDay}</span><span>{t.rsvp.deadlineMonth}</span></span></>}>
      <div className="rsvp">
        {status !== 'done' ? (
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="guestName">{t.rsvp.name}</label>
              <input id="guestName" type="text" value={name} onChange={e => setName(e.target.value)} placeholder={t.rsvp.placeholder} />
            </div>
            <div className="field">
              <div className="field-label">{t.rsvp.attend}</div>
              <div className="choice">
                <button type="button" className={attending === true ? 'is-yes' : ''} onClick={() => setAttending(true)}>{t.rsvp.yes}</button>
                <button type="button" className={attending === false ? 'is-no' : ''} onClick={() => setAttending(false)}>{t.rsvp.no}</button>
              </div>
            </div>
            {attending === true && (
              <div className="field">
                <div className="field-label">{t.rsvp.bus}</div>
                <div className="choice choice-stack">
                  {['both', 'to', 'back', 'none'].map(k => (
                    <button key={k} type="button" className={bus === k ? (k === 'none' ? 'is-no' : 'is-yes') : ''} onClick={() => setBus(k)}>{t.rsvp.busOptions[k]}</button>
                  ))}
                </div>
              </div>
            )}
            <button type="submit" className="submit" disabled={!canSubmit}>{status === 'sending' ? t.rsvp.sending : t.rsvp.send}</button>
            {status === 'error' && <p className="rsvp-error">{t.rsvp.error}</p>}
          </form>
        ) : (
          <div className="confirm">
            <div className={'confirm-mark' + (attending ? ' yes' : '')}>
              {attending ? t.rsvp.confirmYes(name.trim()) : t.rsvp.confirmNo(name.trim())}
            </div>
            <div className="confirm-sub">{attending ? t.rsvp.subYes : t.rsvp.subNo}</div>
            <button type="button" className="rsvp-again" onClick={() => { setStatus('idle'); setName(''); setAttending(null); setBus(null) }}>{t.rsvp.again}</button>
          </div>
        )}
      </div>
    </Section>
  )
}
