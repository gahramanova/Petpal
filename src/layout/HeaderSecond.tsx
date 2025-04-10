import { Link, NavLink } from "react-router-dom";
import darkLogo from "../assets/img/darkLogo.png"
import { IoLockClosedOutline } from "react-icons/io5";

const HeaderSecond = () => {
    return (
        <>
            <header>
                <div className="container p-0">
                    <div className="d-flex align-items-center justify-content-between py-3 mb-4 flex-wrap">

                        {/* Sol Nav Links */}
                        <div className="d-flex col-12 col-md-4 justify-content-start justify-content-md-start mb-2 mb-md-0">
                            <ul className="nav flex-wrap">
                                <li><Link to="/" className="nav-link px-2 text-light">Home</Link></li>
                                <li><Link to="/about" className="nav-link px-2 text-light">About</Link></li>
                                <li><Link to="/shop" className="nav-link px-2 text-light">Shop</Link></li>
                                <li><Link to="/ourteams" className="nav-link px-2 text-light">Our teams</Link></li>
                                <li><Link to="/contact" className="nav-link px-2 text-light">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Ortada Logo */}
                        <div className="d-flex col-12 col-md-4 justify-content-center mb-2 mb-md-0">
                            <img src={darkLogo} width={170} height={40} />
                        </div>

                        {/* Sağda Login */}
                        <div className="d-flex col-12 col-md-4 justify-content-end text-end">
                            <NavLink to="/login" style={{ textDecoration: "none" }}>
                                <button
                                    type="button"
                                    className="btn me-2 login d-flex justify-content-center align-items-center"
                                >
                                    <IoLockClosedOutline
                                        style={{ width: "20px", height: "20px", marginRight: "5px" }}
                                    />
                                    Login
                                </button>
                            </NavLink>
                        </div>

                    </div>
                </div>


            </header>
        </>
    )
}

export default HeaderSecond