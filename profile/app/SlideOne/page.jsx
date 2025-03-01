import React from 'react'
import Image from 'next/image'

function SlideOne() {
  return (
    <div>
        <div className='flex justify-center items-center gap-10 bg-[#547E7E]'>
            <Image
            src="/my-img.jpg"
            alt="my img"
            width={300}
            height={300}
            className='rounded-full'
            />
            <h1 className='w-80 flex'>Fullstack developer specializing in building scalable and innovative web applications using the latest technologies.</h1>
        </div>
        <div className='m-10 rounded-lg bg-[#ffffff42]'>
            <p className='m-4 text-black'>Hello, I’m Hamza El Ouadi, a passionate and creative Full-Stack developer based in Casablanca, Morocco. I have extensive experience in web development with a deep interest in both design and user experience. I specialize in building comprehensive web applications, from the front end to the back end, focusing on delivering seamless user experiences and high performance. Throughout my career, I’ve had the opportunity to work on a variety of exciting projects, ranging from developing responsive e-commerce websites to creating interactive web applications with full system integration. These experiences have allowed me to refine my skills and stay updated with the latest trends and technologies in Full-Stack Development.
            When I’m not busy coding, I’m immersed in my university studies at the Faculty of Sciences in Ain Chock, Casablanca, where I specialize in Mathematical Physics. I envision becoming a mechanical and energy engineer and a skilled software developer. I’m always excited to take on new challenges and bring innovative ideas to life. Feel free to explore my portfolio to see examples of my work, and if you have any questions or would like to collaborate, don’t hesitate to get in touch.</p>
        </div>
    </div>
  )
}
export default SlideOne
