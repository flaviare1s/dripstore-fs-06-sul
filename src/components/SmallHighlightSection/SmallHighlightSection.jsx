import { SmallHighlightItem } from "./SmallHighlightItem"

export const SmallHighlightSection = ({ title }) => {
  return (
    <div className="font-Inter py-10 bg-gray-50 md:bg-purple-50">
      <div>
        <h1 className="text-dark-gray-2 font-bold md:text-2xl md:text-center px-5">{title}</h1>
      </div>
      <div  className="flex justify-start items-center gap-8 p-5 overflow-x-auto md:justify-center">
        <SmallHighlightItem
          image={"t-shirt-icon-svg.svg"}
          name={'Camisetas'}
        />
        <SmallHighlightItem
          image={"pants-icon-svg.svg"}
          name={'Calças'}
        />
        <SmallHighlightItem
          image={"pants-icon-svg.svg"}
          name={'Bonés'}
        />
        <SmallHighlightItem
          image={"headphone-icon-svg.svg"}
          name={'Headphones'}
        />
        <SmallHighlightItem
          image={"tenis-icon-svg.svg"}
          name={'Tênis'}
        />
      </div>
    </div>
  )
}
