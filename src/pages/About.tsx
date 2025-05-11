import { Link, NavLink } from "react-router-dom";
import animals from "../assets/img/animals.png"
import { IoIosArrowForward } from "react-icons/io";
import { FaCircleCheck } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import aboutImg from "../assets/img/AboutBg.svg"
import cardIcon from "../assets/img/cardIcon.svg"
import MotionCounter from "../assets/components/MotionCounter";
import { ApiEndPointContext } from "../context/ApiEndPointContext";
import axios from "axios"
import slugify from "react-slugify";


const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);


  const [about, setAbout] = useState([])
  const [team, setTeam] = useState([])
  const [howWeCanHelp, setHowWeCanHelp] = useState([])

  const {apiEndPoint, passValue} = useContext(ApiEndPointContext)

  useEffect(() => {
    axios.get(`${apiEndPoint}/about`, {
      headers: passValue ,
    })
    .then(res => {
      setAbout(res.data)
      console.log(res.data)
    })

    axios.get(`${apiEndPoint}/team`, {
      headers: passValue ,
    })
    .then(res => {
      setTeam(res.data)
    })


    axios.get(`${apiEndPoint}/howWeCanHelp`, {
      headers: passValue ,
    })
    .then(res => {
      setHowWeCanHelp(res.data)
    })
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
          <div className="row g-4">

            {about.map((item: any) => (
              <>
                <div className="col-12 col-sm-6 col-lg-6">
                  <div className="about-image">
                    <img src={`https://petpal-backend-en2xs.kinsta.app/${item.images[0].replace(/\\/g, "/")}`} className="about-image-one" data-aos="fade-right" data-aos-duration="1500"/>
                    <img src={`https://petpal-backend-en2xs.kinsta.app/${item.images[1].replace(/\\/g, "/")}`} className="about-image-two" />
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-6">
                  <div className='d-flex'> <p className='fw-bold m-0' style={{ color: "#894B8D" }}>ABOUT US</p><span><i style={{ color: "#C2A8C2" }} className="fa-solid fa-paw mx-2"></i></span></div>
                  <h1 className="display-5 fw-bold titleColor lh-1 mb-3">{item.title}</h1>
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
                        <li><h5 className="d-flex align-items-center"><FaCircleCheck className="mx-2" />
                          Over 10 years of experience</h5></li>
                        <li><h5 className="d-flex align-items-center"><FaCircleCheck className="mx-2" />
                          20 talented vets ready to help you</h5></li>
                        <li><h5 className="d-flex align-items-center"><FaCircleCheck className="mx-2" />
                          High-quality products only</h5></li>
                      </ul>
                    </div>
                  </div>
                  <p style={{ color: "#445374", fontWeight: "500" }} className=" mt-3">{item.desc}</p>
                </div>
              </>
            ))}


          </div>
        </div>
      </section>

      <section className="about-section-three">
        <div className="container px-4 py-5">
          <div className=" text-center">
            <div className='d-flex align-items-center justify-content-center'> <p className='fw-bold m-0' style={{ color: "#894B8D" }}>WHY WE ARE THE BEST</p><span><i style={{ color: "#C2A8C2" }} className="fa-solid fa-paw mx-2"></i></span></div>
            <h1 className="fw-bold">See How Petpal can Help</h1>
            <div className="col-lg-6 mx-auto">
              <p className=" mb-4" style={{ color: "#4C5A7A" }}>Duis aute irure dolor in reprehenderit in voluptate velit esse
                amily and deserves ets are the best care.</p>
            </div>
          </div>
          <div className="row g-4">

            {howWeCanHelp.map((item: any) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                <div className="card d-flex justify-content-center align-items-center flex-column py-4">
                  <img src={`https://petpal-backend-en2xs.kinsta.app/${item.images[0].replace(/\\/g, "/")}`} className="card-img" style={{ width: "150px", height: "150px" }} />
                  <div className="card-body d-flex justify-content-center align-items-center flex-column">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.desc}</p>

                  </div>
                </div>
              </div>
            ))}


          </div>
        </div>
      </section>
      <section className="about-section-four py-5 px-5">
        <div className="container px-5 py-5">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-3">
              <div className="content">
                <div className="counter-image"><img src={aboutImg} /></div>
                <div className="d-flex justify-content-center align-items-center flex-column counter">
                  <MotionCounter end={1658} duration={5} />
                  <h5 className="text-light">Happy Family</h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className="content">
                <div className="counter-image"><img src={aboutImg} /></div>
                <div className="d-flex justify-content-center align-items-center flex-column counter">
                  <MotionCounter end={1323} duration={5} />

                  <h5 className="text-light">Listed States</h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className="content">
                <div className="counter-image"><img src={aboutImg} /></div>
                <div className="d-flex justify-content-center align-items-center flex-column counter">
                  <MotionCounter end={3102} duration={5} />

                  <h5 className="text-light">Core Breeding</h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <div className="content">
                <div className="counter-image"><img src={aboutImg} /></div>
                <div className="d-flex justify-content-center align-items-center flex-column counter">
                  <MotionCounter end={1126} duration={5} />

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
          <h1 className="text-center fw-bold" style={{ color: "#002168" }}>We’re Dedicated To Excellent<br />
            Service And Care</h1>

          <div className="team mt-5">
            <div className="row g-4">
              {team.slice(1, 5).map((item: any) => (
                <div className="col-12 col-sm-6 col-md-3 col-lg-3">
                  <div className="d-flex justify-content-end align-items-end">
                    <img src={cardIcon} />
                  </div>
                   <Link style={{textDecoration:"none"}} to={`/ourteams/${slugify(item.fullname)}`}>
              <div className="card">
                  <img src={`https://petpal-backend-en2xs.kinsta.app/${item.coverImage.replace(/\\/g, "/")}`} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title text-center">{item.fullname}</h5>
                    <p className="card-text text-center">{item.jobposition}</p>

                  </div>
                </div></Link>
                </div>
              ))}

            </div>
            <div className="d-flex justify-content-center align-items-center my-5">
              <p style={{ color: "#4D6496" }} className="m-0"><u>Our Valuable Expert Doctors Team</u></p>
              <Link to="/ourteams" >
              <button className="btn see-all-doctors mx-3">See all doctors 
               
              </button></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About