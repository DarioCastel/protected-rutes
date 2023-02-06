import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const Nav = () => {

  function ActiveLink(props){
    return <NavLink
    style={({isActive})=>{
      return {
        color:isActive ? '#1d2d44':''
      };
    }}
    {...props}
    />
  }

  return (
    <nav className="navConf">
        <ul>
            
            <ActiveLink to={'/'} style={{ textDecoration: 'none' }}><li>Home<i class="fa-solid fa-house-user"></i></li></ActiveLink>
            <ActiveLink to={'/login'} style={{ textDecoration: 'none' }}><li>Login<i class="fa-solid fa-user"></i></li></ActiveLink>
            <ActiveLink to={'/settings'} style={{ textDecoration: 'none' }}><li>Settings<i class="fa-solid fa-gear"></i></li></ActiveLink>
           
        </ul>
    </nav>
  )
}

export default Nav