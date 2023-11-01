import { Link } from 'react-router-dom'
import { DashIcon, MainSectionIcon } from 'src/icons'
import { ArrowConatct } from 'src/icons/arrowContact'
import { MoonIcon } from 'src/icons/moon'
import image1 from '../assets/images/proImg1.png'
import image2 from '../assets/images/proimg2.png'
import image3 from '../assets/images/proImg3.png'
import image4 from '../assets/images/proImg4.png'
import image7 from '../assets/images/proImg7.png'
import ProductionCard from 'src/components/productionCard'

export default function Production() {
  return (
    <div className='bg-[#181717] text-white '>
      <section className='min-h-screen h-full bg-[#181717] px-28'>
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

      <section className='p-10 px-10 md:px-28'>
        <h2 className='text-6xl font-semibold leading-80 tracking-tighter text-left'>Media production</h2>
        <p class='font-Usual text-base font-normal leading-7 tracking-tighter text-left mt-5 max-w-5xl text-[#9E9E9E]'>
          Elevate Your Vision with Exquisite Media Production Envision a world where your ideas come to life with
          unmatched precision and artistic ability. Our media production services are your gateway to a realm of
          creativity and professionalism that knows no bounds. From the initial concept to the final cut, we craft
          captivating visual and auditory experiences that leave a lasting impact.
        </p>
        <div class='grid grid-cols-1 md:grid-cols-2  md:grid-rows-2 gap-4 mt-10 px-5 md:px-28'>
          {data.map(({ headig, subHeading }) => {
            return (
              <div class='bg-[#242323] p-4'>
                <h4 className='font-Usual text-2xl font-semibold leading-10 tracking-tighter text-left'>{headig}</h4>
                {subHeading.map(sub => {
                  return (
                    <p class='font-Usual text-base font-normal leading-5 tracking-tighter text-left text-[#9E9E9E] my-3'>
                      — {sub}
                    </p>
                  )
                })}
                <div className='flex items-center'>
                  <a
                    href='/'
                    class='font-Usual text-base font-semibold leading-6 tracking-tighter text-left underline py-2'
                  >
                    Contact Us
                  </a>
                  <div className='ml-3'>
                    <ArrowConatct />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      <section className=' bg-white py-10 px-10 md:px-28'>
        <div className='flex items-center flex-col'>
          <h2 class=' text-black leading-trim text-cap font-Usual text-6xl font-semibold leading-80 tracking-tight text-center'>
            Media distribution
          </h2>
          <p class='max-w-3xl text-[#747474] text-center font-Usual text-base font-normal leading-7 tracking-tighter'>
            We are all about strategically placing your content where it matters most. Our media distribution service
            will provide you with the keys to unlock an audience that spans the globe. We ensure your content reaches
            its intended destination with precision and impact.
          </p>
        </div>
        <div class='grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 '>
          {data2.map(({ headig, subText }) => {
            return (
              <div class='w-413 h-256 flex-shrink-0 bg-gray-300 py-7 px-8'>
                <h4 className='text-[#181717]  text-xl font-bold leading-9 tracking-tighter'>{headig}</h4>

                <p class='text-[#4D4C4C] font-Usual text-base font-normal leading-7 tracking-tighter mt-10'>
                  {subText}
                </p>
              </div>
            )
          })}
        </div>
        <div class='flex space-x-4 space-y-10 justify-center items-baseline md:justify-between  flex-wrap mt-20'>
          <img src={image1} alt='Company 1 Logo' class='w-15 aspect-w-3 aspect-h-2 object-contain ' />
          <img src={image4} alt='Company 4 Logo' class='w-15 aspect-w-3 aspect-h-2 object-contain ' />
          <img src={image3} alt='Company 3 Logo' class='w-15 aspect-w-3 aspect-h-2 object-contain ' />

          <img src={image7} alt='Company 5 Logo' class='w-15 aspect-w-3 aspect-h-2 object-contain  ' />
          <img src={image2} alt='Company 2 Logo' class='w-15 aspect-w-3 aspect-h-2 object-contain ' />
        </div>
      </section>

      <section className=' py-10 px-10 md:px-28'>
        <div className='flex items-center flex-col'>
          <h2 class=' text-center font-Usual text-5xl font-bold leading-10 tracking-tight'>Media distribution</h2>
        </div>
        <div class='grid  grid-cols-1  sm:grid-cols-2 tablet:grid-cols-4  gap-4'>
          <div class='flex flex-col'>
            <div className='min-h-[330px] my-2'>
              <ProductionCard />
            </div>
            <div className='min-h-[240px] my-2'>
              <ProductionCard />
            </div>
          </div>
          <div class='flex flex-col'>
            <div className='min-h-[240px] my-2'>
              <ProductionCard />
            </div>
            <div className='min-h-[330px] my-2'>
              <ProductionCard />
            </div>
          </div>
          <div class='flex flex-col'>
            <div className='min-h-[330px] my-2'>
              <ProductionCard />
            </div>
            <div className='min-h-[240px] my-2'>
              <ProductionCard />
            </div>
          </div>
          <div class='flex flex-col'>
            <div className='min-h-[240px] my-2'>
              <ProductionCard />
            </div>
            <div className='min-h-[330px] my-2'>
              <ProductionCard />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const data = [
  {
    headig: ' Video production',
    subHeading: [
      'Streaming Services',
      'Social Media Platforms (YouTube, Facebook, Instagram)',
      'Podcast Platforms (Apple Podcasts, Spotify, Google Podcasts)'
    ]
  },
  {
    headig: ' Television and broadcast',
    subHeading: ['Cable and Satellite TV Networks', 'Local and National Broadcast Channels ', 'Satellite Radio']
  },
  {
    headig: 'Film festivals and events',
    subHeading: [
      ' International Film Festivals      ',
      'Regional Film Festivals      ',
      'Film and Media Industry Conventions      '
    ]
  },
  {
    headig: 'Digital advertising and marketing',
    subHeading: ['Programmatic Advertising', 'Social Media Advertising', 'Influencer Collaborations      ']
  }
]

const data2 = [
  {
    headig: 'Leverage latest technologies and trends',
    subText:
      'Strategies that leverage the latest technologies and trends. From broadcast networks to online streaming platforms.'
  },
  {
    headig: 'Connections to deliver your content',
    subText:
      'We have the expertise and connections to deliver your content to the right audience at the right time. Dont let your masterpiece go unnoticed.'
  },
  {
    headig: 'Our world-class media distribution',
    subText:
      'Trust us to give your content the attention and audience it deserves. Elevate your content with our world-class media distribution services.'
  }
]
