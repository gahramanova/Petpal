import { Route, Routes, useLocation } from 'react-router-dom'
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
import HeaderSecond from './layout/HeaderSecond'
import ForgotPassword from './pages/ForgotPassword'
import TeamDetails from './pages/TeamDetails'
import ProductDetails from './pages/ProductDetails'
import NotFound from './pages/NotFound'
import Checkout from './pages/Checkout'
import MyAccount from './pages/MyAccount'
import PrivateRoute from './utils/PrivateRoute'

const App = () => {
  const location = useLocation();

  const routerWithSecondHeader = [
    "/about",
    "/cart",
    "/ourteams",
    "/teamdetails",
    "/contact",
    "/login",
    "/register",
    "/shop",
    "/wishlist",
    "/forgotpassword",
    "/checkout",
    "/myaccount"
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
        <Route path='/ourteams/:url' element={<TeamDetails />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/wishlist' element={<Wishlist />}></Route>
        <Route path='/forgotpassword' element={<ForgotPassword />}></Route>
       
        <Route element={<PrivateRoute />}>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="/myaccount" element={<MyAccount />}></Route>
          </Route>
        
        <Route path='*' element={<NotFound />}></Route>

      </Routes>
      <Footer />
    </div>
  )
}

export default App