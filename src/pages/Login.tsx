import { Link, useNavigate } from "react-router-dom"
import animals from "../assets/img/animals.png"
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { TextField, Button, Box } from '@mui/material';
import { useCookies } from 'react-cookie';
import swal from 'sweetalert';


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  
    try {
      const response = await fetch('http://localhost:3000/ad/login/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });
  
      // Cavabı mətn formatında oxuyuruq
      const responseText = await response.text(); // Cavabı mətn formatında alırıq
  
      if (response.ok) {
        // Cavabın mətn olduğunu nəzərə alırıq
        if (responseText) {
          // Burada artıq cavabın token olduğunu bilirik
          setCookie('token', responseText, { path: '/' });
  
          // Home səhifəsinə yönləndiririk
          navigate("/myaccount");
        } else {
          swal("Email və ya şifrə yanlışdır", "", "error");
        }
      } else {
        swal(`Xəta: ${responseText || 'Gözlənilməz xəta baş verdi.'}`, "", "error");
      }
    } catch (error) {
      swal(`Xəta: ${error.message || 'Bir şey səhv getdi!'}`, "", "error");
    }
  };
  

  return (
    <>
      <section className="login-section-one">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center pt-5">
            <div>
              <h1 className="fw-bold">Giriş</h1>
              <ul className="nav">
                <li><Link to="/" className="nav-link p-1">Əsas səhifə</Link> </li>
                <IoIosArrowForward style={{ alignSelf: "center" }} />
                <li ><Link to="/login" className="nav-link p-1" style={{ color: "#894B8D" }}>Giriş</Link></li>
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
          <h2 className="fw-bold m-0 text-center" style={{color:"#002169"}}>Xoş gəlmisiniz!</h2>
          
          <TextField
            label="Email"
            name="email"  
            type="email"
            placeholder="Email ünvanınızı daxil edin"
            value={formData.email}
            onChange={handleChange}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '33px',
              },
            }}
          />
          
          <TextField
            label="Şifrə"
            name="password"  
            type="password"
            placeholder="Şifrənizi daxil edin"
            value={formData.password}
            onChange={handleChange}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '33px',
              },
            }}
          />
          
          <Button type="submit" variant="contained" sx={{ backgroundColor: "#002169", borderRadius: "33px", padding: "10px" }}>
            Giriş
          </Button>

          <p className="text-center m-0">Hesabınız yoxdursa? <Link to={"/register"}>Hesab yaradın</Link></p>
          <Link to="/forgotpassword"><p className="text-center">Şifrəni unutmusunuz?</p></Link>
        </Box>
      </section>
    </>
  );
};

export default Login;
