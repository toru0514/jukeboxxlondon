import Head from 'next/head'
import { HamburgerButton } from '../components/HamburgerButton'
import { HamburgerMenu } from '../components/HamburgerMenu'
import { Link } from '../components/Link'
import { useState } from 'react'
import { footerIcons, shopIcons, shopTitle } from '../data'
import './_app.css'
import '../assets/styles/reset.css'

export default function MyApp ({ Component, pageProps }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
      <link href="https://fonts.googleapis.com/css2?family=Playball&display=swap" rel="stylesheet"/>
      <Head>
        <meta charSet="utf-8"/>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="theme-color" content="#000000"/>
        <meta
          name="description"
          content="カスタムライダースを各地に広めているブランド、JUKEBOXXLONDONです。"
        />
        <link rel="apple-touch-icon" href="/logo192.png"/>
        <link rel="manifest" href="/manifest.json"/>
      </Head>
      <header className="home-page">
        <div className="shop-title">
          {shopTitle.map((image) => (
            <a
              key={image.id}
              href={image.url}
              target="_self"
              rel="noreferrer"
            >
              <img
                className="shop-image"
                src={image.image}
                alt={image.name}
              />
            </a>
          ))}
          {shopIcons.map((image) => (
            <a
              key={image.id}
              href={image.url}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="icon-image"
                src={image.image}
                alt={image.name}
              />
            </a>
          ))}
          <HamburgerButton onClick={() => setIsExpanded(!isExpanded)} expanded={isExpanded}/>
          <HamburgerMenu expanded={isExpanded}>
            <HamburgerMenu.Item to="/">Home</HamburgerMenu.Item>
            <HamburgerMenu.Item to="/aboutus">ABOUT US</HamburgerMenu.Item>
            <HamburgerMenu.Item to="/product">PRODUCT</HamburgerMenu.Item>
            <HamburgerMenu.Item to="/store">STORE</HamburgerMenu.Item>
            <HamburgerMenu.Item to="/contact">CONTACT</HamburgerMenu.Item>
          </HamburgerMenu>
        </div>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      <div className="under-line1"/>
      <div className="menu-area">
        <p className="border-lineno"><Link to="/">HOME</Link></p>
        <p className="border-line"><Link to="/aboutus">ABOUT</Link></p>
        <p className="border-line"><Link to="/product">PRODUCT</Link></p>
        <p className="border-line"><Link to="/store">STORE</Link></p>
        <p className="border-line"><Link to="/contact">CONTACT</Link></p>
      </div>
      <div className="under-line1"/>
      <div className="footer-icon">
        {footerIcons.map((link) => (
          <Link key={link.id} to={link.url} external>
            <img
              className={`footer-icon-image ${link.id}-image`}
              src={link.image}
              alt={link.name}/>
          </Link>
        ))}
      </div>
      <div className="copyright">
        <p>&copy;{new Date().getFullYear()} JUKEBOXX LONDON</p>
      </div>
    </>
  )
}