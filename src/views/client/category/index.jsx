import classNames from 'classnames'
import React, { useState } from 'react'
import data from './data'
import './style.css'

const categories = [
  {
    id: 1,
    label: 'All'
  },
  {
    id: 2,
    label: 'Automotive'
  },
  {
    id: 3,
    label: 'Celebrities'
  },
  {
    id: 4,
    label: 'Watches'
  },
  {
    id: 5,
    label: 'Yachts'
  },
  {
    id: 6,
    label: 'Jewelries'
  },
  {
    id: 7,
    label: 'Homes'
  },
  {
    id: 8,
    label: 'Aviation'
  }
]

const Category = () => {
  const [selectedId, setSelectedId] = useState(1)

  const handleTabClick = ({ id }) => {
    setSelectedId(id)
  }

  return (
    <section className='  bg-[#181717] '>
      <div className=' max-w-7xl px-4 py-20 m-auto' data-aos='fade-right' data-aos-duration='800' data-aos-offset='0'>
        <h1 className='text-white text-3xl sm:text-4xl tablet:text-6xl'>Our Categories</h1>
        <div className='flex flex-wrap gap-5 py-5 '>
          {categories.map(({ label, id }) => {
            return (
              <div>
                <button
                  key={label}
                  onClick={handleTabClick.bind(this, { id, label })}
                  className={classNames(
                    'bg-[#242323] text-[#B7B7B7] rounded-[100px] px-8 py-4 hover:bg-white hover:text-black font-usual font-semibold',
                    {
                      'bg-white !text-black': selectedId === id
                    }
                  )}
                >
                  {label}
                </button>
              </div>
            )
          })}
        </div>

        {/* <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-4'>
          {data.map((item, index) => (
            <div key={index} className='col-span-1'>
              <img src={item} alt={`item-${index}`} className='w-full' />
            </div>
          ))}
        </div> */}

        {/* ITS JUST STATIC LAYOUT MAIN MASONRY LAYOUT IS ABOVE COMMENTED CODE  */}

        <div class='grid-container'>
          <div class='item1' data-aos='fade-down' data-aos-duration='800' data-aos-offset='0'>
            {' '}
            <img src={data[0]} alt='item-2' />
          </div>
          <div class='item2' data-aos='fade-right' data-aos-duration='800' data-aos-offset='0'>
            {' '}
            <img src={data[1]} alt='item-2' className='h-full' />
          </div>
          <div class='item3' data-aos='fade-left' data-aos-duration='800' data-aos-offset='0'>
            {' '}
            <img src={data[2]} alt='item-2' />
          </div>
          <div class='item4' data-aos='fade-left' data-aos-duration='800' data-aos-offset='0'>
            {' '}
            <img src={data[3]} alt='item-2' />
          </div>
          <div class='item5' data-aos='fade-up' data-aos-duration='800' data-aos-offset='0'>
            {' '}
            <img src={data[4]} alt='item-2' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Category
