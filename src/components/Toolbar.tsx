// react
import React from "react"

const Toolbar = () => {
  return (
    <div className="flex pb-8 sm:pb-12 gap-2 lg:gap-4">
        <div className="w-full lg:w-2/3 p-3 border border-black">
          Name
        </div>
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