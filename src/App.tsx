import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Cta from './components/Cta'
import Pricing from './components/Pricing'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Trustsection from './components/Trustsection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Hero>
        <Navbar />
      </Hero>
      <About />
      <Cta />
      <Pricing />
      <Services />
      <Portfolio />
      <Trustsection />
      <Footer />
    </div>
  )
}

export default App