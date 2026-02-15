import { NEXT_PUBLIC_APP_NAME } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='border-t flex-center text-sm space-x-1'>
      <div className='p-5 '>
        {' '}
        {currentYear} {NEXT_PUBLIC_APP_NAME}.
      </div>
      <span className='text-xs'>All Rights Reserved</span>
    </footer>
  )
}
