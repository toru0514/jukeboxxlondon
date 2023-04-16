import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  return (
    <Slider {...settings}>
      <div>
        <img src="/images/slideimg1.png" alt="Slide 1"/>
      </div>
      <div>
        <img src="/images/slideimg2.png" alt="Slide 2"/>
      </div>
      <div>
        <img src="/images/slideimg3.png" alt="Slide 3"/>
      </div>
    </Slider>
  )
}

export default SliderComponent