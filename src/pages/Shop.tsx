import animals from "../assets/img/animals.png"
import { Link, NavLink } from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io";
import Rating from "../assets/components/Rating";
import { CiShoppingBasket } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { useCart } from "react-use-cart";
import { useContext, useEffect, useState } from "react";
import swal from "sweetalert"
import { useWishlist } from "react-use-wishlist";
import slug from "react-slugify";
import axios from "axios";
import { ApiEndPointContext } from "../context/ApiEndPointContext";
import Preloader from "../assets/components/Preloader";
import TopToBtn from "../utils/TopToBtn"




const Shop = () => {

  const [product, setProduct] = useState([])
  const { apiEndPoint, passValue } = useContext(ApiEndPointContext)


  useEffect(() => {
    axios.get(`${apiEndPoint}/product`, {
      headers: passValue
    })
      .then(res => {
        setProduct(res.data)
      })
      .catch(error => console.log(error))
  }, []);

  const { addItem } = useCart();
  const { addWishlistItem } = useWishlist();


  const addToCart = (item: any) => {
    addItem({
      id: item._id,
      price: item.price,
      name: item.name,
      coverImg: item.coverImg,
    });
  };

  const addToWishlist = (item: any) => {
    addWishlistItem({
      id: item._id,
      price: item.price,
      name: item.name,
      coverImg: item.coverImg
    })
  }



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
          <div className="row g-3">
            {product.length > 0 ? (
              product.map((item: any) => (
                <div className="col-12 col-sm-6 col-md-3 col-lg-3">
                  <div className="product-card card">
                    <div className="image-container">
                      <Link onClick={TopToBtn} to={`/shop/${slug(item.name)}`}>
                        <img src={`https://petpal-backend-en2xs.kinsta.app/${item.coverImg.replace(/\\/g, "/")}`} className="card-img-top" alt="..." />
                      </Link>
                      <button onClick={() => {
                        addToCart(item);
                        swal({
                          title: "Added to cart",
                          icon: "success",
                        });
                      }} className="add-to-cart-btn d-flex justify-content-center align-items-center mx-2">
                        <CiShoppingBasket style={{ width: "30px", height: "30px", fontWeight: "800" }} />
                        Add to Cart</button>
                      <button onClick={() => {
                        addToWishlist(item)
                        swal({
                          title: "Added to wishlist",
                          icon: "success",
                        })
                      }} className="wishlist-btn"><GoHeart style={{ width: "20px", height: "20px" }} /></button>
                    </div>
                    <div className="card-body">
                      <div className='d-flex align-items-center'>
                        <Rating />
                        <p className='my-0 mx-2'>(7 Reviews)</p>
                      </div>
                      <h5 className="card-title mt-3" style={{ color: "#445374" }}>
                        {item.name.slice(0, 40)}...
                      </h5>
                      <div className="d-flex align-items-center">
                        <h4 className="fw-bold m-0" style={{ color: "#894B8D" }}>{item.discount}$</h4>
                        <s className="fw-bold mx-2" style={{ color: "#B9BDC8", fontSize: "23px" }}>{item.price}$</s>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (<div><Preloader/></div>)}
          </div>
        </div>
      </section >

    </>
  )
}

export default Shop