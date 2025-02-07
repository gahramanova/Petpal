import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbClockHour3 } from "react-icons/tb";
import petpalLogo from "../assets/img/petpalLogo.png"
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { CiShoppingBasket } from "react-icons/ci";
import { CgMenuCheese } from "react-icons/cg";
import { LuCalendar1 } from "react-icons/lu";



const Header = () => {
  return (
    <>
      <header className="px-1 py-3">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center">
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center mx-2' style={{ color: "#ACB9D8" }}><IoLocationOutline style={{ width: "25px", height: "25px", marginRight: "5px", color: "white" }} />
                59 Jakc Street Brooklyn, New York</div>
              <div className='text-light'>/</div>
              <div className='mx-2 d-flex align-items-center' style={{ color: "#ACB9D8" }}><MdOutlineEmail style={{ width: "20px", height: "20px", marginRight: "5px", color: "white" }} />
                Petspostinfo@gmail.com</div>
            </div>

            <div className='d-flex justify-content-between align-items-center'>
              <div className='mx-2 d-flex align-items-center' style={{ color: "#ACB9D8" }}><TbClockHour3 style={{ width: "20px", height: "20px", marginRight: "5px", color: "white" }} />
                Opening Hour: 09.00 am- 11.00 pm</div>
              <div className='text-light'>/</div>
              <div className='mx-2 text-light d-flex justify-content-between align-items-center'>
                <FaFacebookF className='mx-2' />
                <FaTwitter className='mx-2' />
                <FaWhatsapp className='mx-2' />
                <FaInstagram className='mx-2' />

              </div>
            </div>


          </div>
        </div>

      </header>

      <div className='px-2'>
        <div className="container-fluid">
          <div className="d-flex align-items-center justify-content-lg-between py-3 mb-4">
            <div className="col-12 col-sm-6 col-md-3 mb-2 mb-md-0">
              <img src={petpalLogo} style={{ width: "170px", height: "50px", objectFit: "contain" }} />
            </div>
            <ul className="nav col-12 col-sm-6 col-md-5 mb-2 justify-content-center mb-md-0">
              <li><Link to="/" className="nav-link px-2">Home</Link></li>
              <li><Link to="/about" className="nav-link px-2">About</Link></li>
              <li><Link to="/shop" className="nav-link px-2">Shop</Link></li>
              <li><Link to="/allpets" className="nav-link px-2">All Pets</Link></li>
              <li><Link to="/ourteams" className="nav-link px-2">Our teams</Link></li>
              <li><Link to="/contact" className="nav-link px-2">Contact</Link></li>
            </ul>
            <div className="col-12 col-sm-6 col-md-4 text-end">
              <button className='btn'><IoIosSearch style={{ width: "35px", height: "35px", color: "#686677" }} /></button>
              <button className='btn'><CiShoppingBasket style={{ width: "35px", height: "35px", color: "#686677" }} /></button>

              <button className='btn' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><CgMenuCheese style={{ width: "35px", height: "35px", color: "#686677" }} /></button>
              <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header border-bottom">
                <img src={petpalLogo} className='mx-2 my-5 ' style={{ width: "170px", height: "50px", objectFit: "contain" }} />
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body">
                  ...
                </div>
              </div>

              <button className='btn appointment'><LuCalendar1 style={{ marginRight: "5px" }} />Appointment</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Header