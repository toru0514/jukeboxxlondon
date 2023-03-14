import React from 'react'
import './Silder.module.css'

const leftArrow = '/images/left-arrow.svg'
const rightArrow = '/images/right-arrow.svg'

export default function BtnSlider ({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
    >
      <img src={direction === 'next' ? rightArrow : leftArrow}
           alt="arrow"/>
    </button>
  )
}
