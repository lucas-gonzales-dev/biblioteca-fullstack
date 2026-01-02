import { useState, useEffect } from 'react'
import './Projects.css'

function Projects() {
  const [projects] = useState([
    {
      id: 1,
      title: 'Subscry',
      description: 'App mobile em React Native para gerenciamento de assinaturas pessoais. Controle gastos recorrentes com Netflix, Spotify e outros serviços de forma simples e visual.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=400&fit=crop',
      link: 'https://github.com/lucas-gonzales/subscry'
    },
    {
      id: 2,
      title: 'Board de Tarefas',
      description: 'Gerenciador de tarefas estilo Kanban desenvolvido com React e TypeScript. Drag and drop intuitivo, categorização por status e persistência local.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=400&fit=crop',
      link: 'https://github.com/lucas-gonzales/task-manager'
    },
    {
      id: 3,
      title: 'Bankrupt Simulator',
      description: 'Simulador educacional de falência empresarial em Java, demonstrando conceitos de POO como herança, polimorfismo e encapsulamento de forma prática.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=400&fit=crop',
      link: 'https://github.com/lucas-gonzales/bankrupt'
    }
  ])

  const [animatedItems, setAnimatedItems] = useState([])

  useEffect(() => {
    // Anima os itens ao montar o componente
    projects.forEach((_, index) => {
      setTimeout(() => {
        setAnimatedItems(prev => [...prev, index])
      }, index * 200)
    })
  }, [])

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-label">Trabalhos Recentes</h2>

        <div className="projects-list">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-item ${animatedItems.includes(index) ? 'animated' : ''}`}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
