import React from "react";
import  ReactDOM  from "react-dom/client";
import App from "./App";
import "./index.css"
import { AnimatePresence } from "framer-motion";
import { Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        
            <AnimatePresence>
        <App />
        </AnimatePresence>
        
    </React.StrictMode>
)

