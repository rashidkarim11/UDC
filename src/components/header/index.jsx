import { Link } from 'react-router-dom'
import { MenuIcon } from 'src/icons'

export const Header = () => {
  return (
    <header
      className='max-w-7xl m-auto relative bg-transparent z-10'
      data-aos='fade-down'
      data-aos-duration='800'
      data-aos-offset='0 '
    >
      <div className='absolute left-0 right-0'>
        <div className='pt-6 px-4'>
          <div className='flex justify-between items-center'>
            <Link to='/' className='font-bold tracking-tight leading-normal text-2xl tablet:text-3xl text-white'>
              UDS Studio
            </Link>

            <button>
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
