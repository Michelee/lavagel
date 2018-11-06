import React, { Component } from 'react'
import Slider from 'react-slick'
import LavagelImg from '../../images/main-bg.png'
import AgingImg from '../../images/anti-aging-img.png'
import MedicalImg from '../../images/medical-img.png'
import BuffetImg from '../../images/buffet-img.png'
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
      {"title": "Using Lava Gel to help reverse the signs of aging", "image": AgingImg},
      {"title": "Lava Gel helps make needles a thing of the past", "image": MedicalImg},
      {"title": "Heating up the Food Industry", "image": BuffetImg}      
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
