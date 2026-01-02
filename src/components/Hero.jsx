import { useState, useEffect } from 'react'
import './Hero.css'

function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <h1 className="hero-title">
            Olá, eu sou Lucas Gonzales<br />
            Desenvolvedor Full Stack
          </h1>
          <p className="hero-description">
            De técnico em eletrônica a desenvolvedor full stack. Transformo ideias em código 
            com React, Node.js, TypeScript e muito café. Estudante de ADS na Fatec Praia Grande, 
            sempre buscando novos desafios.
          </p>
          <a 
            href="https://www.linkedin.com/in/lucas-leite-gonzales-dev/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-download"
          >
            Ver LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
