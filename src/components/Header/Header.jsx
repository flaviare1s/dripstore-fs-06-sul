import { BurgerIcon } from "../BurgerIcon/BurgerIcon";
import { DigitalIconMobile } from "../DigitalIconMobile/DigitalIconMobile";
import { SearchIcon } from "../SearchIcon/SearchIcon";
import { CartIcon } from "../CartIcon/CartIcon";
import { useState } from "react";
import { useBurgerMenu } from "../../providers/burgerState";

function Header() {
  const [isActiveSeachBar, setIsActiveSeachBar] = useState(false);
  const [valueSearchBar, setValueSearchBar] = useState("");
  const burgerMenuState = useBurgerMenu();
  return (
    <>
      <div className="w-full p-5 flex flex-col gap-5 bg-white">
        <div className="flex flex-row items-center justify-between">
          <div className="md:hidden">
            <button onClick={() => {
              burgerMenuState.setIsActiveBurgerMenu(!burgerMenuState.isActiveBurgerMenu);
              if(isActiveSeachBar === true){
                setIsActiveSeachBar(false);
              }
            }}>
              <BurgerIcon />
            </button>
          </div>
          <div className="flex gap-1 items-center">
            <div>
              <DigitalIconMobile />
            </div>
            Digital Collage
          </div>
          <div className="gap-10 hidden md:flex ">
            <div className="pr-5 flex items-center gap-10 bg-slate-200 rounded-lg">
              <input
                className="w-full px-5 py-4 bg-slate-200 rounded-lg"
                type="text"
                placeholder="Pesquisar produto..."
                value={valueSearchBar}
                onChange={(event) => setValueSearchBar(event.target.value)}
              />
              <div>
                <SearchIcon />
              </div>
            </div>
            <div>
              <button className="py-4">Cadastre-se</button>
            </div>
            <div>
              <button className="px-5 py-4 bg-purple-200 rounded-lg">
                Entrar
              </button>
            </div>
          </div>
          <div className="flex gap-3">
            <button
              className="md:hidden"
              onClick={() => {
                setIsActiveSeachBar(!isActiveSeachBar);
                if (burgerMenuState.isActiveBurgerMenu === true) {
                  burgerMenuState.setIsActiveBurgerMenu(false);
                }
              }}
              value={valueSearchBar}
            >
              <SearchIcon />
            </button>
            <div>
              <CartIcon />
            </div>
          </div>
        </div>
        {isActiveSeachBar && (
          <div className="pr-5 flex items-center gap-10 bg-slate-200 rounded-lg md:hidden">
            <input
              className="w-full px-5 py-4 bg-slate-200 rounded-lg"
              type="text"
              placeholder="Pesquisar produto..."
              value={valueSearchBar}
              onChange={(event) => setValueSearchBar(event.target.value)}
            />
            <div>
              <SearchIcon />
            </div>
          </div>
        )}
        <div className="hidden md:flex gap-8">
          <div>
            <button>Home</button>
          </div>
          <div>
            <button>Produtos</button>
          </div>
          <div>
            <button>Categorias</button>
          </div>
          <div>
            <button>Meus pedidos</button>
          </div>
        </div>
      </div>
    </>
  );
}

export { Header };
