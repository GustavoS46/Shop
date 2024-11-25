import React, { useEffect } from 'react';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Types = () => {
  
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  const banners = [
    { image: banner1, name: 'Headset' },
    { image: banner2, name: 'Fones de Ouvido' },
    { image: banner3, name: 'Relógios Inteligentes' },
  ];

  return (
    <div className="w-full">
      <div className="max-w-screen-2xl mx-auto h-auto grid grid-cols-1 lg:grid-cols-3 gap-5 p-5">
        {banners.map((banner, index) => (
          <div
            key={index}
            className="w-full h-[30vh] bg-cover bg-center flex justify-end items-center rounded-lg px-5"
            style={{
              backgroundImage: `url(${banner.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className="flex flex-col justify-center items-end gap-6 bg-opacity-70 bg-black p-2 lg:p-10 rounded-lg"
            >
              <h1 className="text-themeyellow hover:text-white border border-themeyellow hover:border-[#EC71A6] hover:bg-[#EC71A6] rounded-lg px-3 py-3 lg:px-6 lg:py-2 text-sm lg:text-lg font-semibold">
                60% OFF
              </h1>
              <h1 className="text-sm lg:text-4xl text-end text-white font-semibold">
                {banner.name}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Types;
