export const HeroSlide = ({eyebrown, titulo, descricao, ctaText, ctaLink, imagem}) => {
  return (
    <div className='font-Inter w-full flex flex-col md:flex-row-reverse justify-center items-center md:items-start px-5 md:pt-[78px] md:pl-[100px] md:pr-[37px]'>
      <div className="md:w-[60%]">
        <img className="absolute right-0 pt-5 md:hidden" src="hero-pattern-mobile.png" alt="Hero Pattern Mobile" />
        <img className="hidden md:absolute md:right-[37px] md:top-[78px] md:block" src="hero-pattern-desktop.png" alt="Hero Pattern Mobile" />
        <img className="rotate-2 w-[287px] md:w-[733px]" src={imagem} alt="White Sneakers" />
      </div>
      <div className='flex flex-col items-center md:items-start md:w-[40%]'>
        <p className='font-bold text-sm md:text-base text-[#C92071] md:text-[#F6AA1C] text-center md:text-left leading-[22px]'>{eyebrown}</p>
        <h1 className='text-[40px] md:text-[64px] md:leading-[66px] font-extrabold text-center md:text-left text-[#1F1F1F] leading-[50px] pt-2.5 pb-5'>{titulo}</h1>
        <p className='text-[#474747] text-sm md:text-lg font-medium leading-[22px] text-center md:text-left'>{descricao}</p>
        <a href={ctaLink} className='bg-[#C92071] text-[#F5F5F5] text-base text-center p-3 font-bold leading-6 w-full h-12 mb-10 md:w-[220px] rounded-md mt-10'>{ctaText}</a>
      </div>
    </div>
  )
}

