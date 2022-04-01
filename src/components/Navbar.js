import React from 'react'
import { BiMoviePlay, BiMenu } from "react-icons/bi";  
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <>
        <div className='navbarContainer'>
          <div className='title-nav-container'>
            <Link to='/' className='plusTitle'>Plus Film</Link>
            <BiMoviePlay size="2rem" />
          </div>
          <div className='navbar-lists'>
            <div className='first-navbar-list'>
              <Link to='/premium' className='navbarPremium'>Premium </Link>
            </div>
            <div className='navbar-line'></div>
            <div className='second-navbar-list'>
              <Link to='/login' className='enlaces'>Iniciar sesion </Link>
              <Link to='/registro' className='enlaces'>Registrarse</Link>
            </div>
          </div>
          <BiMenu className='menuButton' size="2rem"/>
        </div>
    </>
  )
}

export default Navbar