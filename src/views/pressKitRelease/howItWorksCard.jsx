import React from 'react'
import { ReactComponent as ArrowRightIcon } from 'src/assets/icons/Frame.svg'

const HowItWorksCard = ({ heading, description, icon: Icon, num }) => {
  return (
    <div className='group transition ease-in-out delay-150 bg-[#1d1d1d] p-6 cursor-pointer rounded-[10px] hover:bg-white '>
      <div className='grid gap-6'>
        <div className='flex justify-between items-center'>
          <div>
            <div className='bg-[#2f2f2f] transition ease-in-out delay-150 p-4 border border-[#ffffff21] rounded-xl group-hover:bg-black'>
              <Icon />
            </div>
          </div>
          <div>
            <p className='text-5xl text-[#343434]'>
              <span style={{ WebkitTextStroke: '2px #343434', WebkitTextFillColor: '#1d1d1d' }}>0</span>
              {num}
            </p>
          </div>
        </div>
        <div className='text-white grid gap-2 transition ease-in-out delay-150 group-hover:text-black'>
          <div>
            <p className='text-2xl '>{heading}</p>
          </div>
          <div className='min-h-[80px]'>
            <p className='text-base transition ease-out delay-150 group-hover:text-[#747474]'>{description}</p>
          </div>
        </div>
        <div>
          <button className='rounded-full transition ease-in-out delay-150 p-3 bg-[#2f2f2f] text-white  group-hover:bg-black'>
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

export default HowItWorksCard
