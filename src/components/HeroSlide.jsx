
export const HeroSlide = () => {
  return (
    <div className='font-Inter w-full flex flex-col md:flex-row justify-center items-center p-5'>
      <div>
        <img src="white-sneakers.png" alt="White Sneakers" />
      </div>
      <div className='flex flex-col items-center'>
        <p className='font-bold text-sm text-[#C92071] text-center leading-[22px]'>Melhores ofertas personalizadas</p>
        <h1 className='text-[40px] font-extrabold text-center text-[#1F1F1F] leading-[50px]'>Queima de estoque Nike 🔥 </h1>
        <p className='text-[#474747] text-sm font-medium leading-[22px] text-center'>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
        <button className='bg-[#C92071] text-[#F5F5F5] text-base font-bold leading-6 w-full rounded-md py-3'>Ver Ofertas</button>
      </div>
    </div>
  )
}

