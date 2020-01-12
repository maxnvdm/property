import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
//import {connect} from 'react-redux'

const Navbar = ()=>{

   // const {auth,profile}= props;
   // console.log(auth)
   //const links=auth.uid?<SignedInLinks profile={profile}/>:<SignedOutLinks/>;//display tabs on navbar based on sign up status

    return(
        /*materialized class to generate wrapper for navbar*/
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                {/*redirect to Homepage*/}               
                <Link to='/' className="brand-logo" >property24</Link>
                <SignedInLinks/>
                <SignedOutLinks/>
               {/* {links}*/}
            </div>
        </nav>
    )
}

export default Navbar
//const mapStateToProps=(state)=>{
  //  console.log(state);
    //return{
      //  auth:.auth, //access authentication
        //profile:.profile
    //}
//}

//export default connect(mapStateToProps)(Navbar)
