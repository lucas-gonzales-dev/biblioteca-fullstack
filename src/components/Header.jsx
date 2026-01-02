import { useState, useEffect } from 'react'
import './Header.css'

function Header() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['projects', 'blog', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <a 
            href="#projects" 
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
          >
            Projetos
          </a>
          <a 
            href="#blog" 
            className={`nav-link ${activeSection === 'blog' ? 'active' : ''}`}
          >
            Blog
          </a>
          <a 
            href="#contact" 
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
