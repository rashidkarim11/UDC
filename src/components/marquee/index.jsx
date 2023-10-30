import React from 'react'
import classnames from 'classnames'
import { StarIcon } from 'src/icons'

export const Marquee = ({ className }) => {
  return (
    <div
      className={classnames(
        'flex overflow-hidden space-x-6 md:space-x-12 absolute top-0 left-0 items-center px-6',
        className
      )}
    >
      <div className='h-16 text-white gap-3 whitespace-nowrap flex items-center justify-center'>
        <StarIcon />
        <span className='font-usual'>Social Media management</span>
      </div>
      <div className='h-16 text-white gap-3 whitespace-nowrap flex items-center justify-center'>
        <StarIcon />
        <span className='font-usual'>Social Media management</span>
      </div>
      <div className='h-16 text-white gap-3 whitespace-nowrap flex items-center justify-center'>
        <StarIcon />
        <span className='font-usual'>Social Media management</span>
      </div>
      <div className='h-16 text-white gap-3 whitespace-nowrap flex items-center justify-center'>
        <StarIcon />
        <span className='font-usual'>Social Media management</span>
      </div>
      <div className='h-16 text-white gap-3 whitespace-nowrap flex items-center justify-center'>
        <StarIcon />
        <span className='font-usual'>Social Media management</span>
      </div>
      <div className='h-16 text-white gap-3 whitespace-nowrap flex items-center justify-center'>
        <StarIcon />
        <span className='font-usual'>Social Media management</span>
      </div>
    </div>
  )
}
