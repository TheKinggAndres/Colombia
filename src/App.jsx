import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Componentes/Home' 
import Detalles from './Componentes/Detalles'
import Favoritos from './Componentes/Favoritos'
import Informativa from './Componentes/Informativa'
import Original from './Componentes/Original'       

function App() {
  return (

    <>
    <Router>

      <nav className="c-menu">
          <Link to="/">Home</Link>
          <Link to="/Informativa">Informativa</Link>
          <Link to="/Original">Original</Link>
          <Link to="/Favoritos">Favoritos</Link>
          <Link to="/Detalles">Detalles</Link>

        </nav>

      <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/Informativa" element={<Informativa /> } />
          <Route path="/Original" element={<Original /> } />
          <Route path="/Favoritos" element={<Favoritos /> } />
          <Route path="/Detalles/:depto/:municipio" element={<Detalles /> } />
      </Routes>
    </Router>
    </>


  );
}

export default App

