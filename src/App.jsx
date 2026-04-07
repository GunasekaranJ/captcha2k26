import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Events from './components/Events'
// import Highlights from './components/Highlights'
// import Testimonials from './components/Testimonials'
import Team from './components/Team'
import Contact from './components/Contact'
import OfferBanner from './components/OfferBanner'

export default function App() {
  return (
    <div className="noise overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <OfferBanner />
        <About />
        <Events />
        {/* <Highlights /> */}
        {/* <Testimonials /> */}
        <Team />
        <Contact />
      </main>
    </div>
  )
}
