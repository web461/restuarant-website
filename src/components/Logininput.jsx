import React, { useState } from 'react'
import { motion } from "framer-motion";
import { fadeinout } from '../animations';

const Logininput = ({placeHolder, Icon, InputState, InputStateFunc, type, isSignUp}) => {
  const [isFocus, setisFocus] = useState(false)
  
    return (
    <motion.div {...fadeinout}
     className={`flex items-center justify-center gap-4 bg-gray-50 bg-opacity-50   backdrop-blur-md rounded-md w-full px-4 py-3
     ${isFocus? "shadow-md shadow-red-400": "shadow-none"}`}>
        {Icon}
        <input type={type} 
        placeholder={placeHolder} 
        value={InputState}
        onFocus={()=> setisFocus(true)}
        onBlur={() => setisFocus(false)}
        onChange={(e) => InputStateFunc(e.target.value)}
        className='w-full h-3 bg-transparent text-headingColor text-md font-semibold border-none outline-none '/>
    </motion.div>
  )
}

export default Logininput