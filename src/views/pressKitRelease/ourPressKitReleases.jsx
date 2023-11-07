// ** react imports
import React from 'react'

// images imports
import img1 from 'src/assets/images/slide3.png'
import img2 from 'src/assets/images/slide1.png'
import img3 from 'src/assets/images/slide3.png'
import img4 from 'src/assets/images/Rectangle 20.png'
import img5 from 'src/assets/images/slide3.png'
import img6 from 'src/assets/images/footer.png'
import Slider from 'react-slick'
import { ReactComponent as ArrowRightIcon } from 'src/assets/icons/Frame.svg'
import HoverCard from './hoverCard'
import { hoverCardData } from './data'

const allImages = [img1, img2, img3, img4, img5, img6]

const OurPressKitReleaseSlider = () => {
  const settings = {
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }
  return (
    <div className='bg-[#181717] pr-0 sm:p-[40] sm:pr-0 md:p-[70] md:pr-0 tablet:p-[120px] tablet:pr-0'>
      <div className='pb-12'>
        <h1 className='text-4xl text-white'>Our press kit releases</h1>
      </div>
      <div>
        <Slider {...settings} arrows centerMode infinite prevArrow={<></>} nextArrow={<NextButton />}>
          {allImages.map((image, index) => (
            <div key={index} className='group w-full sm:w-[600px] h-[500px] px-2 relative'>
              <img className='w-full h-full object-cover ' src={image} alt={`Slide ${index + 1}`} />
              <div className='hover-card text-black absolute bottom-4 left-6 opacity-0 group-hover:opacity-100 transition ease-in-out delay-150 '>
                <HoverCard
                  heading={hoverCardData[index].heading}
                  date={hoverCardData[index].date}
                  description={hoverCardData[index].description}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default OurPressKitReleaseSlider

const NextButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className='rounded-full transition ease-in-out delay-150 p-3 bg-[#ffffff33] text-white  border absolute right-20 top-[50%] '
  >
    <ArrowRightIcon />
  </button>
)
