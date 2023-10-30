import Crosule from '../crosule'

import image1 from './img1.png'
import image2 from './img2.png'
import image3 from './img3.jpg'
import { useState } from 'react'

const data = [
  {
    image: image1,
    quote:
      "l'm really happy with the vhresult that UDS Studio produce and find it easy to keep it up to date. Duis aute irure dolor in reprehenderit in voluptvhate velit esse cillum dolore eu fugiat nulla pariatur.",
    name: 'James Bond',
    compnay: 'CEO of the JB Gates'
  },
  {
    image: image2,
    quote: 'The only way to do great work is to love what you do.',
    name: 'Rashid Karim',
    compnay: 'E Shpereds Technoloiges'
  },
  {
    image: image3,
    quote:
      'This quote emphasizes the importance of self-awareness and self-knowledge as a fundamental step toward gaining wisdom and understanding. Aristotle works have had a profound influence on Western philosophy and continue to be studied and respected to this day.',
    name: 'Aristotle',
    compnay: 'E Shpereds Technoloiges'
  }
]

const ClientsSec = () => {
  const [selectedClient, setSelectedClient] = useState(0)
  return (
    <div class='max-w-7xl m-auto px-4 py-[100px]'>
      <div class='flex items-center'>
        <svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M14 7C10.2368 7.23765 7.23764 10.2368 7 14C6.76235 10.2368 3.7632 7.23765 1.60137e-06 7C3.7632 6.76236 6.76235 3.76317 7 -3.0598e-07C7.23764 3.76317 10.2368 6.76236 14 7Z'
            fill='#4D4C4C'
          />
        </svg>
        <div class='ml-2   text-base font-normal leading-26 tracking-tighter text-left'>What Our Clients Say</div>
      </div>

      <div class='max-w-xl my-3  text-4xl font-extrabold leading-72 tracking-tight text-left'>
        We deliver impactful, lasting results that exceed all expectations
      </div>

      <div class='grid grid-cols-3  min-h-[60vh]'>
        <div class='md:col-span-2  col-span-3 flex justify-between'>
          <div class='flex flex-col justify-between'>
            <div class='relative '>
              <div class='px-3 z-10 max-w-sm font-usual text-xl font-semibold leading-34 tracking-tighter text-left mt-10'>
                {data[selectedClient]?.quote}
              </div>

              <div class='absolute -top-8 z-4'>
                <svg width='122' height='122' viewBox='0 0 122 122' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <g opacity='0.05'>
                    <path
                      d='M93.5321 106.133C109.255 106.133 122 93.3838 122 77.6558C122 61.9333 109.255 49.1843 93.5321 49.1843C93.5321 49.1843 93.6698 38.6065 102.263 23.3823C103.218 20.3318 101.516 17.0833 98.4638 16.1342C96.298 15.453 94.0191 16.1152 92.5475 17.6566C72.788 39.2687 65.0534 64.7048 65.0534 77.6558C65.0534 93.3838 77.7986 106.133 93.5321 106.133Z'
                      fill='#181717'
                    />
                    <path
                      d='M28.4788 106.133C44.2014 106.133 56.9468 93.3836 56.9468 77.6558C56.9468 61.9333 44.2014 49.1843 28.4788 49.1843C28.4788 49.1843 28.6166 38.6065 37.2099 23.3823C38.1645 20.3318 36.4627 17.0833 33.4105 16.1342C31.2448 15.453 28.9659 16.1152 27.4945 17.6566C7.73479 39.2687 -5.72205e-05 64.7048 -5.72205e-05 77.6558C-5.72205e-05 93.3838 12.7454 106.133 28.4788 106.133Z'
                      fill='#181717'
                    />
                  </g>
                </svg>
              </div>
              <div class='absolute  -bottom-20 right-0 z-4'>
                <svg width='122' height='122' viewBox='0 0 122 122' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <g opacity='0.05'>
                    <path
                      d='M28.4679 15.8672C12.7454 15.8672 0 28.6162 0 44.3442C0 60.0667 12.7454 72.8157 28.4679 72.8157C28.4679 72.8157 28.3302 83.3935 19.7368 98.6177C18.7823 101.668 20.4838 104.917 23.5362 105.866C25.702 106.547 27.9809 105.885 29.4525 104.343C49.212 82.7313 56.9466 57.2952 56.9466 44.3442C56.9466 28.6162 44.2014 15.8672 28.4679 15.8672Z'
                      fill='#181717'
                    />
                    <path
                      d='M93.5212 15.8672C77.7986 15.8672 65.0532 28.6164 65.0532 44.3442C65.0532 60.0667 77.7986 72.8157 93.5212 72.8157C93.5212 72.8157 93.3834 83.3935 84.7901 98.6177C83.8355 101.668 85.5373 104.917 88.5895 105.866C90.7552 106.547 93.0341 105.885 94.5055 104.343C114.265 82.7313 122 57.2952 122 44.3442C122 28.6162 109.255 15.8672 93.5212 15.8672Z'
                      fill='#181717'
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div>
              <h4 class='text-base font-semibold font-usual leading-5 tracking-tighter text-left'>
                {data[selectedClient]?.name}
              </h4>
              <p class=' text-base font-normal font-usual leading-4'> {data[selectedClient]?.compnay}</p>
            </div>
          </div>
          <div>
            <img src={data[selectedClient]?.image} alt='man' class='max-h-[60vh] min-h-[60vh] min-w-full' />
          </div>
        </div>
        <div class='md:col-span-1 md:mt-0 col-span-3 mt-10 '>
          <Crosule data={data} setSelectedClient={setSelectedClient} />
        </div>
      </div>
    </div>
  )
}

export default ClientsSec
