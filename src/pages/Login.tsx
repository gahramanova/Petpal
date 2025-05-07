import { Link, useNavigate } from "react-router-dom"
import animals from "../assets/img/animals.png"
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { TextField, Button, Box } from '@mui/material';
import { useCookies } from 'react-cookie';
import swal from 'sweetalert';
import axios from "axios";


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies(["petpal"]);
  const navigate = useNavigate();


  // try {
  //   const response = await fetch('http://localhost:3000/ad/login/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       email: formData.email,
  //       password: formData.password,
  //     }),
  //   });
  const loginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .post(
        "https://petpal-backend-en2xs.kinsta.app/ad/login/login",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "petpal-token":"f20e26bb783ea89ef58823b877337a2e",
          },
        },
      )
      .then((res) => {
        if (res.status === 200 || res.status === 204) {
          setCookie("petpal", res.data);
          navigate("/myaccount");
        } else {
          swal("Email or password is wrong", "", "error");
        }
      }).catch(err=>{
        swal("Email or password is wrong", "", "error");
      });
  };
  

  return (
    <>
      <section className="login-section-one">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center pt-5">
            <div>
              <h1 className="fw-bold">Login</h1>
              <ul className="nav">
                <li><Link to="/" className="nav-link p-1">Home</Link> </li>
                <IoIosArrowForward style={{ alignSelf: "center" }} />
                <li ><Link to="/login" className="nav-link p-1" style={{ color: "#894B8D" }}>Login</Link></li>
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
          onSubmit={loginSubmit}
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
          <h2 className="fw-bold m-0 text-center" style={{color:"#002169"}}>Welcome!</h2>
          
          <TextField
            label="Email"
            name="email"  
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e)=> {setEmail(e.target.value)}}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '33px',
              },
            }}
          />
          
          <TextField
            label="Password"
            name="password"  
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e)=> {setPassword(e.target.value)}}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '33px',
              },
            }}
          />
          
          <Button type="submit" variant="contained" sx={{ backgroundColor: "#002169", borderRadius: "33px", padding: "10px" }}>
            Login
          </Button>

          <p className="text-center m-0">You don't have an account? <Link to={"/register"}>Create your account</Link></p>
          <Link to="/forgotpassword"><p className="text-center">Forgot your password?</p></Link>
        </Box>
      </section>
    </>
  );
};

export default Login;
