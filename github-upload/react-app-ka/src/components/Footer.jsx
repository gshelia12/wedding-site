import { useT } from '../i18n/LanguageContext.jsx'

export default function Footer() {
  const t = useT()
  return (
    <footer className="footer" data-screen-label="Footer">
      <div className="footer-names">{t.footer.names}</div>
      <div className="footer-meta">{t.footer.meta}</div>
    </footer>
  )
}
