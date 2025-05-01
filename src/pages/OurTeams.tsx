import { IoIosArrowForward } from "react-icons/io"
import { Link, NavLink } from "react-router-dom"
import animals from "../assets/img/animals.png"
import cardIcon from "../assets/img/cardIcon.svg"
import { FaArrowRightLong } from "react-icons/fa6"
import { useEffect, useState } from "react"
import slug from "react-slugify"


const OurTeams = () => {

    const [team, setTeam] = useState([])
  
    useEffect(() => {
      fetch("http://localhost:3000/ad/team")
        .then(res => res.json())
        .then(data => {
          setTeam(data)
        })
  
        .catch(error => console.log(error))
  
    }, [])
  return (
    <>
     <section className="team-section-one">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center pt-5">
            <div>
              <h1 className="fw-bold">Team Members</h1>
              <ul className="nav">
                <li><NavLink to="/" className="nav-link p-1">Home</NavLink> </li>
                <IoIosArrowForward style={{ alignSelf: "center" }} />
                <li ><NavLink to="/ourteams" className="nav-link p-1" style={{ color: "#894B8D" }}>Team</NavLink></li>
              </ul>
            </div>
            <div className="d-flex justify-content-end">
              <img className="animals" src={animals} style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </section>
      <section className="team-section-two">
      <div className="container">
      <div className="team mt-5">
            <div className="row g-4">

              {team.map((item:any)=> (
                <div className="col-12 col-sm-6 col-md-3 col-lg-3">
                <div className="d-flex justify-content-end align-items-end">
                  <img src={cardIcon} />
                </div>
              <Link to={`/ourteams/${slug(item.fullname)}`}>
              <div className="card">
                  <img src={`http://localhost:3000/${item.coverImage.replace("\\", "/")}`} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title text-center">{item.fullname}</h5>
                    <p className="card-text text-center">{item.jobposition}</p>

                  </div>
                </div></Link>
              </div>
              ))}
              

{/* 
              <div className="col-12 col-sm-6 col-md-3 col-lg-3">
                <div className="d-flex justify-content-end align-items-end">
                  <img src={cardIcon} />
                </div>
                <div className="card">
                  <img src={teamTwo} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title text-center">Kenroly Gajon</h5>
                    <p className="card-text text-center">Food Technician</p>

                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3 col-lg-3">
                <div className="d-flex justify-content-end align-items-end">
                  <img src={cardIcon} />
                </div>
                <div className="card">
                  <img src={teamThree} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title text-center">Michael Brian</h5>
                    <p className="card-text text-center">Medicine Specialist</p>

                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3 col-lg-3">
                <div className="d-flex justify-content-end align-items-end">
                  <img src={cardIcon} />
                </div>
                <div className="card">
                  <img src={teamTwo} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title text-center">Kenroly Gajon</h5>
                    <p className="card-text text-center">Food Technician</p>

                  </div>
                </div>
              </div> */}
            </div>
            <div className="d-flex justify-content-center align-items-center my-5">
              <p style={{ color: "#4D6496" }} className="m-0"><u>Our Valuable Expert Doctors Team</u></p>
              <Link to="/contact" ><button className="btn see-all-doctors mx-3">Contact Us<FaArrowRightLong className="mx-2"/>
              </button></Link>
            </div>
          </div>
      </div>
      </section>
    </>
  )
}

export default OurTeams