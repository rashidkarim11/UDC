import React from 'react'
import avaImage from '../../assets/images/avatarPro.png'

export const ProductionCard = () => {
  const stars = [1, 3, 3, 3, 3]
  return (
    <div class={`bg-[#242323] w-305 px-4 py-8 my-2 min-h-full`}>
      <div class='flex flex-col items-start gap-15'>
        <div class='flex items-center gap-2'>
          <div class='w-50 h-50 rounded-full overflow-hidden'>
            <img src={avaImage} alt='User Avatar' />
          </div>
          <div class='flex flex-col justify-center items-start gap-1'>
            <p class='text-foundation-dark-d-0 text-white font-Usual text-base font-semibold leading-normal uppercase'>
              Amado Copper
            </p>
            <div class='text-foundation-dark-d-80 text-gray-600 font-Usual text-sm italic font-normal leading-normal uppercase'>
              23 may, 2023
            </div>
          </div>
        </div>
        <div className='flex gap-3 mt-7'>
          {stars.map(() => {
            return (
              <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='none'>
                <rect width='18' height='18' rx='1' fill='#FFA800' />
                <path
                  d='M7.29346 6.71711L4.38978 7.11366L4.33835 7.12352C4.26049 7.14299 4.18952 7.18157 4.13267 7.23532C4.07583 7.28908 4.03515 7.35609 4.01478 7.4295C3.99442 7.50291 3.99511 7.58009 4.01677 7.65317C4.03843 7.72625 4.0803 7.7926 4.13809 7.84545L6.24167 9.77419L5.74559 12.4986L5.73967 12.5458C5.7349 12.6216 5.75162 12.6973 5.78812 12.765C5.82461 12.8328 5.87957 12.8902 5.94736 12.9314C6.01515 12.9726 6.09334 12.996 6.17392 12.9994C6.25451 13.0027 6.33459 12.9858 6.40597 12.9505L9.0029 11.6643L11.5939 12.9505L11.6394 12.9702C11.7146 12.998 11.7962 13.0066 11.876 12.9949C11.9558 12.9833 12.0308 12.9518 12.0935 12.9038C12.1561 12.8558 12.204 12.793 12.2324 12.7218C12.2607 12.6506 12.2684 12.5736 12.2548 12.4986L11.7582 9.77419L13.8627 7.84503L13.8982 7.80859C13.9489 7.74975 13.9822 7.67931 13.9946 7.60444C14.007 7.52956 13.9981 7.45292 13.9688 7.38234C13.9395 7.31175 13.8909 7.24974 13.8279 7.20262C13.7649 7.1555 13.6897 7.12495 13.6101 7.11409L10.7064 6.71711L9.40842 4.2392C9.37086 4.16741 9.31271 4.10695 9.24056 4.06468C9.16841 4.02241 9.08514 4 9.00017 4C8.9152 4 8.83193 4.02241 8.75978 4.06468C8.68763 4.10695 8.62948 4.16741 8.59193 4.2392L7.29346 6.71711Z'
                  fill='white'
                />
              </svg>
            )
          })}
        </div>
      </div>

      <div class='text-foundation-dark-d-60 text-gray-400 font-Usual text-base font-normal leading-6 uppercase mt-8'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </div>
    </div>
  )
}

export default ProductionCard
