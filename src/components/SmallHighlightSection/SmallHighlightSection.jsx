import { SmallHighlightItem } from "../SmallHighlightItem/SmallHighlightItem"
import { TShirtIcon } from "../SmallHighlightIcons/TShirtIcon"
import { PantsIcon } from "../SmallHighlightIcons/PantsIcon"
import { HeadphoneIcon } from "../SmallHighlightIcons/HeadphoneIcon"
import { TenisIcon } from "../SmallHighlightIcons/TenisIcon"

export const SmallHighlightSection = ({ title }) => {
  return (
    <div className="font-Inter py-10 bg-gray-50 md:bg-purple-50">
      <div>
        <h1 className="text-dark-gray-2 font-bold md:text-2xl md:text-center px-5">{title}</h1>
      </div>
      <div  className="flex justify-start items-center gap-8 p-5 overflow-x-auto md:justify-center">
        <SmallHighlightItem
          image={<TShirtIcon />}
          name={'Camisetas'}
        />
        <SmallHighlightItem
          image={<PantsIcon />}
          name={'Calças'}
        />
        <SmallHighlightItem
          image={<PantsIcon />}
          name={'Bonés'}
        />
        <SmallHighlightItem
          image={<HeadphoneIcon />}
          name={'Headphones'}
        />
        <SmallHighlightItem
          image={<TenisIcon />}
          name={'Tênis'}
        />
      </div>
    </div>
  )
}
