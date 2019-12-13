import React, { Component } from 'react'


class Contact extends Component {
    state={
        firstName:'',
        lastName:'',
        Email:'',
        Mobile:'',
        Content:''

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
                    <h5 className="grey-text text-darken-3">Leave your message here...</h5>
                    
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
                        <label htmlFor="content">Message</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>

                    <div className="input-field">
                        <button className="btn black lighten-1 z-depth-0">Send Message</button>
                    </div>
                    
                </form>
                
            </div>
        )
    }
}



export default Contact
