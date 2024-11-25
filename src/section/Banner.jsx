import React, { useEffect } from 'react';
import deal from '../assets/deal-bg.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  return (
    <div className='
    w-full lg:px-20 px-5 py-5 lg:py-20'>
      <div 
        className='max-w-screen-2xl mx-auto h-[300px] rounded-lg bg-cover bg-center flex flex-col justify-center items-center gap-3'
        style={{backgroundImage: `url(${deal})` }}
      > 
        <h1 className='text-themeyellow text-xl font-semibold'>Mais Procurados</h1>
        <h1 className='text-white font-bold text-4xl leading-10'>Ofertas do dia</h1>
      </div>
    </div>
  )
}

export default Banner