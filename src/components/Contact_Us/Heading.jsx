import React from 'react'
import ContactUsHeadingImage from '../../assets/Images/ContactUsHeading.jpeg'; // Assuming this is the correct image

const Heading = () => {
  return (
   <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] overflow-hidden">
         <img
           alt="Person wearing NYFA shirt holding a camera with a blurred woman in the background"
           className="w-full h-full object-cover absolute inset-0 z-0"
           height="400"
           src={ContactUsHeadingImage}
           width="1920"
         />
         <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
         <nav className="absolute top-8 left-8 z-20 flex items-center space-x-3 text-white text-sm sm:text-base font-sans  bg-opacity-30 px-4 py-2 rounded-full">
           <span className="font-semibold">NYFA</span>
           <span className="text-gray-300">/</span>
           <span>Contact Us</span>
         </nav>
         <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold tracking-wide text-shadow-lg">
           Contact Us
         </h1>
       </div>
  )
}

export default Heading