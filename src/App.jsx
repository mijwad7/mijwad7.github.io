import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CurrentFocus from './components/CurrentFocus';
import JourneyTimeline from './components/JourneyTimeline';
import Experience from './components/Experience';
import ProductionSystems from './components/ProductionSystems';
import PersonalProjects from './components/PersonalProjects';
import EarlierProjects from './components/EarlierProjects';
import TechStack from './components/TechStack';
import EngineeringNotes from './components/EngineeringNotes';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgressTimeline from './components/ScrollProgressTimeline';

export default function App() {
  return (
    <div className="min-h-screen bg-surface text-white">
      <Navbar />
      <ScrollProgressTimeline />

      <main>
        {/* Subtle top gradient */}
        <div
          className="fixed top-0 left-0 right-0 h-px z-40 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(0,229,255,0.3), transparent)' }}
          aria-hidden="true"
        />

        <Hero />

        {/* Section dividers */}
        <div className="section-divider mx-8 sm:mx-16 lg:mx-32" aria-hidden="true" />
        <CurrentFocus />

        <div className="section-divider mx-8 sm:mx-16 lg:mx-32" aria-hidden="true" />
        <JourneyTimeline />

        <div className="section-divider mx-8 sm:mx-16 lg:mx-32" aria-hidden="true" />
        <Experience />

        <div className="section-divider mx-8 sm:mx-16 lg:mx-32" aria-hidden="true" />
        <ProductionSystems />

        <div className="section-divider mx-8 sm:mx-16 lg:mx-32" aria-hidden="true" />
        <PersonalProjects />

        <div className="section-divider mx-8 sm:mx-16 lg:mx-32" aria-hidden="true" />
        <EarlierProjects />

        <div className="section-divider mx-8 sm:mx-16 lg:mx-32" aria-hidden="true" />
        <TechStack />

        <div className="section-divider mx-8 sm:mx-16 lg:mx-32" aria-hidden="true" />
        <EngineeringNotes />

        <div className="section-divider mx-8 sm:mx-16 lg:mx-32" aria-hidden="true" />
        <Education />

        <div className="section-divider mx-8 sm:mx-16 lg:mx-32" aria-hidden="true" />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
