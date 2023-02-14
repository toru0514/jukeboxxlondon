import { shopTitle } from '../data'
import styles from './index.module.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function HomePage () {
  return (
    <div className={cx('home-page')}>
      <div className={cx('shop-title')}>
        {shopTitle.map((image) => (
          <img
            className={cx('shop-image')}
            src={image.image}
            alt={image.name}
          />
        ))}
        <p>JUKEBOXXLONDON</p>
      </div>
    </div>
  )
}

export default HomePage