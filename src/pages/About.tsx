import { Link, NavLink } from "react-router-dom";
import animals from "../assets/img/animals.png"
import { IoIosArrowForward } from "react-icons/io";
import aboutImgOne from "../assets/img/aboutImgOne.jpg"
import aboutImgTwo from "../assets/img/aboutImgTwo.jpg"
import { FaCircleCheck } from "react-icons/fa6";
import { useEffect } from "react";
import abouthelpimg from "../assets/img/aboutHelp.png"
import abouthelpimgTwo from "../assets/img/aboutHelpOne.png"
import abouthelpimgThree from "../assets/img/abouthelpTwo.png"
import Aos from "aos";
import "aos/dist/aos.css";
import CountUp from 'react-countup';
import aboutImg from "../assets/img/AboutBg.svg"
import cardIcon from "../assets/img/cardIcon.svg"
import teamOne from "../assets/img/teamOne.jpg"
import teamTwo from "../assets/img/teamTwo.jpg"
import teamThree from "../assets/img/teamThree.jpg"
import { FaArrowRightLong } from "react-icons/fa6";



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
        <div className="container py-5">
          <div className="px-4 text-center">
            <div className='d-flex align-items-center justify-content-center'> <p className='fw-bold m-0' style={{ color: "#894B8D" }}>WHY WE ARE THE BEST</p><span><i style={{ color: "#C2A8C2" }} className="fa-solid fa-paw mx-2"></i></span></div>
            <h1 className="fw-bold">See How Petpal can Help</h1>
            <div className="col-lg-6 mx-auto">
              <p className=" mb-4" style={{ color: "#4C5A7A" }}>Duis aute irure dolor in reprehenderit in voluptate velit esse
                amily and deserves ets are the best care.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-4">
              <div className="card d-flex justify-content-center align-items-center flex-column py-4">
                <img src={abouthelpimgThree} className="card-img" style={{ width: "150px", height: "150px" }} />
                <div className="card-body d-flex justify-content-center align-items-center flex-column">
                  <h5 className="card-title">Health Guarantee</h5>
                  <p className="card-text">Duis aute irure dolor in reprehenderit voluptate velit essed eservesets are their health best care</p>

                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4">
              <div className="card d-flex justify-content-center align-items-center flex-column py-4">
                <img src={abouthelpimgTwo} className="card-img" style={{ width: "150px", height: "150px" }} />
                <div className="card-body d-flex justify-content-center align-items-center flex-column">
                  <h5 className="card-title">Ethical breeding</h5>
                  <p className="card-text">Duis aute irure dolor in reprehenderit voluptate velit essed eservesets are their health best care</p>

                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4">
              <div className="card d-flex justify-content-center align-items-center flex-column py-4">
                <img src={abouthelpimg} className="card-img" style={{ width: "150px", height: "150px" }} />
                <div className="card-body d-flex justify-content-center align-items-center flex-column">
                  <h5 className="card-title">Transparent Policy</h5>
                  <p className="card-text">Duis aute irure dolor in reprehenderit voluptate velit essed eservesets are their health best care</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section-four my-5 py-5 px-5">
        <div className="container px-5 py-5">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-3">
              <div className="content">
                <div className="counter-image"><img src={aboutImg} /></div>
                <div className="d-flex justify-content-center align-items-center flex-column counter">
                  <CountUp start={0} end={5985}>
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef} style={{ fontSize: "40px", color: "white", fontWeight: "600" }} />
                      </div>
                    )}
                  </CountUp>

                  <h5 className="text-light">Happy Family</h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className="content">
                <div className="counter-image"><img src={aboutImg} /></div>
                <div className="d-flex justify-content-center align-items-center flex-column counter">
                  <CountUp start={0} end={1322}>
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef} style={{ fontSize: "40px", color: "white", fontWeight: "600" }} />
                      </div>
                    )}
                  </CountUp>

                  <h5 className="text-light">Listed States</h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className="content">
                <div className="counter-image"><img src={aboutImg} /></div>
                <div className="d-flex justify-content-center align-items-center flex-column counter">
                  <CountUp start={0} end={3102}>
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef} style={{ fontSize: "40px", color: "white", fontWeight: "600" }} />
                      </div>
                    )}
                  </CountUp>

                  <h5 className="text-light">Core Breeding</h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className="content">
                <div className="counter-image"><img src={aboutImg} /></div>
                <div className="d-flex justify-content-center align-items-center flex-column counter">
                  <CountUp start={0} end={1125}>
                    {({ countUpRef }) => (
                      <div>

                        <span ref={countUpRef} style={{ fontSize: "40px", color: "white", fontWeight: "600" }} />
                      </div>
                    )}
                  </CountUp>

                  <h5 className="text-light">Annual Awards</h5>
                </div></div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section-five">
        <div className="container mt-5">
          <div className='d-flex align-items-center justify-content-center'> <p className='fw-bold m-0' style={{ color: "#894B8D" }}>WE CHANGE YOUR LIFE & WORLD
          </p><span><i style={{ color: "#C2A8C2" }} className="fa-solid fa-paw mx-2"></i></span></div>
          <h1 className="text-center fw-bold" style={{ color: "#002168" }}>We’re Dedicated To Excellent<br/>
          Service And Care</h1>

          <div className="team mt-5">
            <div className="row g-4">
              <div className="col-12 col-sm-6 col-md-3 col-lg-3">
                <div className="d-flex justify-content-end align-items-end">
                  <img src={cardIcon} />
                </div>
                <div className="card">
                  <img src={teamOne} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title text-center">Lizay Ariania</h5>
                    <p className="card-text text-center">Veterinary Technician</p>

                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3 col-lg-3">
                <div className="d-flex justify-content-end align-items-end">
                  <img src={cardIcon} />
                </div>
                <div className="card">
                  <img src={teamTwo} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title text-center">Kenroly Gajon</h5>
                    <p className="card-text text-center">Food Technician</p>

                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3 col-lg-3">
                <div className="d-flex justify-content-end align-items-end">
                  <img src={cardIcon} />
                </div>
                <div className="card">
                  <img src={teamThree} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title text-center">Michael Brian</h5>
                    <p className="card-text text-center">Medicine Specialist</p>

                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3 col-lg-3">
                <div className="d-flex justify-content-end align-items-end">
                  <img src={cardIcon} />
                </div>
                <div className="card">
                  <img src={teamTwo} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title text-center">Kenroly Gajon</h5>
                    <p className="card-text text-center">Food Technician</p>

                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center my-5">
              <p style={{ color: "#4D6496" }} className="m-0"><u>Our Valuable Expert Doctors Team</u></p>
              <Link to="/ourteams" ><button className="btn see-all-doctors mx-3">See all doctors <FaArrowRightLong />
              </button></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About