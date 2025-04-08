import { IoIosArrowForward } from "react-icons/io"
import { NavLink } from "react-router-dom"
import animals from "../assets/img/animals.png"
import { MdOutlineLocalPhone } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { GoMail } from "react-icons/go";
import { FaShareAlt } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <section className="contact-section-one">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center pt-5">
            <div>
              <h1 className="fw-bold">Contact Page</h1>
              <ul className="nav">
                <li><NavLink to="/" className="nav-link p-1">Home</NavLink> </li>
                <IoIosArrowForward style={{ alignSelf: "center" }} />
                <li ><NavLink to="/contact" className="nav-link p-1" style={{ color: "#894B8D" }}>Contact</NavLink></li>
              </ul>
            </div>
            <div className="d-flex justify-content-end">
              <img className="animals" src={animals} style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section-two py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-5 col-lg-5">
              <h3 style={{ color: "#002169", fontWeight: "700" }}>We Are Always Avialable For You & For Your Pets</h3>
              <p className="mt-3" style={{ color: "#445374" }}>Maecenas quis viverra metus, et efficitur ligula. Nam coueaugue congue sed luctus lectus conIn onondimentum .</p>

              <h5 className="mb-3" style={{ color: "#002169", fontWeight: "600" }}>Information:</h5>

              <div className="information d-flex flex-column">
                <div className="d-flex align-items-center">
                  <MdOutlineLocalPhone className="icon" />
                  <p className="lead mx-3" style={{ color: "#002169", fontWeight: "500" }}>+12 345 66 78</p>
                </div>

                <div className="d-flex align-items-center">
                  <SlLocationPin className="icon" />
                  <p className="lead mx-3" style={{ color: "#002169", fontWeight: "500" }}>Avenue 24, New York City</p>
                </div>

                <div className="d-flex align-items-center">
                  <GoMail className="icon" />
                  <p className="lead mx-3" style={{ color: "#002169", fontWeight: "500" }}>petpalinfo@gmail.com</p>
                </div>

                <div className="d-flex align-items-center">
                  <FaShareAlt className="icon" />
                  <div className="d-flex align-items-center mx-2">
                    <TiSocialFacebook className="social-media" />
                    <FaTwitter className="social-media" />
                    <FaWhatsapp className="social-media" />
                    <IoLogoInstagram className="social-media" />
                    <FaYoutube className="social-media" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-7 col-lg-7">
              <div className="content">
                <h3 style={{ color: "#002169", fontWeight: "700" }}>Post a Comment</h3>
                <p style={{ color: "#445374" }}>Your email address will not be published. Required fields are marked *</p>

                <form>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6 col-md-6">
                      <input type="text" className="form-control" placeholder="Full Name" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-6">
                      <input type="text" className="form-control" placeholder="Email address" />
                    </div>
                    <div className="col-12 col-sm-12 col-md-12">
                      <input type="text" className="form-control" placeholder="Website" />
                    </div>
                    <div className="col-12 col-sm-12 col-md-12">
                      <textarea className="form-control" placeholder="Leave a comment here" style={{height:"150px"}} />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default Contact