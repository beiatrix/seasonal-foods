// react
import React from "react"

// utils
import { format } from 'date-fns'

// config
import seasonOptions from "@/config/seasons"

interface HeaderProps {
  date: Date
  currentSeason: string
}

const Header = ({ date, currentSeason }: HeaderProps) => {
  const today = format(date, 'MMMM d, y')
  const foundSeason = seasonOptions.find((seasonOption) => {
    return seasonOption.value === currentSeason
  })

  const seasonLabel = currentSeason
    ? foundSeason?.label
    : 'N/A :('

  const seasonImage = currentSeason
    ? foundSeason?.image
    : ''

  function getTextColor () {
    return currentSeason === 'winter'
      ? 'text-gray-200'
      : 'text-gray-700'
  }

  const accentColors = {
    winter: 'text-winter-accent',
    spring: 'text-spring-accent',
    summer: 'text-summer-accent',
    fall: 'text-fall-accent'
  } as { [key: string]: string }
  const accentColor = accentColors[currentSeason] || ''

  return (
    <header className={`py-4 sm:py-6 lg:py-8 ${accentColor}`}>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-limelight font-semibold pb-2">
        What's in season right now?
      </h1>
      <h3 className={`sm:text-lg lg:text-xl ${getTextColor()} py-2 sm:py-4`}>
        Today is&nbsp;
        <span className={`font-bold text-lg sm:text-xl lg:text-2xl ${accentColor}`}>
          { today }
        </span>,
        so the current season is&nbsp;
        <span className={`font-bold text-lg sm:text-xl lg:text-2xl capitalize ${accentColor}`}>
          <span>{ seasonLabel }</span>
          { seasonImage && (
              <span>
                <img className="h-6 ms-1 inline-block" src={seasonImage} /> 
              </span>
            )
          }
        </span>
      </h3> 
    </header>
  )
}

export default Header