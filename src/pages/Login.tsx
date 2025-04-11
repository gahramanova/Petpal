import { Link } from "react-router-dom"
import animals from "../assets/img/animals.png"
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { TextField, Button, Box } from '@mui/material';


const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // buraya backend request və ya validation əlavə edə bilərsən
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
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 500, mx: 'auto', mt: 4 }}
      >
        <h2 className="fw-bold m-0" style={{color:"#002169"}}>Welcome Back!</h2>
        <span style={{color:"#445374"}} className="m-0">Nice to see you again :D</span>
        <TextField
          label="Email"
          name="email"
          type="email"
          placeholder="Enter you email address"
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
        <Button type="submit" variant="contained" sx={{backgroundColor:"#002169", borderRadius:"33px", padding:"10px"}}>
          Login
        </Button>
      </Box>
     </section>
    </>
  )
}

export default Login