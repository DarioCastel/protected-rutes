import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navConf">
        <ul>
            
            <Link classname="letrasLink" to={'/'}><li>Home<i class="fa-solid fa-house-user"></i></li></Link>
            <Link classname="letrasLink" to={'/login'}><li>Login<i class="fa-solid fa-user"></i></li></Link>
            <Link classname="letrasLink" to={'/settings'}><li>Settings<i class="fa-solid fa-gear"></i></li></Link>
           
        </ul>
    </nav>
  )
}

export default Nav