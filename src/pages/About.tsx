import { NavLink } from "react-router-dom";
import animals from "../assets/img/animals.png"
import { IoIosArrowForward } from "react-icons/io";
import aboutImgOne from "../assets/img/aboutImgOne.jpg"
import aboutImgTwo from "../assets/img/aboutImgTwo.jpg"
import { FaCircleCheck } from "react-icons/fa6";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <section className="about-section-one">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center pt-5">
            <div>
              <h1 className="fw-bold">About Us</h1>
              <ul className="nav">
                <li><NavLink to="/" className="nav-link p-1">Home</NavLink> </li>
                <IoIosArrowForward style={{ alignSelf: "center" }} />
                <li ><NavLink to="/about" className="nav-link p-1" style={{ color: "#894B8D" }}>About</NavLink></li>
              </ul>
            </div>
            <div className="d-flex justify-content-end">
              <img className="animals" src={animals} style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </section>
      <section className="about-section-two">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-6">
              <div className="about-image">
                <img src={aboutImgOne} className="about-image-one" data-aos="fade-right" />
                <img src={aboutImgTwo} className="about-image-two" />
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-6">
              <div className='d-flex'> <p className='fw-bold m-0' style={{ color: "#894B8D" }}>ABOUT US</p><span><i style={{ color: "#C2A8C2" }} className="fa-solid fa-paw mx-2"></i></span></div>
              <h1 className="display-5 fw-bold titleColor lh-1 mb-3">We'll Make Your Pets Really Happy</h1>
              <div>
                <p style={{ color: "#445374", fontWeight: "500" }}>Come see how I’m styling these final days of summer with bright palettes and pops of color that will dazzle your wardrobe year round!</p>
              </div>
              <div className='content d-flex align-items-center'>
                <div className='experience d-flex align-items-center flex-column'>
                  <div className='d-flex'><h1 className='fw-bold text-light'>15</h1><p className='fw-bold text-light'>Yr</p></div>
                  <div><h5 className='text-light'>Experience</h5></div>
                </div>
                <div className='vertical-two mx-4'></div>
                <div className="right-content">
                  <ul className="p-0">
                    <li><h5><FaCircleCheck className="mx-2" />
                      Over 10 years of experience</h5></li>
                    <li><h5><FaCircleCheck className="mx-2" />
                      20 talented vets ready to help you</h5></li>
                    <li><h5><FaCircleCheck className="mx-2" />
                      High-quality products only</h5></li>
                  </ul>
                </div>
              </div>
              <p style={{ color: "#445374", fontWeight: "500" }} className=" mt-3">We will work with you to develop individualised care plans, including management of chronic diseases. We are committed to being the region’s premier healthcare network providing patient centered care that inspires.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section-three">
        <div className="container">
          <div className="px-4 py-5 my-5 text-center">
            <p className="m-0">Why we are the best</p>
            <h1 className=" fw-bold text-body-emphasis">See How Petpal can Help</h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse
                amily and deserves ets are the best care.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-4">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body d-flex justify-content-center align-items-center flex-column">
                  <h5 className="card-title">Health Guarantee</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body d-flex justify-content-center align-items-center flex-column">
                  <h5 className="card-title">Ethical breeding</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body d-flex justify-content-center align-items-center flex-column">
                  <h5 className="card-title">Transparent Policy</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default About