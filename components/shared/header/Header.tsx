import { NEXT_PUBLIC_APP_NAME } from '@/lib/constants'
import { ShoppingCart, UserIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../../ui/button'

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
        <div className='space-x-2'>
          <Button asChild variant='ghost'>
            <Link href='/cart'>
              <ShoppingCart /> Cart
            </Link>
          </Button>
          <Button asChild>
            <Link href='/sign-in'>
              <UserIcon /> Sign In
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
