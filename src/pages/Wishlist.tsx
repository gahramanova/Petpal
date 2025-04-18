import { IoIosArrowForward } from "react-icons/io"
import { NavLink } from "react-router-dom"
import animals from "../assets/img/animals.png"

const Wishlist = () => {
  return (
    <>
     <section className="section-wishlist-one">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center pt-5">
            <div>
              <h1 className="fw-bold">My wishlist</h1>
              <ul className="nav">
                <li><NavLink to="/" className="nav-link p-1">Home</NavLink> </li>
                <IoIosArrowForward style={{ alignSelf: "center" }} />
                <li ><NavLink to="/wishlist" className="nav-link p-1" style={{ color: "#894B8D" }}>Add to wishlist</NavLink></li>
              </ul>
            </div>
            <div className="d-flex justify-content-end">
              <img className="animals" src={animals} style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-wishlist-two">
        <div className="container">
         <div className="d-flex justify-content-center">
         <img src="https://elegantjewelersli.com/assets/images/empty-wishlist.png"/>
         </div>
        </div>
      </section>
    </>
  )
}

export default Wishlist