import React, { Component } from 'react'
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
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
            password2:'',
            errors: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/");
        }
      }

      componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
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
            password: this.state.password,
            password2: this.state.password2
        }

        // console.log(user);

        // axios.post('http://localhost:4000/auth/signup', user).then(res => console.log(res.data));
        this.props.registerUser(user, this.props.history);

        // window.location = '/'
    }

    render() {
        const { errors } = this.state;

        return (
            <div className="container center">
            <h2 className="grey-text text-darken-3">property24</h2>
                    <h4 className="grey-text text-darken-3">Welcome New User,</h4>
                    <h6 className="grey-text text-lighten-1">Sign up to get started</h6>
                <form onSubmit={this.handleSubmit} className="white">

                    <div className="input-field">
                        <label htmlFor="fullname">Full Name</label>
                        <span className="red-text">{errors.name}</span>
                        <input type="text" id="fullname" onChange={this.handleChange} error={errors.name} className={classnames("", {
                            invalid: errors.name
                        })}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <span className="red-text">{errors.email}</span>
                        <input type="email" id="email" onChange={this.handleChange} className={classnames("", {
                            invalid: errors.email
                        })}
/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <span className="red-text">{errors.password}</span>
                        <input type="password" id="password" onChange={this.handleChange} className={classnames("", {
                            invalid: errors.password
                        })}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="password2">Confirm Password</label>
                        <span className="red-text">{errors.password2}</span>
                        <input type="password" id="password2" onChange={this.handleChange} className={classnames("", {
                            invalid: errors.password2
                        })}/>
                    </div>

                    <div className="input-field">
                        <button className="btn black lighten-1 z-depth-0">Sign Up</button>
                
                    </div>
                    
                </form>
                
            </div>
        )
    }
}
SignUp.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  
  export default connect(
    mapStateToProps,
    { registerUser }
  )(withRouter(SignUp));