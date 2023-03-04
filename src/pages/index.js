import styles from './index.module.css'
import classNames from 'classnames/bind'
import Slider from '../components/Slider/Slider'

const cx = classNames.bind(styles)

function HomePage () {
  return (
    <div className={cx('home-page')}>
      <Slider/>
      <p>JUKEBOXXLONDON</p>
    </div>
  )
}

export default HomePage