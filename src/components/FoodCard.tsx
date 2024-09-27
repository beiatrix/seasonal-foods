// react
import React from "react"

// types
import { type DocumentData } from "firebase/firestore"

interface FoodCardProps {
  food: DocumentData
}

const FoodCard = ({ food }: FoodCardProps) => {
  return (
    <div className="border border-black p-2">
      <div>{food.name} | {food.kind}</div>
      {food.imageUrl && <img src={food.imageUrl} />}
      {
        food.seasonality.map((season: string, index: number) => (
          <div key={`${food.name}-season-${index}`}>
            • {season}
          </div>
        ))
      }
    </div>
  )
}

export default FoodCard