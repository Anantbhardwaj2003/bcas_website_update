import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Focus from './components/Focus'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Focus />
      <Gallery />
      <Footer />
    </>
  )
}

export default App
