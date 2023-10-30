import React, { useEffect } from 'react'
import about from './aboutus.png'
import icon from './icon1.png'
import 'aos/dist/aos.css'
export default function AboutUs() {
  return (
    <section className='bg-black text-white flex flex-col gap-y-20 px-10 justify-center tablet:gap-x-20 py-20 tablet:px-20 tablet:flex-row '>
      <div data-aos='fade-right' data-aos-duration='300' data-aos-offset='0 '>
        <img className='tablet:h-[600px] tablet:w-[500px]' src={about} alt='aboutus' />
      </div>
      <div
        data-aos='fade-left'
        data-aos-duration='300'
        data-aos-offset='600'
        className=' flex flex-col pt-20  w-full tablet:w-5/12'
      >
        <div className='flex py-4'>
          <img src={icon} alt='icon' />
          <p className='text-sm'>About UDS Studio</p>
        </div>
        <div>
          <p className='text-2xl tablet:text-6xl font-bold'>We strive for excellence in everything we do</p>
        </div>
        <div className='pt-5 text-justify'>
          <p>
            We are a luxury media company that specializes in the finest media services and expertise. We offer a wide
            range of services, including media production, media management, media distribution, and press releases. We
            also offer a variety of other services to our clients, including yacht rentals, car rentals, jet rentals,
            jewelry sourcing solutions, and many more,
          </p>
          <p className='pt-3'>
            We are committed to providing our clients with the ultimate luxury experience. We believe that luxury is
            more than just about owning expensive things. It is about living a life that is stylish, sophisticated, and
            fulfilling. We are here to help our clients achieve their luxury lifestyle goals. ,
          </p>
        </div>

        <div className='pt-3'>
          <button>conatct Us</button>
        </div>
      </div>
    </section>
  )
}
