import React, {useState} from 'react'
import peliculas from '../../images/peliculas.jpg'
import login from '../../images/login.png'
function Login() {
    
    const [datos, setDatos] = useState({
        usuario : '',
        contrasena : ''
        
    })
    const handleInputChange = (e) =>{
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = (e) =>{
        console.log(datos)
        e.preventDefault()
        e.target.reset()
        
    }    
  return (
    
    <>
    <div className='login-fullContainer'>
        <div className='login-imgContainer'>
            <img src={peliculas}></img>
        </div>
        <div className='login-loginContainer'>
            <div className='login'>
                <img src={login} size='2rem'></img>
                <form onSubmit={handleSubmit} >
                    <input 
                        
                        name='usuario'
                        type='text'
                        onChange={handleInputChange}
                    />
                    <input 
                        name='contrasena'
                        type='password'
                        onChange={handleInputChange}
                    />
                    <button type='submit' onSubmit={(e) => e.target.reset}>Enviar</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login