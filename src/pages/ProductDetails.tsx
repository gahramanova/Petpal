import { IoIosArrowForward } from 'react-icons/io'
import { Link, NavLink, useParams } from 'react-router-dom'
import animals from "../assets/img/animals.png"
import ImageGallery from "react-image-gallery";
import Rating from '../assets/components/Rating';
import { useCart } from 'react-use-cart';
import { useContext, useEffect, useState } from 'react';
import slug from 'react-slugify';
import Preloader from '../assets/components/Preloader';
import { useWishlist } from 'react-use-wishlist';
import { GoHeart } from 'react-icons/go';
import { CiShoppingBasket } from 'react-icons/ci';
import TopToBtn from "../utils/TopToBtn"
import axios from 'axios';
import { ApiEndPointContext } from '../context/ApiEndPointContext';


const ProductDetails = () => {

    interface Product {
        _id: string,
        name:string,
        coverImg: string,
        price: string,
        desc: string
    }

    const [product, setProduct] = useState<Product[]>([])
      const {apiEndPoint, passValue} = useContext(ApiEndPointContext)

 
    useEffect(() => {
        axios.get(`${apiEndPoint}/ad/product`, {
          headers: passValue
        })
        .then(res => {
          setProduct(res.data)
        })
        .catch(error => console.log(error))
      }, []);


    const { addItem } = useCart()

    const addToCart = (item: any) => {
        addItem({
            id: item._id,
            price: item.price,
            name: item.name,
            coverImg: item.coverImg,
        });
    };


  const { addWishlistItem } = useWishlist();
  
  const addToWishlist = (item: any) => {
    addWishlistItem({
      id: item._id,
      price: item.price,
      name: item.name,
      coverImg: item.coverImg
    })
  }




    const { url } = useParams()

    const productDetails = product.find(p => slug(p.name) === url)

    const images = productDetails?.coverImg 
    ? [productDetails.coverImg].map((coverImg: string) => ({
        original: `https://petpal-backend-en2xs.kinsta.app/${coverImg}`,
        thumbnail: `https://petpal-backend-en2xs.kinsta.app/${coverImg}`,
    }))
    : [];
   
        
    return (
        <>
            {productDetails === undefined ? <Preloader /> :
                <>
                    <section className="productdetails-section-one">
                        <div className="container">
                            <div className="d-flex justify-content-between align-items-center pt-5">
                                <div>
                                    <h1 className="fw-bold">Product Details</h1>
                                    <ul className="nav">
                                        <li><NavLink to="/" className="nav-link p-1">Home</NavLink> </li>
                                        <IoIosArrowForward style={{ alignSelf: "center" }} />
                                        <li ><NavLink to="/shop" className="nav-link p-1" style={{ color: "#894B8D" }}>Shop</NavLink></li>
                                    </ul>
                                </div>
                                <div className="d-flex justify-content-end">
                                    <img className="animals" src={animals} style={{ width: "100%" }} />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='productdetails-section-two'>
                        <div className="container px-4 py-5">
                            <div className="row align-items-center g-5 py-5">
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                    <div className="image-gallery-demo">
                                        <div className="image-gallery-demo__thumbnails">
                                            <ImageGallery items={images}/>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 mt-0">
                                    <h1 style={{ color: "#002169" }} className="fw-bold lh-1 mb-3">{productDetails.name}</h1>
                                    <div className='d-flex align-items-center'>
                                        <Rating /> <span style={{ color: "#445374", fontWeight: "500" }} className='mx-4'>SKU: {productDetails._id.slice(3,8)}</span>
                                    </div>
                                    <h4 className='my-3' style={{ color: "#894B8D", fontWeight: "600" }}>${productDetails.price}.00</h4>
                                    <hr />
                                    <p className="lead">{productDetails.desc}</p>
                                    <div className="d-flex align-items-center">
                                        <button onClick={() => {
                                            addToCart(productDetails);
                                            swal({
                                                title: "Added to cart",
                                                icon: "success",
                                            });
                                        }} type="button" className="btn add-to-cart px-4">Add to cart</button>


                                        <button onClick={() => {
                                            addToWishlist(productDetails);
                                            swal({
                                                title: "Added to wishlist",
                                                icon: "success",
                                            });
                                        }} type="button" className="btn add-to-wishlist px-4 mx-4">
                                            <GoHeart/></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                    <section className='productdetails-section-three'>
                        <div className='container'>
                            <h3 style={{color:"#002169", fontWeight:"600"}} className='my-5 mt-5'>Related Products</h3>

                            <div className='row'>
                            {product.slice(0,4).map((item:any) => (
                                    <div className="col-12 col-sm-6 col-md-3 col-lg-3">
                                <div className="product-card card">
                                    <div className="image-container">
                                <Link style={{textDecoration:"none"}} to={`/shop/${slug(item.name)}`} onClick={TopToBtn}>
                                      <img src={`https://petpal-backend-en2xs.kinsta.app/${item.coverImg.replace("\\", "/")}`} className="card-img-top" alt="..." />
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
                                      <Rating />
                                      <h5 className="card-title mt-3" style={{ color: "#445374" }}>
                                        {item.name}
                                      </h5>
                                      <div className="d-flex align-items-center">
                                        <h4 className="fw-bold m-0" style={{ color: "#894B8D" }}>{item.price}$</h4>
                                        <s className="fw-bold mx-2" style={{ color: "#B9BDC8", fontSize: "23px" }}>{item.discount}$</s>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                            ))}
                            </div>
                        </div>

                    </section>
                </>}

        </>
    )
}

export default ProductDetails