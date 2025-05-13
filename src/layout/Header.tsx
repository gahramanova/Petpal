import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TbClockHour3 } from "react-icons/tb";
import { Link, NavLink } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { CiShoppingBasket } from "react-icons/ci";
import { CgMenuCheese } from "react-icons/cg";
import { LuCalendar1 } from "react-icons/lu";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { TbMenuDeep } from "react-icons/tb";
import { useContext, useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import axios from "axios";
import { ApiEndPointContext } from "../context/ApiEndPointContext";
import slugify from "react-slugify";



const Header = () => {


  const { totalItems } = useCart()

  const [open, setOpen] = useState(false); // Drawer'ın açık/kapalı durumunu kontrol etmek için


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
      }),

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
      <header className="px-1 py-3 header-top">
        {generalInfo.map((item: any) => (
          <div className="container-fluid">
            <div className="d-flex justify-content-between align-items-center">
              <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center mx-2' style={{ color: "#ACB9D8" }}><IoLocationOutline style={{ width: "25px", height: "25px", marginRight: "5px", color: "white" }} />
                  {item.address}</div>
                <div className='text-light'>/</div>
                <div className='mx-2 d-flex align-items-center' style={{ color: "#ACB9D8" }}><MdOutlineEmail style={{ width: "20px", height: "20px", marginRight: "5px", color: "white" }} />
                  {item.email}</div>
              </div>

              <div className='d-flex justify-content-between align-items-center'>
                <div className='mx-2 d-flex align-items-center' style={{ color: "#ACB9D8" }}><TbClockHour3 style={{ width: "20px", height: "20px", marginRight: "5px", color: "white" }} />
                  Opening Hour: 09.00 am- 11.00 pm</div>
                <div className='text-light'>/</div>
                <div className='mx-2 text-light d-flex justify-content-between align-items-center'>
                  <Link to={item.facebookUrl}><FaFacebookF className='mx-2' style={{ color: "white" }} /></Link>
                  <Link to={item.twitterUrl}><FaTwitter className='mx-2' style={{ color: "white" }} /></Link>
                  <Link to={item.instagramUrl}><FaInstagram className='mx-2' style={{ color: "white" }} /></Link>

                </div>
              </div>


            </div>
          </div>
        ))}


      </header>

      {generalInfo.map((item: any) => (
        <>
          <div className='px-2 header-version-one'>
            <div className="container-fluid">
              <div className="d-flex align-items-center justify-content-lg-between py-3">
                <div className="col-12 col-sm-6 col-md-3 mb-2 mb-md-0">
                  <Link to={"/"}>
                    <img src={`https://petpal-backend-en2xs.kinsta.app/${item.logoDark.replace("\\", "/")}`} style={{ width: "170px", height: "50px", objectFit: "contain" }} />
                  </Link>
                </div>
                <ul className="nav col-12 col-sm-6 col-md-5 mb-2 justify-content-center mb-md-0">
                  <li><Link to="/" className="nav-link px-2">Home</Link></li>
                  <li><Link to="/about" className="nav-link px-2">About</Link></li>
                  <li><Link to="/shop" className="nav-link px-2">Shop</Link></li>
                  <li><Link to="/ourteams" className="nav-link px-2">Our teams</Link></li>
                  <li><Link to="/contact" className="nav-link px-2">Contact</Link></li>
                </ul>
                <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-end align-items-center gap-2">

                  <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal"><IoIosSearch style={{ width: "35px", height: "35px", color: "#686677" }} /></button>

                  {/* Modal */}

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
                                    
                                      }}
                                    >
                                      <li className="list-group-item d-flex align-items-center">
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


                  <NavLink to="/cart" className="position-relative">
                    <CiShoppingBasket style={{ width: "35px", height: "35px", color: "#686677" }} />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{ backgroundColor: "#894B8D" }}>
                      {totalItems}
                    </span>
                  </NavLink>
                  {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


                  <button className='btn' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <CgMenuCheese style={{ width: "35px", height: "35px", color: "#686677" }} />
                  </button>

                  <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header border-bottom">
                      <img src={`https://petpal-backend-en2xs.kinsta.app/${item.logoDark.replace("\\", "/")}`} className='mx-3 my-2 ' style={{ width: "170px", height: "50px", objectFit: "contain" }} />
                      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                    </div>
                    <div className="offcanvas-body">
                      <div className="container">
                        <h6 className="fw-bold" style={{ color: "#002169" }}>Office Address</h6>
                        <p style={{ color: "#445374" }}>{item.address}</p>
                        <hr />
                        <h6 className="fw-bold" style={{ color: "#002169" }}>Phone Number</h6>
                        <p className="m-0" style={{ color: "#445374" }}>+{item.phone}</p>
                        <p style={{ color: "#445374" }}>+{item.phone}</p>
                        <hr />
                        <h6 className="fw-bold" style={{ color: "#002169" }}>Email address</h6>
                        <p className="m-0" style={{ color: "#445374" }}>{item.email}</p>
                        <p style={{ color: "#445374" }}>petpalinfo@gmail.com</p>
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
                  <img src={`https://petpal-backend-en2xs.kinsta.app/${item.logoLight.replace("\\", "/")}`} width={170} height={40} />
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
      ))}



    </>
  )
}

export default Header