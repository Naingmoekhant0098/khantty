import React from 'react'
import khantty from '../assets/khantty.jpg';
const About = () => {
    return (
        <div className='section' id='about'>
            <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration={500} data-aos-delay={50} className=' flex mt-28 items-center gap-3'>
                <h3 className='header  text-xl md:text-2xl font-semibold tracking-wider'>About Me</h3>
                {/* <div className=' w-[60%] md:w-96 h-[2px] opacity-15 bg-white'>

                </div> */}
            </div>

            <div className="mt-[40px] md:mt-[50px] flex flex-col md:flex-row  gap-12 md:gap-3 ">
                <div  className=' md:w-[50%] aboutContent text-[14px] md:text-[15px]' style={{ opacity: .6, letterSpacing: '1px', lineHeight: 1.6 }} >
                    <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration={500} data-aos-delay={50}>  Hello! I’m <span>Naing Moe Khant</span>, a full-stack web developer passionate about creating dynamic and user-friendly websites. With a strong foundation in both front-end and back-end languages, I enjoy building seamless applications that provide great user experiences.</p>

                    <p  data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration={500} data-aos-delay={50} className=' mt-3'>
                        I have experience with  HTML, CSS, JavaScript, React, Node.js, Express, MongoDB and others languages, which allows me to handle everything from designing responsive interfaces to managing server-side logic and databases.
                    </p>

                    <p data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration={500} data-aos-delay={50} className=' mt-3'>I believe in the power of clean, efficient code and always strive to improve my skills and stay updated. I love collaborating with others and am always open to new opportunities.</p>
                </div>
                <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration={500} data-aos-delay={50} className=' md:w-[50%]  flex  justify-center'>
                    <div className=' relative'>
                        <img className='w-[250px] md:w-[300px] h-[250px] md:h-[300px]  imageCircle  absolute top-0 left-0  object-cover mx-auto' src={khantty} alt="" />
                        <div className="w-[300px] h-[300px] border-x-gray-600"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About