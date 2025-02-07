import React from 'react'
import petpalLogo from "../assets/img/petpalLogo-footer.png"
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="py-5">
        <div className='container'>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-3 mb-3">
              <img src={petpalLogo} style={{ width: "145px", height: "40px" }} className='mb-3' />
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footerColor">555 A, East Manster Street, Ready Halley Neon, Uk 4512</a></li>
                <li className="nav-item mb-2"><a href="tel: 00 123 456789" className="nav-link p-0 text-light fw-bold">00 123 456789</a></li>
                <li className="nav-item mb-2"><a href="mailto: supportinfo@gmail.com" className="nav-link p-0 text-light fw-bold">supportinfo@gmail.com</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footerColor">Follow us On:</a></li>
                <div><FaFacebookF className='icons' />
                <FaTwitter className='mx-2 icons' />
                <FaWhatsapp className='mx-2 icons' />
                <FaInstagram className='mx-2 icons' /></div>

              </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-3 mb-3">
              <h4 className='text-light fw-bold'>Quick Links</h4>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><Link to="/allpets" className="nav-link p-0 footerColor">Animal Rescue</Link></li>
                <li className="nav-item mb-2"><Link to="/contact" className="nav-link p-0 footerColor">Humane Education</Link></li>
                <li className="nav-item mb-2"><Link to="/allpets" className="nav-link p-0 footerColor">Animal Hospital</Link></li>
                <li className="nav-item mb-2"><Link to="/contact" className="nav-link p-0 footerColor">Caregivers</Link></li>
                <li className="nav-item mb-2"><Link to="/blog" className="nav-link p-0 footerColor">New & Blog</Link></li>
                <li className="nav-item mb-2"><Link to="/gallery" className="nav-link p-0 footerColor">Gallery</Link></li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-3 mb-3">
              <h4 className='text-light fw-bold'>Opening Hours</h4>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footerColor">Monday 8.00 - 21.00</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footerColor">Tuesday  8.00 - 21.00</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footerColor">Wednesday  8.00 - 21.00</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footerColor">Thursday  8.00 - 21.00</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footerColor">Friday 8.00 - 21.00</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footerColor">Saturday  8.00 - 21.00</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footerColor">Sunday 8.00 - 21.00</a></li>
                
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-3 mb-3">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                  <input id="newsletter1" type="text" className="form-control" placeholder="Email address" fdprocessedid="tqr8sj" />
                  <button className="btn btn-primary" type="button" fdprocessedid="jaamek">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© 2024 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></a></li>
            <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
            <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
          </ul>
        </div>
      </footer>

    </>
  )
}

export default Footer