import React from 'react'


import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const Notifications = ()=>{
    return(
        <div>
            <h5>Click to see our most viewed offers this week: </h5>
       
      <Card>
        <CardImg top width="100%" src="/img/contemporary.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>R8 400 000, Newlands</CardTitle>
          <CardSubtitle>4 bedroom Contemporary home</CardSubtitle>
          <CardText>With a touch of Hollywood Hills, this sunny home, with super city views...</CardText>
        </CardBody>
      </Card>

      <Card>
        <CardImg top width="100%" src="/img/townhouse.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>R6 950 000, Claremont upper</CardTitle>
          <CardSubtitle>Townhouse in exclusive small estate</CardSubtitle>
          <CardText>Elegant, gracious and classic, this well positioned...</CardText>
        </CardBody>
      </Card>

      </div>
    
    )
}

export default Notifications