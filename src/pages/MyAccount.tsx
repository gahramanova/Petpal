import { IoIosArrowForward } from "react-icons/io"
import { Link, NavLink, useNavigate } from "react-router-dom"
import animals from "../assets/img/animals.png"
import { FaRegUser } from "react-icons/fa"
import { HiOutlineBell } from "react-icons/hi2";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useCookies } from "react-cookie";
import { useJwt } from "react-jwt";
import Preloader from "../assets/components/Preloader";
import { useEffect } from "react";


const MyAccount = () => {
  const [cookies, removeCookie] = useCookies(["petpal"]);
  const { decodedToken } = useJwt(cookies.petpal);
  const navigate = useNavigate()


  useEffect(() => {
    if (!cookies.petpal) {
      navigate("/login");
    }
  }, [cookies.petpal]);

  return (
    <>
      {!decodedToken ? (
        <Preloader />
      ) : (
        <>
          {(() => {
            localStorage.setItem("userid", decodedToken._id);
          })()}
          <section className="section-account-one">
            <div className="container">
              <div className="d-flex justify-content-between align-items-center pt-5">
                <div>
                  <h1 className="fw-bold">My account</h1>
                  <ul className="nav">
                    <li><NavLink to="/" className="nav-link p-1">Home</NavLink> </li>
                    <IoIosArrowForward style={{ alignSelf: "center" }} />
                    <li ><NavLink to="/myaccount" className="nav-link p-1" style={{ color: "#894B8D" }}>My account</NavLink></li>
                  </ul>
                </div>
                <div className="d-flex justify-content-end">
                  <img className="animals" src={animals} style={{ width: "100%" }} />
                </div>
              </div>
            </div>
          </section>
          <section className="section-account-two">
            <div className="container py-5">
              <div className="row align-items-center">
                <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                    <h3 style={{color:"#002169"}} className="fw-bold">Hello, {decodedToken.name}</h3>
                  <div className="content">
                    <ul>
                      <li className="d-flex align-items-center">
                        <FaRegUser className="mx-2" />
                        My account
                      </li>
                      <Link
                        to="/order"
                        style={{ textDecoration: "none" }}
                      >
                        <li className="d-flex align-items-center"> 
                          <HiOutlineBell className="mx-2" />
                          My orders
                        </li>
                      </Link>
                      <li
                      
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          removeCookie("petpal");
                          localStorage.removeItem("userid");
                          navigate("/login")
                        }}
                        className="d-flex align-items-center"
                      >
                        <RiLogoutCircleLine className="mx-2" />
                        Logout
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-8 col-md-8 col-lg-8">
                <h4 style={{color: "#002169"}}>Edit Account Information</h4>
                <form>
                  <div className="row">
                    <div className="col-12 col-sm-6 col-md-6">
                      <div className="mb-4">
                        <label className="form-label">First name</label>
                        <input
                          value={decodedToken.name}
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6">
                      <div className="mb-4">
                        <label className="form-label">Last Name</label>
                        <input
                          value={decodedToken.surname}
                          type="text"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6">
                      <div className="mb-4">
                        <label className="form-label">Phone number</label>
                        <input
                          type="tel"
                          value={decodedToken.phone}
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6">
                      <div className="mb-4">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          value={decodedToken.email}
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-12 col-sm-6 col-md-6">
                      <div className="mb-4">
                        <label className="form-label">New password</label>
                        <input
                          type="password"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6">
                      <div className="mb-4">
                        <label className="form-label">
                          Confirm new password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <button className="btn update">Update Profile</button>
  
                </form>
                </div>
              </div>
            </div>
          </section>
        </>
      )
      }
    </>
  )
}

export default MyAccount