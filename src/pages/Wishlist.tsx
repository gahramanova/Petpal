import { IoIosArrowForward } from "react-icons/io"
import { NavLink } from "react-router-dom"
import animals from "../assets/img/animals.png"
import { useWishlist } from "react-use-wishlist"
import { useCart } from "react-use-cart"

const Wishlist = () => {

  const {items, removeWishlistItem} = useWishlist()

    const { addItem } = useCart();
  
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

      <section className="section-wishlist-two my-5">
        <div className="container">
        {items.length === 0 ? <div className="d-flex justify-content-center align-items-center">
              <img className="m-5"  src="https://www.landljewelry.com/assets/images/empty-wishlist.png" />
      </div> :
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
             
             
             {items.map(item=>(
               <tr>
               <td><img src={`http://localhost:3000/${item.coverImg?.replace(/\\/g, "/")}`} style={{ width: "120px", height: "120px" }} /></td>
               <td>{item.name}</td>
               <td>{item.price}$</td>
               <td>
                <button className="add-to-cart-btn" onClick={() => {
                        addItem(item);
                        swal({
                          title: "Added to cart",
                          icon: "success",
                        })}} >Add to cart</button>
                </td>
               <td><button onClick={()=>removeWishlistItem(item.id)} className="btn-close"></button></td>
             </tr>
             ))}
          

            </tbody>
          </table>
}
        </div>
      </section>
    </>
  )
}

export default Wishlist