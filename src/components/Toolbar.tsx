// react
import React from "react"

// config
import kindOptions from "@/config/kinds"
import seasonOptions from "@/config/seasons"

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
  return (
    <div className="flex flex-col md:flex-row pb-8 lg:pb-14 sm:pb-12 gap-3 lg:gap-4">
      <input 
        value={searchText}
        className="w-full lg:w-1/2 2xl:w-2/3 p-3 rounded-md bg-white opacity-80 focus:outline-none"
        type="text"
        id="name"
        name="name"
        placeholder="Search for a food..."
        onChange={e => setSearchText(e.target.value)}
      />
      <div className="flex gap-3 w-full lg:w-1/2 2xl:w-1/3">
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