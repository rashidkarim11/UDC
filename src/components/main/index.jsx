import { DashIcon, MainSectionIcon } from 'src/icons'

export const Main = () => {
  return (
    <section className='min-h-screen h-full relative main-bg'>
      <div className='h-full min-h-screen flex flex-col justify-center max-w-7xl m-auto px-4'>
        <div>
          <div className='max-w-3xl'>
            <h2 className='font-bold text-6xl sm:text-7xl tablet:text-8xl text-white'>
              Showcase of the finest luxury services
            </h2>

            <div className='text-white flex gap-5 items-center mt-10'>
              <span className='hidden sm:inline-block'>
                <DashIcon />
              </span>

              <p className='font-base leading-normal text-lg font-usual'>
                We specialize in luxury media services, such as media production, media management, media distribution,
                and media press release.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='relative max-w-7xl m-auto'>
        <div className='absolute left-0 right-0 bottom-0'>
          <div className='flex justify-between items-center px-4'>
            <p className='text-white underline cursor-pointer font-usual'>Explore</p>
            <div className='w-40 h-40 z-50 overflow-hidden'>
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
