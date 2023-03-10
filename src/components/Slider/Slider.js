import React, { useState } from 'react'
import './Silder.module.css'
import dataSlider from './dataSlider'
import BtnSlider from './BtnSlider'

export default function Slider () {

  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length)
    }
  }
  const moveDot = index => {
    setSlideIndex(index)
  }

  return (
    <div>
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}
          >
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img
              src={process.env.PUBLIC_URL + `/images/slideimg${index + 1}.jpg`}
              alt={obj.name}
            />
          </div>
        )
      })}
      <BtnSlider moveSlide={nextSlide} direction={'next'}/>
      <BtnSlider moveSlide={prevSlide} direction={'prev'}/>

      <div className="container-dots">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? 'dot active' : 'dot'}
          />
        ))}
      </div>
    </div>
  )
}