import React from 'react'
import styles from './product.module.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
const aboutusPage = () => {

  return (
    <div>
      <p className={cx('title-com')}>
        PRODUCT
      </p>
      <p className={cx('about-comment')}>
        希望の文字が入力可能なオリジナルカスタムで<br/>
        ひとつひとつ手作りで製作しております。
      </p>
      <p className={cx('product-title')}>
        JUKEBOXX LONDON ORIGINAL<br/>
        CUSTOM RIDERS JACKET
      </p>
      <div className={cx('image-areaA')}>
        <div className={cx('back-area')}>
          <img
            className={cx('back-image')}
            src={'/images/product_image/ridersimage_back.png'}
            alt="image"/>
          <p className={cx('position-comment')}>
            BACK
          </p>
          <p className={cx('image-comment')}>
            IMAGE
          </p>
        </div>
        <div className={cx('front-area')}>
          <img
            className={cx('front-image')}
            src={'/images/product_image/ridersimage_front.png'}
            alt="image"/>
          <p className={cx('position-comment')}>
            FRONT
          </p>
          <p className={cx('image-comment')}>
            IMAGE
          </p>
        </div>
      </div>
      <div className={cx('image-areaB')}>
        <div className={cx('side-area')}>
          <img
            className={cx('side-image')}
            src={'/images/product_image/ridersimage_side.png'}
            alt="image"/>
          <p className={cx('position-comment')}>
            SIDE
          </p>
          <p className={cx('image-comment')}>
            IMAGE
          </p>
        </div>
        <div className={cx('name-area')}>
          <img
            className={cx('name-image')}
            src={'/images/product_image/ridersimage_name.JPG'}
            alt="image"/>
          <p className={cx('name-comment')}>
            ここには「JUKEBOXXLONDON」もしくは<br/>
            ご希望の文字を入力可能です ※MAX14文字程度
          </p>
          <p className={cx('arrow-area')}>↑</p>
        </div>
      </div>
      <p className={cx('basic-price')}>
        BASIC STYLE ¥218,000 -tax in
      </p>
      <p className={cx('custom-price')}>
        CUSTOM STYLE ¥ASK
      </p>
    </div>
  )
}

export default aboutusPage