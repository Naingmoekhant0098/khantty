import React, { useEffect, useState } from 'react'
import { Button, Drawer } from "flowbite-react";
import cv from '../assets/cv.jpg';
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const[showNavbar , setShowNavBar] = useState('topNav');
    const[isNavOpen,setIsNavOpen] = useState(false);
    const[scrollY , setScrollY]  = useState(0);
    const constrolScroll=()=>{
   
        if(window.scrollY >200){
          if(window.scrollY > scrollY){
            setShowNavBar('hideNav')
         
            
          }else{
            setShowNavBar('showNav')
        
          }
       
          setScrollY(window.scrollY)
        }else{
          setShowNavBar('topNav')
          
        }
      }
      useEffect(()=>{
        if(isOpen){
            document.querySelector('body').style.overflow='hidden';
            
        }else{
            document.querySelector('body').style.overflow='auto';
        }

      },[isOpen])
    
      useEffect(()=>{
        window.addEventListener('scroll',constrolScroll)
    
      },[scrollY])
    const handleClose = () => setIsOpen(false);
     
    let sections = document.querySelectorAll('.section');
    let navs = document.querySelectorAll('.nav');
    let current='home';
    useEffect(()=>{
      window.addEventListener('scroll',()=>{
       
       sections.forEach(section=>{
       
        let sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(window.scrollY >= (sectionTop-sectionHeight / 6)){
        current=section.getAttribute('id');

        }
       })


       navs.forEach(nav=>{
       
        nav.classList.remove('active');
        if(nav.classList.contains(current)){
          nav.classList.add('active');
          //console.log(nav.classList.contains(current));
          
        }
      })

      })

    },[current])
   
  
    return (
        <>
        <div className={` flex   px-4 md:px-0 justify-between items-center  fixed z-20  md:left-14 left-0 right-0 md:right-14  top-0 navBar ${showNavbar}`}>
            <div>
                <img src="/khantty.png" alt="" className='  w-20 md:w-24 ' />
            </div>
            <div className="hidden md:flex lg:flex navs gap-7  items-center cursor-pointer uppercase font-semibold tracking-wider" style={{ fontSize: '14px' }}>
                <a href='#about' className="about  nav  opacity-70">About</a>
                <a href='#service' className="service nav opacity-70">Work</a>
                <a href='#skills' className="nav skills opacity-70">Skills</a>
                <a href='#contact' className="nav contact opacity-70">Contact</a>
                <div className=' relative '>
                       <a download={cv} href={cv}>  <div className="border w-[120px] md:w-[100px] h-[40px] flex items-center ease-in-out justify-center  z-10  absolute top-0 left-0  hover:-top-1 hover:-left-1 text-center cursor-pointer  text-[14px] md:text-[16px] font-semibold   border-1 border-[#40b4bd]  text-[#40b4bd] transition-all duration-300   px-6  bg-[#112046]" >Resume</div></a>
                        <div className='w-[120px] md:w-[100px] h-[40px] bg-[#40b4bd]'></div>
                    </div>
                {/* <div className="border border-1 opacity-70 hover:border-[#40b4bd] hover:text-[#40b4bd] transition-all duration-300  ease-in px-4 py-2">Resume</div> */}

            </div>
            <div className=' md:hidden lg:hidden flex flex-col gap-2  cursor-pointer bars' onClick={() => setIsOpen(true)}>
                <div className='bar w-8 h-1 rounded-lg  '></div>
                <div className='bar  w-6 h-1 rounded-lg   self-end' ></div>
                <div className='bar w-4 h-1 rounded-lg  self-end'></div>
            </div>
           

        </div>
         <Drawer open={isOpen} onClose={handleClose} position="right" id="drawerBg" className=' z-50'>

                <Drawer.Items>
                <div className=' flex flex-col gap-2 mt-4    cursor-pointer bars dBar' onClick={handleClose}>
                <div className='bar w-8 h-1 rounded-lg self-end  '></div>
                <div className='bar w-8 h-1 rounded-lg  self-end'></div>
                 
            </div>
                    <div className="flex  flex-col navs gap-8 mt-40 text-center cursor-pointer uppercase font-semibold tracking-wider "  style={{ fontSize: '14px' }}>
                    <a href='#about' className="about  nav  opacity-70">About</a>
                <a href='#service' className="service nav opacity-70">Work</a>
                <a href='#skills' className="nav skills opacity-70">Skills</a>
                <a href='#contact' className="nav contact opacity-70">Contact</a>
                    </div>
                </Drawer.Items>
            </Drawer>
        </>
    )
}

export default Nav