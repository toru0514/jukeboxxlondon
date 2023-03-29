import React from 'react'
import styles from './aboutus.module.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
const aboutusPage = () => {

  return (
    <div>
      <p className={cx('title-com')}>
        ABOUT US
      </p>
      <p className={cx('about-title')}>
        − JUKEBOXX LONDON −
      </p>
      <div className={cx('about-us')}>
        <p>私たちは、ROCKERS文化を土台とした、ライダースジャケットのカスタムブランドです。<br/><br/>
          ROCKERS文化の象徴である、ライダースジャケットに鋲やワッペン等を取り付け、唯一無二のオリジナルライダースを製作する。<br/>
          妥協せず拘りを詰め込み、全力で立ち上げたブランドとなります。<br/><br/>
          私たちが製作するカスタムライダースジャケットは、 チーム名やロゴを入れたオリジナルワッペンに、
          ご希望の文字を入れていただくことができます。<br/>
          このワッペンを鋲でライダースジャケットに取り付け、
          あなただけの唯一無二なカスタムライダースジャケットを製作します。<br/><br/>
          ・1950年代~1960年代のROCKERSスタイルへ憧れている<br/>
          ・人とは違ったライダースを求めている<br/>
          ・パンクでロックなスタイルを愛する<br/><br/>
          そんなあなたの期待を超える商品を私たちは製作いたします。
        </p>
      </div>
      <div>
        <p className={cx('title-com')}>
          PRODUCT
        </p>
        <p className={cx('product-us')}>
          ご希望の文字が入力可能なオリジナルカスタムで <br/>一つ一つ手作りで製作しております。
        </p>
        <div className={cx('product-image-area')}>
          <img
            className={cx('product-image')}
            src={'/images/sample_back.png'}
            alt="image"/>
        </div>
        <div className={cx('view-area')}>
          <a className={cx('view-more')}
             href="/product"
             target="_self"
             rel="noreferrer"
          >VIEW MORE</a>
        </div>
        <div className={cx('about-us')}>
          <p className={cx('brand-name')}>Coffee bar CowboyZ(コーヒーバー・カウボーイズ)</p>
          <p>
            カフェレーサーのルーツを辿ると、もともとは40年代後半から50年代にかけてアメリカの南カリフォルニアで興ったバイカーズのシーンの流れを汲みます。<br/><br/>
            海を越えたイギリス・ロンドンでは「doing the ton」を合言葉に、トライアンフ、ノートン、BSAなどのブリティッシュツインで時速100マイル(時速160キロ)突破を目指すトン・アップ・ボーイズ(Ton-Up
            Boys：別名コーヒーバー・カウボーイズ、レザーボーイズ)が出てきます。<br/><br/>
            「Live Fast Die Young」と新聞でよく報道されたそうです。ロック好きなら1度は耳にしたことのある有名な言葉だと思います。
          </p><br/><br/>
          <p className={cx('brand-name')}>JUKEBOXX LONDON(ジュークボックスロンドン)</p>
          <p>
            ジュークボックスで1曲かけて、ライダーがカフェから出発しルートに沿ってあるポイントまで行き、曲が終わる前にカフェに戻ってくるレース。これをレコードレーシング(ジュークボックスレース)と呼ばれていました。
          </p><br/><br/>
          <p className={cx('brand-name')}>j.a.b.s</p>
          <p>jabは文字通りボクシングのジャブの事で「激しく突き刺す」「素早い一撃を食わせる」の意味あります。
            jabsはその複数形です。</p>
        </div>
      </div>
      <div>
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
           target="_self"
           rel="noreferrer"
        >✉️CONTACT PAGE</a>
      </div>
      <div className={cx('contact-image-area')}>
        <img
          className={cx('contact-image')}
          src={'/images/label_image.JPG'}
          alt="contact"/>
      </div>
    </div>
  )
}

export default aboutusPage