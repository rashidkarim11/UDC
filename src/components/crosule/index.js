import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

const Crosule = ({ data, setSelectedClient }) => {
  return (
    <Carousel
      arrows={false}
      customButtonGroup={<ButtonGroup setSelectedClient={setSelectedClient} />}
      responsive={responsive}
      containerClass='flex flex-col justify-between ml-4'
      itemClass='min-w-[300px] min-h-[60vh] mx-1  '
      infinite={true}
    >
      {data?.map(({ image }) => {
        return <img src={image} alt='clientImage' style={{ minWidth: '100%', maxHeight: '70%', margin: '0px 10px' }} />
      })}
    </Carousel>
  )
}

export default Crosule

const ButtonGroup = ({ next, previous, goToSlide, setSelectedClient, ...rest }) => {
  const {
    carouselState: { currentSlide }
  } = rest

  return (
    <div class='flex '>
      <div
        class='w-50 h-50 bg-[#EDECEC]'
        onClick={() => {
          previous()
          setSelectedClient(currentSlide - 1)
        }}
      >
        <svg width='70' height='70' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <g clip-path='url(#clip0_1117_4401)'>
            <path d='M19 12L5 12' stroke='#181717' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
            <path d='M11 18L5 12' stroke='#181717' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
            <path d='M11 6L5 12' stroke='#181717' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
          </g>
          <defs>
            <clipPath id='clip0_1117_4401'>
              <rect width='24' height='24' fill='white' transform='translate(24) rotate(90)' />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div
        class='ml-5 w-50 h-50 bg-[#EDECEC]'
        onClick={() => {
          next()
          setSelectedClient(currentSlide - 1)
        }}
      >
        <svg width='70' height='70' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <g clip-path='url(#clip0_1117_930)'>
            <path d='M5 12L19 12' stroke='#181717' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
            <path d='M13 18L19 12' stroke='#181717' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
            <path d='M13 6L19 12' stroke='#181717' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
          </g>
          <defs>
            <clipPath id='clip0_1117_930'>
              <rect width='24' height='24' fill='white' transform='matrix(4.37114e-08 1 1 -4.37114e-08 0 0)' />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  )
}
