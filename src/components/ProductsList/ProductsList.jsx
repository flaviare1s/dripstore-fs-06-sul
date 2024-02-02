import { useEffect, useState } from "react";
import { ProductItem } from "../ProductItem/ProductItem";

export const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://6597ee73668d248edf23ba81.mockapi.io/Product");
      const products = await res.json();

      setProducts(products);
    };

    fetchProducts();
  }, []);

  console.log('products', products);

  return (
    <div className="flex">
      <div className="bg-slate-900 text-white px-8 py-4">
        <input type="text" className="w-full mb-4 text-black" />

        <div>
          <button className="mb-4">Filtrar por Tipo: Gorgeous </button>
          <button className="mb-4">Filtrar por Tipo: Intelligent </button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8 py-4">
        {products.map((product, index) => (
          <ProductItem key={`product-${index}`} product={product} />
        ))}
      </div>
    </div>
  );
};
