import React from 'react'
import styles from './contact.module.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
const ContactPage = () => {

  return (
    <>
      <div className={cx('container')}>
        <h1 className={cx('contact-page')}>CONTACT</h1>
        <form name="contact" action="/success" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact"/>
          <div>
            <label htmlFor="name">Your Name *</label>
            <input name="name" type="text" required/>
          </div>
          <div>
            <label htmlFor="email">Your Email *</label>
            <input name="email" type="email" required/>
          </div>
          <div>
            <label htmlFor="content">Description</label>
            <textarea
              name="content"
              placeholder="※サイズやワッペンの文字などを連絡いただけるとスムーズです。その他、追加のワッペンなど、カスタムについてもご相談ください。"
              rows="10"
              required
            />
          </div>
          <button className={cx('send-button')} type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default ContactPage