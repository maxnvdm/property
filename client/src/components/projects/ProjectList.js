/**Lists project (property listing) details */
import React, { Component } from 'react'
// import ProjectSummary from './ProjectSummary'
import {Link} from 'react-router-dom'
import axios from 'axios';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const ProjectSummary = props =>(
    <div>
      <Card>
        <CardImg top width="100%" src="/img/penthouse.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.property.name}</CardTitle>
          <CardSubtitle>{props.property.price}</CardSubtitle>
          <CardText>{props.property.description}</CardText>
        </CardBody>
      </Card>
    </div>
)

class ProjectList extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          properties: []
        }
      }
    
    componentDidMount() {
        axios.get('http://localhost:4000/api')
            .then(response => {
                console.log(response.data);
                console.log(response.headers);
                this.setState({ properties: response.data })
            })
            .catch((error) => {
            console.log(error);
            })
        
    }

    propertyList() {
        return this.state.properties.map(property => {
            return <ProjectSummary property={property} key={property._id}/>;
          })
    }
    
    render() {
        return(
            <div className="project-list section">
                { this.propertyList() }
            </div>
        )
    }
}

export default ProjectList