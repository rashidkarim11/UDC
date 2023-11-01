import React from 'react'
import { InstagramIcon } from 'src/icons'
import EmailIcon, { EmailIconInput } from 'src/icons/email'
import HumanIcon from 'src/icons/man'
import { PhoneIcon, PhoneIconInput } from 'src/icons/phone'
import Input from 'src/views/input'
const Contact = () => {
  return (
    <div className=' flex flex-col gap-y-20 justify-evenly tablet:flex-row tablet:w-8/12 m-auto '>
      <section className='flex flex-col  items-center tablet:items-start min-w-max'>
        <h1 className='text-white text-5xl font-bold'>Contact us</h1>
        <p className='text-gray-400 text-center max-w-xs py-5 tablet:text-left'>
          If you have any questions, please don’t hesitate to get in touch via the form, email, or phone.
        </p>

        <div className=' flex flex-col gap-y-10'>
          <div className='flex flex-col gap-y-3 contact-layout py-8 px-10'>
            <div className='text-white flex gap-x-3  '>
              <PhoneIcon />
              <p className='text-lg'>phone</p>
            </div>
            <div className='text-beta'>+1 346 7889 436</div>
          </div>
          <div className='flex flex-col gap-y-3 contact-layout py-8 px-10  '>
            <div className='text-white flex gap-x-3 '>
              <EmailIcon />
              <p className='text-lg'>Email</p>
            </div>
            <div className='text-beta'>support@USDstudio.com</div>
          </div>
          <div className='flex flex-col gap-y-3 contact-layout py-8 px-10  '>
            <div className='text-white flex gap-x-3 '>
              <InstagramIcon />
              <p className='text-lg'>Instagram</p>
            </div>
            <div className='text-beta'>@udsstudio</div>
          </div>
        </div>
      </section>
      <section className='contact-layout flex flex-col p-5 mx-5 tablet:mx-0'>
        <div className='text-white text-xl font-semibold'>
          <h1>Let’s work together</h1>
        </div>

        <div className='flex flex-col pt-10  '>
          <div className='flex flex-col gap-y-2 py-3'>
            <p className='text-white text-sm'>Full Name</p>
            <div className='flex gap-x-3 input-layout  '>
              <HumanIcon />
              <Input placeholder='Enter your full name...' />
            </div>
          </div>
          <div className='flex flex-col gap-y-2 py-3'>
            <p className='text-white text-sm'>Email</p>
            <div className='flex gap-x-3 input-layout'>
              <EmailIconInput />
              <Input placeholder='Enter your email address...' />
            </div>
          </div>
          <div className='flex flex-col gap-y-2 py-3'>
            <p className='text-white text-sm'>Phone Number (Optional)</p>
            <div className='flex gap-x-3 input-layout'>
              <PhoneIconInput />
              <Input placeholder='Enter your phone number...' />
            </div>
          </div>
          <div className='flex flex-col gap-y-2 py-3'>
            <p className='text-white text-sm'>Message</p>
            <div className=' input-layout'>
              <textarea
                rows={5}
                resize='none'
                className=' w-full bg-transparent outline-none text-gray-400 font-light'
                placeholder='Let us know about yourself....'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Contact
