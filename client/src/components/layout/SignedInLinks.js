//links and components to show when signed in on navbar
import React from 'react'
import {NavLink} from 'react-router-dom'
import BellIcon from 'react-bell-icon'

const SignedInLinks = ()=>{
    return(

        <ul className="right">
            <li> <NavLink to='/'>Log Out</NavLink></li>
            <li> <NavLink to='/'>Home</NavLink></li>
            <li> <NavLink to='/projectdetails'>Properties</NavLink></li>
            <li> <NavLink to='/commercial'>Commercial</NavLink></li>
            <li> <NavLink to='/listprivately'>List privately</NavLink></li>
            <li> <NavLink to='viewbell/'><BellIcon width='20' height='20' color='yellow' active={true} animate={true} /></NavLink></li>
            {/*<li> <NavLink to='/contact'>Contact</NavLink></li>*/}
            <li><NavLink to ='/' className='btn btn-floating yellow lighten-2'>NB</NavLink></li>
        </ul>
       
    )
}


export default SignedInLinks