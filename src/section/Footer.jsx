import React, { useEffect } from "react";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";
import google from "../assets/google.jpg";
import apple from "../assets/apple.jpg";
import pay1 from "../assets/pay-1.jpg";
import pay2 from "../assets/pay-2.jpg";
import pay3 from "../assets/pay-3.jpg";
import pay4 from "../assets/pay-4.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  const logos = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
  ];

  const columnLinks = [
    { title: "Informações", links: ["Home", "Sobre", "Produtos", "Testemunhos", "Contato"] },
    { title: "Produtos", links: ["Smartphones", "Laptops", "Fones de Ouvido", "Smartwatches"] },
    { title: "Ajuda", links: ["Suporte", "FAQ", "Política de Devolução", "Contactar"] },
    { title: "Social", links: ["Facebook", "Instagram", "Twitter", "LinkedIn"] },
  ];

  return (
    <div 
      id="contato"
      className="w-full bg-gray-100">
      {/* Seção de Marcas */}
      <div data-aos="zoom-in" data-aos-delay="100" className="w-full bg-themepurple py-8">
        <div className="max-w-screen-2xl mx-auto overflow-hidden relative">
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
            className="flex gap-10 items-center"
          >
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Client ${index + 1}`}
                className="w-[130px] opacity-70 cursor-pointer hover:opacity-100"
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-screen-2xl mx-auto py-14 px-5 lg:px-20 grid lg:grid-cols-2 grid-cols-1 gap-10">
        {/* Coluna 1: Descrição */}
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="flex flex-col justify-start items-start gap-10 w-full"
        >
          <div className="flex flex-col justify-center items-start gap-4">
            <h1 className="text-4xl font-bold text-themepurple underline italic">Electro Shop</h1>
            <p className="text-gray-500 text-justify">
              Bem-vindo à Electro Shop, sua loja de confiança para os mais modernos e inovadores
              eletrônicos do mercado. Oferecemos uma ampla variedade de produtos de alta qualidade,
              incluindo smartphones, laptops, fones de ouvido, smartwatches e muito mais.
            </p>
          </div>
        </div>

        {/* Coluna 2: Links */}
        <div className="w-full flex flex-col lg:flex-row lg:px-20 px-5 pt-5 bg-gray-100">
          <hr className="border-t border-gray-300 py-3" />
          <div className="w-full flex lg:flex-row flex-col justify-between items-start gap-10">
            {/* Links */}
            <div className="w-full lg:w-[40%] flex lg:flex-row flex-col gap-6">
              {columnLinks.map((column, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <h2 className="text-xl font-semibold text-black">{column.title}</h2>
                  <ul className="list-none space-y-2">
                    {column.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a href="#" className="text-gray-600 hover:text-themepurple">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto py-1 px-5 lg:px-14 grid grid-cols-1 gap-10">
        {/* Seções Baixar Aplicativo, Pagamento e Formulário de Inscrição */}
        <div className="flex flex-col lg:flex-row justify-between gap-3 lg:px-5 px-5 py-10 bg-gray-100">
          {/* Baixar Aplicativo */}
          <div className="flex flex-col justify-start items-start gap-10 w-full lg:w-[30%]">
            <h2 className="text-xl font-semibold text-black capitalize">Baixar Aplicativo</h2>
            <div className="flex gap-4">
              <img src={google} alt="Google Play" className="w-[130px]" />
              <img src={apple} alt="Apple Store" className="w-[130px]" />
            </div>
          </div>

          {/* Pagamento */}
          <div className="flex flex-col justify-start items-start gap-10 w-full lg:w-[35%]">
            <h1 className="text-xl font-semibold text-black capitalize ml-4">
              Cartões Aceitos
            </h1>
            <div className="flex gap-4 ml-4">
              <img src={pay1} alt="" className="w-[50px] rounded-lg" />
              <img src={pay2} alt="" className="w-[50px] rounded-lg" />
              <img src={pay3} alt="" className="w-[50px] rounded-lg" />
              <img src={pay4} alt="" className="w-[50px] rounded-lg" />
            </div>
          </div>

          {/* Formulário */}
          <div className="lg:w-[35%] w-full flex lg:flex-row flex-col justify-center items-center gap-4 flex-grow">
        <h1 className="text-black font-semibold text-xl">Inscrever</h1>
        <div className="flex gap-4">
          <input 
            type="email" 
            placeholder="E-mail" 
            className="lg:w-auto w-full capitalize px-6 py-3 rounded-l-lg" 
          />
          <button className="bg-themepurple lg:w-auto w-full text-white hover:bg-themeyellow hover:text-black px-6 py-3 rounded-r-lg font-semibold">Inscrever</button>
        </div>
      </div>
        </div>
      </div>
      {/* Rodapé */}
      <footer className="w-full bg-gray-200 py-8">
        <div className="max-w-screen-2xl mx-auto px-5 flex justify-center items-center gap-5">
          <p className="text-gray-500">© 2024 Electro Shop. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
