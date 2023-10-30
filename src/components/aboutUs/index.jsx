import React from 'react'
import about from 'src/assets/aboutus.png'
import icon from 'src/assets/icon1.png'

import arrow from 'src/assets/icons/arrow1.svg'
export default function AboutUs() {
  return (
    <section className='bg-alpha text-white overflow-hidden'>
      <div className='max-w-7xl m-auto px-4 py-10'>
        <div className='grid grid-cols-12 gap-10'>
          <div className='col-span-12 tablet:col-span-6'>
            <div className='flex justify-center items-center h-full'>
              <div data-aos='fade-right' data-aos-duration='300' data-aos-offset='0 '>
                <img className='max-h-[600px] max-w-[500px] w-full m-full' src={about} alt='aboutus' />
              </div>
            </div>
          </div>

          <div className='col-span-12 tablet:col-span-6'>
            <div data-aos='fade-left' data-aos-duration='300' data-aos-offset='600' className='flex flex-col pt-20'>
              <div className='flex py-4'>
                <img src={icon} alt='icon' />
                <p className='text-sm'>About UDS Studio</p>
              </div>
              <div>
                <p className='text-2xl tablet:text-6xl font-bold'>We strive for excellence in everything we do</p>
              </div>
              <div className='pt-5 text-justify'>
                <p>
                  We are a luxury media company that specializes in the finest media services and expertise. We offer a
                  wide range of services, including media production, media management, media distribution, and press
                  releases. We also offer a variety of other services to our clients, including yacht rentals, car
                  rentals, jet rentals, jewelry sourcing solutions, and many more,
                </p>
                <p className='pt-3'>
                  We are committed to providing our clients with the ultimate luxury experience. We believe that luxury
                  is more than just about owning expensive things. It is about living a life that is stylish,
                  sophisticated, and fulfilling. We are here to help our clients achieve their luxury lifestyle goals. ,
                </p>
              </div>

              <div className='pt-3'>
                <button className='primary-button flex gap-x-1   '>
                  <p className='p-1'>conatct Us</p> <img src={arrow} alt='icon' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
