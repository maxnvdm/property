import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = ()=>{
    return(
        /*materialized class to generate wrapper for navbar*/
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                {/*redirect to Homepage*/}               
                <Link to='/' className="brand-logo" >property24</Link>
                <SignedInLinks/>
                <SignedOutLinks/>
            </div>
        </nav>
    )
}

export default Navbar
