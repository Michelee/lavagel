import React, { Component } from 'react'
import Slider from 'react-slick'
import LavagelImg from '../../images/main-bg.png'
import AgingImg from '../../images/anti-aging-img.jpg'
import MedicalImg from '../../images/medical-img.jpg'
import BuffetImg from '../../images/buffet-img.jpg'
import Video from '../../images/video.gif'
import Button from '../../components/ui/button'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../../styles/ui/carousel.scss"

class ReactSlickDemo extends Component {
  render() {
    var settings = {
      dots: false,
      arrow: true,
      infinite: true,
      speed: 1000,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    var slides = [
      {"title": "The World’s First – Safe, Controllable, and Natural Self-Heating Technology", "image": Video},
      {"title": "Reversing the signs of aging", "image": AgingImg},
      {"title": "Making medical needles a thing of the past", "image": MedicalImg},
      {"title": "Serving oven fresh food, 2 hours after it leaves the oven.", "image": BuffetImg}      
    ]

    return (
      <div className="container">
        <Slider {...settings}>
          {
            slides.map((item, index) => (
              <div className="carousel-item" key={index}>
                <img src={item.image} alt="carousel0" />
                <div className="carousel-text">
                  <span className="place">{item.title}</span>
                  {
                    index === 0
                    ? <Button
                      label="Watch video"
                      url="/" />
                    : ''
                  }     
                </div>   
              </div>
            ))
          }
        </Slider>
      </div>
    );
  }
}

export default ReactSlickDemo;
