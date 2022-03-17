import React from 'react'
import { BiMoviePlay } from "react-icons/bi";  
function Navbar() {
  return (
    <>
        <div className='navbarContainer'>
          <div className='title-nav-container'>
            <h1>Plus Film</h1>
            <BiMoviePlay size="2rem" />
          </div>
          <div className='navbar-lists'>
            <ul className='first-navbar-list'>
              <li className='navbarPremium'>Premium</li>
              <li>Aplicación</li>
            </ul>
            <div className='navbar-line'></div>
            <ul className='second-navbar-list'>
              <li>Iniciar sesion</li>
              <li>Registrarse</li>
            </ul>
          </div>
        </div>
    </>
  )
}

export default Navbar