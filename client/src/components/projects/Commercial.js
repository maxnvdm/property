import React from 'react'

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const Commercial = ()=>{
    return(
        <div class="container">
            <h5>The best value commercial properties available: </h5>
        <div className="row">
            <div className="col s12 m6">
      <Card>
        <CardImg top width="100%" src="/img/commercial1.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>R7 209 000*, Century city</CardTitle>
          <CardSubtitle>Suites avalaible to let or buy</CardSubtitle>
          <CardText>An excellent sectional title in Bridgewater One development...</CardText>
        </CardBody>
      </Card>

      <Card>
        <CardImg top width="100%" src="/img/commercial2.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>R8 925 210, Century city</CardTitle>
          <CardSubtitle>The Forum Business Park</CardSubtitle>
          <CardText>This neat amd professional unit is situated on the...</CardText>
        </CardBody>
      </Card>
      </div>
      </div>
      </div>
    
    )
}

export default Commercial