import React from 'react'
import Image from 'next/image'

function SlideThree() {
  return (
    <div>
        <div className='flex justify-center bg-[#547E7E]'>
            <Image
            src="/projects.png"
            alt='img for page projects'
            width={500}
            height={400}
            />
        </div>
   </div>
  )
}

export default SlideThree
