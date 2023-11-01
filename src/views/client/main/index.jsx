import { MainSectionIcon } from 'src/icons'
import client1 from 'src/assets/images/client-1.png'
import client2 from 'src/assets/images/client-2.png'
import { MoonIcon } from 'src/icons/moon'

export const Main = () => {
  return (
    <section className='min-h-screen h-full relative bg-[#181717] '>
      <div className='h-full min-h-screen flex flex-col justify-start  max-w-7xl m-auto px-4'>
        <div>
          <div className='max-w-5xl' data-aos='fade-right' data-aos-duration='800' data-aos-offset='0'>
            <h2 className='relative font-bold text-6xl sm:text-7xl mt-[1.2em] tablet:text-9xl text-white'>
              <div className='invisible tablet:visible tablet:absolute tablet:-z-50 tablet:-top-10  tablet:left-40 '>
                <MoonIcon />
              </div>
              A snapshot of our portfolio
              <div className='invisible tablet:visible tablet:absolute tablet:z-50 tablet:right-60 tablet:bottom-4'>
                <MoonIcon />
              </div>
            </h2>

            <div className='flex relative'>
              <img src={client1} alt='client 1' />
              <div
                className='absolute right-0 bottom-0 -z-10  '
                data-aos='fade-up'
                data-aos-duration='800'
                data-aos-delay='300'
              >
                <img src={client2} alt='client 2' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' max-w-6xl m-auto  '>
        <div className='absolute right-0 bottom-0 tablet:right-32 tablet:top-1/2 sm:bottom-0 sm:right-0'>
          <div className='flex justify-end items-center px-4'>
            <div
              className='w-40 h-40 z-50 overflow-hidden'
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
      </div>
    </section>
  )
}
