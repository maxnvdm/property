import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const ProjectsDetails=(props)=>{
    const id=props.match.params.id; //project id associated with each property post

    return(
       <div>
      <Card>
        <CardImg top width="20%" src="/img/penthouse.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>3 Bedroom Penthouse, Rondebosch</CardTitle>
          <CardSubtitle>R1 650 000 , Pam Golding</CardSubtitle>
          <CardText>Masterful design and modern luxury are uniquely embodied in this 4 bedroom 4.5 bath Duplex Penthouse with a 4500 SF wraparound terrace atop Sky Lofts Condominium. This one-of-a-kind glass house, created by New York architect James Carpenter who designed 7 World Trade Center, is sheathed in high-performance, museum-quality insulated glass atop an historic Art Deco loft building in the heart of Tribeca. The sun and temperature-controlled glass envelope of its 7500 SF interior was tastefully designed with the top art collector in mind. Unobstructed 360 views from this penthouse are truly unparalleled, and include vistas of the Freedom Tower, Empire State Building and Hudson River.
            Every detail was carefully selected and quality crafted. Highlights include Lutron light and shade systems, heated bathroom floors, concrete first-level and hallway floors, teak wood bedroom flooring, troweled plaster walls and ceilings, artwork  display lighting, hidden mechanicals, a climate-control system, high-tech security system, and spacious corner rooms that overlook the city.
            Entertain in grand style in the 42' x 21' living room graced by 22' ceilings, a wood-burning fireplace (1 of 3 in the home) surrounded by a floor-to-ceiling plain-sawn cherry wood hearth, and a perfect Freedom Tower view. The top-of-the-line chef's kitchen is clad with premium finishes and fixtures including custom white lacquer cabinets, bluestone counters and professional-grade appliances. Sliding glass doors in the dining area showcase views while opening up the home to even more light and air. Spill out to the awe-inspiring terrace which can be accessed from any room, where a fully-equipped outdoor stainless steel kitchen, sun deck, hot tub and private outdoor shower await.
            Two dramatic stairways lead to the private bedroom suites, all boasting sleek en-suite baths, generous closets and wonderful views. The master bedroom is the ultimate retreat facing the Hudson River, complete with a spa-like onyx bath with a steam shower, Jacuzzi and sauna.
            Built in 1929 as a printing factory, 145 Hudson is full-service and pet-friendly in the heart of fashionable Tribeca. A deeded private parking is included with the sale of the penthouse.
            </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
    
    )
}

export default ProjectsDetails