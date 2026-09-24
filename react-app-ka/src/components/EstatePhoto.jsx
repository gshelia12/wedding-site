import { useT } from '../i18n/LanguageContext.jsx'

export default function EstatePhoto() {
  const t = useT()
  return (
    <section className="photo-section" data-screen-label="Estate photo">
      <figure className="framed">
        <img src="/photos/chavchavadze-house.jpg" alt={t.photo.alt} style={{ objectPosition: 'center 45%' }} />
        <figcaption>{t.photo.caption}</figcaption>
      </figure>
    </section>
  )
}
