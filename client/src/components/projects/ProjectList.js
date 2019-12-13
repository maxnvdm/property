/**Lists project (property listing) details */
import React from 'react'
import ProjectSummary from './ProjectSummary'
import {Link} from 'react-router-dom'

const ProjectList= ()=>{
    return(
        <div className="project-list section">
            <ProjectSummary/>
            <ProjectSummary/>

        </div>
    )
}

export default ProjectList