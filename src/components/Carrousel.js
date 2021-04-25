import React from "react";
import Slider from "react-slick";
import './slide/slick.css';
import './slide/slick-theme.css';


const Carrousel=({info,cambioImagen,inverso,identificador})=>{
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        speed: 2000,
        autoplaySpeed:0,
        cssEase: "linear",
        pauseOnHover:false,
        rtl:inverso,
    
    };   
    
    return (
      <div className="w-full">
        <Slider {...settings}>
            {info?.map((items,i)=>{
                return <div className="focus:outline-none" key={i}>
                            {items.img&&<img src={items.img} alt="img" onClick={()=>cambioImagen(items.img,items.name,items.info,i)} className={`${identificador===i&&"border-4 border-orange-500 p-2 border-dashed"} w-24 h-24 md:w-64 md:h-64 rounded-full mx-auto cursor-pointer object-cover`}/>}
                        </div>
            })}
        </Slider>
      </div>
    );
}
export default Carrousel;
