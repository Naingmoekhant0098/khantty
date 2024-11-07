import React from 'react'
import js from '../assets/js.png';
import jquery from '../assets/jquery.png';
import tailwind from '../assets/tailwind.png';
import bootstrap from '../assets/bootstrap.png';
import node from '../assets/node.png';
import react from '../assets/react.png';
import php from '../assets/php.png';
import laravel from '../assets/laravel.png';
import figma from '../assets/figma.png';
import mongo from '../assets/mongo.png';
import sql from '../assets/sql.png';
import ProgressBar from "@ramonak/react-progress-bar";
const Skill = () => {
    return (
        <div className='section' id='skills'>
            <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration={500} data-aos-delay={50} className=' flex mt-28 items-center gap-3'>
                <h3 className='header text-xl md:text-2xl font-semibold tracking-wider'>Skills</h3>
                 
            </div>


            <div className="mt-[40px] md:mt-[50px] grid grid-cols-2 md:grid-cols-5 gap-5">

                <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration={500} data-aos-delay={50} className='  bg-[#1a284d] group  transition-all duration-300 border border-[#151f3d] hover:bg-[#213057] cursor-pointer p-2 md:p-6 rounded-lg flex items-center flex-col gap-1'>
                    <div className=' h-24 flex  items-center justify-center '>
                        <img src={js} alt="" className=' w-20  h-20  object-contain' />
                    </div>
                    <div className='text-[16px] font-semibold tracking-wider opacity-70 group-hover:opacity-100 transition-all duration-300' >
                        Javascript
                    </div>
                    <div className='  opacity-0 transition-all duration-500  group-hover:opacity-100'>
                        <div className='  transition-all duration-300 mt-1 flex gap-2 items-center'>
                            <ProgressBar
                                completed={60}
                                className=" w-20 md:w-24 "
                                height='6px'
                                labelSize='12px'
                                animateOnRender={true}
                                isLabelVisible={false}

                            />
                            <span className=' text-[14px] opacity-70  font-semibold'>60%</span>

                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration={500} data-aos-delay={100} className="bg-[#1a284d] group  transition-all duration-300 border border-[#151f3d] hover:bg-[#213057] cursor-pointer p-2 md:p-6 rounded-lg flex items-center flex-col gap-1">
                    <div className=' h-24 flex  items-center justify-center '>
                        <img src={jquery} alt="" className=' w-20  object-cover' />
                    </div>
                    <div className=' font-semibold tracking-wider opacity-70 group-hover:opacity-100 transition-all duration-300' >
                        Jquery
                    </div>
                    <div className='  opacity-0 transition-all duration-500  group-hover:opacity-100'>
                        <div className='  transition-all duration-300 mt-1 flex gap-2 items-center'>
                            <ProgressBar
                                completed={50}
                                className=" w-20 md:w-24 "
                                height='6px'
                                labelSize='12px'
                                animateOnRender={true}
                                isLabelVisible={false}

                            />
                            <span className=' text-[14px] opacity-70  font-semibold'>50%</span>

                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration={500} data-aos-delay={150} className="bg-[#1a284d] group  transition-all duration-300 border border-[#151f3d] hover:bg-[#213057] cursor-pointer p-2 md:p-6 rounded-lg flex items-center flex-col gap-1">
                    <div className=' h-24 flex  items-center justify-center '>
                        <img src={tailwind} alt="" className=' w-20  object-cover' />
                    </div>
                    <div className=' font-semibold tracking-wider opacity-70 group-hover:opacity-100 transition-all duration-300' >
                        Tailwind
                    </div>
                    <div className='  opacity-0 transition-all duration-500  group-hover:opacity-100'>
                        <div className='  transition-all duration-300 mt-1 flex gap-2 items-center'>
                            <ProgressBar
                                completed={70}
                                className=" w-20 md:w-24 "
                                height='6px'
                                labelSize='12px'
                                animateOnRender={true}
                                isLabelVisible={false}

                            />
                            <span className=' text-[14px] opacity-70  font-semibold'>70%</span>

                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration={500} data-aos-delay={200} className="bg-[#1a284d] group  transition-all duration-300 border border-[#151f3d] hover:bg-[#213057] cursor-pointer p-2 md:p-6 rounded-lg flex items-center flex-col gap-1">
                    <div className=' h-24 flex  items-center justify-center '>
                        <img src={bootstrap} alt="" className=' w-20  object-cover' />
                    </div>
                    <div className=' font-semibold tracking-wider opacity-70 group-hover:opacity-100 transition-all duration-300' >
                        Bootstrap
                    </div>
                    <div className='  opacity-0 transition-all duration-500  group-hover:opacity-100'>
                        <div className='  transition-all duration-300 mt-1 flex gap-2 items-center'>
                            <ProgressBar
                                completed={70}
                                className=" w-20 md:w-24 "
                                height='6px'
                                labelSize='12px'
                                animateOnRender={true}
                                isLabelVisible={false}

                            />
                            <span className=' text-[14px] opacity-70  font-semibold'>70%</span>

                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration={500} data-aos-delay={250} className="bg-[#1a284d] group  transition-all duration-300 border border-[#151f3d] hover:bg-[#213057] cursor-pointer p-2 md:p-6 rounded-lg flex items-center flex-col gap-1">
                    <div className=' h-24 flex  items-center justify-center '>
                        <img src={node} alt="" className=' w-20  object-cover' />
                    </div>
                    <div className=' font-semibold tracking-wider opacity-70 group-hover:opacity-100 transition-all duration-300' >
                        NodeJs
                    </div>
                    <div className='  opacity-0 transition-all duration-500  group-hover:opacity-100'>
                        <div className='  transition-all duration-300 mt-1 flex gap-2 items-center'>
                            <ProgressBar
                                completed={60}
                                className=" w-20 md:w-24 "
                                height='6px'
                                labelSize='12px'
                                animateOnRender={true}
                                isLabelVisible={false}

                            />
                            <span className=' text-[14px] opacity-70  font-semibold'>60%</span>

                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration={500} data-aos-delay={300} className="bg-[#1a284d]  transition-all group duration-300 border border-[#151f3d] hover:bg-[#213057] cursor-pointer p-2 md:p-6 rounded-lg flex items-center flex-col gap-1">
                    <div className=' h-24 flex  items-center justify-center '>
                        <img src={react} alt="" className=' w-20  object-cover' />
                    </div>
                    <div className=' font-semibold tracking-wider opacity-70 group-hover:opacity-100 transition-all duration-300' >
                        ReactJs
                    </div>
                    <div className='  opacity-0 transition-all duration-500  group-hover:opacity-100'>
                        <div className='  transition-all duration-300 mt-1 flex gap-2 items-center'>
                            <ProgressBar
                                completed={70}
                                className=" w-20 md:w-24 "
                                height='6px'
                                labelSize='12px'
                                animateOnRender={true}
                                isLabelVisible={false}

                            />
                            <span className=' text-[14px] opacity-70  font-semibold'>70%</span>

                        </div>
                    </div>
                </div>


                <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration={500} data-aos-delay={350} className="bg-[#1a284d] group  transition-all duration-300 border border-[#151f3d] hover:bg-[#213057] cursor-pointer p-2 md:p-6 rounded-lg flex items-center flex-col gap-1">
                    <div className=' h-24 flex  items-center justify-center '>
                        <img src={php} alt="" className=' w-20  object-cover' />
                    </div>
                    <div className=' font-semibold tracking-wider opacity-70 group-hover:opacity-100 transition-all duration-300' >
                        PHP
                    </div>
                    <div className='  opacity-0 transition-all duration-500  group-hover:opacity-100'>
                        <div className='  transition-all duration-300 mt-1 flex gap-2 items-center'>
                            <ProgressBar
                                completed={70}
                                className=" w-20 md:w-24 "
                                height='6px'
                                labelSize='12px'
                                animateOnRender={true}
                                isLabelVisible={false}

                            />
                            <span className=' text-[14px] opacity-70  font-semibold'>70%</span>

                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration={500} data-aos-delay={400} className="bg-[#1a284d] group  transition-all duration-300 border border-[#151f3d] hover:bg-[#213057] cursor-pointer p-2 md:p-6 rounded-lg flex items-center flex-col gap-1">
                    <div className=' h-24 flex  items-center justify-center '>
                        <img src={laravel} alt="" className=' w-20  object-cover' />
                    </div>
                    <div className=' font-semibold tracking-wider opacity-70 group-hover:opacity-100 transition-all duration-300' >
                        Laravel
                    </div>
                    <div className='  opacity-0 transition-all duration-500  group-hover:opacity-100'>
                        <div className='  transition-all duration-300 mt-1 flex gap-2 items-center'>
                            <ProgressBar
                                completed={70}
                                className=" w-20 md:w-24 "
                                height='6px'
                                labelSize='12px'
                                animateOnRender={true}
                                isLabelVisible={false}

                            />
                            <span className=' text-[14px] opacity-70  font-semibold'>70%</span>

                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration={500} data-aos-delay={450} className="bg-[#1a284d]  transition-all group duration-300 border border-[#151f3d] hover:bg-[#213057] cursor-pointer p-2 md:p-6 rounded-lg flex items-center flex-col gap-1">
                    <div className=' h-24 flex  items-center justify-center '>
                        <img src={figma} alt="" className=' w-20  object-cover' />
                    </div>
                    <div className=' font-semibold tracking-wider opacity-70 group-hover:opacity-100 transition-all duration-300' >
                        Figma
                    </div>
                    <div className='  opacity-0 transition-all duration-500  group-hover:opacity-100'>
                        <div className='  transition-all duration-300 mt-1 flex gap-2 items-center'>
                            <ProgressBar
                                completed={60}
                                className=" w-20 md:w-24 "
                                height='6px'
                                labelSize='12px'
                                animateOnRender={true}
                                isLabelVisible={false}

                            />
                            <span className=' text-[14px] opacity-70  font-semibold'>60%</span>

                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration={500} data-aos-delay={500} className="bg-[#1a284d] group  transition-all duration-300 border border-[#151f3d] hover:bg-[#213057] cursor-pointer p-2 md:p-6 rounded-lg flex items-center flex-col gap-1">
                    <div className=' h-24 flex  items-center justify-center '>
                        <img src={sql} alt="" className=' w-20  object-cover' />
                    </div>
                    <div className=' font-semibold tracking-wider opacity-70 group-hover:opacity-100 transition-all duration-300' >
                        MySql
                    </div>
                    <div className='  opacity-0 transition-all duration-500  group-hover:opacity-100'>
                        <div className='  transition-all duration-300 mt-1 flex gap-2 items-center'>
                            <ProgressBar
                                completed={60}
                                className=" w-20 md:w-24 "
                                height='6px'
                                labelSize='12px'
                                animateOnRender={true}
                                isLabelVisible={false}

                            />
                            <span className=' text-[14px] opacity-70  font-semibold'>60%</span>

                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration={500} data-aos-delay={550} className="bg-[#1a284d] group  transition-all duration-300 border border-[#151f3d] hover:bg-[#213057] cursor-pointer p-2 md:p-6 rounded-lg flex items-center flex-col gap-1">
                    <div className=' h-24 flex  items-center justify-center '>
                        <img src={mongo} alt="" className=' w-20  object-cover' />
                    </div>
                    <div className=' font-semibold tracking-wider opacity-70 group-hover:opacity-100 transition-all duration-300' >
                        MongoDB
                    </div>
                    <div className='  opacity-0 transition-all duration-500  group-hover:opacity-100'>
                        <div className='  transition-all duration-300 mt-1 flex gap-2 items-center'>
                            <ProgressBar
                                completed={60}
                                className=" w-20 md:w-24 "
                                height='6px'
                                labelSize='12px'
                                animateOnRender={true}
                                isLabelVisible={false}

                            />
                            <span className=' text-[14px] opacity-70  font-semibold'>60%</span>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Skill