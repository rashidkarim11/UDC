import React from 'react'
import Marquee from 'src/components/marquee'
import footer from 'src/assets/images/footer.png'
import 'aos/dist/aos.css'
import { ArrowIcon, FacebookIcon, InstagramIcon, Twitter, TwitterIcon } from 'src/icons'

const Footer = () => {
  return (
    <>
      <div className='w-full min-h-[520px] bg-alpha py-10'>
        <div className='pt-[100px]' data-aos='fade-down' data-aos-duration='800' data-aos-offset='0 '>
          <p className='text-white text-4xl text-center font-bold tablet:text-7xl font-usual'>Let’s work together </p>
        </div>
        <div className='relative min-h-[280px]' data-aos='fade-down' data-aos-duration='800' data-aos-offset='0 '>
          <div className='w-full mb-10'>
            <div className='bg-gradient-to-b from-cdark-normal to-cdark-light rounded mt-20 overflow-hidden'>
              <div className='h-28 md:px-5 px-1 relative flex'>
                <Marquee className='animate-move-top top-[25px]' />
                <Marquee className='animate-move-bottom top-[25px]' />
              </div>
            </div>
          </div>

          <div className='absolute top-[-50%] inset-0 flex items-center justify-center z-50'>
            <div className='w-[180px] h-[180px]'>
              <img src={footer} alt='img' width='100%' height='100%' />
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-between flex-wrap gap-2 px-6 py-4'>
        <div className='flex items-baseline'>
          <ArrowIcon />
          <p className='font-usual'>Back Top</p>
        </div>
        <div className='font-usual'>All rights reserved by UDS Studio</div>
        <div className='flex gap-5 items-center'>
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </div>
      </div>
    </>
  )
}

export default Footer
