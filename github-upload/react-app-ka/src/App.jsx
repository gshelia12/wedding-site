import { LanguageProvider } from './i18n/LanguageContext.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Details from './components/Details.jsx'
import Schedule from './components/Schedule.jsx'
import Location from './components/Location.jsx'
import Travel from './components/Travel.jsx'
import Rsvp from './components/Rsvp.jsx'
import Photos from './components/Photos.jsx'
import Faq from './components/Faq.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <LanguageProvider>
      <Nav />
      <main>
        <Hero />
        <Details />
        <Schedule />
        <Location />
        <Travel />
        <Rsvp />
        <Photos />
        <Faq />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
