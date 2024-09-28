// react
import React from "react"

// types
import { type DocumentData } from "firebase/firestore"

// config
import seasonOptions from "@/config/seasons"

interface FoodCardProps {
  food: DocumentData
}

const FoodCard = ({ food }: FoodCardProps) => {
  function getSeasonImage (season: string) {
    return seasonOptions.find((seasonOption) => {
      return seasonOption.value === season
    })?.image || ''
  }

  return (
    <div className="rounded-md bg-neutral bg-opacity-50 flex flex-col justify-between">
      {/* Image Section */}
      <div className="pt-3 pb-5 px-5 h-2/3">
        {food.imageUrl && <img src={food.imageUrl} />}
      </div>

      {/* Label Section */}
      <div className="bg-neutral rounded-b-md h-1/3 p-1 flex flex-col justify-center">
        {/* Food Name */}
        <div className="text-center text-gray-800 tracking-wide font-bold m-1">
          {food.name}
        </div>

        {/* Seasonality Icons */}
        <div className="flex justify-center">
          {food.seasonality.map((season: string, index: number) => (
            <div className="w-1/6 p-1" key={`${food.name}-season-${index}`}>
              <img src={getSeasonImage(season)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FoodCard