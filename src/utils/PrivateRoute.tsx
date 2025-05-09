
import { useCookies } from 'react-cookie';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {

    const authUserData = ()=>{
        const [cookies] = useCookies(['petpal']);
        if (cookies.petpal)  return true;
        else return false;
    }
    if (authUserData()) {
        return <Outlet/>
    }else{
       return <Navigate to={"/login"} />
    }
    
 
}

export default PrivateRoute