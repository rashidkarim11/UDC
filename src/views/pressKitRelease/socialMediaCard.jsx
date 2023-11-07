import React from 'react'
import image from 'src/assets/images/gary.png'
import { ReactComponent as TiktokIcon } from 'src/assets/icons/tiktok.svg'
import { ReactComponent as FbIcon } from 'src/assets/icons/fb.svg'
import { ReactComponent as InstaIcon } from 'src/assets/icons/insta.svg'
import { ReactComponent as YoutubeIcon } from 'src/assets/icons/youtube.svg'

const SocialMediaCard = ({ name, description, plateform, followers }) => {
  return (
    <div className='rounded-[10px] mx-1 bg-[#EDECEC]'>
      <div className='grid grid-cols-[1fr_1.2fr]'>
        <div className='w-fit'>
          <img src={image} alt='slider-img' className='width-[100%] h-[100%] object-cover' />
        </div>
        <div className='p-6 flex flex-col '>
          <div className='h-[100%] grid grid-rows-[3fr_1fr] divide-y-2 divide-[#00000033]'>
            <div className='flex flex-col justify-around'>
              <div>
                <h2 className='text-4xl font-bold'>{name}</h2>
                <p className='text-[#4D4C4C] text-[15px] font-normal'>{description}</p>
              </div>
              <div>
                <h3 className='text-2xl  font-semibold'>{plateform}</h3>
                <p className=' font-normal text-lg'>{followers} Followers</p>
              </div>
            </div>
            <div className='flex gap-3 pt-4 '>
              <TiktokIcon />
              <FbIcon />
              <InstaIcon />
              <YoutubeIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialMediaCard
