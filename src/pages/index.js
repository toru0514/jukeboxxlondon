import styles from './index.module.css'
import classNames from 'classnames/bind'
import { Link } from '../components/Link'

const cx = classNames.bind(styles)

function HomePage () {
  return (
    <>
      <div className={cx('home-page')}>
        <div className={cx('home-title')}>
          <img
            className={cx('title-image')}
            src={'/images/IMG_5643_mod.jpg'}/>
          <p className={cx('title-text')}>
            JUKEBOXX LONDON
          </p>
          <p className={cx('title-comment')}>
            「日常をROCKにキメる」<br/>唯一無二の<br/>カスタムライダースジャケット
          </p>
        </div>
        <div className={cx('about-area')}>
          <p className={cx('title-com')}>
            ABOUT US
          </p>
          <img
            className={cx('about-image')}
            src={'/images/aboutus.jpeg'}/>
          <p className={cx('about-comment')}>
            私たちは、ROCKERS文化を土台とした、<br/>
            ライダースジャケットのカスタムブランドです。
          </p>
          <p className={cx('about-comment2')}>
            ROCKERS文化の象徴である、ライダースジャケットに鋲やワッペン等を取り付け、唯一無二のオリジナルライダースを製作する。
            そんな文化を継承する思いを込めて、ロッカーズ文化のある名古屋の地で立ち上げたブランドとなります。
          </p>
          <div className={cx('view-area')}>
            <a className={cx('view-more')}
               href="/aboutus"
               target="_blank"
               rel="noreferrer"
            >VIEW MORE</a>
          </div>
        </div>
        <div className={cx('product-area')}>
          <p className={cx('title-com')}>
            PRODUCT
          </p>
        </div>
        <p className={cx('about-comment')}>
          ご希望の文字が入力可能なオリジナルカスタムで<br/>
          一つ一つ手作りで製作しております。
        </p>
        <div className={cx('product-image-area')}>
          <img
            className={cx('product-image')}
            src={'/images/sample_back.png'}/>
        </div>
        <div className={cx('view-area')}>
          <a className={cx('view-more')}
             href="/product"
             target="_blank"
             rel="noreferrer"
          >VIEW MORE</a>
        </div>
        <div className={cx('gallery-area')}>
          <p className={cx('title-com')}>
            GALLERY
          </p>
          <div className={cx('gallery-image-area')}>
            <img
              className={cx('gallery-image')}
              src={'/images/gallery.jpg'}/>
          </div>
        </div>
        <div className={cx('contact-area')}>
          <p className={cx('title-com')}>
            CONTACT
          </p>
          <p className={cx('about-comment')}>
            詳細やその他不明点等につきましては<br/>
            下記の当社コンタクトページより<br/>
            ご気軽にお問合せください。
          </p>
        </div>
        <div className={cx('view-area')}>
          <a className={cx('contact-view')}
             href="/contact"
             target="_blank"
             rel="noreferrer"
          >✉️CONTACT PAGE</a>
        </div>
        <div className={cx('contact-image-area')}>
          <img
            className={cx('contact-image')}
            src={'/images/label_image.JPG'}/>
        </div>
      </div>
    </>
  )
}

export default HomePage