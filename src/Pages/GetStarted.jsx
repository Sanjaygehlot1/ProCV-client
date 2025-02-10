import React from 'react'
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
function GetStarted() {
  return (
    
<div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 relative">
<img 
  src="https://png.pngtree.com/background/20210716/original/pngtree-white-abstract-vector-web-background-design-picture-image_1354906.jpg" 
  alt="Background" 
  className="absolute inset-0 w-full h-full object-cover opacity-50"
/>
<motion.div
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="relative z-10 flex flex-col items-center text-center bg-white bg-opacity-80 p-10 rounded-2xl shadow-lg"
>
  <h1 className="text-4xl font-bold text-gray-900">Build Your Resume Effortlessly</h1>
  <p className="text-gray-700 mt-2 text-lg">
    Create a professional resume in minutes with our easy-to-use builder.
  </p>
  <Link to={"/login"}>
  <Button   className="mt-6 px-8 py-3 text-lg" size="lg"
  >
    Start Building
  </Button>
  </Link>
</motion.div>
</div>
  )
}

export default GetStarted
