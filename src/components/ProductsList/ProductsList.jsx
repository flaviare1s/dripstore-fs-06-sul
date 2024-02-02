import { useEffect, useState } from "react";
import { ProductItem } from "../ProductItem/ProductItem";
import { useDebounce } from "../../hooks/useDebounce";

export const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchType, setSearchType] = useState("");

  const debouncedSearchText = useDebounce(searchText, 300);

  useEffect(() => {
    const fetchProducts = async () => {
      const url = new URL("https://6597ee73668d248edf23ba81.mockapi.io/Product");
      url.searchParams.append("search", debouncedSearchText);
      const res = await fetch(url);
      const products = await res.json();
      console.log(products);
      if (products === "Not found") {
        setProducts([]);
      } else {
        setProducts(products);
      }
    };

    fetchProducts();
  }, [debouncedSearchText]);

  const productsToDisplay = products;

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
