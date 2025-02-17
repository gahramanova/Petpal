
import homeSectionRightImg from "../assets/img/homeSectionOneRight.png"
import sectionOneTitle from "../assets/img/sectionOneTitle.png"
import sectionOneTitleTwo from "../assets/img/homeSectionTitleTwo.png"
import { FaArrowRightLong } from "react-icons/fa6";
import homeAboutImg from "../assets/img/homeAboutImg.png"
import signature from "../assets/img/signature.png"
import review from "../assets/img/review.png"
import { FaStar } from "react-icons/fa";
import star from "../assets/img/star.svg"
import vaccin from "../assets/img/vaccin.svg"
import grooming from "../assets/img/grooming.svg"
import veterinary from "../assets/img/veterinary.svg"
import surgery from "../assets/img/surgery.svg"
import sectionFourImg from "../assets/img/sectionFourImg.svg"
import icon from "../assets/img/icon.svg"


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

      <div className="marquee-container">
        <div className="marquee-text">
          <img src={star} />
          <span>BOOK FOR ONLINE APPOINTMENT </span>
          <img src={star} />
          <span>BOOK FOR ONLINE APPOINTMENT</span>
          <img src={star} />
          <span>BOOK FOR ONLINE APPOINTMENT </span>
          <img src={star} />
          <span>BOOK FOR ONLINE APPOINTMENT</span>
          <img src={star} />
          <span>BOOK FOR ONLINE APPOINTMENT </span>
          <img src={star} />
          <span>BOOK FOR ONLINE APPOINTMENT</span>
          <img src={star} />
          <span>BOOK FOR ONLINE APPOINTMENT </span>
          <img src={star} />
          <span>BOOK FOR ONLINE APPOINTMENT</span>
          <img src={star} />
          <span>BOOK FOR ONLINE APPOINTMENT </span>
          <img src={star} />
          <span>BOOK FOR ONLINE APPOINTMENT</span>
          <img src={star} />
        </div>
      </div>


      <section className='home-section-three py-5'>
        <div className='container py-5'>
          <div className='d-flex justify-content-between align-items-center py-5'>
            <div className='title'>
              <p>DELIVERING WORLD CLASS HOME CARE <i style={{ color: "#C2A8C2" }} className="fa-solid fa-paw mx-2"></i></p>
              <h2>Providing Our Best Pet Care & <br />Veterinary Services</h2>
            </div>
            <div>
              <button className='btn all-services'>See All Services <FaArrowRightLong className='mx-2' /></button>
            </div>
          </div>

          <div className='row'>
            <div className='col-12 col-sm-6 col-sm-3 col-md-3'>
              <div className="card py-4">
                <img src={vaccin} className="card-img-top" width={80} height={80} />
                <div className="card-body d-flex align-items-center flex-column">
                  <h5 className="card-title">Pet Vaccination</h5>
                  <p className="card-text">We will work with you to develop individu alised care plans including</p>
                  <button className='btn details'>See Details <FaArrowRightLong className='mx-2' /></button>
                </div>
              </div>

            </div>
            <div className='col-12 col-sm-6 col-sm-3 col-md-3'>
              <div className="card py-4">
                <img src={grooming} className="card-img-top" width={80} height={80} />
                <div className="card-body d-flex align-items-center flex-column">
                  <h5 className="card-title">Pet Grooming</h5>
                  <p className="card-text">We will work with you to develop individu alised care plans including</p>
                  <button className='btn details'>See Details <FaArrowRightLong className='mx-2' /></button>
                </div>
              </div>

            </div>
            <div className='col-12 col-sm-6 col-sm-3 col-md-3'>
              <div className="card py-4">
                <img src={veterinary} className="card-img-top" width={80} height={80} />
                <div className="card-body d-flex align-items-center flex-column">
                  <h5 className="card-title">Pet Veterinary</h5>
                  <p className="card-text">We will work with you to develop individu alised care plans including</p>
                  <button className='btn details'>See Details <FaArrowRightLong className='mx-2' /></button>
                </div>
              </div>

            </div>
            <div className='col-12 col-sm-6 col-sm-3 col-md-3'>
              <div className="card py-4">
                <img src={surgery} className="card-img-top" width={80} height={80} />
                <div className="card-body d-flex align-items-center flex-column">
                  <h5 className="card-title">Pet Surgery</h5>
                  <p className="card-text">We will work with you to develop individu alised care plans including</p>
                  <button className='btn details'>See Details <FaArrowRightLong className='mx-2' /></button>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>

      <section className='home-section-four'>

        <div className="container px-4 py-5">
          <div className="row flex-lg align-items-center g-5 py-5">
            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
              <img src={sectionFourImg} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes"  loading="lazy" width={700} height={700}/>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
            <div className='d-flex'> <p className='fw-bold m-0' style={{ color: "#894B8D" }}>WHY WE ARE THE BEST</p><span><i style={{ color: "#C2A8C2" }} className="fa-solid fa-paw mx-2"></i></span></div>
              <h1 className="display-5 fw-bold lh-1 mb-3" style={{color:"#002168"}}>Pet Emergencies <br/>What You Need To Know.</h1>
              <p style={{color:"#414F6F"}}>Duis aute irure dolor in reprehenderit in voluptate velit esse We understand that your furry friend is a treasured member of your family and deserves pets are the best care and attention possible.</p>
             <div className='row'>
              <div className='col-12 col-sm-6 col-sm-6 col-md-6'>
               <div className='d-flex'> <img src={icon}/><h5 className='fw-bold mx-2' style={{color:"#002168"}}>More Experience</h5></div>
                <p style={{color:"#414F6F"}}>Be confident in the treatment plan and your doctor’s abilities.</p>
              </div>
              <div className='col-12 col-sm-6 col-sm-6 col-md-6'>
              <div className='d-flex'><img src={icon}/><h5 className='fw-bold mx-2' style={{color:"#002168"}}>Affordable Pricing</h5></div>
                <p style={{color:"#414F6F"}}>Be confident in the treatment plan and your doctor’s abilities.</p>
              </div>
              <div className='col-12 col-sm-6 col-sm-6 col-md-6'>
              <div className='d-flex'><img src={icon}/><h5 className='fw-bold mx-2' style={{color:"#002168"}}>Modern Pet Training</h5></div>
                <p style={{color:"#414F6F"}}>Be confident in the treatment plan and your doctor’s abilities.</p>
              </div>
              <div className='col-12 col-sm-6 col-sm-6 col-md-6'>
             <div className='d-flex'> <img src={icon}/><h5 className='fw-bold mx-2' style={{color:"#002168"}}>Maintain a daily routine</h5></div>
                <p style={{color:"#414F6F"}}>Be confident in the treatment plan and your doctor’s abilities.</p>
              </div>
             </div>
            </div>
          </div>
        </div>

      </section>

      <section className='home-section-five py-5'>
        <div className='container py-5'>
          <div className='row'>
            <div className='col-12 col-sm-4 col-md-4 col-lg-4'>
            <div className='d-flex'> <p className='fw-bold m-0' style={{ color: "#8FA5D6" }}>Your Trust Our Priority</p><span><i style={{ color: "#37528E" }} className="fa-solid fa-paw mx-2"></i></span></div>
              <h1 className='fw-bold text-light'>Professional Vest Care And Guaranteed Quality</h1>
              <p style={{color:"#8FA5D6"}}>Duis aute irure dolor in repreerit in voluptate velit esse We understand that your furry friend treas ured member of your pets are.</p>
              <button className='btn read-more'>Read More  <FaArrowRightLong className='mx-2' /></button>
            </div>

            <div className='col-12 col-sm-5 col-'></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home