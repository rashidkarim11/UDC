import React, { useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ReactComponent as ArrowLeftIcon } from 'src/assets/icons/arrowLeft.svg'
import { ReactComponent as ArrowRightIcon } from 'src/assets/icons/arrowRight.svg'

const SocialCarousel = ({ children }) => {
  const sliderRef = useRef(null)
  const next = () => {
    sliderRef.current.slickNext()
  }
  const previous = () => {
    sliderRef.current.slickPrev()
  }
  return (
    <div className='flex flex-col gap-6'>
      <Slider
        slidesToShow={1}
        slidesToScroll={1}
        customButtonGroup={<ButtonGroup />}
        ref={sliderRef}
        showDots={false} // Disable navigation dots if needed
      >
        {children}
      </Slider>
      <div className='flex gap-2'>
        <Button onClick={previous} className='hover:bg-red-500 w-full'>
          <ArrowLeftIcon />
        </Button>
        <Button onClick={next}>
          <ArrowRightIcon />
        </Button>
      </div>
    </div>
  )
}

export default SocialCarousel

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className='px-5 py-2 rounded-3xl bg-[#EDECEC] hover:bg-[#FF0000]'>
      {children}
    </button>
  )
}

const ButtonGroup = ({ next, previous }) => {
  return (
    <div class='flex '>
      <div
        class='w-50 h-50 bg-[#EDECEC] rounded-3xl'
        onClick={() => {
          previous()
        }}
      >
        <svg width='70' height='70' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <g clip-path='url(#clip0_1117_4401)'>
            <path d='M19 12L5 12' stroke='#181717' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
            <path d='M11 18L5 12' stroke='#181717' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
            <path d='M11 6L5 12' stroke='#181717' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
          </g>
          <defs>
            <clipPath id='clip0_1117_4401'>
              <rect width='24' height='24' fill='white' transform='translate(24) rotate(90)' />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div
        class='ml-5 w-50 h-50 bg-[#EDECEC] rounded-3xl'
        onClick={() => {
          next()
        }}
      >
        <svg width='70' height='70' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <g clip-path='url(#clip0_1117_930)'>
            <path d='M5 12L19 12' stroke='#181717' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
            <path d='M13 18L19 12' stroke='#181717' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
            <path d='M13 6L19 12' stroke='#181717' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
          </g>
          <defs>
            <clipPath id='clip0_1117_930'>
              <rect width='24' height='24' fill='white' transform='matrix(4.37114e-08 1 1 -4.37114e-08 0 0)' />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  )
}
