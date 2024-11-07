import React from 'react'
import { LiaLaptopCodeSolid } from 'react-icons/lia';
import { AiOutlineDatabase } from 'react-icons/ai';
import { FaImages } from 'react-icons/fa6';
const Service = () => {
    return (
        <div className='section' id="service">
            <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration={500} data-aos-delay={50} className=' flex mt-28 items-center gap-3'>
                <h3 className='header text-xl md:text-2xl font-semibold tracking-wider'>What I Provide</h3>
                 
            </div>


            <div className="mt-[40px] md:mt-[50px] grid grid-cols-1 md:grid-cols-3 gap-5">
                <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration={500} data-aos-delay={50} className="bg-[#1a284d]  transition-all duration-300 border border-[#151f3d] hover:bg-[#213057] cursor-pointer p-6 rounded-lg">
                    <div className=' bg-inherit text-5xl ' style={{ opacity: .6 }}>
                        <FaImages />
                    </div>
                    <div className='bg-inherit mt-4 font-semibold tracking-wider text-[18px]'>UI / UX</div>
                    <div className=' bg-inherit mt-3 tracking-wider text-[14px] md:text-[15px] ' style={{ opacity: .6 }}>
                        Specialization in creating clean , artful design that are both intuitive and functional .Skilled in user research , wireframing and prototyping with figma.
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration={500} data-aos-delay={100} className=" bg-[#1a284d]  transition-all duration-300 border border-[#151f3d] hover:bg-[#213057] cursor-pointer  p-6 rounded-lg">
                    <div className=' bg-inherit text-5xl ' style={{ opacity: .6 }}>
                        <LiaLaptopCodeSolid />
                    </div>
                    <div className='bg-inherit mt-4 font-semibold tracking-wider  text-[18px]'>Front-End Development</div>
                    <div className='bg-inherit mt-3 tracking-wider text-[14px] md:text-[15px] ' style={{ opacity: .6 }}>
                    Creating responsive, visually engaging interfaces that provide users with an intuitive, seamless experience across all devices. Ensuring that designs are functional, accessible, and interactive.
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration={500} data-aos-delay={150} className=" bg-[#1a284d]  transition-all duration-300 border border-[#151f3d] hover:bg-[#213057] cursor-pointer p-6 rounded-lg">
                    <div className=' bg-inherit text-5xl ' style={{ opacity: .6 }}>
                        <AiOutlineDatabase />
                    </div>
                    <div className='bg-inherit mt-4 font-semibold tracking-wider text-[18px]'>Back-End Development</div>
                    <div className='bg-inherit mt-3 tracking-wider text-[14px] md:text-[15px] ' style={{ opacity: .6 }}>
                    Building secure, scalable server-side systems and APIs to manage data processing, enable smooth communication and ensuring reliable performance for complex applications."
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Service