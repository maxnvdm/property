import React, { Component } from 'react'

class SignIn extends Component {

    state={
        email:'',
        password:''

    }
    /**update state using unique id */
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })

    }
/**log submitted info */
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state)
        
    }

    render() {
        return (
            <div className="container center">
                <form onSubmit={this.handleSubmit} className="white">
                    <h2 className="grey-text text-darken-3">property24</h2>
                    <h4 className="grey-text text-darken-3">Welcome Back,</h4>
                    <h6 className="grey-text text-lighten-1">Sign in to continue</h6>
                    
                    <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={this.handleChange}/>
                        </div>

                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={this.handleChange}/>
                        </div>

                        <div className="input-field">
                        <h6 className="grey-text text-lighten-1">Forgot Password?</h6>
                            <button className="btn black lighten-1 z-depth-0">Login</button>
                           
                            
                        </div>
                </form>
            </div>
        )
    }
}

export default SignIn
