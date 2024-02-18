import React from "react";

export function Footer() {
 
 
    return (
        <footer className="bg-gray-900 font-Inter text-white">
        <div className="m-auto pl-5 pr-[74px] pt-[50px] pb-[46px] grid grid-cols-2 grid-rows-3 md:grid-cols-4 md:grid-rows-2 gap-3">

            {/* Coluna 1 */}
            <div className="col-span-2 md:col-span-1 font-medium text-sm md:font-normal md:text-base leading-[22px] md:leading-[26px] tracking-[.25px]">
              <img className="py-5" src="logo.png" alt="Logo da Digital College" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
              <div className="flex gap-6 pt-5 md:pt-10">
                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
              </div>
            </div>

            {/* Coluna 2 */}
            <div className="col-span-1">
              <h2 className="text-lg font-semibold leading-[22px] md:leading-[38px]">Informação</h2>
              <ul className="flex flex-col">
                <a href="#">Sobre Drip Store</a>
                <a href="#">Segurança</a>
                <a href="#">Wishlist</a>
                <a href="#">Blog</a>
                <a href="#">Trabalhe conosco</a>
                <a href="#">Meus Pedidos</a>
              </ul>
            </div>

            {/* Coluna 3 */}
            <div className="col-span-1">
            <h2 className="text-lg font-semibold leading-[22px] md:leading-[38px]">Categorias</h2>
              <ul className="flex flex-col">
                <a href="#">Camisetas</a>
                <a href="#">Calças</a>
                <a href="#">Bonés</a>
                <a href="#">Headphones</a>
                <a href="#">Tênis</a>
              </ul>
            </div>
  
            {/* Coluna 4 */}
            <div className="col-span-2 md:col-span-1">
              <h2 className="text-lg font-semibold leading-[22px] md:leading-[38px]">Contato</h2>
              <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
              <p>(85) 3051-3411</p>
            </div>
            
            {/* Linha 2 desktop */}
            <div className="col-span-2 md:col-span-4 border-t-2 border-white border-opacity-30 pt-[23px]">
              <p className="text-center">© 2022 Digital College</p>
            </div>
        </div>
      </footer>
    )
  }

