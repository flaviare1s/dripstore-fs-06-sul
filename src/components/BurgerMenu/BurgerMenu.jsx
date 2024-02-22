import { useBurgerMenu } from "../../providers/burgerState";

export const BurgerMenu = () => {
  const burgerMenuState = useBurgerMenu();
  return (
    <>
      {burgerMenuState.isActiveBurgerMenu && <div className="h-full flex flex-col bg-red-500 w-4/5 p-7 grow justify-between md:hidden ">
        <div className="flex flex-col">
          <div className="font-bold pb-5">Páginas</div>
          <div className="pt-5 flex flex-col">
            <div>Home</div>
            <div>Produtos</div>
            <div>Categorias</div>
            <div>Meus Pedidos</div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="w-full border-t border-cyan-600 pb-4"></div>
          <div className="rounded-lg bg-slate-300 py-2 px-4 flex justify-center">
            <button>Entrar</button>
          </div>
          <div className="py-2 px-4 flex justify-center">
            <button className="underline">Cadastre-se</button>
          </div>
        </div>
      </div>}
    </>
  );
};
