export const ProductItem = ({ product, ...rest }) => {
  return (
    <a href={`/product/${product.id}`}>
      <div className="border-[1px] border-black rounded-md p-2" {...rest}>
        <div className="relative pb-[100%] mb-2">
          <img className="absolute w-full object-cover left-0 top-0" src={product.image} />
        </div>
        <div>
          <div className="mb-2">{product.name}</div>
          <div className="mb-2">{product.price}</div>
        </div>
      </div>
    </a>
  );
};
