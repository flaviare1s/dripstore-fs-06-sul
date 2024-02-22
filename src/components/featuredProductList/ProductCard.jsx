export const ProductCard = ({ product, ...rest }) => {
    return (
      <a href={`/#/product/${product.id}`}>
        <div className="font-Inter" {...rest}> <img className="bg-white" src='k-swiss.png' alt="Product Image" />  
         <span className="text-[#8F8F8F] font-bold text-xs leading-6">{product.type}</span> 
         <br /> 
         <span className="text-[#474747] font-medium md:font-normal text-sm md:text-2xl">{product.name}</span> 
         <br /> 
         <span className="text-[#1F1F1F] font-normal mr-3 text-base md:text-2xl line-through opacity-30">${product.price}</span>
         <span className="text-[#1F1F1F] font-bold text-base md:text-2xl">${product.price / 2}</span>
        </div>
      </a>
    )
  }