import React, { useState } from 'react'
import arrow from 'src/assets/icons/arrow.svg'

const ExpertiesCard = ({ defaultIcon, hoverIcon, heading, description }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const defaultIconStyle = {
    display: isHovered ? 'none' : 'inline-block'
  }

  const hoverIconStyle = {
    display: isHovered ? 'inline-block' : 'none'
  }

  const headingStyle = {
    color: isHovered ? '#ffffff' : '#181717'
  }
  const descriptionStyle = {
    color: isHovered ? '#B7B7B7' : '#4D4C4C'
  }

  return (
    <div
      className='flex flex-col justify-around p-10 bg-[#e3e3e3] hover:bg-[#181717] hover:text-white text-black cursor-pointer'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='flex justify-between'>
        <div style={defaultIconStyle}>
          <img src={defaultIcon} alt='Default Icon' className='default-icon' />
        </div>
        <div style={hoverIconStyle}>
          <img src={hoverIcon} alt='Hover Icon' className='hover-icon' />
        </div>
        <div style={hoverIconStyle}>
          <img src={arrow} alt='Hover Icon' className='hover-icon' />
        </div>
      </div>
      <div className='mt-5'>
        <h1 className='text-3xl font-bold' style={headingStyle}>
          {heading}
        </h1>
      </div>
      <div className='mt-3  '>
        <p className='text-[18px]' style={descriptionStyle}>
          {description}
        </p>
      </div>
    </div>
  )
}

export default ExpertiesCard
