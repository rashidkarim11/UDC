import { Icon } from '@iconify/react'

export default function Spinner() {
  return (
    <div className='min-h-screen flex-col gap-2 flex items-center justify-center'>
      {/* @dev add logo here */}
      <Icon className='w-14 h-14 animate-spin' icon='fluent:spinner-ios-16-filled' />
    </div>
  )
}
