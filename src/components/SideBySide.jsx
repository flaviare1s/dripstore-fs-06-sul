import React from 'react'

export const SideBySide = ({image, eyebrown, title, description, ctaLink, ctaText}) => {
  return (
    <div className='flex flex-col justify-start gap-16 m-auto md:grid md:grid-cols-2 pt-10 pl-8 pr-[42px]'>
        <div className='bg-pattern-side bg-cover bg-no-repeat md:grid col-span-1 flex flex-col justify-center items-center m-auto'>
            <img className='pt-5' src={image} alt="Sneakers" />   
        </div>
        <div className='flex flex-col justify-start md:grid col-span-1'>
            <div>
                <p className='text-[#F6AA1C] md:text-[#C92071] text-sm font-bold text-left'>{eyebrown}</p>
                <h1 className='text-[#474747] font-bold text-[28px] md:text-5xl leading-9 md:leading-[50px]'>{title}</h1>
                <p className='text-[#474747] text-sm md:text-base leading-[22px] md:leading-7 py-5'>{description}</p>
                <a className='bg-[#C92071] text-[#F5F5F5] text-base text-center p-3 font-bold leading-6 w-[200px] h-10 mb-10 rounded' href={ctaLink}>{ctaText}</a>
            </div>
        </div>
    </div>
  )
}
