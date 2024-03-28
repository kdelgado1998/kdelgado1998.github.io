import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Header = () => {
    return (
        <header className="header header-inicio">
            <div className="contenido-header contenedor">
                <div className="barra">
                    <div className="logo">
                        {/* <img src={logo} alt="cafeteria" /> */}
                    </div>
                    <nav className="nav-principal">
                        <Link to="/">Inicio</Link>
                        <Link to="/nosotros">Nosotros</Link>
                        <Link to="/universitarios">Universitarios</Link>
                        <Link to="/emprendedores">Emprendedores</Link>
                        <Link to="/galeria">Galeria</Link>
                        <Link to="/contacto">Contacto</Link>
                    </nav>
                </div>
                <div className="texto-header">
                    <h1>Meta</h1>
                </div>
            </div>
        </header>
    )
}
