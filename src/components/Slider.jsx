import React from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import classNames from 'classnames/bind'
import styles from './Slider.module.css'

const cx = classNames.bind(styles)

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const Slider = () => {
  const slides = [
    { id: 1, content: 'Slide 1', image: '/images/slideimg1.png' },
    { id: 2, content: 'Slide 2', image: '/images/slideimg2.png' },
    { id: 3, content: 'Slide 3', image: '/images/slideimg3.png' },
    { id: 4, content: 'Slide 4', image: '/images/slideimg4.png' },
    { id: 5, content: 'Slide 5', image: '/images/slideimg5.png' },
    { id: 6, content: 'Slide 6', image: '/images/slideimg6.png' },
    { id: 7, content: 'Slide 7', image: '/images/slideimg7.png' },
    { id: 8, content: 'Slide 8', image: '/images/slideimg8.png' },
    { id: 9, content: 'Slide 9', image: '/images/slideimg9.png' },
    { id: 10, content: 'Slide 10', image: '/images/slideimg10.png' },

  ]

  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.image} alt={slide.content} className={cx('slide-image')}/>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination"/>
    </>
  )
}

export default Slider