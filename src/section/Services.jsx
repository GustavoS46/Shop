import React, { useEffect } from 'react';
import payment from '../assets/payment.png';
import shipping from '../assets/shipping.png';
import refund from '../assets/return.png';
import gift from '../assets/gift.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { div, section } from 'motion/react-client';

const Services = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  return (
    <section id='sobre'>
      <div className='w-full'>
        <div className='max-w-screen-xl mx-auto h-auto lg:px-20 px-5 pt-0 pb-5 lg:pb-20 grid lg:grid-cols-4 grid-cols-1 justify-center gap-1 lg:gap-10'>
          <div 
            data-aos="zoom-in"
            data-aos-delay="100"
            className='flex flex-col justify-center items-center gap-2'
          >
            <img src={shipping} alt="" className='mb-1 lg:mb-5 w-16 lg:w-16' />
            <h1 className='text-xl text-black font-semibold'>Envio Rápido</h1>
            <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet.</p>
          </div>
          <div 
            data-aos="zoom-in"
            data-aos-delay="100"
            className='flex flex-col justify-center items-center gap-2'
          >
            <img src={payment} alt="" className='mb-1 lg:mb-5 w-16 lg:w-16' />
            <h1 className='text-xl text-black font-semibold'>100% Seguro</h1>
            <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet.</p>
          </div>
          <div 
            data-aos="zoom-in"
            data-aos-delay="100"
            className='flex flex-col justify-center items-center gap-2'
          >
            <img src={refund} alt="" className='mb-1 lg:mb-5 w-16 lg:w-16' />
            <h1 className='text-xl text-black font-semibold'>Fácil Devolução</h1>
            <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet.</p>
          </div>
          <div 
            data-aos="zoom-in"
            data-aos-delay="100"
            className='flex flex-col justify-center items-center gap-2'
          >
            <img src={gift} alt="" className='mb-1 lg:mb-5 w-16 lg:w-16' />
            <h1 className='text-xl text-black font-semibold'>Embalagens de Pesentes</h1>
            <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services