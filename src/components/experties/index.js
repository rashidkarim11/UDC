// ** data imports
import { expertiesData } from './data'

// ** components imports
import ExpertiesCard from './expertiesCard'

// ** svg imports
import vector from 'src/assets/icons/Vector.svg'

const ExpertiesSection = () => {
  return (
    <section className='max-w-7xl px-4 py-10 m-auto'>
      <div className='flex items-center'>
        <div>
          <img src={vector} alt='Hover Icon' className='hover-icon' />
        </div>
        <div>
          <p className='text-2xl pl-2'>Our Experties</p>
        </div>
      </div>
      <h1 class='font-bold text-2xl sm:text-3xl tablet:text-5xl'>We specialize in Luxury media services</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-[25px]'>
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
