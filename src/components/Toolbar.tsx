// react
import React from "react"

interface ToolbarProps {
  searchText: string
  setSearchText: (text: string) => void
}

const Toolbar = ({ searchText, setSearchText }: ToolbarProps) => {
  return (
    <div className="flex pb-8 lg:pb-14 sm:pb-12 gap-2 lg:gap-4">
        <input 
          value={searchText}
          className="w-full lg:w-2/3 p-3 border border-black"
          type="text"
          id="name"
          name="name"
          placeholder="Search for a food..."
          onChange={e => setSearchText(e.target.value)}
        />
        <div className="w-1/2 lg:w-1/6 p-3 border border-black">
          Kind
        </div>
        <div className="w-1/2 lg:w-1/6 p-3 border border-black">
          Season
        </div>
    </div>
  )
}

export default Toolbar