import React ,{useRef, useState} from 'react'
import { FaLocationDot, FaPhone, FaVoicemail } from 'react-icons/fa6'
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
    const[name,setName] = useState(null);
    const[email,setEmail] = useState(null);
    const[message,setMessage] = useState(null);
   
    const sendEmail = (e) => {
        e.preventDefault();
       
       if(name !='' && email!='' && message!=''){
        emailjs
        .send('service_psafy49','template_g7it341', {
          from_name : name,
          from_email : email,
          message : message
        }, {
          publicKey: 'B6qb_QweyTkm3yfgG',
        })
        .then(
          (success) => {
           if(success){
              toast.success('Email Successfully Send , Thank You.')
              setEmail('');
              setName('');
              setMessage('');
           }
          },
          (error) => {
            console.log(error);
          },
        );
       }else{
        toast.error('Please fill all the required fields , Thank You')
       }
      };
    return (
        <div className='pb-32 section' id='contact'>

            <div className="w-full   mt-[50px] md:mt-[200px] grid grid-cols-1 md:grid-cols-2  gap-7  ">
                <div className='  flex flex-col items-center'>
                    <div className=' w-full md:w-[400px]'>
                        <h4 className=' text-2xl md:text-3xl font-semibold tracking-wider opacity-75'  data-aos="fade-up" data-aos-delay="50" data-aos-easing="ease-in-out" data-aos-duration="500">Get In Touch !</h4>
                        <div className=' mt-4 text-[14px] md:text-[16px] opacity-70 tracking-wider ' data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease-in-out" data-aos-duration="500">
                            Have questions of want to work together on your next project ?
                        </div>
                        <div className='  mt-6 opacity-70 flex flex-col w-auto  mx-auto gap-4 ' data-aos="fade-up" data-aos-delay="150" data-aos-easing="ease-in-out" data-aos-duration="500">

                            <div className=' flex gap-2 items-center '>
                                <FaPhone />
                                <div className=' text-[14px]'>
                                    09-763-320-740
                                </div>
                            </div>
                            <div className=' flex gap-2 items-center'>
                                <FaVoicemail />
                                <div className=' text-[14px]'>
                                    naingmoekhant098765@gmail.com
                                </div>
                            </div>
                            <div className=' flex gap-2 items-center'>
                                <FaLocationDot />
                                <div className=' text-[14px]'>
                                    Madaya,Myanmar
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div >

                    <form action=""  onSubmit={sendEmail} method="post" className=' mx-auto flex flex-col gap-6 w-full md:w-[350px] ' data-aos="fade-up" data-aos-delay="50" data-aos-easing="ease-in-out" data-aos-duration="500">

                        <input name="from_email" value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Name' class=" text-[14px]  bg-inherit outline-1  rounded-lg focus:outline-0 focus:outline-[#40b4bd] focus:border-[#40b4bd]" />
                        <input name='from_email' value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Email' class="  text-[14px]  bg-inherit outline-1  rounded-lg focus:outline-0 focus:outline-[#40b4bd] focus:border-[#40b4bd]" />
 
                        <textarea name="from_message" value={message} onChange={(e)=>setMessage(e.target.value)}  placeholder='Message' id="" className='text-[14px] rounded-lg bg-inherit outline-0  border  focus:outline-0 focus:outline-[#40b4bd] focus:border-[#40b4bd]'></textarea>
                        <div>
                            <div className=' relative '>
                                <button type='submit' className="border w-[100px] h-[50px] flex items-center ease-in-out justify-center z-100  absolute top-0 left-0  hover:-top-1 hover:-left-1 text-center cursor-pointer  text-[14px] md:text-[16px] font-semibold   border-1 border-[#40b4bd]  text-[#40b4bd] transition-all duration-300   px-6  bg-[#112046]" >Send</button>
                                <div className='w-[100px] h-[50px] bg-[#40b4bd]'></div>
                            </div>
                        </div>
                    </form>
                    <Toaster toastOptions={{
    className: '',
    style: {
      fontSize : '14px'
    },
  }} />
                </div>
            </div>
        </div>

    )
}

export default Contact