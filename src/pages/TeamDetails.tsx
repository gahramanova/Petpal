import { IoIosArrowForward } from "react-icons/io"
import { Link, NavLink, useParams } from "react-router-dom"
import animals from "../assets/img/animals.png"
import { useEffect, useState } from "react"
import slug from "react-slugify"
import Preloader from "../assets/components/Preloader"
import { MdOutlineLocalPhone } from "react-icons/md"
import { SlLocationPin } from "react-icons/sl"
import { GoMail } from "react-icons/go"
import { FaShareAlt, FaTwitter, FaYoutube } from "react-icons/fa"
import { TiSocialFacebook } from "react-icons/ti"
import { IoLogoInstagram } from "react-icons/io5"
import { FaArrowRightLong } from "react-icons/fa6"



const TeamDetails = () => {

    interface TeamMember {
        fullname: string;
        coverImage: string;
        jobposition: string;
        experience: string
        experienceDesc: string;

      }
      
      const [team, setTeam] = useState<TeamMember[]>([]);
    const [generalInfo, setGeneralInfo] = useState([])


    useEffect(() => {
        fetch("http://localhost:3025/ad/team")
            .then(res => res.json())
            .then(data => {
                setTeam(data)
            })

            .catch(error => console.log(error))
    }, [])


    useEffect(() => {
        fetch("http://localhost:3025/ad/generalInfo")
            .then(res => res.json())
            .then(data => {
                setGeneralInfo(data)
            })

            .catch(error => console.log(error))

    }, [])

    const { url } = useParams()

    const teamDetails = team.find(p => slug(p.fullname) === url)
    return (
        <>
            {teamDetails === undefined ? <Preloader /> :
                <>
                    <section className="teamdetails-section-one">
                        <div className="container">
                            <div className="d-flex justify-content-between align-items-center pt-5">
                                <div>
                                    <h1 className="fw-bold">Team Details</h1>
                                    <ul className="nav">
                                        <li><NavLink to="/" className="nav-link p-1">Home</NavLink> </li>
                                        <IoIosArrowForward style={{ alignSelf: "center" }} />
                                        <li ><NavLink to="/ourteams" className="nav-link p-1" style={{ color: "#894B8D" }}>Our team</NavLink></li>
                                    </ul>
                                </div>
                                <div className="d-flex justify-content-end">
                                    <img className="animals" src={animals} style={{ width: "100%" }} />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="teamdetails-section-two">
                        <div className="container px-4 py-5">
                            <div className="row align-items-center g-5 py-5">
                                <div className="col-12 col-sm-8 col-md-5 col-lg-5">
                                    <img src={`http://localhost:3025/${teamDetails.coverImage.replace("\\", "/")}`} className="d-block mx-lg-auto team-photo img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
                                </div>
                                <div className="col-12 col-sm-4 col-md-7 col-lg-7">
                                    <h1 style={{ color: "#002169" }} className="display-5 fw-bold lh-3">{teamDetails.fullname}</h1>
                                    <h5 style={{ color: "#445374" }}>{teamDetails.jobposition} ({teamDetails.experience})</h5>
                                    <div className="seperator my-3"></div>

                                    <h4 style={{ color: "#002169" }} className="mt-4 fw-bold">Experience:</h4>
                                    <p style={{ color: "#445374" }} className=" mt-4">{teamDetails.experienceDesc}</p>

                                    <h4 style={{ color: "#002169" }} className="mt-5 fw-bold">Information:</h4>
                                    <div className="row g-3 mt-2">
                                        {generalInfo.map((item: any) => (
                                            <>
                                                <div className="col-12 col-sm-6 col-md-6">
                                                    <div className="d-flex align-items-center">
                                                        <MdOutlineLocalPhone className="icon" />
                                                        <p className="mx-2" style={{ color: "#002169", fontWeight: "500" }}>+{item.phone}</p>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-6 col-md-6">
                                                    <div className="d-flex align-items-center">
                                                        <SlLocationPin className="icon" />
                                                        <p className="lead mx-2" style={{ color: "#002169", fontWeight: "500" }}>{item.address}</p>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-6 col-md-6">
                                                    <div className="d-flex align-items-center">
                                                        <GoMail className="icon" />
                                                        <p className="lead mx-2" style={{ color: "#002169", fontWeight: "500" }}>{item.email}</p>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-sm-6 col-md-6">
                                                    <div className="d-flex align-items-center">
                                                        <FaShareAlt className="icon" />
                                                        <div className="d-flex align-items-center mx-2">
                                                            <Link to={item.facebookUrl}><TiSocialFacebook className="social-media" /></Link>
                                                            <Link to={item.twitterUrl}><FaTwitter className="social-media" /></Link>
                                                            <Link to={item.instagramUrl}><IoLogoInstagram className="social-media" /></Link>
                                                            <FaYoutube className="social-media" />
                                                        </div>
                                                    </div>
                                                </div></>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        </div>

                    </section>
                </>
            }
        </>
    )
}

export default TeamDetails