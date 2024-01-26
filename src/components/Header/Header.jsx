import { useEffect, useState } from "react";
import { Button } from "../Button/Button";

// hooks: use
// useState
// useEffect

function Header() {
  const [estaLogado, setEstaLogado] = useState(false);

  useEffect(() => {
    setEstaLogado(true);
  }, []);

  return (
    <>
      <div className="w-full flex justify-between items-center bg-gray-600 text-white py-4 px-8">
        <h2>Header Title</h2>
        <Button
          onClick={() => {
            setEstaLogado(!estaLogado);
          }}
        >
          {estaLogado ? "Logout" : "Login"}
        </Button>
        <Button onClick={() => console.log("Somar mais um ao contador")}>Contador</Button>
        <div>0</div>
      </div>
      <div></div>
    </>
  );
}

export { Header };
