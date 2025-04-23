import { DotLoader } from "react-spinners"

const Preloader = () => {
  return (
    <div style={{height:"100vh",backgroundColor:"#ffffff"}} className='d-flex align-items-center justify-content-center'><DotLoader
  color="#9778A7"/>
  </div>
  )
}

export default Preloader