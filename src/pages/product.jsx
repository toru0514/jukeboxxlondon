import React from 'react'
import styles from './product.module.css'
import classNames from 'classnames/bind'
import { Link } from '../components/Link'

const cx = classNames.bind(styles)
const productPage = () => {

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
            alt="raiders-black"/>
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
            alt="front"/>
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
            alt="side"/>
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
            alt="name"/>
          <p className={cx('name-comment')}>
            ここには「JUKEBOXXLONDON」もしくは<br/>
            ご希望の文字を入力可能です ※MAX14文字程度
          </p>
          <p className={cx('arrow-area')}>↑</p>
        </div>
      </div>
      <div className={cx('price-style')}>
        <p className={cx('basic-price1')}>
          BASIC STYLE
        </p>
        <p className={cx('basic-price2')}>
          ¥218,000 -tax in
        </p>
      </div>
      <div className={cx('price-style')}>
        <p className={cx('custom-price1')}>
          CUSTOM STYLE
        </p>
        <p className={cx('custom-price2')}>
          ¥ASK
        </p>
      </div>
      <div className={cx('jblxbm-style')}>
        <img
          className={cx('jblbm-image')}
          src={'/images/jblxbm.png'}
          alt="jblxbm"/>
        <p>JUKEBOXX LONDON × BLACK MARKET</p>
      </div>
      <div className={cx('raiders-comment')}>
        <p>ライダースジャケットにていては<br/>BLACK MARKET様とのコラボ商品になります。<br/><br/>BLACK MARKET様オリジナルのライダースジャケットをベースに使用し、カスタムさせて頂いております。
        </p>
        <br/>
        <p>BLACK MARKET<br/>「オリジナルライダースジャケット」</p>
        <br/>
        <p>着込むほど革の中の茶がのぞいてくる所謂「茶芯レザー」を使用し、今までとは違う風合いを堪能できるようにしました。<br/>革質は、耐久性に優れ滑らかなカウレザーを使用しております。</p>
        <img
          className={cx('size-image')}
          src={'/images/sizelist.png'}
          alt="sizelist"/>
        <p className={cx('size-comment')}>
          ※実際の商品と表記サイズには数cmの個体差が生じる場合がございます
        </p>
        <p>素材：牛革(カウハイド) <br/>生産国：パキスタン<br/>カラー：ブラック、レッド、ネイビー、パープル、ターコイズ</p>
        <div>
          <img
            className={cx('color-image')}
            src={'/images/product_image/black.png'}
            alt="black"/>
          <img
            className={cx('color-image')}
            src={'/images/product_image/red.png'}
            alt="red"/>
          <img
            className={cx('color-image')}
            src={'/images/product_image/navy.png'}
            alt="navy"/>
          <img
            className={cx('color-image')}
            src={'/images/product_image/purple.png'}
            alt="purple"/>
          <img
            className={cx('color-image')}
            src={'/images/product_image/turquoise.png'}
            alt="turquoise"/>
        </div>
      </div>
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

export default productPage