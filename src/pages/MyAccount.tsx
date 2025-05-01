import { IoIosArrowForward } from "react-icons/io"
import { NavLink } from "react-router-dom"
import animals from "../assets/img/animals.png"


const MyAccount = () => {
  return (
    <>
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
      <section>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-12 col-sm-6 col-md-5 col-lg-5">

            </div>
            <div className="col-12 col-sm-6 col-md-7 col-lg-7">
              <div>
                <svg className="bd-placeholder-img rounded-circle" width={140} height={140} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)" /></svg>
                <h2 className="fw-normal">Heading</h2>
                <p><a className="btn btn-secondary" href="#">View details »</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MyAccount