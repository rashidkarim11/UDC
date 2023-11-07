import SocialCarousel from './carousel'
import { sliderData } from './data'
import SocialMediaCard from './socialMediaCard'
import image from 'src/assets/images/socialVideo.png'

const SocialMediaManagement = () => {
  return (
    <section className='bg-white text-black p-[15px] sm:p-[40] md:p-[70] tablet:p-[120px]'>
      <div>
        <p className='text-2xl'>Social Media Management</p>
        <h2 className='  font-bold text-6xl sm:text-7xl tablet:text-8xl  '>
          We Generate <br /> Billions of Views
        </h2>
        <p className='text-[50px] text-xs sm:text-xl md:text-2xl tablet:text-3xl text-justify mt-3'>
          Imagine you had an army of editors posting unique clips across all social media platforms daily to grow your
          personal brand.
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 items-center py-4 '>
        <div>
          <img src={image} alt='video' className='object-contain h-[80vh]' />
        </div>

        <div className='md:mt-4'>
          <SocialCarousel>
            {sliderData?.map((item, index) => (
              <div key={index}>
                <SocialMediaCard {...item} />
              </div>
            ))}
          </SocialCarousel>
        </div>
      </div>
    </section>
  )
}
export default SocialMediaManagement
