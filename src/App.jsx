import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
