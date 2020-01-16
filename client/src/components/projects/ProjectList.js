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
      <Card text="black">
      <Link to={'/projectdetails/:'+ props.property._id} style={{textDecoration: 'none', color : 'black'}}>
        <CardImg top width="100%" src="/img/penthouse.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.property.name}</CardTitle>
          <CardSubtitle>{props.property.price}</CardSubtitle>
          <CardText>{props.property.description}</CardText>
        </CardBody>
        </Link>
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
    
    async componentDidMount() {
        axios.get('/api')
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
            return  <ProjectSummary property={property} key={property._id}/>;
          })
    }
    
    render() {
        return(
            <div className="project-list section">
              { this.state.properties === [] && <p>Loading properties...</p>}
              { this.propertyList() }
            </div>
        )
    }
}

export default ProjectList