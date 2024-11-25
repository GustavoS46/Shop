import React, { useEffect } from 'react';
import cat1 from '../assets/cat1.jpg';
import cat2 from '../assets/cat2.jpg';
import cat3 from '../assets/cat3.jpg';
import cat4 from '../assets/cat4.jpg';
import cat5 from '../assets/cat5.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { categoria } from '../export';

const Category = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out',
    });

    AOS.refresh();
  }, []);

  return (
    <div className='w-full bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] overflow-x-clip lg:px-20 px-5 pt-8 lg:pt-[130px] pb-[80px] flex lg:flex-row justify-center gap-20'>
      <div className='container max-w-screen-2xl flex flex-wrap lg:flex-nowrap gap-20'>
        <div
          data-aos='zoom-in'
          data-aos-delay='50'
          className='lg:w-[15%] w-full flex flex-col justify-center lg:items-start items-center gap-[5px] lg:gap-[20px]'
        >
          <h1 className='text-themepurple text-lg md:text-xl font-semibold text-center'>
            Mais procurados
          </h1>
          <h1 className='text-black font-semibold text-2xl md:text-4xl lg:text-[42px] lg:text-start text-center leading-[1.2]'>
            Popular
          </h1>
          <button className='bg-themepurple hover:bg-[#FB6F66] text-white hover:text-black px-6 py-2 md:px-8 md:py-3 font-semibold mt-[40px] md:mt-[60px] rounded-lg text-sm md:text-base lg:text-lg'>
            VER TODOS
          </button>
        </div>
        <div className='lg:w-[85%] w-full grid lg:grid-cols-5 grid-cols-1 justify-center items-center gap-10 mt-5'>
          {categoria.slice(0, 5).map((item, index) => ( // Use `.slice(0, 5)` para pegar apenas 5 produtos, caso necessário
            <div
              key={index}
              data-aos='zoom-in'
              data-aos-delay='100'
              className='flex flex-col justify-center items-center gap-4 md:gap-6'
            >
              <img
                src={item.img} // Use a imagem diretamente do `products`
                alt={`Categoria ${index + 1}`}
                className='rounded-full cursor-pointer w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-40 lg:h-40'
              />
              <h1 className='text-black text-sm md:text-base lg:text-lg font-semibold hover:text-themepurple cursor-pointer text-center'>
                {item.category} {/* Exibe a categoria do item atual */}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
