import { NEXT_PUBLIC_APP_NAME } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './Menu'

export default function Header() {
  return (
    <header className='border-b'>
      <div className='wrapper flex-between'>
        <div className='flex-start'>
          <Link href='/' className='flex-start'>
            <Image
              src='/images/logo.svg'
              width={48}
              height={48}
              alt={`${NEXT_PUBLIC_APP_NAME} Logo`}
              priority={true}
            />
            <span className='hidden lg:block font-bold text-2xl ml-3'>
              {NEXT_PUBLIC_APP_NAME}
            </span>
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  )
}
