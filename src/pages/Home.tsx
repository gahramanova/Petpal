import React from 'react'
import homeSectionRightImg from "../assets/img/homeSectionOneRight.png"
import sectionOneTitle from "../assets/img/sectionOneTitle.png"
import sectionOneTitleTwo from "../assets/img/homeSectionTitleTwo.png"
import { FaArrowRightLong } from "react-icons/fa6";
import homeAboutImg from "../assets/img/homeAboutImg.png"
import signature from "../assets/img/signature.png"
import review from "../assets/img/review.png"
import { FaStar } from "react-icons/fa";


const Home = () => {
  return (
    <>
      <section className='home-section-one'>
        <div className='container'>
          <div className="row flex-lg-row-reverse align-items-center py-3">
            <div className="col-10 col-sm-8 col-lg-5">
              <img src={homeSectionRightImg} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={500} height={400} loading="lazy" />
            </div>
            <div className="col-12 col-sm-4 col-lg-7">
              <div className='d-flex align-items-center'>
                <h1 className="display-3 fw-bold titleColor lh-1">Trusted Pet</h1>
                <img className='titleImg' src={sectionOneTitle} />
              </div>
              <h1 className='display-3 fw-bold titleColor lh-1'>care & Veterinary </h1>

              <h1 className='display-3 fw-bold titleColor lh-1'>Center<img src={sectionOneTitleTwo} />Point
              </h1>
              <p style={{ color: "#445374", fontWeight: "500" }}>Template Kit uses demo images from Envato Elements <br />Follower will need to license these images from Envato.</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type="button" className="btn me-md-2 read-more">Read More <FaArrowRightLong />
                </button>

              </div>
            </div>
          </div>

        </div>
      </section>
      <section className='home-section-two'>
        <div className="container px-4 py-5">
          <div className="row align-items-center g-5 py-5">
            <div className="col-12 col-sm-6 col-lg-5">
              <img src={homeAboutImg} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
            </div>
            <div className="col-12 col-sm-6 col-lg-7">
              <div className='d-flex'> <p className='fw-bold m-0' style={{ color: "#894B8D" }}>KNOW MORE US</p><span><i style={{ color: "#C2A8C2" }} className="fa-solid fa-paw mx-2"></i></span></div>
              <h1 className="display-5 fw-bold titleColor lh-1 mb-3">Our Passion Is Providing Superior Pet Care</h1>

              <div className='content d-flex align-items-center'>
                <div className='experience d-flex align-items-center flex-column'>
                  <div className='d-flex'><h1 className='fw-bold text-light'>15</h1><p className='fw-bold text-light'>Yr</p></div>
                  <div><h5 className='text-light'>Experience</h5></div>
                </div>
                <div className='vertical-one mx-4'></div>
                <div>
                  <p style={{ color: "#445374", fontWeight: "500" }}>Come see how I’m styling these final days of summer with bright palettes and pops of color that will dazzle your wardrobe year round!</p>
                </div>
              </div>
              <p style={{ color: "#445374", fontWeight: "500" }} className=" mt-3">We will work with you to develop individualised care plans, including management of chronic diseases. We are committed to being the region’s premier healthcare network providing patient centered care that inspires.</p>
              <div className='d-flex align-items-center'>
                <div><img src={signature} /></div>
                <div className='vertical-two mx-4'></div>
                <div className='d-flex align-items-center'>
                  <img src={review} width={140} height={50} />
                  <div className='d-flex flex-column mx-3'>
                    <div><FaStar style={{ color: "#FFBE17" }} />
                      <FaStar style={{ color: "#FFBE17" }} />
                      <FaStar style={{ color: "#FFBE17" }} />
                      <FaStar style={{ color: "#FFBE17" }} />
                      <FaStar style={{ color: "#FFBE17" }} /></div>
                    <div><p>4.7(1.567 Reviews)</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Home