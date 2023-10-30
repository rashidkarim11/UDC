import React from 'react'

const Marquee = () => {
  return (
    <div className='overflow-x-hidden relative'>
      <div className='relative animate-marquee inline-flex items-center gap-x-6 overflow-hidden whitespace-nowrap py-4 text-2xl font-bold leading-relaxed text-gray-50'>
        <svg xmlns='http://www.w3.org/2000/svg' width='25' height='24' viewBox='0 0 25 24' fill='none'>
          <path
            d='M12.5 0C12.9244 6.45115 18.28 11.5926 25 12C18.28 12.4074 12.9244 17.5488 12.5 24C12.0757 17.5488 6.71995 12.4074 0 12C6.71995 11.5926 12.0757 6.45115 12.5 0Z'
            fill='#EDECEC'
          />
        </svg>
        <span>Social Media management</span>
        <svg xmlns='http://www.w3.org/2000/svg' width='25' height='24' viewBox='0 0 25 24' fill='none'>
          <path
            d='M12.5 0C12.9244 6.45115 18.28 11.5926 25 12C18.28 12.4074 12.9244 17.5488 12.5 24C12.0757 17.5488 6.71995 12.4074 0 12C6.71995 11.5926 12.0757 6.45115 12.5 0Z'
            fill='#EDECEC'
          />
        </svg>
        <span>Media production</span>
        <svg xmlns='http://www.w3.org/2000/svg' width='25' height='24' viewBox='0 0 25 24' fill='none'>
          <path
            d='M12.5 0C12.9244 6.45115 18.28 11.5926 25 12C18.28 12.4074 12.9244 17.5488 12.5 24C12.0757 17.5488 6.71995 12.4074 0 12C6.71995 11.5926 12.0757 6.45115 12.5 0Z'
            fill='#EDECEC'
          />
        </svg>
        <span>Press kit releases</span>
      </div>
      <div className='absolute animate-marquee2  inline-flex items-center gap-x-6 overflow-hidden whitespace-nowrap py-4 text-2xl font-bold leading-relaxed text-gray-50'>
        <svg xmlns='http://www.w3.org/2000/svg' width='25' height='24' viewBox='0 0 25 24' fill='none'>
          <path
            d='M12.5 0C12.9244 6.45115 18.28 11.5926 25 12C18.28 12.4074 12.9244 17.5488 12.5 24C12.0757 17.5488 6.71995 12.4074 0 12C6.71995 11.5926 12.0757 6.45115 12.5 0Z'
            fill='#EDECEC'
          />
        </svg>
        <span>Social Media management</span>
        <svg xmlns='http://www.w3.org/2000/svg' width='25' height='24' viewBox='0 0 25 24' fill='none'>
          <path
            d='M12.5 0C12.9244 6.45115 18.28 11.5926 25 12C18.28 12.4074 12.9244 17.5488 12.5 24C12.0757 17.5488 6.71995 12.4074 0 12C6.71995 11.5926 12.0757 6.45115 12.5 0Z'
            fill='#EDECEC'
          />
        </svg>
        <span>Media production</span>
        <svg xmlns='http://www.w3.org/2000/svg' width='25' height='24' viewBox='0 0 25 24' fill='none'>
          <path
            d='M12.5 0C12.9244 6.45115 18.28 11.5926 25 12C18.28 12.4074 12.9244 17.5488 12.5 24C12.0757 17.5488 6.71995 12.4074 0 12C6.71995 11.5926 12.0757 6.45115 12.5 0Z'
            fill='#EDECEC'
          />
        </svg>
        <span>Press kit releases</span>
      </div>
    </div>
  )
}

export default Marquee
