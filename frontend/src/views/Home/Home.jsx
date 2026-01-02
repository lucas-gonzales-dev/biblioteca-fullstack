import React from 'react';
import Header from "../../components/Header/Header";
import "./index.scss";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>      
      <Header/>
      <div className='home-content'>
        <h1>Biblioteca Central Online - Livros</h1>
        <p>Bem-vindo ao sistema de gerenciamento de livros da Biblioteca Central Online.</p>
        <Link to="/livros" className='btn-primary'>Ver Livros</Link>
      </div>
    </div>
  )
}

export default Home