import React from 'react'
import styles from './store.module.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
const storePage = () => {

  return (
    <div>
      <div>
        <p className={cx('title-com')}>
          STORE
        </p>
        <p className={cx('store-comment')}>
          商品につきましては BLACK MARKET 大須店 様で取り扱い頂いております
        </p>
        <img
          className={cx('bm-image')}
          src={'/images/black_m_logo.png'}
          alt="bm"/>
        <div className={cx('store-info')}>
          <p>https://black-m.jp/</p>
          <p>TEL 052-253-9444</p>
          <p>詳細やその他不明点につきましては<br/>下記の当社コンタクトページより<br/>ご気軽にお問合せください。</p>
          <div className={cx('contact-button')}>
            <a className={cx('contact-view')}
               href="/contact"
               target="_self"
               rel="noreferrer"
            >✉️CONTACT PAGE</a>
          </div>
        </div>
      </div>
      <div>
        <p className={cx('title-com')}>
          ACCESS
        </p>
        <img
          className={cx('map-image')}
          src={'/images/googlemap.png'}
          alt="map"/>
        <div className={cx('store-info')}>
          <img
            className={cx('bm-image')}
            src={'/images/black_m_logo.png'}
            alt="bm"/>
          <p>https://black-m.jp/</p>
          <p>TEL 052-253-9444</p>
        </div>
      </div>
    </div>
  )
}

export default storePage