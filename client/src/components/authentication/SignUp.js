import React, { Component } from 'react'
import axios from 'axios';


class SignUp extends Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state={
            fullname:'',
            email:'',
            password:'',
        }
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

        const user = {
            fullname: this.state.fullname,
            email: this.state.email,
            password: this.state.password
        }

        console.log(user);

        axios.post('http://localhost:4000/auth/signup', user).then(res => console.log(res.data));

        window.location = '/'
    }

    render() {
        
        return (
            <div className="container center">
            <h2 className="grey-text text-darken-3">property24</h2>
                    <h4 className="grey-text text-darken-3">Welcome New User,</h4>
                    <h6 className="grey-text text-lighten-1">Sign up to get started</h6>
                <form onSubmit={this.handleSubmit} className="white">

                    <div className="input-field">
                        <label htmlFor="fullname">Full Name</label>
                        <input type="text" id="fullname" onChange={this.handleChange}/>
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
                        <label htmlFor="passwordConfirm">Confirm Password</label>
                        <input type="password" id="passwordConfirm" onChange={this.handleChange}/>
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
