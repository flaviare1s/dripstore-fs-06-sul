import { createContext, useContext, useState } from "react";

export const BurgerMenuContext = createContext({
  isActiveBurgerMenu: false,
  setIsActiveBurgerMenu: () => null,
});

export const BurgerMenuProvider = ({ children }) => {
  const [isActiveBurgerMenu, setIsActiveBurgerMenu] = useState(false);

  const setIsActive = (stateBoolean) => {
    setIsActiveBurgerMenu(stateBoolean);
  };

  return (
    <BurgerMenuContext.Provider value={{ isActiveBurgerMenu, setIsActiveBurgerMenu: setIsActive}}>
      {children}
    </BurgerMenuContext.Provider>
  );
};

export const useBurgerMenu = () => {
  const context = useContext(BurgerMenuContext);
  return context;
};
