//links and components to show when signed in on navbar
import React from 'react'
import {NavLink} from 'react-router-dom'
import BellIcon from 'react-bell-icon'

const SignedInLinks = ()=>{
    return(
        <ul className="right">
            <li> <NavLink to='/'>Log Out</NavLink></li>
            <li> <NavLink to='/'>Home</NavLink></li>
            <li> <NavLink to='/'>Properties</NavLink></li>
            <li> <NavLink to='/'>Developments</NavLink></li>
            <li> <NavLink to='/'>Commercial</NavLink></li>
            <li> <NavLink to='/'>List privately</NavLink></li>
            <li> <NavLink to='/'><BellIcon width='20' height='20' color='yellow' active={true} animate={true} /></NavLink></li>
            <li> <NavLink to='/contact'>Contact</NavLink></li>
            <li><NavLink to ='/' className='btn btn-floating yellow lighten-2'>TT</NavLink></li>
        </ul>
       
    )
}

export default SignedInLinks