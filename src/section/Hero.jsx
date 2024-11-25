import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import headset from "../assets/headset.png";
import earbuds from "../assets/earbuds.png";
import dslr from "../assets/dslr.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true, // Ativa o autoplay
    autoplaySpeed: 3000, // Define a velocidade de troca (em milissegundos)
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);
  
  return (
    <section 
      id="home"
      className="flex flex-col items-center justify-center bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#4B32BE,#1F1E43_100%)] overflow-x-clip py-24">
      <div className="container max-w-screen-2xl px-5 lg:px-20">
        <Slider className="w-full" {...settings}>
          {[dslr, earbuds, headset].map((image, index) => (
            <div className="w-full" key={index}>
              <div
                className="w-full h-[250px] md:h-[600px] lg:h-[700px] pl-2 flex flex-col justify-center items-start gap-6 md:gap-8 lg:gap-10 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${image})`,
                }}
              >
                <h1
                  data-aos="zoom-in"
                  data-aos-delay="50"
                  className="text-themeyellow border rounded-lg border-themeyellow hover:bg-themebutton hover:text-[#5940D3] px-4 py-2 md:px-6 md:py-3 text-sm md:text-lg lg:text-xl font-serif"
                >
                  Descontos de até 80%
                </h1>
                <h1
                  data-aos="zoom-in"
                  data-aos-delay="100"
                  className="text-white text-2xl md:text-4xl lg:text-6xl uppercase font-bold leading-[1.2] text-shadow-md"
                >
                  {index === 0
                    ? "DSLR 360 \n Câmera"
                    : index === 1
                    ? "Fones \n Wireless"
                    : "Headset \n Wireless"}
                </h1>
                <h1
                  data-aos="zoom-in"
                  data-aos-delay="110"
                  className="text-white text-sm md:text-base lg:text-lg font-semibold"
                >
                  100% confiável{" "}
                  <span className="text-themeyellow font-bold">
                    Gadgets eletrônicos
                  </span>
                </h1>
                <button
                  data-aos="zoom-in"
                  data-aos-delay="120"
                  className="bg-[#977822] hover:bg-themeyellow text-white hover:text-[#5940D3] px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold text-sm md:text-base"
                >
                  NOVIDADES
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Hero;
