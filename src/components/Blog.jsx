import { useState } from 'react'
import './Blog.css'

function Blog() {
  const [posts] = useState([
    {
      id: 1,
      title: 'Minha transição de carreira: de Eletrônica para Dev',
      date: 'Jan 2026',
      tags: 'Carreira, Aprendizado',
      description: 'Depois de 5 anos como técnico em eletrônica, decidi mergulhar no mundo do desenvolvimento. A lógica já fazia parte do meu dia a dia, mas agora aplico ela de forma diferente.'
    },
    {
      id: 2,
      title: 'Por que TypeScript mudou minha forma de codar',
      date: 'Dez 2025',
      tags: 'TypeScript, JavaScript',
      description: 'Tipagem estática não é só sobre evitar erros - é sobre documentar seu código enquanto escreve. Compartilho minha experiência adotando TS nos projetos.'
    }
  ])

  return (
    <section id="blog" className="blog">
      <div className="container">
        <h2 className="section-label">Blog</h2>
      </div>
      <div className="blog-bg">
        <div className="container">
          <div className="blog-grid">
            {posts.map((post) => (
              <article key={post.id} className="blog-card">
                <h3 className="blog-card-title">{post.title}</h3>
                <div className="blog-card-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-tags">{post.tags}</span>
                </div>
                <p className="blog-card-description">{post.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
