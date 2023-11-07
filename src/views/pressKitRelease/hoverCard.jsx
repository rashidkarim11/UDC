// ** icon imports
import { ReactComponent as ArrowIcon } from 'src/assets/icons/arrow90deg.svg'

const HoverCard = ({ heading, date, description }) => {
  return (
    <div className='flex'>
      <div className='w-full sm:w-[350px] h-auto sm:h-[120px] flex flex-col p-2 bg-white'>
        <div className='flex justify-between items-center border-b pb-2'>
          <div className='w-full sm:w-[70%]'>
            <h2>{heading}</h2>
          </div>
          <div>
            <p className='text-xs'> {date}</p>
          </div>
        </div>
        <div className='pt-2'>
          <p className='text-xs '>{description}</p>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <ArrowIcon className='ml-4 rounded-full' />
      </div>
    </div>
  )
}

export default HoverCard
