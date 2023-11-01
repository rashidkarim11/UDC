import { Link } from 'react-router-dom'
import { DashIcon, MainSectionIcon } from 'src/icons'
import { MoonIcon } from 'src/icons/moon'

export default function Production() {
  return (
    <div className='bg-[#181717] text-white px-28'>
      <section className='min-h-screen h-full bg-[#181717]'>
        <div className='h-full min-h-screen flex flex-col justify-center max-w-7xl m-auto '>
          <div>
            <div className=' max-w-5xl z-10' data-aos='fade-right' data-aos-duration='800' data-aos-offset='0 '>
              <h2 className='relative font-bold text-6xl sm:text-7xl tablet:text-8xl text-white'>
                <div className='absolute -z-50 -top-20  left-10'>
                  <MoonIcon />
                </div>
                Elevating media through production & distribution
                <div className='absolute -z-50 right-0 bottom-4'>
                  <MoonIcon />
                </div>
              </h2>

              <div className='text-white flex gap-5 items-center mt-10'>
                <p className='font-base leading-normal text-xl font-usual'>
                  Delve into our artful approach to content production and distribution, tailored to convey your message
                  with precision and clarity.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='relative max-w-7xl m-auto'>
          <div className='absolute left-0 right-0 bottom-0'>
            <div
              className='w-40 h-40 z-50 overflow-hidden ml-auto'
              data-aos='fade-left'
              data-aos-duration='800'
              data-aos-offset='0 '
            >
              <span className='inline-block animate-spin-slow'>
                <MainSectionIcon />
              </span>
            </div>
          </div>
        </div>
      </section>
      <div class='bg-[#4D4C4C] text-white p-[1px] w-[90%] mx-auto my-10'></div>

      <section>
        <h2 className='text-6xl font-semibold leading-80 tracking-tighter text-left'>Media production</h2>
        <p class='font-Usual text-base font-normal leading-7 tracking-tighter text-left mt-5 max-w-5xl text-[#9E9E9E]'>
          Elevate Your Vision with Exquisite Media Production Envision a world where your ideas come to life with
          unmatched precision and artistic ability. Our media production services are your gateway to a realm of
          creativity and professionalism that knows no bounds. From the initial concept to the final cut, we craft
          captivating visual and auditory experiences that leave a lasting impact.
        </p>
        <div class='grid grid-cols-2 grid-rows-2 gap-4 mt-10'>
          <div class='bg-[#242323] p-4'>Cell 1</div>
        </div>
      </section>
    </div>
  )
}
