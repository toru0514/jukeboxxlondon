import React from 'react'
import styles from './store.module.css'
import classNames from 'classnames/bind'
import { Link } from '../components/Link'

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
        <Link to="https://black-m.jp" external>
          <img
            className={cx('bm-image')}
            src={'/images/black_m_logo.png'}
            alt="bm"/>
        </Link>
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
          <Link to="https://black-m.jp" external>
            <img
              className={cx('bm-image')}
              src={'/images/black_m_logo.png'}
              alt="bm"/>
          </Link>
          <p>https://black-m.jp/</p>
          <p>TEL 052-253-9444</p>
        </div>
      </div>
    </div>
  )
}

export default storePage