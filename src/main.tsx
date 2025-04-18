import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import "./assets/sass/style.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/css/style.css"
import { BrowserRouter } from 'react-router-dom';
import {CartProvider} from "react-use-cart"

createRoot(document.getElementById('root')!).render(
 
    <BrowserRouter>
    <CartProvider>
    <App/>
    </CartProvider>
   
    </BrowserRouter>

)
