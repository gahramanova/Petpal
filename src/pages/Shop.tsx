import animals from "../assets/img/animals.png"
import { NavLink } from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io";
import productOne from "../assets/img/productOne.jpg"
import productTwo from "../assets/img/productTwo.jpg"
import productThree from "../assets/img/productThree.jpg"
import productFour from "../assets/img/productFour.jpg"
import Rating from "../assets/components/Rating";

const Shop = () => {
  return (
    <>

      <section className="shop-section-one">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center pt-5">
            <div>
              <h1 className="fw-bold">All Products</h1>
              <ul className="nav">
                <li><NavLink to="/" className="nav-link p-1">Home</NavLink> </li>
                <IoIosArrowForward style={{ alignSelf: "center" }} />
                <li ><NavLink to="/shop" className="nav-link p-1" style={{ color: "#894B8D" }}>All products</NavLink></li>
              </ul>
            </div>
            <div className="d-flex justify-content-end">
              <img className="animals" src={animals} style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </section>
      <section className="shop-section-two my-5">
        <div className="container products">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-3 col-lg-3">
              <div className="card">
                <img src={productOne} className="card-img-top" alt="..." />
                <div className="card-body px-0">
                  <Rating />
                  <h5 className="card-title mt-3">Meow Mix Seafood Medley Dry Cat Food, 3.15-Pound</h5>
                  <div className="d-flex  align-items-center">
                    <h4 className="fw-bold m-0" style={{ color: "#894B8D" }}>$12.00</h4>
                    <s className="fw-bold mx-2" style={{ color: "#B9BDC8", fontSize: "23px" }}>$25.00</s>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 col-lg-3">
              <div className="card">
                <img src={productTwo} className="card-img-top" alt="..." />
                <div className="card-body">
                  <Rating />
                  <h5 className="card-title mt-3">Meow Mix Seafood Medley Dry Cat Food, 3.15-Pound</h5>
                  <div className="d-flex  align-items-center">
                    <h4 className="fw-bold m-0" style={{ color: "#894B8D" }}>$20.00</h4>
                    <s className="fw-bold mx-2" style={{ color: "#B9BDC8", fontSize: "23px" }}>$30.00</s>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 col-lg-3">
              <div className="card">
                <img src={productThree} className="card-img-top" alt="..." />
                <div className="card-body">
                  <Rating />
                  <h5 style={{color:"#445374"}} className="card-title mt-3">Meow Mix Seafood Medley Dry Cat Food, 3.15-Pound</h5>
                  <div className="d-flex  align-items-center">
                    <h4 className="fw-bold m-0" style={{ color: "#894B8D" }}>$18.00</h4>
                    <s className="fw-bold mx-2" style={{ color: "#B9BDC8", fontSize: "23px" }}>$33.00</s>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3 col-lg-3">
              <div className="card">
                <img src={productFour} className="card-img-top" alt="..." />
                <div className="card-body">
                  <Rating />
                  <h5 style={{color:"#445374"}} className="card-title mt-3">Meow Mix Seafood Medley Dry Cat Food, 3.15-Pound</h5>
                  <div className="d-flex  align-items-center">
                    <h4 className="fw-bold m-0" style={{ color: "#894B8D" }}>$36.00</h4>
                    <s className="fw-bold mx-2" style={{ color: "#B9BDC8", fontSize: "23px" }}>$56.00</s>
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

export default Shop