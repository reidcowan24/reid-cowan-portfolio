import Nav from './components/Nav'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import Thesis from './components/Thesis'
import About from './components/About'
import Running from './components/Running'
import Receipts from './components/Receipts'
import AngularDivider from './components/AngularDivider'
import Framework from './components/Framework'
import FlightPlan from './components/FlightPlan'
import Stack from './components/Stack'
import Contact from './components/Contact'
import ScrollRevealInit from './components/ScrollRevealInit'

export default function Home() {
  return (
    <>
      <ScrollRevealInit />
      <Nav />
      <Hero />
      <StatsBar />
      <Thesis />
      <About />
      <Running />
      <Receipts />
      <AngularDivider />
      <Framework />
      <FlightPlan />
      <Stack />
      <Contact />
    </>
  )
}
