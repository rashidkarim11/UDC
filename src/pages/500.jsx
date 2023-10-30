import { Link } from 'react-router-dom'

export default function Error500() {
  return (
    <div className='flex items-center justify-center min-h-screen p-5'>
      <div className='w-90vw md:w-auto'>
        <h4 className='text-2xl mb-2'>Internal server error :(</h4>
        <p className='mb-6 text-gray-500'>Oops, something went wrong!</p>
        <Link to='/' className='block'>
          <button className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'>Back to Home</button>
        </Link>
      </div>

      {/* <img
        className='max-w-full mt-4'
        src={`/images/pages/page-misc-error-${theme.palette.mode}.png`} // Ensure theme.palette.mode is available
        alt='error-illustration'
        width='500'
      /> */}
    </div>
  )
}
