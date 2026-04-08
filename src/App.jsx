import TopBar from './components/TopBar'
import Hero from './components/Hero'
import Overview from './components/Overview'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Tools from './components/Tools'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-surface">
      <main className="w-[43%] mx-auto px-4 py-6 space-y-3">
        <TopBar />
        <Hero />
        <Overview />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Tools />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
