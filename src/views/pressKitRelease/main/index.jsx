import { MainSectionIcon } from 'src/icons'

export const Main = () => {
  return (
    <section className='min-h-screen h-full relative bg-black'>
      <div className='h-full min-h-screen flex flex-col justify-center max-w-7xl m-auto px-4'>
        <div>
          <div className='max-w-3xl' data-aos='fade-right' data-aos-duration='800' data-aos-offset='0 '>
            <h2 className='font-bold text-6xl sm:text-7xl tablet:text-8xl text-white'>
            Making a lasting impact in the media world
            </h2>
          </div> 
        </div>
      </div>

      <div className='relative max-w-7xl m-auto text-white p-0'>
        <div className='absolute left-0 right-0 bottom-0'>
          <div className='flex justify-between px-4'>
          <p className='max-w-3xl  font-base leading-normal text-lg font-usual'>
          Gain access to a comprehensive media kit that encapsulates everything a journalist or media professional needs to know about your brand.
              </p>
            <div
              className='w-40 h-40 z-50 overflow-hidden'
              data-aos='fade-left'
              data-aos-duration='800'
              data-aos-offset='0'
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
