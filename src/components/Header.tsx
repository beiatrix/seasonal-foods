// react
import React from "react"

const Header = () => {
  return (
    <header className="py-4 sm:py-6 lg:py-8">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-limelight font-medium pb-2">
        What's in season right now?
      </h1>
      <h3 className="sm:text-lg lg:text-xl py-2 sm:py-4">
        Today is DATE, so the current season is SEASON
      </h3> 
    </header>
  )
}

export default Header