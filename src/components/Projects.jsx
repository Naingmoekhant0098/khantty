import React, { useEffect, useState } from 'react'
import {  FaImages } from 'react-icons/fa6';
import keiSneaker from '../assets/kei-sneaker.png';
import huddle from '../assets/huddle.png';
import chat from '../assets/chat.png';
import sunny from '../assets/sunny.png';
import bookmark from '../assets/bookmark.png';
import doge from '../assets/doge.png';
import central from '../assets/central.png';
import crypto from '../assets/crypto.png';
import admin from '../assets/admin.png';
import { TbDeviceIpadHorizontalShare} from "react-icons/tb"
import { FiGithub} from "react-icons/fi"
const Projects = () => {
    const[loopNum , setLoopNum] = useState(3);
    const b_projects = [
        {
            title: 'Kei Sneaker Project',
            image : keiSneaker,
            desc : " A full-stack e-commerce platform built to showcase and sell sneakers.In this project,I used this languages.",
            langs : ['React Js','Node Js','Swiper Js','Firebase','Tailwind'],
            github_link : "https://www.google.com",
            demo_link : ""
        },
        {
            title: 'Huddle Landing Website',
            image : huddle,
            desc : "A single huddle landing clone website that build with javascript and css only.",
            langs : ['Javascript','Css','Bootstrap','Fontawesome'],
            github_link : "",
            demo_link : ""
        },
        {
            title: 'Chat Application ',
            image : chat,
            desc : "A full stack chat application is a real-time messaging platform that allows users to communicate with each other through instant text messages. It typically involves both a frontend and backend.",
            langs : ['React Js','Node Js','Firebase','Tailwind'],
            github_link : "",
            demo_link : ""
        },
        {
            title: 'Sunny Blog Landing Website',
            image : sunny,
            desc : "A single sunny landing clone website that build with javascript and css only.",
            langs : ['Javascript','Css','Bootstrap','Fontawesome'],
            github_link : "",
            demo_link : ""
        },
        {
            title: 'Bookmark Landing Website',
            image : bookmark,
            desc : " A single bookmark landing clone website that build with javascript and css only.",
            langs : ['Javascript','Css','Bootstrap','Fontawesome'],
            github_link : "",
            demo_link : ""
        },
        {
            title: 'Doge Social Media Website',
            image : doge,
            desc : " A full-stack e-commerce platform built to showcase and sell sneakers. I developed this project to demonstrate my skills in creating responsive, user-friendly web applications.",
            langs : ['React Js','Node Js','Swiper Js','Tailwind'],
            github_link : "",
            demo_link : ""
        },
        {
            title: 'Central Movie Website',
            image : central,
            desc : "The central movie web app which give you the detail of many movie show and Tv serices with the real rating of IMDB  and you can find many old movie in one place.",
            langs : ['React Js','Dmdb Api','Swiper Js','Tailwind'],
            github_link : "",
            demo_link : ""
        },
        {
            title: 'Crypto Tracker Website',
            image : crypto,
            desc : "A crypto tracker web application which show you a real time crypto market price with data charts.",
            langs : ['React Js','Tailwind','Chart Js'],
            github_link : "",
            demo_link : ""
        },
        {
            title: 'Kazuki Admin Panel',
            image : admin,
            desc : "A single admin dashboard that built with javascript and bootstrap.",
            langs : ['Javascript','Css','Chart Js','Bootstrap'],
            github_link : "",
            demo_link : ""
        },
    ]

    const [projects,setProjects] = useState([]);
    useEffect(()=>{
        setProjects(b_projects.slice(0,loopNum))

    },[loopNum])
    return (
        <div className='w-full overflow-hidden section' id='projects'>
            <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration={500}   className=' flex mt-28 items-center gap-3'>
                <h3 className='header text-xl md:text-2xl font-semibold tracking-wider'>Projects</h3>
               
            </div>
            <div className="mt-[40px] md:mt-[50px] grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                
                projects.map((pj,index)=>{
                    return   <div key={index} data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration={500} data-aos-delay={50*index} className="bg-[#1a284d] group transition-all duration-300 border border-[#151f3d] hover:bg-[#213057] cursor-pointer rounded-lg overflow-hidden">
                        <div className='' >
                            <img src={pj.image} className=' w-full   h-[200px] object-cover' alt="" />
                        </div>
                        <div className=" p-5 pt-3">
                           
                            <div className=' flex justify-between w-full  items-center'>
                            <div className='bg-inherit text-[18px] md:text-[20px]  font-semibold tracking-wider  opacity-85  transition-all duration-300 group-hover:text-[#40b4bd] group-hover:opacity-100'>{pj.title}</div>
                            <div className=' text-xl md:text-2xl gap-4 flex'>
                           <a href={pj.demo_link} target="_blank" rel="noopener noreferrer">  <TbDeviceIpadHorizontalShare className=' cursor-pointer opacity-70 font-semibold transition-all duration-300 ease-in-out hover:text-[#40b4bd]' /></a>
                           <a href={pj.github_link}> <FiGithub className=' cursor-pointer opacity-70 transition-all duration-300 ease-in-out hover:text-[#40b4bd]' /></a>
                             </div>
                            </div>
                            <div className='bg-inherit text-[14px] md:text-[15px] mt-2 tracking-wider ' style={{ opacity: .6 }}>
                                 {pj.desc}
                            </div>
                            <div className='  mt-5 l flex gap-2 flex-wrap  '>
                                {
                                    pj.langs.map((lg,index)=>{
                                        return  <div className=' tracking-wider text-[14px]' style={{ opacity: .5 }}>
                                        {lg}
                                    </div>
                                    })
                                }
                               
                            </div>

                            
                           
                        </div>
                    </div>
            
                })
            }
    </div>

       
 {
    loopNum >= b_projects.length ? ''  :  <div className=' flex  justify-center'  data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500" data-aos-delay="250">
    <div className=' relative mt-6 '>
                                <div className="border w-[120px] md:w-[150px] h-[50px] flex items-center ease-in-out justify-center z-100  absolute top-0 left-0  hover:-top-1 hover:-left-1 text-center cursor-pointer  text-[14px] md:text-[16px] font-semibold   border-1 border-[#40b4bd]  text-[#40b4bd] transition-all duration-300   px-6  bg-[#112046]" onClick={()=>setLoopNum((prev)=>prev+3)}>Load More</div>
                                <div className='w-[120px] md:w-[150px] h-[50px] bg-[#40b4bd]'></div>
                            </div>
    </div>
 }
          

            
        </div>
    )
}

export default Projects