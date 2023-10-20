   import React, { useState } from 'react'
import { LoginBg, Logo } from '../assets'
import { LoginInput } from '../components'
import { FaEnvelope, FaLock, FcGoogle  } from '../assets/icons'
import {motion} from "framer-motion"
import { buttonClick } from '../animations/index.js'
   
   const Login = () => {
    const [userEmail, setuserEmail] = useState("")
    const [isSignUp, setisSignUp] = useState(false);
    const [password, setpassword] = useState("");
    const [confirm_password, setconfirm_password] = useState("")

     return (
       <div className='w-screen h-screen relative overflow-hidden flex' >
        <img 
        src={LoginBg}
         className="w-full h-full object-cover absolute top-0 left-0" 
         alt="" />


       
        <div className='flex flex-col items-center bg-gray  opacity-100  w-full md:w-[27%]   h-full z-10 backdrop-blur-md p-4 px-2 py-12'>
        <div className='flex items-center  justify-start gap-2 w-full  '>
            <img src={Logo} alt="" className='w-8  ' />
            <p className='text-headingColor  font-semibold text-2xl '>city</p>

        </div>

{        /**welcome text */
}        <p className='text-3xl font-semibold text-headingColor  '>Welcome Back</p>
        <p className='text-md text-textColor  '>{isSignUp? "Sign up" : "Sign in"} with the following</p>
         {/**input section */}
         <div className='w-full flex flex-col items-center justify-center gap-6 px-4 md:px-12 py-4'>
            <LoginInput
             placeHolder={"Email Here"} 
             Icon={<FaEnvelope className='text-xl text-textColor' />}
              InputState={userEmail}
              InputStateFunc={setuserEmail}
               type="email" 
             isSignUp={isSignUp} />


            <LoginInput
             placeHolder={"Password Here"} 
             Icon={<FaLock className='text-xl text-textColor' />}
              InputState={password}
              InputStateFunc={setpassword}
               type="email" 
             isSignUp={isSignUp} /> 

            { isSignUp && (<LoginInput
             placeHolder={"confirm password Here"} 
             Icon={<FaEnvelope className='text-sm text-textColor' />}
              InputState={confirm_password}
              InputStateFunc={setconfirm_password}
               type="email" 
             isSignUp={isSignUp} /> )}

             {!isSignUp ? <p className='text-sm'> Does'nt have an account:  
             <motion.button
              className='text-red-700 underline cursor-pointer bg-transparent'
               {...buttonClick}
               onClick={()=> setisSignUp(true)}
               >
                 Create one
               </motion.button> </p>: 
               <p>
               <p className='text-sm'> Already have an account:    
             <motion.button
              className='text-red-700 underline cursor-pointer bg-transparent'
               {...buttonClick}
               onClick={() => setisSignUp(false)}
               >
                Signin here
               </motion.button> </p>
                </p>}

                {/**button section */}
              {isSignUp ?   <motion.button className='w-full px-4 py-2 rounded-md bg-red-500 cursor-pointer text-white text-md capitalize hover:bg-red-600 transition-all duration-150'>
                   sign up
                   </motion.button>:
                   
                   <motion.button className='w-full px-4 py-2 rounded-md bg-red-500 cursor-pointer text-white text-md capitalize hover:bg-red-600 transition-all duration-150'>
                   sign in 
                   </motion.button>}

                   <div className='flex items-center justify-between gap-4'>
                    <div className='w-24 h-[1px] rounded-md bg-white'></div>
                    <p className='text-white'>or</p>
                    <div className='w-24 h-[1px] rounded-md bg-white'></div>
                   </div>

                   <motion.div {...buttonClick} className='flex items-center justify-center px-4 py-2 bg-gray-50 backdrop-blur-md cursor-pointer rounded-3xl gap-3'>
                    <FcGoogle className='text-3xl'/>
                    <p className='capitalize text-base text-headingColor'> Signin with Google</p>
                   </motion.div>
             
         </div>    

        </div>
        
       </div>

     
     /**background */

       )
   } 
   
   export default Login