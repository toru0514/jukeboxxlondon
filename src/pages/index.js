import styles from './index.module.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function HomePage () {
  return (
    <div className={cx('home-page')}>
      <p>JUKEBOXXLONDON</p>
    </div>
  )
}

export default HomePage