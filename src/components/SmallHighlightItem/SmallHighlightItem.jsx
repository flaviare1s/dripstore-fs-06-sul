import { TShirtIcon } from "../SmallHighlightIcons/TShirtIcon"

export const SmallHighlightItem = ({image, name}) => {
  return (
    <div>
        <a href="#">
          <div className="flex flex-col justify-center items-center">
            <div className="bg-white p-5 rounded-full shadow">
              <div className="min-w-[56px] aspect-square">{image}</div>
            </div>
            <p className="text-dark-gray-2 text-xs md:text:sm font-bold leading-[22px] mt-3">{name}</p>
          </div>
        </a>
      </div>
  )
}
