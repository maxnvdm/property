import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
class SignIn extends Component {
    constructor() {
        super();
        this.state={
            email:'',
            password:'',
            errors: {}
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
          this.props.history.push("/"); // push user to dashboard when they login
        }
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
        console.log(this.state)

        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        console.log(userData);
        this.props.loginUser(userData);

    }

    render() {
        const { errors } = this.state;

        return (
            <div className="container center">
                <form onSubmit={this.handleSubmit} className="white">
                    <h2 className="grey-text text-darken-3">property24</h2>
                    <h4 className="grey-text text-darken-3">Welcome Back,</h4>
                    <h6 className="grey-text text-lighten-1">Sign in to continue</h6>
                    
                    <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <span className="red-text">
                                {errors.email}
                                {errors.emailnotfound}
                            </span>
                            <input type="email" id="email" onChange={this.handleChange} className={classnames("", {
                                invalid: errors.email || errors.emailnotfound
                            })}/>
                        </div>

                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <span className="red-text">
                                {errors.password}
                                {errors.passwordincorrect}
                            </span>
                            <input type="password" id="password" onChange={this.handleChange} className={classnames("", {
                                invalid: errors.password || errors.passwordincorrect
                            })} />
                        </div>

                        <div className="input-field">
                        <h6 className="grey-text text-lighten-1">Forgot Password?</h6>
                            <input type="submit" className="btn black lighten-1 z-depth-0" value="Login" />
                        </div>
                </form>
                <div>
                    <h6>Or login useing...</h6>
                    <a className="google-btn" href="https://property24-app.herokuapp.com/auth/google">Google+</a>
                </div>
            </div>
        )
    }
}
SignIn.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  export default connect(
    mapStateToProps,
    { loginUser }
  )(SignIn);
