import { useT } from '../i18n/LanguageContext.jsx'
const houseUrl = import.meta.env.BASE_URL + 'photos/chavchavadze-house.jpg'

export default function EstatePhoto() {
  const t = useT()
  return (
    <section className="photo-section" data-screen-label="Estate photo">
      <figure className="framed">
        <img src={houseUrl} alt={t.photo.alt} style={{ objectPosition: 'center 45%' }} />
        <figcaption>{t.photo.caption}</figcaption>
      </figure>
    </section>
  )
}
