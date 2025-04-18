import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbClockHour3 } from "react-icons/tb";
import petpalLogo from "../assets/img/petpalLogo.png"
import { Link, NavLink } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { CiShoppingBasket } from "react-icons/ci";
import { CgMenuCheese } from "react-icons/cg";
import { LuCalendar1 } from "react-icons/lu";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { TbMenuDeep } from "react-icons/tb";
import { useState } from "react";
import { useCart } from "react-use-cart";



const Header = () => {

  const {totalItems} = useCart()

  const [open, setOpen] = useState(false); // Drawer'ın açık/kapalı durumunu kontrol etmek için


  const toggleDrawer = () => {
    setOpen(!open); // Drawer'ın durumunu değiştir
  };
  return (
    <>
      <header className="px-1 py-3 header-top">
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

      <div className='px-2 header-version-one'>
        <div className="container-fluid">
          <div className="d-flex align-items-center justify-content-lg-between py-3">
            <div className="col-12 col-sm-6 col-md-3 mb-2 mb-md-0">
              <img src={petpalLogo} style={{ width: "170px", height: "50px", objectFit: "contain" }} />
            </div>
            <ul className="nav col-12 col-sm-6 col-md-5 mb-2 justify-content-center mb-md-0">
              <li><Link to="/" className="nav-link px-2">Home</Link></li>
              <li><Link to="/about" className="nav-link px-2">About</Link></li>
              <li><Link to="/shop" className="nav-link px-2">Shop</Link></li>
              <li><Link to="/ourteams" className="nav-link px-2">Our teams</Link></li>
              <li><Link to="/contact" className="nav-link px-2">Contact</Link></li>
            </ul>
            <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-end align-items-center gap-2">
              <button className='btn'><IoIosSearch style={{ width: "35px", height: "35px", color: "#686677" }} /></button>
              <NavLink to="/cart" className="position-relative">
                <CiShoppingBasket style={{ width: "35px", height: "35px", color: "#686677" }} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{ backgroundColor:"#894B8D"}}>
                 {totalItems}
                </span>
              </NavLink>
              {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


              <button className='btn' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <CgMenuCheese style={{ width: "35px", height: "35px", color: "#686677" }} />
              </button>

              <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header border-bottom">
                  <img src={petpalLogo} className='mx-3 my-2 ' style={{ width: "170px", height: "50px", objectFit: "contain" }} />
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                </div>
                <div className="offcanvas-body">
                  <div className="container">
                    <h6 className="fw-bold" style={{ color: "#002169" }}>Office Address</h6>
                    <p style={{ color: "#445374" }}>123/A, Miranda City Likaoli <br />
                      Prikano, Dope</p>
                    <hr />
                    <h6 className="fw-bold" style={{ color: "#002169" }}>Phone Number</h6>
                    <p className="m-0" style={{ color: "#445374" }}>+91 345 445 332</p>
                    <p style={{ color: "#445374" }}>+91 345 445 332</p>
                    <hr />
                    <h6 className="fw-bold" style={{ color: "#002169" }}>Email address</h6>
                    <p className="m-0" style={{ color: "#445374" }}>info@example.com</p>
                    <p style={{ color: "#445374" }}>example@info.com</p>
                  </div>
                </div>
              </div>

              {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}



              <Link to="/contact">
                <button className="btn appointment d-inline-flex align-items-center">
                  <LuCalendar1 className="me-2" />
                  Appointment
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>


      <header className="header-version-two">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <NavLink to="/">
              <img src={petpalLogo} width={170} height={40} />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleDrawer}
              aria-expanded={open ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <TbMenuDeep className="navbar-icon" />

            </button>

            <Drawer
              anchor="left"
              open={open}
              onClose={toggleDrawer}
            >
              <div
                role="presentation"
                onClick={toggleDrawer} // İçeriğe tıklanırsa menüyü kapat
                onKeyDown={toggleDrawer}
                style={{ width: 400 }}
              >
                <div className="offcanvas-header d-flex justify-content-between align-items-center">
                  <div> <h5 className="offcanvas-title p-2">Menu</h5></div>
                  <div> <button type="button" className="btn-close mx-5" data-bs-dismiss="offcanvas" aria-label="Close"></button></div>
                </div>
                <List>
                  <ListItem

                    component={NavLink}
                    to="/"
                    className="nav-link border-bottom"
                    style={{ color: "#002169" }}
                  >
                    <ListItemText primary="Home Page" />
                  </ListItem>
                  <ListItem
                    component={NavLink}
                    to="/about"
                    className="nav-link border-bottom"
                    style={{ color: "#002169" }}
                  >
                    <ListItemText primary="About" />
                  </ListItem>
                  <ListItem
                    component={NavLink}
                    to="/shop"
                    className="nav-link border-bottom"
                    style={{ color: "#002169" }}
                  >
                    <ListItemText primary="Shop" />
                  </ListItem>
                  <ListItem

                    component={NavLink}
                    to="/ourteams"
                    className="nav-link border-bottom"
                    style={{ color: "#002169" }}
                  >
                    <ListItemText primary="Our teams" />
                  </ListItem>
                  <ListItem

                    component={NavLink}
                    to="/contact"
                    className="nav-link border-bottom"
                    style={{ color: "#002169" }}
                  >
                    <ListItemText primary="Contact" />
                  </ListItem>
                </List>

                <div className="d-flex justify-content-start align-items-center">
                  <NavLink to={"/login"}>
                    <button className="btn mx-2"
                      style={{
                        color: "#002169",
                        border: "1px solid #002169"
                      }}>
                      Login
                    </button>
                  </NavLink>
                  <NavLink to={"/register/email"}>
                    <button className="btn"
                      style={{
                        backgroundColor: "#002169",
                        color: "white"
                      }}

                    >
                      Register
                    </button>
                  </NavLink>
                </div>

              </div>
            </Drawer>
          </div>
        </nav>
      </header>

    </>
  )
}

export default Header