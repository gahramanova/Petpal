import { useEffect, useState } from "react"
import petpalLogo from "../assets/img/petpalLogo-footer.png"
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {


  const [generalInfo, setGeneralInfo] = useState([])

  useEffect(() => {
    fetch("http://localhost:3025/ad/generalInfo")
      .then(res => res.json())
      .then(data => {
        console.log("GeneralInfo:", data)
        setGeneralInfo(data)
      })

      .catch(error => console.log(error))

  }, [])
  return (
    <>
      <footer className="py-5">
        {generalInfo.map((item: any) => (
          <>
            <div className='container'>
              <div className="row">
                <div className="col-12 col-sm-6 col-md-3 mb-3">
                  <img src={`http://localhost:3025/${item.logoLight.replace("\\", "/")}`} style={{ width: "145px", height: "40px" }} className='mb-3' />
                  <ul className="nav flex-column">
                    <div className='content'>
                      <p className='footerColor'>{item.desc.slice(0,280)}...</p>
                    </div>
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footerColor">Follow us On:</a></li>
                    <div className=' text-light d-flex align-items-center'>
                  <Link to={item.facebookUrl}><FaFacebookF className='' style={{ color: "white" }} /></Link>
                  <Link to={item.twitterUrl}><FaTwitter className='mx-2' style={{ color: "white" }} /></Link>
                  <Link to={item.instagramUrl}><FaInstagram className='mx-2' style={{ color: "white" }} /></Link>

                </div>

                  </ul>
                </div>
                <div className="col-12 col-sm-6 col-md-3 mb-3">
                  <h4 className='text-light fw-bold title'>Quick Links</h4>
                  <div className='empty'></div>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2"><Link to="/allpets" className="nav-link p-0 footerColor">Animal Rescue</Link></li>
                    <li className="nav-item mb-2"><Link to="/contact" className="nav-link p-0 footerColor">Humane Education</Link></li>
                    <li className="nav-item mb-2"><Link to="/allpets" className="nav-link p-0 footerColor">Animal Hospital</Link></li>
                    <li className="nav-item mb-2"><Link to="/contact" className="nav-link p-0 footerColor">Caregivers</Link></li>
                    <li className="nav-item mb-2"><Link to="/blog" className="nav-link p-0 footerColor">New & Blog</Link></li>
                  </ul>
                </div>
                <div className="col-12 col-sm-6 col-md-3 mb-3">
                  <h4 className='text-light fw-bold title'>Opening Hours</h4>
                  <div className='empty'></div>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2"><Link to='/about' className="nav-link p-0 footerColor">About Us</Link></li>
                    <li className="nav-item mb-2"><Link to='/contact' className="nav-link p-0 footerColor">Contact Us</Link></li>
                    <li className="nav-item mb-2"><Link to='/shop' className="nav-link p-0 footerColor">Shop</Link></li>
                    <li className="nav-item mb-2"><Link to='/blog' className="nav-link p-0 footerColor">Blogs</Link></li>
                    <li className="nav-item mb-2"><Link to='/about' className="nav-link p-0 footerColor">Our teams</Link></li>


                  </ul>
                </div>
                <div className="col-12 col-sm-6 col-md-3 mb-3">
                  <h4 className='text-light fw-bold title'>Contact</h4>
                  <div className='empty'></div>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 footerColor">{item.address}</a></li>
                    <li className="nav-item mb-2"><a href="tel: 00 123 456789" className="nav-link p-0 text-light fw-bold">+{item.phone}</a></li>
                    <li className="nav-item mb-2"><a href="mailto: supportinfo@gmail.com" className="nav-link p-0 text-light fw-bold">{item.email}</a></li>
  
                  </ul>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
              <div className='container'>
                <p className='rights'>© {new Date().getFullYear()} Company, Inc. All rights reserved.</p>
                <ul className="list-unstyled d-flex">
                  <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></a></li>
                  <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
                  <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
                </ul>
              </div>
            </div></>
        ))}

      </footer>

    </>
  )
}

export default Footer