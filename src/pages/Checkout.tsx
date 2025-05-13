import { IoIosArrowForward } from "react-icons/io"
import { NavLink } from "react-router-dom"
import animals from "../assets/img/animals.png"
import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material"
import { useCart } from "react-use-cart"
import { useRef } from "react"
import { useCookies } from "react-cookie"
import { useJwt } from "react-jwt"
import Preloader from "../assets/components/Preloader"

const Checkout = () => {


    type DecodedToken = {
        name: string;
        surname: string;
        phone: string
    };


    const nameRef = useRef<HTMLInputElement>(null);
    const surnameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const addressRef = useRef<HTMLInputElement>(null);

    const orderSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }

    const { items, cartTotal } = useCart()

    const [cookies] = useCookies(["petpal"]);
    const { decodedToken } = useJwt<DecodedToken>(cookies.petpal);

    return (
        <>

            {!decodedToken ? (
                <Preloader />
            ) : (
                <>
                    <section className="section-checkout-one">
                        <div className="container">
                            <div className="d-flex justify-content-between align-items-center pt-5">
                                <div>
                                    <h1 className="fw-bold">Checkout</h1>
                                    <ul className="nav">
                                        <li><NavLink to="/" className="nav-link p-1">Home</NavLink> </li>
                                        <IoIosArrowForward style={{ alignSelf: "center" }} />
                                        <li ><NavLink to="/checkout" className="nav-link p-1" style={{ color: "#894B8D" }}>Checkout</NavLink></li>
                                    </ul>
                                </div>
                                <div className="d-flex justify-content-end">
                                    <img className="animals" src={animals} style={{ width: "100%" }} />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-checkout-two">
                        <div className="container my-5">

                            <div className="row g-4">
                                <div className="col-12 col-sm-6 col-md-8 col-lg-8">
                                    <h3 className="fw-bold" style={{ color: "#002169" }}>YOUR INFORMATION</h3>
                                    <span style={{ color: "#445374" }}>Add your name, surname and address</span>
                                    <form onSubmit={orderSubmit} className="my-4">
                                        <div className="row g-3">
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control" ref={nameRef} required placeholder="Your first name" aria-label="Your first name" aria-describedby="basic-addon2" value={decodedToken.name} />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control" ref={surnameRef} required placeholder="Your last name" aria-label="Your last name" aria-describedby="basic-addon2" value={decodedToken.surname} />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control" ref={phoneRef} required placeholder="Phone number" aria-label="Phone number" aria-describedby="basic-addon2" value={decodedToken.phone} />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control" ref={emailRef} required placeholder="ZIP code" aria-label="ZIP code" aria-describedby="basic-addon2" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control" ref={addressRef} required placeholder="Address Details" aria-label="Address Details" aria-describedby="basic-addon2" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                                    <div className="order-summary">
                                        <h4 style={{ color: "#002169", fontWeight: "600" }}>Order Summary</h4>
                                        {items.map((item: any) => (
                                            <div className="d-flex justify-content-between align-items-center mt-3">
                                                <div className="d-flex align-items-center">
                                                    <img src={`https://petpal-backend-en2xs.kinsta.app/${item.coverImg?.replace(/\\/g, "/")}`} style={{ width: "70px", height: "70px", borderRadius: "15px" }} />
                                                    <p style={{ color: "#002169", fontWeight: "500" }} className="mx-3">{item.name.slice(0, 30)}...</p>
                                                </div>
                                                <div>
                                                    <p style={{ color: "#002169", fontWeight: "500" }}>{item.price}.00$</p>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="mt-5 d-flex justify-content-between border-bottom">
                                            <p style={{ color: "#979797" }}>Subtotal: </p>
                                            <p style={{ color: "#002169", fontWeight: "500" }}>{cartTotal}.00$</p>
                                        </div>
                                        <div className="mt-3 d-flex justify-content-between border-bottom">
                                            <p style={{ color: "#979797" }}>Delivery: </p>
                                            <p style={{ color: "#002169", fontWeight: "500" }}>Free</p>
                                        </div>
                                        <div className="mt-3 d-flex justify-content-between">
                                            <p style={{ color: "#979797" }}>Total: </p>
                                            <p style={{ color: "#002169", fontWeight: "500" }}>{cartTotal}.00$</p>
                                        </div>



                                        <h6 style={{ color: "#002169", fontWeight: "500" }}>Payment Methods:</h6>
                                        <div className="d-flex flex-column">
                                            <FormControl>
                                                <RadioGroup
                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                    defaultValue="female"
                                                    name="radio-buttons-group"
                                                >
                                                    <FormControlLabel value="female" control={<Radio />} label="Cash on Delivery" />
                                                    <FormControlLabel value="male" control={<Radio />} label="Paypal" />
                                                </RadioGroup>
                                            </FormControl>

                                            <button className="btn summary-order mt-3">Place Order</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </>
    )
}

export default Checkout