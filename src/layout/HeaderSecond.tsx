import { Link, NavLink } from "react-router-dom";
import darkLogo from "../assets/img/darkLogo.png"
import { IoLockClosedOutline } from "react-icons/io5";
import { CiShoppingBasket } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { TbMenuDeep } from "react-icons/tb";
import { useEffect, useState } from "react";
import { GoHeart } from "react-icons/go";
import { useCart } from "react-use-cart";


const HeaderSecond = () => {
  const [open, setOpen] = useState(false); // Drawer'ın açık/kapalı durumunu kontrol etmek için

  const { totalItems } = useCart()
  const toggleDrawer = () => {
    setOpen(!open); // Drawer'ın durumunu değiştir
  };


  const [generalInfo, setGeneralInfo] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/ad/generalInfo")
      .then(res => res.json())
      .then(data => {
        setGeneralInfo(data)
      })

      .catch(error => console.log(error))

  }, [])
  return (
    <>
      <header className="header-version-one">
        {generalInfo.map((item: any) => (
          <div className="container p-0">
            <div className="d-flex align-items-center justify-content-between py-3">

              {/* Sol Nav Links */}
              <div className="d-flex col-12 col-md-4 justify-content-start justify-content-md-start mb-2 mb-md-0">
                <ul className="nav">
                  <li><Link to="/" className="nav-link px-2 text-light">Home</Link></li>
                  <li><Link to="/about" className="nav-link px-2 text-light">About</Link></li>
                  <li><Link to="/shop" className="nav-link px-2 text-light">Shop</Link></li>
                  <li><Link to="/ourteams" className="nav-link px-2 text-light">Our teams</Link></li>
                  <li><Link to="/contact" className="nav-link px-2 text-light">Contact</Link></li>
                </ul>
              </div>

              {/* Ortada Logo */}
              <div className="d-flex col-12 col-md-4 justify-content-center mb-2 mb-md-0">
                <Link to={"/"}>
                  <img src={`http://localhost:3000/${item.logoLight.replace("\\", "/")}`} width={170} height={40} />
                </Link>
              </div>

              <div className="d-flex col-12 col-md-4 justify-content-end text-end">
                <div className="d-flex align-items-center justify-content-between">
                  <IoIosSearch style={{ width: "36px", height: "36px", color: "#BFCDEB" }} className="mx-2" />
                  <NavLink to={"/wishlist"}>
                    <button className="btn"><GoHeart style={{ width: "30px", height: "30px", color: "#BFCDEB" }} /></button>
                  </NavLink>

                  <NavLink to="/cart" className="position-relative">
                    <CiShoppingBasket style={{ width: "35px", height: "35px", color: "#BFCDEB" }} />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{ backgroundColor: "#894B8D" }}>
                      {totalItems}
                    </span>
                  </NavLink>

                  <NavLink to="/login" style={{ textDecoration: "none" }}>
                    <button
                      type="button"
                      className="btn me-2 login d-flex justify-content-center align-items-center mx-3"
                    >
                      <IoLockClosedOutline
                        style={{ width: "20px", height: "20px", marginRight: "5px" }}
                      />
                      Login
                    </button>
                  </NavLink>
                </div>
              </div>

            </div>
          </div>
        ))}

      </header>
      {generalInfo.map((item: any) => (

        <header className="header-version-two">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <NavLink to="/">
                <img src={`http://localhost:3000/${item.logoLight.replace("\\", "/")}`} width={170} height={40} />
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
      ))}
    </>
  )
}

export default HeaderSecond