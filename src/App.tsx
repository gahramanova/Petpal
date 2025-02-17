import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from "./layout/Header"
import Footer from './layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import OurTeams from './pages/OurTeams'
import AllPets from './pages/AllPets'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Blog from './pages/Blog'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/ourteams' element={<OurTeams/>}></Route>
        <Route path='/allpets' element={<AllPets/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/wishlist' element={<Wishlist/>}></Route>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App