import { LanguageProvider } from './i18n/LanguageContext.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import EstatePhoto from './components/EstatePhoto.jsx'
import Details from './components/Details.jsx'
import Schedule from './components/Schedule.jsx'
import Travel from './components/Travel.jsx'
import Rsvp from './components/Rsvp.jsx'
import Faq from './components/Faq.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <LanguageProvider>
      <Nav />
      <main>
        <Hero />
        <EstatePhoto />
        <Details />
        <Schedule />
        <Travel />
        <Rsvp />
        <Faq />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
