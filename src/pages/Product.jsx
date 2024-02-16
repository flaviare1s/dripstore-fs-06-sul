import { useParams } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { useEffect, useState } from "react";
import { Button } from "../components/Button/Button";
import { useCart } from "../providers/cart";

function Product() {
  const { id: productId } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart, removeFromCart, isProductInCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      const url = new URL(`https://6597ee73668d248edf23ba81.mockapi.io/Product/${productId}`);
      const res = await fetch(url);
      const product = await res.json();

      if (product === "Not found") {
        setProduct(null);
      } else {
        setProduct(product);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <>
      <Header />
      <div className="w-full p-4 md:p-16 md:grid md:grid-cols-[32.5%_62.5%] md:gap-[5%]">
        <div className="relative pb-[100%] overflow-hidden mb-4">
          <img className="absolute left-0 top-0 w-full object-cover" src={product?.image} />
        </div>
        <div>
          <h1 className="text-4xl mb-4">{product?.name}</h1>
          <div className="flex justify-between items-center mb-4">
            <p>{product?.price}</p>
            <Button
              onClick={() => {
                if (!isProductInCart(product)) {
                  addToCart(product);
                } else {
                  removeFromCart(product);
                }
              }}
            >
              {!isProductInCart(product) ? "Add to Cart" : "Remove from cart"}
            </Button>
          </div>
          <div>{product?.description}</div>
        </div>
      </div>
    </>
  );
}

export default Product;
