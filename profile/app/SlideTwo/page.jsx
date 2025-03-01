import React from 'react'
import Image from 'next/image'

function SlideTwo() {
  return (
    <div className='flex justify-center items-center gap-10 bg-[#547E7E]'>
       <div>
          <Image
            src="/img-language.png"
           alt='img language'
           width={500}
           height={500}
          />
       </div>
          <h1 className='w-80 flex'>*"I use the latest technologies and programming languages to create seamless and efficient digital experiences, including HTML, CSS, JavaScript, Next.js, Tailwind CSS, node js, express js git and github to ensure performance and quality."*</h1>
       </div>
  )
}

export default SlideTwo
