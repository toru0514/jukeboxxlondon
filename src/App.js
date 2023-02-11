import './App.css'
import { shopTitle } from './data'

function App () {
  return (
    <div className="shop-title">
      {shopTitle.map((image) => (
        <img
          className="shop-image"
          src={image.image}
          alt={image.name}
        />
      ))}
      <p>JUKEBOXXLONDON</p>
    </div>
  )
}

export default App
