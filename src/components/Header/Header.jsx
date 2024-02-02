import { useState } from "react";
import { Button } from "../Button/Button";

function randomHexColor() {
  // Generate random RGB values
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  // Convert RGB to hex
  var hexColor =
    "#" + red.toString(16).padStart(2, "0") + green.toString(16).padStart(2, "0") + blue.toString(16).padStart(2, "0");

  return hexColor;
}

function Header() {
  const [estaLogado, setEstaLogado] = useState(false);
  const [contador, setContador] = useState(0);

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
        <Button style={{ background: randomHexColor() }} onClick={() => setContador(contador + 1)}>
          Contador
        </Button>
        <div>{contador}</div>
      </div>
      <div></div>
    </>
  );
}

export { Header };
