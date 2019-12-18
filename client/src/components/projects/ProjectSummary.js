/*Provides template for project details to show */

import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import axios from 'axios';

class ProjectSummary extends Component{
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

  render(){
    return(
      <div>
        <Card>
          <CardImg top width="100%" src="/img/penthouse.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>{ this.state.properties.map((property) => {
              return <p>{property.name}</p>}) }</CardTitle>
            <CardSubtitle>3 bedroom penthouse</CardSubtitle>
            <CardText>Located in the good place close to the good things etcetera...</CardText>
          </CardBody>
        </Card>
      </div>
          
      )
  }
   
}

export default ProjectSummary