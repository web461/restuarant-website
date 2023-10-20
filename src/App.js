import React from 'react'
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import { Login, Main } from './containers';



const App = () => {
  return (
    <div className='w-screen min-h-screen h-auto flex flex-col items-center justify-center'>
    <Router>
     <Routes>
        <Route path="/*" element={<Main />}/>
        <Route path="/login" element={<Login />}/>
    </Routes>
    </Router>
     
</div>
  )
}

export default App   