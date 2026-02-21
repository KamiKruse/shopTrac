import Image from 'next/image'

import loader from '@/assets/loader.gif'

export default function Loader() {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <Image
        src={loader}
        width={150}
        height={150}
        alt='loading dotted spinner'
      />
    </div>
  )
}
