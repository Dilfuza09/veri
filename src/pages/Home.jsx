import React from 'react'
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <>
      {/* <center>
      <div className="carousel-container">
        <Carousel className="carousel">
          <Carousel.Item>
            <img
              className="slide"
              src="https://cakelab.uz/uploads/sliders/slider_1707995790.png"
              alt="Первый слайд"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="slide"
              src="https://cakelab.uz/uploads/sliders/slider_1707995683.png"
              alt="Второй слайд"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="slide"
              src="https://cakelab.uz/uploads/sliders/slider_1707995643.png"
              alt="Третий слайд"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="slide"
              src="https://cakelab.uz/uploads/sliders/slider_1707995757.png"
              alt="Четвертый слайд"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="slide"
              src="https://cakelab.uz/uploads/sliders/slider_1666180144.png"
              alt="Пятый слайд"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      </center> */}
      <div className="home">
        <img className='home-image' src="	https://thumb.tildacdn.com/tild3066-3936-4632-a234-396433303631/-/format/webp/4.png" alt="" />
        <img className='home-image' src="	https://thumb.tildacdn.com/tild6566-3934-4561-b235-343237663134/-/format/webp/55.png" alt="" />
      </div>
      <div className="home-text">
        <div className="home-p">Nice things for casual life created to <br /> bring you joy of usage</div>
      </div>
    </>
  )
}

export default Home