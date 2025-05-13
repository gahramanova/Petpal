import { Link } from "react-router-dom"
import animals from "../assets/img/animals.png"
import { IoIosArrowForward } from "react-icons/io";
import { useContext, useState } from "react";
import { Box, TextField, Button } from '@mui/material';
import axios from "axios";
import { ApiEndPointContext } from "../context/ApiEndPointContext";

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    password: '',
  });
    const { passValue} = useContext(ApiEndPointContext)
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);

    axios.post("https://petpal-backend-en2xs.kinsta.app/ad/user", {
      name: formData.name,
      surname: formData.surname,
      email: formData.email,
      phone: formData.phone,
      password: formData.password
    }, {
      headers: {
        ...passValue
      },
      withCredentials: true // bunu əlavə et!
    })
      .then((_res: any) => {
        swal({
          title: "Resgistiration completed succesfully.",
          icon: "success",

        }).then((_result) => {
          window.location.assign('/login') // Yönləndiriləcək URL
        });

      }).catch(err => {
        swal({
          title: err.response.data,
          icon: "error"
        })

      })
  };

  return (
    <>
      <section className="register-section-one">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center pt-5">
            <div>
              <h1 className="fw-bold">Register</h1>
              <ul className="nav">
                <li><Link to="/" className="nav-link p-1">Home</Link> </li>
                <IoIosArrowForward style={{ alignSelf: "center" }} />
                <li ><Link to="/register" className="nav-link p-1" style={{ color: "#894B8D" }}>Register</Link></li>
              </ul>
            </div>
            <div className="d-flex justify-content-end">
              <img className="animals" src={animals} style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </section>
      <section className="my-5">
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            width: { xs: '90%', sm: '70%', md: '50%', lg: '500px' },
            mx: 'auto',
            mt: 4,
            px: 2
          }}
        >
          <h2 className="fw-bold m-0 text-center" style={{ color: "#002169" }}>Create your account</h2>
          <TextField
            label="Name"
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '33px', // TextField-a border radius veririk
              },
            }}
          />
          <TextField
            label="Surname"
            name="surname"
            type="text"
            placeholder="Enter your surname"
            value={formData.surname}
            onChange={handleChange}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '33px', // TextField-a border radius veririk
              },
            }}
          />
           <TextField
            label="Phone number"
            name="phone"
            type="number"
            placeholder="Enter your email address"
            value={formData.phone}
            onChange={handleChange}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '33px', // TextField-a border radius veririk
              },
            }}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '33px', // TextField-a border radius veririk
              },
            }}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '33px', // TextField-a border radius veririk
              },
            }}
          />
          <Button type="submit" variant="contained" sx={{ backgroundColor: "#002169", borderRadius: "33px", padding: "10px" }}>
            Login
          </Button>
          <p className="text-center">Already have an account? <Link to={"/login"}>Sign in</Link></p>
        </Box>
      </section>
    </>
  )
}

export default Register