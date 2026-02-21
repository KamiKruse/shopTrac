'use client'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { NEXT_PUBLIC_APP_NAME } from '@/lib/constants'

export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <Image
        src='/images/logo.svg'
        height={48}
        width={48}
        alt={`${NEXT_PUBLIC_APP_NAME}`}
        priority={true}
      />
      <div className='p-6 rounded-lg shadow-md text-center'>
        <h1 className='font-bold text-2xl mb-4'>Not Found</h1>
        <p className='text-destructive'>Could not find the requested page</p>
        <Button variant={'outline'} onClick={() => (window.location.href = '/')} className='mt-4 ml-2'>
          Back To Home
        </Button>
      </div>
    </div>
  )
}
