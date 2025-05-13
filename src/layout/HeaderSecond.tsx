import { Link, NavLink } from "react-router-dom";
import darkLogo from "../assets/img/darkLogo.png"
import { IoLockClosedOutline } from "react-icons/io5";
import { CiShoppingBasket } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { TbMenuDeep } from "react-icons/tb";
import { useContext, useEffect, useState } from "react";
import { GoHeart } from "react-icons/go";
import { useCart } from "react-use-cart";
import { FaUserCircle } from "react-icons/fa";
import { useCookies } from "react-cookie";
import { ApiEndPointContext } from "../context/ApiEndPointContext";
import axios from "axios";
import slugify from "react-slugify";



const HeaderSecond = () => {
  const [open, setOpen] = useState(false); // Drawer'ın açık/kapalı durumunu kontrol etmek için

  const [cookies] = useCookies(["petpal"])

  const { totalItems } = useCart()
  const toggleDrawer = () => {
    setOpen(!open); // Drawer'ın durumunu değiştir
  };


  const [generalInfo, setGeneralInfo] = useState([])
  const { apiEndPoint, passValue } = useContext(ApiEndPointContext)
   const [product, setProduct] = useState([])
  const [query, setQuery] = useState("");


  useEffect(() => {
    axios.get(`${apiEndPoint}/generalInfo`, {
      headers: passValue
    })
      .then(res => {
        setGeneralInfo(res.data)
        console.log(res.data)
      })

      axios.get(`${apiEndPoint}/product`, {
        headers: passValue
      })
        .then(res => {
          setProduct(res.data)
        })
        .catch(error => console.log(error))

  }, [])
  return (
    <>
      <header className="header-version-one">
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

            {/* Ortada Logo */} {
              generalInfo.map((item: any) => (
                <div className="d-flex col-12 col-md-4 justify-content-center mb-2 mb-md-0">
                  <Link to={"/"}>
                    <img src={`https://petpal-backend-en2xs.kinsta.app/${item.logoLight.replace("\\", "/")}`} width={170} height={40} />
                  </Link>
                </div>

              ))
            }

            <div className="d-flex col-12 col-md-4 justify-content-end text-end">
              <div className="d-flex align-items-center justify-content-between">
                <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal"><IoIosSearch style={{ width: "35px", height: "35px", color: "#BFCDEB" }} /></button>
                 

                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1 className="modal-title fs-5" id="exampleModalLabel">Search results</h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                          <input
                            onChange={(e) => setQuery(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder={"Enter product name"}
                          />

                          <div>
                            <ul className="list-group">
                              {!query
                                ? ""
                                : product
                                  .filter((p:any) => {
                                    const title = p.name
                                    return typeof title === "string"
                                      ? title
                                        .toLocaleLowerCase()
                                        .includes(query.toLocaleLowerCase())
                                      : false;
                                  })
                                  .map((item: any, index: number) => (
                                    <Link 
                                    style={{textDecoration:"none"}}
                                      to={`/shop/${slugify(item.name)}`}
                                      key={index}
                                      onClick={() => {
                                        // const modal =
                                        //   document.getElementById("searchModal");
                                        // const bootstrapModal =
                                        //   window.bootstrap.Modal.getInstance(modal!);
                                        // bootstrapModal?.hide();
                                      }}
                                    >
                                      <li className="list-group-item d-flex align-items-center my-2">
                                        <img
                                          src={`https://petpal-backend-en2xs.kinsta.app/${item.coverImg.replace(/\\/g, "/")}`} 
                                          className="me-4"
                                          style={{ width: "70px", height: "70px" }}
                                        />
                                        {item.name.slice(0,30)}...
                                      </li>
                                    </Link>
                                  ))}
                            </ul>
                          </div>

                        </div>

                      </div>
                    </div>
                  </div>
          
                <NavLink to={"/wishlist"}>
                  <button className="btn"><GoHeart style={{ width: "30px", height: "30px", color: "#BFCDEB" }} /></button>
                </NavLink>

                <NavLink to="/cart" className="position-relative">
                  <CiShoppingBasket style={{ width: "35px", height: "35px", color: "#BFCDEB" }} />
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{ backgroundColor: "#894B8D" }}>
                    {totalItems}
                  </span>
                </NavLink>
                {cookies.petpal ?
                  <NavLink to="/myaccount">
                    <button type="button" className="btn me-2 d-flex justify-content-center align-items-center mx-3">
                      <FaUserCircle style={{ width: "36px", height: "36px", marginRight: "5px", color: "#BFCDEB" }} />
                    </button>
                  </NavLink>
                  :
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
                  </NavLink>}

              </div>
            </div>

          </div>
        </div>


      </header>

      <header className="header-version-two">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <NavLink to="/">
              <img src={darkLogo} width={170} height={40} />
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

export default HeaderSecond