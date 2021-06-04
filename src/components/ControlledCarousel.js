import React , { useState } from 'react'
import { Carousel }  from 'react-bootstrap'

export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={'img/fund001.jpg'}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={'img/fund002.jpg'}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={'img/fund003.jpg'}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }