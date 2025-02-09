import React from 'react'
import homeSectionRightImg from "../assets/img/homeSectionOneRight.png"
import sectionOneTitle from "../assets/img/sectionOneTitle.png"
import sectionOneTitleTwo from "../assets/img/homeSectionTitleTwo.png"

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
              
              <h1 className='display-3 fw-bold titleColor lh-1'>Center<img src={sectionOneTitleTwo}/>Point
              </h1>
              <p style={{color:"#445374",fontWeight:"500"}}>Template Kit uses demo images from Envato Elements <br/>Follower will need to license these images from Envato.</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" >Primary</button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Home