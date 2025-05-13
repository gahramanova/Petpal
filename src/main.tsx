import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import "./assets/sass/style.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-image-gallery/styles/css/image-gallery.css";
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from "react-use-cart"
import { WishlistProvider } from "react-use-wishlist"
import { CookiesProvider } from 'react-cookie'
import { ApiEndPointProvider } from './context/ApiEndPointContext.tsx'

createRoot(document.getElementById('root')!).render(

    <CookiesProvider defaultSetOptions={{ path: "/" }}>
        <ApiEndPointProvider>
            <BrowserRouter>
                <CartProvider>
                    <WishlistProvider>
                        <App />
                    </WishlistProvider>
                </CartProvider>
            </BrowserRouter>
        </ApiEndPointProvider>
    </CookiesProvider>

)
