import React from 'react'
import codeImg from '../assets/code.jpg';
import { FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa6';

const Banner = () => {

    return (
        <>
            <div className='flex flex-col md:flex-row   lg:flex-row bannerContainer section' id='home' >
                <div className='w-[100%] md:w-[50%]  mt-36 md:mt-0 lg:mt-0    leftBanner'>
                    <div className='text-4xl md:text-5xl   flex flex-col  font-bold gap-2'>
                        <h3 data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500" style={{ opacity: .9 }}>Hello,</h3>
                        <h3 data-aos="fade-up" data-aos-delay="50" data-aos-easing="ease-in-out" data-aos-duration="500" style={{ opacity: .9 }}>I'm <span className=' text-[#40b4bd] '> Khantty</span>,</h3>
                        <h3 data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease-in-out" data-aos-duration="500" style={{ opacity: .6 }} >Web Developer</h3>
                    </div>
                    <div className='mt-4 w-full md:w-[85%]  text-[14px] md:text-[15px]' style={{ opacity: .6 }} data-aos="fade-up" data-aos-offset="200" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="500" >I'm a passinate developer dedicated to building innovative web design and application.With expertise in various technologies.</div>
                    <div className=' relative mt-6 ' data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500" data-aos-delay="250">
                        <a href="#contact"><div className="border w-[120px] md:w-[150px] h-[50px] flex items-center ease-in-out justify-center  z-10  absolute top-0 left-0  hover:-top-1 hover:-left-1 text-center cursor-pointer  text-[14px] md:text-[16px] font-semibold   border-1 border-[#40b4bd]  text-[#40b4bd] transition-all duration-300   px-6  bg-[#112046]" >Hire Me</div></a>
                        <div className='w-[120px] md:w-[150px] h-[50px] bg-[#40b4bd]'></div>
                    </div>

                </div>
                <div className="w-[100%] md:w-[50%] mt-10 md:mt-0 lg:mt-0  flex items-center justify-center   rightImg rightBanner" data-aos="fade-left" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-duration="500" >
                    <img src={codeImg} alt="not found" className=' w-[450px] object-cover  shadow-lg' />
                </div>
            </div>

            <div className="popUpLine  hidden lg:block fixed left-10 bottom-0" data-aos="fade-in" data-aos-offset="200" data-aos-delay="600" data-aos-easing="ease-in-out" data-aos-duration="500" >
                <div className=" flex items-center flex-col gap-5 ">
                    <div className=' flex flex-col gap-6 text-2xl cursor-pointer  opacity-60' >
                        <a href="https://github.com/Naingmoekhant0098"> <FaGithub className=' transition-all duration-300 ease-in-out hover:text-[#40b4bd]' /></a>
                        <a href="
https://www.facebook.com/profile.php?id=100093284178774&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">  <FaFacebook className=' transition-all duration-300 ease-in-out hover:text-[#40b4bd]' /></a>
                        <a href="
https://www.instagram.com/kei_kazukii?igsh=MTNhNzJsN3dpbDVmbA==" target="_blank" rel="noopener noreferrer">  <FaInstagram className=' transition-all duration-300 ease-in-out hover:text-[#40b4bd]' /></a>
                        <a href="" target="_blank" rel="noopener noreferrer">  <FaTwitter className=' transition-all duration-300 ease-in-out hover:text-[#40b4bd]' /></a>
                    </div>

                    <div className="line w-[2px]  h-32 bg-white opacity-40">

                    </div>
                </div>
            </div>

        </>
    )
}

export default Banner