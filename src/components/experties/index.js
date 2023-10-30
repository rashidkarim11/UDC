// ** data imports
import { expertiesData } from './data'

// ** components imports
import ExpertiesCard from './expertiesCard'

// ** svg imports
import vector from 'src/assets/icons/Vector.svg'

const ExpertiesSection = () => {
  return (
    <section className='max-w-7xl px-4 py-10 m-auto'>
      <div className='flex items-center' data-aos='fade-right' data-aos-duration='800' data-aos-offset='0 '>
        <div>
          <img src={vector} alt='Hover Icon' className='hover-icon' />
        </div>
        <div>
          <p className='text-2xl pl-2'>Our Experties</p>
        </div>
      </div>
      <h1
        class='font-bold text-2xl sm:text-3xl tablet:text-5xl'
        data-aos='fade-right'
        data-aos-duration='800'
        data-aos-offset='0 '
      >
        We specialize in Luxury media services
      </h1>

      <div
        className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-[25px]'
        data-aos='fade-up'
        data-aos-duration='800'
        data-aos-offset='600 '
      >
        {expertiesData?.map((data, index) => (
          <ExpertiesCard
            key={index}
            defaultIcon={data.defaultIcon}
            hoverIcon={data.hoverIcon}
            heading={data.heading}
            description={data.description}
          />
        ))}
      </div>
    </section>
  )
}

export default ExpertiesSection
