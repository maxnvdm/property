import React, { Component } from 'react'



class SignUp extends Component {
    state={
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        
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
        this.props.SignUp(this.state)
        

        
    }
    render() {
        
        return (
            <div className="container center">
            <h2 className="grey-text text-darken-3">property24</h2>
                    <h4 className="grey-text text-darken-3">Welcome New User,</h4>
                    <h6 className="grey-text text-lighten-1">Sign up to get started</h6>
                <form onSubmit={this.handleSubmit} className="white">

                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>

                    

                    <div className="input-field">
                        <button className="btn black lighten-1 z-depth-0">Sign Up</button>
                
                    </div>
                    
                </form>
                
            </div>
        )
    }
}

export default SignUp
