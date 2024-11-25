import React, { useEffect } from 'react';
import { products } from '../export'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdAddShoppingCart, MdOutlineRemoveRedEye } from 'react-icons/md';
import { FaRegHeart, FaStar } from 'react-icons/fa';

const Productsgrid = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  return (
    <section id='produtos'>
      <div 
      id="products"
      className="w-full bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] overflow-x-clip"
    >
      <div className="max-w-screen-2xl mx-auto h-auto flex flex-col justify-center gap-5 p-5">
        <h1
          data-aos="zoom-in"
          data-aos-delay="100"
          className="text-themepurple text-xl text-center font-semibold"
        >
          Coleções
        </h1>
        <h1
          data-aos="zoom-in"
          data-aos-delay="200"
          className="text-black text-4xl leading-[50px] text-center font-semibold"
        >
          Tendências
        </h1>
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="w-full grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-10 mt-10"
        >
          {products.map((item, index) => (
            <div 
              id="product-box"
              key={index}
              className="flex flex-col bg-white p-4 rounded-lg cursor-pointer relative"
            >
              {/* Imagem do produto */}
              <img src={item.img} alt="" className="rounded-lg" />

              {/* Ícones no topo centralizado */}
              <div 
                id="icons"
                className="absolute top-0 left-1/2 -translate-x-1/2 flex justify-center items-center"
              >
                <div className="bg-themepurple hover:bg-[#FB6F66] text-white hover:text-black rounded-full m-2 p-2">
                  <MdOutlineRemoveRedEye />
                </div>
                <div className="bg-themepurple hover:bg-[#FB6F66] text-white hover:text-black rounded-full m-2 p-2">
                  <FaRegHeart />
                </div>
                <div className="bg-themepurple hover:bg-[#FB6F66] text-white hover:text-black rounded-full m-2 p-2">
                  <MdAddShoppingCart />
                </div>
              </div>

              {/* Textos centralizados */}
              <div className="flex flex-col items-center gap-2 mt-4">
                <h1 className="text-lg text-gray-400 font-semibold">
                  {item.category}
                </h1>
                <h1 className="text-xl text-black font-semibold">
                  {item.name}
                </h1>
                <h1 className="text-lg text-themepurple font-semibold">
                  {item.price}
                </h1>
                <div className='w-full mt-2'>
                  <hr />
                  <div className='flex justif-b items-center gap-6 mt-3'>
                    <div className='flex justify-start items-center gap-1'>
                      <FaStar className='text-themebutton' />
                      <FaStar className='text-themebutton' />
                      <FaStar className='text-themebutton' />
                      <FaStar className='text-themebutton' />
                      <FaStar className='text-themebutton' />
                    </div>
                    <button className='bg-[#FB6F66] hover:bg-themepurple  text-white px-4 py-2 rounded-lg text-sm font-semibold'>Oferta 15%</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
          <button 
            data-aos='zoom-in'
            data-aos-delay='400'
            className='bg-themepurple hover:bg-[#FB6F66] text-white hover:text-black font-semibold px-8 py-3 rounded-lg mt-8 w-auto max-w-fit mx-auto'
          >
            VEJA MAIS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Productsgrid;