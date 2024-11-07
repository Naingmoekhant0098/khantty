import React, { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Banner from './components/Banner'
import About from './components/About'
import Service from './components/Service'
import Skill from './components/Skill'
import Projects from './components/projects'
import Contact from './components/Contact'
import Loader from './components/Loader'

const App = () => {
  const[loader,setLoader] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{

      setLoader(false);
    },3000)

    if(loader){
            document.querySelector('body').style.overflow='hidden';
            
        }else{
            document.querySelector('body').style.overflow='auto';
        }

  })
  return (
  <>
  {
    loader &&  <Loader />
  }
 
   

     <div className=' px-6 max-w-6xl text-gray-100 mx-auto relative overflow-x-hidden'>
     
      <Nav />
      <Banner />
      <About />
      <Service />
      <Skill />
      <Projects />
     <Contact />
    </div>
  </>
  )
}

export default App