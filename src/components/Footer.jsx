import React from "react";

export function Footer() {
 
 
    return (
        <footer className="bg-[#1F1F1F] font-Inter text-white">
        <div className="m-auto pl-5 md:pl-[100px] pr-[48px] md:pr-[96px] pt-[50px] pb-[46px] md:pb-[22px] grid grid-cols-2 md:grid-cols-5">

            {/* Coluna 1 */}
            <div className="col-span-2 font-medium text-sm md:font-normal md:text-base leading-[22px] md:leading-[26px] tracking-[.25px] pb-10">
              <img className="pb-5 md:pb-10 w-[170px] md:w-[253px]" src="logo.png" alt="Logo da Digital College" />
              <p className="lg:pr-48">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
              <div className="flex gap-6 pt-5 md:pt-10 ">
                <a className="hover:opacity-50" href="#"><i className="fa-brands fa-facebook-f fa-fw text-white text-lga-fw"></i></a>
                <a className="hover:opacity-50" href="#"><i className="fa-brands fa-instagram fa-fw text-white text-lg"></i></a>
                <a className="hover:opacity-50" href="#"><i className="fa-brands fa-twitter fa-fw text-white text-lg"></i></a>
              </div>
            </div>

            {/* Coluna 2 */}
            <div className="col-span-1 pb-10 mr-10 md:mr-0">
              <h2 className="text-lg font-semibold leading-[22px] pb-2.5">Informação</h2>
              <ul className="flex flex-col leading-[31px] md:leading-[38px]">
                <a className="hover:opacity-50" href="#">Sobre Drip Store</a>
                <a className="hover:opacity-50" href="#">Segurança</a>
                <a className="hover:opacity-50" href="#">Wishlist</a>
                <a className="hover:opacity-50" href="#">Blog</a>
                <a className="hover:opacity-50" href="#">Trabalhe conosco</a>
                <a className="hover:opacity-50" href="#">Meus Pedidos</a>
              </ul>
            </div>

            {/* Coluna 3 */}
            <div className="col-span-1 pb-10">
            <h2 className="text-lg font-semibold leading-[22px] pb-2.5">Categorias</h2>
              <ul className="flex flex-col leading-[31px] md:leading-[38px]">
                <a className="hover:opacity-50" href="#">Camisetas</a>
                <a className="hover:opacity-50" href="#">Calças</a>
                <a className="hover:opacity-50" href="#">Bonés</a>
                <a className="hover:opacity-50" href="#">Headphones</a>
                <a className="hover:opacity-50" href="#">Tênis</a>
              </ul>
            </div>
  
            {/* Coluna 4 */}
            <div className="col-span-2 md:col-span-1">
              <h2 className="text-lg font-semibold leading-[22px] pb-2.5">Contato</h2>
              <p className="leading-[31px] md:leading-[26px] pb-5">Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
              <p className="leading-[31px] md:leading-[26px] mb-[23px]">(85) 3051-3411</p>
            </div>
            
            {/* Linha 2 desktop */}
            <div className="col-span-2 md:col-span-5 border-t-2 border-white border-opacity-30 pt-[23px] md:pb-0">
              <p className="text-center">© 2022 Digital College</p>
            </div>
        </div>
      </footer>
    )
  }

