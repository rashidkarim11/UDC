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

// const Marque2e = () => {
//   return (
//     <div className='overflow-x-hidden w-full'>
//       <div className='animate-marquee inline-flex items-center gap-x-6 overflow-hidden whitespace-nowrap py-4 text-2xl font-usual leading-relaxed text-gray-50'>
//         <svg xmlns='http://www.w3.org/2000/svg' width='25' height='24' viewBox='0 0 25 24' fill='none'>
//           <path
//             d='M12.5 0C12.9244 6.45115 18.28 11.5926 25 12C18.28 12.4074 12.9244 17.5488 12.5 24C12.0757 17.5488 6.71995 12.4074 0 12C6.71995 11.5926 12.0757 6.45115 12.5 0Z'
//             fill='#EDECEC'
//           />
//         </svg>

//         <span className='font-usual'>Media production</span>
//         <svg xmlns='http://www.w3.org/2000/svg' width='25' height='24' viewBox='0 0 25 24' fill='none'>
//           <path
//             d='M12.5 0C12.9244 6.45115 18.28 11.5926 25 12C18.28 12.4074 12.9244 17.5488 12.5 24C12.0757 17.5488 6.71995 12.4074 0 12C6.71995 11.5926 12.0757 6.45115 12.5 0Z'
//             fill='#EDECEC'
//           />
//         </svg>
//         <span className='font-usual'>Press kit releases</span>
//         <svg xmlns='http://www.w3.org/2000/svg' width='25' height='24' viewBox='0 0 25 24' fill='none'>
//           <path
//             d='M12.5 0C12.9244 6.45115 18.28 11.5926 25 12C18.28 12.4074 12.9244 17.5488 12.5 24C12.0757 17.5488 6.71995 12.4074 0 12C6.71995 11.5926 12.0757 6.45115 12.5 0Z'
//             fill='#EDECEC'
//           />
//         </svg>
//         <span className='font-usual'>Press kit releases</span>
//         <svg xmlns='http://www.w3.org/2000/svg' width='25' height='24' viewBox='0 0 25 24' fill='none'>
//           <path
//             d='M12.5 0C12.9244 6.45115 18.28 11.5926 25 12C18.28 12.4074 12.9244 17.5488 12.5 24C12.0757 17.5488 6.71995 12.4074 0 12C6.71995 11.5926 12.0757 6.45115 12.5 0Z'
//             fill='#EDECEC'
//           />
//         </svg>
//         <span className='font-usual'>Press kit releases</span>
//         <svg xmlns='http://www.w3.org/2000/svg' width='25' height='24' viewBox='0 0 25 24' fill='none'>
//           <path
//             d='M12.5 0C12.9244 6.45115 18.28 11.5926 25 12C18.28 12.4074 12.9244 17.5488 12.5 24C12.0757 17.5488 6.71995 12.4074 0 12C6.71995 11.5926 12.0757 6.45115 12.5 0Z'
//             fill='#EDECEC'
//           />
//         </svg>
//         <span className='font-usual'>Press kit releases</span>
//         <svg xmlns='http://www.w3.org/2000/svg' width='25' height='24' viewBox='0 0 25 24' fill='none'>
//           <path
//             d='M12.5 0C12.9244 6.45115 18.28 11.5926 25 12C18.28 12.4074 12.9244 17.5488 12.5 24C12.0757 17.5488 6.71995 12.4074 0 12C6.71995 11.5926 12.0757 6.45115 12.5 0Z'
//             fill='#EDECEC'
//           />
//         </svg>
//         <span className='font-usual'>Press kit releases</span>
//         <svg xmlns='http://www.w3.org/2000/svg' width='25' height='24' viewBox='0 0 25 24' fill='none'>
//           <path
//             d='M12.5 0C12.9244 6.45115 18.28 11.5926 25 12C18.28 12.4074 12.9244 17.5488 12.5 24C12.0757 17.5488 6.71995 12.4074 0 12C6.71995 11.5926 12.0757 6.45115 12.5 0Z'
//             fill='#EDECEC'
//           />
//         </svg>
//         <span className='font-usual'>Press kit releases</span>
//         <svg xmlns='http://www.w3.org/2000/svg' width='25' height='24' viewBox='0 0 25 24' fill='none'>
//           <path
//             d='M12.5 0C12.9244 6.45115 18.28 11.5926 25 12C18.28 12.4074 12.9244 17.5488 12.5 24C12.0757 17.5488 6.71995 12.4074 0 12C6.71995 11.5926 12.0757 6.45115 12.5 0Z'
//     </div>
//   )
// }

//     </div>
//   )
// }

export default Marquee
