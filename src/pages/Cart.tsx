import { IoIosArrowForward, IoIosCloseCircleOutline } from "react-icons/io"
import { Link, NavLink } from "react-router-dom"
import animals from "../assets/img/animals.png"
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

import { useCart } from "react-use-cart";
const Cart = () => {

  const { items,
    updateItemQuantity,
    cartTotal,
    removeItem } = useCart()
  return (
    <>
      <section className="section-cart-one">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center pt-5">
            <div>
              <h1 className="fw-bold">My shopping card</h1>
              <ul className="nav">
                <li><NavLink to="/" className="nav-link p-1">Home</NavLink> </li>
                <IoIosArrowForward style={{ alignSelf: "center" }} />
                <li ><NavLink to="/cart" className="nav-link p-1" style={{ color: "#894B8D" }}>Add to cart</NavLink></li>
              </ul>
            </div>
            <div className="d-flex justify-content-end">
              <img className="animals" src={animals} style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </section>
      <section className="section-cart-two my-5">
        {items.length === 0 ? <div className="container">
          <div className="d-flex justify-content-center align-items-center">
            <img
              src="https://png.pngtree.com/png-clipart/20250120/original/pngtree-cart-empty-vector-png-image_20275973.png"
              style={{ width: "350px", height: "350px" }}
              alt="empty cart"
            />
          </div>
        </div> : (
          <div className="container">
            <div className="row g-3">
              <div className="col-12 col-sm-8 col-md-8 col-lg-8">

                <table className="table table-version-first">
                  <thead>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>

                    {items.map(item => (
                      <tr>
                        <th scope="row"><Link to={"/shop"}><img src={`http://localhost:3025/${item.coverImg?.replace(/\\/g, "/")}`} style={{ width: "250px", height: "200px" }} /></Link></th>
                        <td>{item.name}</td>
                        <td>{item.price}$</td>
                        <td>  <div className="quantity-controls">
                          <button onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) - 1)} className="dec mx-2 fw-bold">
                            <FaMinus />
                          </button>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) + 1)} className="inc mx-2 fw-bold">
                            <FaPlus />
                          </button>
                        </div></td>
                        <td>{(item.price) * (item.quantity ?? 1)}$</td>
                        <td>
                          <button onClick={() => removeItem(item.id)} className="btn remove">
                            <IoIosCloseCircleOutline className="mx-3" style={{ width: "23px", height: "23px", color: "#cccccc" }} />
                          </button></td>
                      </tr>
                    ))}

                  </tbody>
                </table>

                {/* /////////////////////////////////////////////////////////////////// */}

                <div className="table-version-second">
                  <div className="row g-5">
                    {items.map(item => (
                      <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                        <div className="d-flex justify-content-center align-items-center flex-column">
                          <img src={`http://localhost:3025/${item.coverImg?.replace(/\\/g, "/")}`} style={{ width: "100%", height: "280px" }} alt="..." />
                        </div>
                        <h5 className="card-title my-3" style={{ color: "#002169" }}>{item.name}</h5>
                        <div className="card">
                          <div className="card-body">
                            <div className="d-flex justify-content-between border-bottom">
                              <p style={{ color: "#808080" }} className="card-text">Price</p>
                              <p style={{ color: "#002169", fontWeight: "500" }} className="card-text">{item.price}$</p>
                            </div>
                            <div className="d-flex justify-content-between border-bottom my-3">
                              <p style={{ color: "#808080" }} className="card-text">Quantity</p>
                              <p style={{ color: "#002169", fontWeight: "500" }} className="card-text">  <div className="quantity-controls mb-2">
                                <button onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) - 1)} className="dec mx-2 fw-bold">
                                  <FaMinus />
                                </button>
                                <span>{item.quantity}</span>
                                <button onClick={() => updateItemQuantity(item.id, (item.quantity ?? 0) + 1)} className="inc mx-2 fw-bold">
                                  <FaPlus />
                                </button>
                              </div></p>
                            </div>
                            <div className="d-flex justify-content-between border-bottom">
                              <p style={{ color: "#808080" }} className="card-text">Subtotal</p>
                              <p style={{ color: "#002169", fontWeight: "500" }} className="card-text">{(item.price) * (item.quantity ?? 1)}$</p>
                            </div>

                            <div className="d-flex justify-content-between align-items-center mt-3">
                              <Link to="/shop"><button className="btn return-to-shop">Return to shop</button></Link>
                              <button onClick={() => removeItem(item.id)} className="btn-close"></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ///////////////////////////////////////////////////////////////////// */}
              </div>
              <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                <div className="content">
                  <h5 className="mb-4">Cart Total</h5>
                  <div className="d-flex justify-content-between border-bottom">
                    <p style={{ color: "#979797" }}>Subtotal:</p>
                    <p style={{ color: "#002169", fontWeight: "500" }}>{cartTotal} $</p>
                  </div>
                  <div className="d-flex justify-content-between border-bottom mt-3">
                    <p style={{ color: "#979797" }}>Shipping:</p>
                    <p style={{ color: "#002169", fontWeight: "500" }}>Free</p>
                  </div>
                  <div className="d-flex justify-content-between mt-3">
                    <p style={{ color: "#979797" }}>Total:</p>
                    <p style={{ color: "#002169", fontWeight: "500" }}>{cartTotal} $</p>
                  </div>
                  <button className="btn button-checkout d-flex align-items justify-content-center mt-3">Proceed to checkout</button>
                </div>
              </div>
            </div>
          </div>
        )}

      </section>
    </>
  )
}

export default Cart