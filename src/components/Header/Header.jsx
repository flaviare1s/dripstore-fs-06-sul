import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { useCart } from "../../providers/cart";

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
  const { lineItems } = useCart();
  const [estaLogado, setEstaLogado] = useState(false);

  const [hexColor, setHexColor] = useState("");

  useEffect(() => {
    setHexColor(randomHexColor());
  }, []);

  return (
    <>
      <div className="w-full flex justify-between items-center bg-gray-600 text-white py-4 px-8">
        <a href="/#/"><h2>Header Title</h2></a>
        <Button
          onClick={() => {
            setEstaLogado(!estaLogado);
          }}
        >
          {estaLogado ? "Logout" : "Login"}
        </Button>
        <Button style={{ background: hexColor }}>Carrinho ({lineItems.length})</Button>
      </div>
      <div></div>
    </>
  );
}

export { Header };
