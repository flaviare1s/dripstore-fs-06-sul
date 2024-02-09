import { useState } from "react";
import { ProductItem } from "../ProductItem/ProductItem";
import { useFetchProducts } from "../../hooks/useFetchProducts";

export const ProductsList = () => {
  const [searchText, setSearchText] = useState("");
  const [searchType, setSearchType] = useState("");

  const products = useFetchProducts(searchText);

  const productsToDisplay = products;
  const totalValue = productsToDisplay.reduce((acc, item) => {
    return acc + +item.price;
  }, 0);
  const totalGorgeous = productsToDisplay.filter((item) => item.type === "Gorgeous").length;

  return (
    <div className="flex">
      <div className="bg-slate-900 text-white px-8 py-4">
        <input
          type="text"
          className="w-full mb-4 text-black"
          placeholder="nome do produto"
          onChange={(ev) => {
            setSearchText(ev.target.value);
          }}
          value={searchText}
        />

        <div>
          <div>Numero de items: ({productsToDisplay.length})</div>
          <div>Valor total de items expostos: ({totalValue})</div>
          <div>total do tipo gorgeous: ({totalGorgeous})</div>

          <button
            className={`mb-4${searchType === "Gorgeous" && " font-bold"}`}
            onClick={() => {
              setSearchType("Gorgeous");
            }}
          >
            Filtrar por Tipo: Gorgeous{" "}
          </button>
          <button
            className={`mb-4${searchType === "Intelligent" && " font-bold"}`}
            onClick={() => {
              setSearchType("Intelligent");
            }}
          >
            Filtrar por Tipo: Intelligent{" "}
          </button>
          <button
            className={`mb-4`}
            onClick={() => {
              setSearchType("");
            }}
          >
            Limpar Filtros
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8 py-4">
        {productsToDisplay.map((product, index) => (
          <ProductItem key={`product-${index}`} product={product} />
        ))}
      </div>
    </div>
  );
};
