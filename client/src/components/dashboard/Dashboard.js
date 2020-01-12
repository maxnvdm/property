//layout design for dashboard

import React, {Component} from 'react'
import Notifications from './Notifications'
import Search from './Search'
import ProjectList from '../projects/ProjectList'
import {connect} from 'react-redux'

class Dashboard extends Component{
    render(){
        const{projects}=this.props; //grab the projects ie property details to be displayed on dashboard from store
        return(
            
            <div className="dashboard container">
            <Search/>
                {/**create 2 columns for project list and notifications */}               
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects} />
                    </div>
                    <div className="col s12 m4 offset-m1">
                        <Notifications /> 
                    </div>
                                   
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        projects:state.project.projects
    }

}
export default connect(mapStateToProps)(Dashboard)