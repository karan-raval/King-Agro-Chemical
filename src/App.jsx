import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import MainRoutes from './Routes/MainRoutes'

function App() {

  return (
    <>
    <BrowserRouter>
    <MainRoutes/>
    </BrowserRouter>
    </>
  )
}

export default App
