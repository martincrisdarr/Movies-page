import React from 'react'
import { BsPlayCircle } from "react-icons/bs";

function TextImage() {
  return (
    <div className='mainImageText'>
      <h2 className='imgTitle'>Tu cine en casa</h2>
      <p className='imgP'>Portal #1 para ver películas online y en calidad HD.<br></br> Mira nuestros nuevos estrenos</p>
      <div className='imgButton'>Ver peliculas <BsPlayCircle className='imgButtonButton' /> </div>
    </div>
  )
}

export default TextImage