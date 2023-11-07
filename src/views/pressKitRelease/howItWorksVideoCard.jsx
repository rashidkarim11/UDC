import React from 'react'
import image from 'src/assets/images/socialVideo.png'

const HowItWorksVideoCard = () => {
  return (
    <div className='bg-[#242323] border border-[#ffffff26] h-[100%] p-9 rounded-[10px]  grid gap-4 '>
      <div className=' grid gap-2'>
        <h1 className='text-5xl text-white'>How it works</h1>
        <p className='text-base text-white'>We build and scale brand pages utilizing already famous influencers.</p>
      </div>
      <div className='h-[450px]'>
        <img src={image} alt='video' className='w-[100%] h-[100%] object-contain' />
      </div>
    </div>
  )
}

export default HowItWorksVideoCard
