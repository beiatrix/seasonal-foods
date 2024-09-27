// react
import React from "react"

// images
import fruitImage from "@/images/fruit.svg"
import vegetableImage from "@/images/vegetable.svg"
import winterImage from "@/images/winter.svg"
import springImage from "@/images/spring.svg"
import summerImage from "@/images/summer.svg"
import fallImage from "@/images/fall.svg"
import checkImage from "@/images/check.svg"

// components
import Dropdown from "@/components/Dropdown"

interface ToolbarProps {
  kind: string
  searchText: string
  season: string
  setKind: (text: string) => void
  setSearchText: (text: string) => void
  setSeason: (text: string) => void
}

const Toolbar = ({ 
  kind,
  searchText, 
  season,
  setKind,
  setSearchText,
  setSeason
}: ToolbarProps) => {
  const kindOptions = [
    {
      label: 'Fruit',
      image: fruitImage,
      value: 'fruit'
    }, 
    {
      label: 'Vegetable',
      image: vegetableImage,
      value: 'vegetable'
    },
    {
      label: 'All Kinds',
      image: checkImage,
      value: 'all'
    }
  ]

  const seasonOptions = [
    {
      label: 'Winter',
      image: winterImage,
      value: 'winter'
    },
    {
      label: 'Spring',
      image: springImage,
      value: 'spring'
    },
    {
      label: 'Summer',
      image: summerImage,
      value: 'summer'
    },
    {
      label: 'Fall',
      image: fallImage,
      value: 'fall'
    },
    {
      label: 'All Seasons',
      image: checkImage,
      value: 'all'
    }
  ]

  return (
    <div className="flex flex-col md:flex-row pb-8 lg:pb-14 sm:pb-12 gap-3 lg:gap-4">
      <input 
        value={searchText}
        className="w-full md:w-1/2 lg:w-3/5 2xl:w-2/3 p-3 border border-black focus:outline-none"
        type="text"
        id="name"
        name="name"
        placeholder="Search for a food..."
        onChange={e => setSearchText(e.target.value)}
      />
      <div className="flex gap-3 w-full md:w-1/2 lg:w-2/5 2xl:w-1/3">
        <Dropdown
          label="Kind"
          options={kindOptions}
          selectedOption={kind}
          onSelect={setKind}
        />
        <Dropdown
          label="Season"
          options={seasonOptions}
          selectedOption={season}
          onSelect={setSeason}
        />
      </div>
    </div>
  )
}

export default Toolbar