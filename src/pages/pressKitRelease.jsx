import React, { useState } from 'react'
import { Header } from 'src/components/header'
import { Main } from 'src/views/pressKitRelease/main'
import { GuardWrapper } from 'src/layouts/guardWrapper'
import img1 from 'src/assets/images/image 1.png'
import img2 from 'src/assets/images/img2.png'
import PressKitReleaseSec from 'src/views/pressKitRelease/presskitReleases'
import OurPressKitReleaseSlider from 'src/views/pressKitRelease/ourPressKitReleases'
import HoverCard from 'src/views/pressKitRelease/hoverCard'
import SocialMediaManagement from 'src/views/pressKitRelease/socialMediaManagment'
import HowItWorksSection from 'src/views/pressKitRelease/howItWorksSection'

export default function PressKitRelease(props) {
  const [hoveredImage, setHoveredImage] = useState(null)

  const handleMouseEnter = image => {
    setHoveredImage(image)
  }

  const handleMouseLeave = () => {
    setHoveredImage(null)
  }

  return (
    <GuardWrapper {...props}>
      <div className='bg-[#181717] overflow-hidden'>
        <Header />
        <Main />
        <div className='w-full p-[15px] sm:p-[40] md:p-[70] tablet:p-[120px]'>
          <div className='w-full flex justify-start'>
            <div onMouseEnter={() => handleMouseEnter('img1')} onMouseLeave={handleMouseLeave}>
              <img src={img1} alt='car' />
            </div>
            {hoveredImage === 'img1' && (
              <div className='m-auto'>
                <HoverCard
                  heading='The self made veko modern car show'
                  date='20 september 2023'
                  description='Analyze performance metrics to make informed marketing decisions and optimize strategies.'
                />
              </div>
            )}
          </div>
          <div className='w-full flex justify-end mt-4'>
            {hoveredImage === 'img2' && (
              <div className='m-auto'>
                <HoverCard
                  heading='The self made veko modern car show'
                  date='20 september 2023'
                  description='Analyze performance metrics to make informed marketing decisions and optimize strategies.'
                />
              </div>
            )}
            <div onMouseEnter={() => handleMouseEnter('img2')} onMouseLeave={handleMouseLeave}>
              <img src={img2} alt='car' />
            </div>
          </div>
        </div>
        <PressKitReleaseSec />
      </div>
      <div>
        <OurPressKitReleaseSlider />
      </div>
      <div>
        <SocialMediaManagement />
      </div>
      <div>
        <HowItWorksSection />
      </div>
    </GuardWrapper>
  )
}
