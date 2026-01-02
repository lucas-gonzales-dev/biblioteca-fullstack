import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Blog from './components/Blog'
import Projects from './components/Projects'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState({})
  const [scrollY, setScrollY] = useState(0)

  // useEffect para monitorar scroll e animar elementos
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      
      const sections = document.querySelectorAll('.animate-on-scroll')
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const isInView = rect.top < window.innerHeight * 0.85
        if (isInView) {
          setIsVisible(prev => ({ ...prev, [section.id]: true }))
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <Header scrollY={scrollY} />
      <main>
        <Hero />
        <Blog />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App
