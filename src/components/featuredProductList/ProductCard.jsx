export const ProductCard = ({ product, ...rest }) => {
  return (
    <a href={`/#/product/${product.id}`}>
      <div className="font-Inter" {...rest}>
        <div className="relative  overflow-hidden pb-[100%]">
          <p className="absolute bg-yellow-300 z-10 top-5 left-5 w-[30%] rounded-[30px] text-center text-xs font-bold py-1">30% OFF</p>
          <img className="bg-white absolute top-0 left-0 h-full" src='k-swiss.png' alt="Product Image" />
        </div>
        <p className="text-[#8F8F8F] font-bold text-xs leading-6">{product.type}</p>
        <p className="text-[#474747] font-medium md:font-normal text-sm md:text-2xl">{product.name}</p>
        <div className="flex">
          <p className="text-[#1F1F1F] font-normal mr-3 text-base md:text-2xl line-through opacity-30">${parseInt(product.price)}</p>
          <p className="text-[#1F1F1F] font-bold text-base md:text-2xl">${(product.price / 2).toFixed()}</p>
        </div>
      </div>
    </a>
  )
}