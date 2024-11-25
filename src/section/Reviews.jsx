import React, { useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import AOS from "aos";
import "aos/dist/aos.css";
import { reviewdata } from '../export';

const Reviews = () => {
  const sliderRef = React.useRef(null);

  // Configurações do Slider com autoplay
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000, // Tempo de troca entre slides (3 segundos)
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
    <div
      id="testemunhos"
      className="w-full lg:px-20 px-5 lg:py-20 py-10 bg-gray-100 flex flex-col justify-center items-center gap-4"
    >
      {/* Cabeçalhos principais */}
      <div className="max-w-screen-2xl mx-auto text-center">
        <h1
          data-aos="zoom-in"
          data-aos-delay="100"
          className="text-themepurple text-xl font-semibold capitalize"
        >
          1300+ Avaliações
        </h1>
        <h2
          data-aos="zoom-in"
          data-aos-delay="200"
          className="text-black font-semibold text-4xl capitalize mt-4"
        >
          Mais Avaliados Pelos Clientes
        </h2>
      </div>

      {/* Slider com Botões de Navegação */}
      <div className="relative w-full mt-10 max-w-screen-2xl mx-auto">
        <Slider ref={sliderRef} {...settings}>
          {reviewdata.map((item, index) => (
            <div key={index} className="p-5">
              <div
                className="flex flex-col justify-between items-center gap-4 lg:p-10 p-5 bg-white shadow-lg rounded-lg h-[400px]"
              >
                {/* Imagem do Avaliador */}
                <img
                  src={item.img}
                  alt={item.name}
                  className="rounded-full w-[100px] h-[100px] mx-auto object-cover"
                />
                {/* Avaliação por Estrelas */}
                <div className="flex justify-center items-center gap-1">
                  {[...Array(5)].map((_, starIndex) => (
                    <FaStar key={starIndex} className="text-themebutton" />
                  ))}
                </div>
                {/* Comentário */}
                <p className="text-center text-gray-500 text-lg flex-1 overflow-hidden">
                  {item.para}
                </p>
                {/* Informações do Avaliador */}
                <div className="flex justify-center items-start gap-5">
                  <FaQuoteLeft className="text-themepurple text-2xl" />
                  <div className="flex flex-col justify-start items-start">
                    <h3 className="text-black text-xl font-semibold capitalize">
                      {item.name}
                    </h3>
                    <p className="text-gray-500 capitalize">{item.post}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* Botões de Navegação */}
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-themepurple text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={() => sliderRef.current.slickNext()}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-themepurple text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Reviews;
