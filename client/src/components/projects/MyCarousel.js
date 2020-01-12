import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
class MyCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img  src="/img/penthouse.jpg" />
                    <p className="legend">Living area 1</p>
                </div>
                <div>
                    <img src="/img/p1.jpg" />
                    <p className="legend">Living area 2</p>
                </div>
                <div>
                    <img src="/img/p2.jpg" />
                    <p className="legend">Balcony view</p>
                </div>
                <div>
                    <img src="/img/p3.jpg" />
                    <p className="legend">Master bedroom</p>
                </div>
            </Carousel>
        );
    }
};

export default MyCarousel;
