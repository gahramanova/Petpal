import petStore from "../img/petStore.svg"
import petShop from "../img/petShop.svg"
import petFood from "../img/petFood.svg"
import petHouse from "../img/petHouse.svg"
import petCenter from "../img/petCenter.svg"
import petCare from "../img/petCare.svg"
import petBuy from "../img/PetBuy.svg"
import Slider from "react-slick"


const Partners = () => {
    const partners = [
        { logo: petStore },
        { logo: petShop },
        { logo: petFood },
        { logo: petHouse },
        { logo: petCenter },
        { logo: petCare },
        { logo: petBuy },

    ];

    var settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        arrows: true,
        accessibility: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    autoplay: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    autoplay: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    autoplay: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    };
    return (
        <>
            <div className='container'>
                <div className="carousel-main">
                    <div className="slider-container">
                        <Slider {...settings}>
                            {partners.map((item, index) => (
                                <div key={index} className="slider-item d-flex justify-content-center align-items-center">
                                    <img height={60} width={60} style={{ objectFit: "contain" }} src={item.logo} />
                                </div>
                            ))}
                        </Slider>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Partners