// react
import React, { useState, useRef, useEffect } from "react"
import { LuChevronDown } from "react-icons/lu"

// types
import { Option } from "@/types/option"

interface DropdownProps {
  label: string
  options: Option[]
  selectedOption: string 
  onSelect: (text: string) => void
}

const Dropdown = (
  { label, options, selectedOption, onSelect }: DropdownProps
) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const foundOption = options.find(option => option.value === selectedOption)

  return (
    <div ref={dropdownRef} className="w-1/2 p-3 border border-black relative inline-block text-left">
      <div className="text-xs mb-1 text-gray-700">{ label }</div>
      <button
        onClick={toggleDropdown}
        className="w-full flex align-middle justify-between"
      >
        <div>
          { selectedOption && foundOption 
            ? (
              <div className="flex">
                <img className="h-6 me-2" src={foundOption.image} />
                <div>{foundOption.label}</div>
              </div>
            )
            : label 
          }
        </div>
        <LuChevronDown className="mt-1" />
      </button>

      <div
        className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transform transition-all duration-200 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          {
            options.map(option => (
              <a 
                key={`${label}-option-${option.value}`}
                href="#" 
                className="block px-4 py-3 text-gray-700 hover:bg-gray-100 flex" 
                role="menuitem"
                onClick={() => onSelect(option.value)}
              >
                <img className="h-6 me-2" src={option.image} />
                <div>{option.label}</div>
              </a>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Dropdown