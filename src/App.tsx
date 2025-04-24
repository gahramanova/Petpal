import {Route, Routes, useLocation } from 'react-router-dom'
import Header from "./layout/Header"
import Footer from './layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import OurTeams from './pages/OurTeams'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Blog from './pages/Blog'
import HeaderSecond from './layout/HeaderSecond'
import ForgotPassword from './pages/ForgotPassword'
import TeamDetails from './pages/TeamDetails'
import ProductDetails from './pages/ProductDetails'

const App = () => {
  const location = useLocation();

  const routerWithSecondHeader = [
    "/about",
    "/blog",
    "/cart",
    "/ourteams",
    "/teamdetails",
    "/contact",
    "/login",
    "/register",
    "/shop",
    "/wishlist",
    "/forgotpassword"
  ];

  const showOnlySecondHeader = routerWithSecondHeader.includes(location.pathname)
  return (
    <div>

      {showOnlySecondHeader ? <HeaderSecond /> : <Header />}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/shop/:url' element={<ProductDetails />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/ourteams' element={<OurTeams />}></Route>
        <Route path='/ourteams/:url' element={<TeamDetails/>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/wishlist' element={<Wishlist />}></Route>
        <Route path='/forgotpassword' element={<ForgotPassword />}></Route>

      </Routes>
    <Footer/>
    </div>
  )
}

export default App