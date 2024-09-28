// react
import React from "react"
import { FaGithub } from "react-icons/fa"

interface FooterProps {
  currentSeason: string
}

const Footer = ({ currentSeason }: FooterProps) => {
  const backgroundColors = {
    winter: 'bg-winter-accent',
    spring: 'bg-spring-accent',
    summer: 'bg-summer-accent',
    fall: 'bg-fall-accent'
  } as { [key: string]: string }
  const backgroundColor = backgroundColors[currentSeason] || ''
  
  const textColors = {
    winter: 'text-winter',
    spring: 'text-spring',
    summer: 'text-summer',
    fall: 'text-fall'
  } as { [key: string]: string }
  const textColor = textColors[currentSeason] || ''

  return (
    <div className={`flex px-4 py-6 justify-between ${backgroundColor} ${textColor}`}>
      <div className="flex">
          <a
            href="https://github.com/beiatrix/seasonal-foods" 
            target="_blank"
          >
            <FaGithub className="text-2xl me-2" />
          </a>
        built by&nbsp;
          <a 
            className="underline"
            href="https://github.com/beiatrix" 
            target="_blank"
          >
            beiatrix
          </a>
      </div>
      <div>
        source |&nbsp;
        <a
          className="underline"
          href="https://snaped.fns.usda.gov/resources/nutrition-education-materials/seasonal-produce-guide"
          target="_blank"
        >
          USDA
        </a>
      </div>
    </div>
  )
}

export default Footer