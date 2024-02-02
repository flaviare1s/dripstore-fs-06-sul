import { useParams } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { useEffect, useState } from "react";

function Product() {
  const { id: productId } = useParams();
  const [product, setProduct] = useState(null);

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
      <div>Hello product description: {product?.name}</div>
    </>
  );
}

export default Product;
