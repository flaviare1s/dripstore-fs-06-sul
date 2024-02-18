export const SideBySide = ({image, eyebrown, title, description, ctaLink, ctaText}) => {
  return (
    <div className='font-Inter flex flex-col justify-center gap-16 m-auto md:grid md:grid-cols-2 pt-10 pl-8 pr-[42px] md:pt-[106px] md:pb-[106px] md:pl-[59px] items-center'>
        <div className='bg-pattern-side bg-cover bg-no-repeat md:grid col-span-1 flex flex-col justify-center items-center m-auto w-[90%]'>
            <img className='pt-10' src={image} alt="Sneakers" />   
        </div>
        <div className='flex flex-col justify-start md:grid col-span-1 lg:pr-[159px]'>
            <div>
                <p className='text-[#F6AA1C] md:text-[#C92071] text-sm font-bold text-left tracking-[.75px]'>{eyebrown}</p>
                <h1 className='text-[#474747] font-bold text-[28px] md:text-5xl leading-9 md:leading-[50px] pt-2.5 tracking-[2px] md:tracking-[1px]'>{title}</h1>
                <p className='text-[#474747] font-medium text-sm md:text-base leading-[22px] md:leading-7 pt-5 pb-7 tracking-[.25px] md:tracking-[.75px]'>{description}</p>
                <a className='bg-[#C92071] text-[#F5F5F5] text-base text-center p-2 font-bold leading-6 block w-[200px] h-10 mb-[50px] rounded-lg tracking-[.75px]' href={ctaLink}>{ctaText}</a>
            </div>
        </div>
    </div>
  )
}
