import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navConf">
        <ul>
            
            <Link to={'/'} style={{ textDecoration: 'none' }}><li>Home<i class="fa-solid fa-house-user"></i></li></Link>
            <Link to={'/login'} style={{ textDecoration: 'none' }}><li>Login<i class="fa-solid fa-user"></i></li></Link>
            <Link to={'/settings'} style={{ textDecoration: 'none' }}><li>Settings<i class="fa-solid fa-gear"></i></li></Link>
           
        </ul>
    </nav>
  )
}

export default Nav