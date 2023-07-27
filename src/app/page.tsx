"use client";

import Image from 'next/image'
import Head from 'next/head'

//Import framer motion
import { motion } from "framer-motion"

//Import pics
import proImg from "../../public/assets/pro_pic_2.jpg"
import service1 from "../../public/assets/Service1.png"
import service2 from "../../public/assets/Service2.png"
import service3 from "../../public/assets/Service3.png"

//Import icons
import { BsFillMoonStarsFill, BsGithub, BsLinkedin, BsFacebook} from 'react-icons/bs'

// Use a react hook to get the dark mode
import {useState} from "react";

export default function Home() {

  // Dark mode function
  const [darkmode, setdarkmode] = useState(false);

  return (
  <div className={darkmode? "dark:" : ""}>
    <Head>
      <title>Portfolio - Shivanthi Fernando</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@300;400;600;800&display=swap');
      </style>
    </Head>
    <main className="bg-yellow-50 min-h-screen dark:bg-black">
      {/* Nav and hero */}
      <section>
        <nav className="py-5 flex justify-between bg-red-800 bg-opacity-10">
          <h1 className="font-pacifico px-10 sm:text-lg md:text-lg lg:text-2xl">Welcome to my portfolio</h1>
          <ul className="flex items-center px-10">
            {/* Icons */}
            <li>
              <BsFillMoonStarsFill 
                onClick={()=> setdarkmode(!darkmode)}
                className="cursor-pointer text-xl mx-5"/>
            </li>
            <li>
              <a 
                href="https://drive.google.com/file/d/1RoNIjJrYAb5kQ7-4VlrSMrl6hzD1l_-W/view?usp=sharing" 
                download={"resume"}
                className=" bg-red-500 text-white px-4 py-2 border-none rounded-md">
                Resume
              </a>
            </li>
          </ul>
        </nav>
        {/* About Me */}
        <div className="py-5">
          <h1 className="text-center font-pacifico italic text-6xl text-red-800 font-bold py-2">
            Shivanthi Fernando
          </h1>
          <h3 className="text-center font-pacifico text-3xl text-red-500">
            Web Developer
          </h3>
          <p className="text-center lg:px-48 px-14 py-2 text-red-950">
          Highly organized, responsible, dedicated individual, who is passionate about cloud
technologies and possesses relevant skills, knowledge and experience gained through
my academics and work. Capable of working well both in a team atmosphere and
independently. Interested in learning new technologies and share my knowledge with
other team members.
          </p>
        </div>
        {/* contact */}
        <div className="flex justify-center py-2 text-3xl text-gray-600">
          <a href="https://github.com/shivanthi-fernando" className="px-5 hover:text-red-950">
            <BsGithub/>
          </a>
          <a href="https://www.linkedin.com/in/shivanthi-fernando-0146a21a8" className="px-5 hover:text-red-950">
            <BsLinkedin/>
          </a>
          <a href="https://www.facebook.com/shivani.fernandz" className="px-5 pb-5 hover:text-red-950">
            <BsFacebook/>
          </a>
        </div>
        {/* Me */}
        <motion.div 
          initial={{opacity:0, scale:0.5}}
          animate={{opacity:1, scale:1}}
          transition={{duration: 0.5}}>
          <div className="py-5 relative mx-auto max-w-xs max-h-max bg-gradient-to-b from-red-900 p-5 w-80 h-80 rounded-full">
            <Image src={proImg} alt="profile image" className="rounded-full" objectFit="cover"/>
          </div>
        </motion.div>
      </section>
      {/* My Services */}
      <section>
          <div>
            <h1 className="font-pacifico text-4xl text-red-800 font-bold pt-6 px-10">
              Services I Offer
            </h1>
          </div>
          {/* Services Cards */}
          <div className="px-5 pt-3 flex justify-center">
            <motion.div
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}>
              <div className="text-center bg-red-800 bg-opacity-10 rounded-lg py-4 mb-4 mx-2">
                <Image src={service1} alt="service_1" width={100} height={100} className="inline"></Image>
                <h1 className="font-poppins text-lg py-2 font-bold">Static Web Development</h1>
                <p className="text-xs lg:px-16 md:px-10 sm:px-7">I develop websits using ReactJS, Express, Tailwindcss, Bootstrap</p>
              </div>
            </motion.div>
            <motion.div
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}>
              <div className="text-center bg-red-800 bg-opacity-10 rounded-md py-4 mb-4 mx-2">
                <Image src={service2} alt="service_2" width={100} height={100} className="inline"></Image>
                <h1 className="font-poppins text-lg py-2 font-bold px-3">Fullstack Development</h1>
                <p className="text-xs lg:px-16 md:px-10 sm:px-7">I develop websits using NodeJS, React, NextJS, Express and MongoDB</p>
              </div>
            </motion.div>
            <motion.div
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}>
              <div className="text-center bg-red-800 bg-opacity-10 rounded-md py-4 mb-4 mx-2">
                <Image src={service3} alt="service_3" width={100} height={100} className="inline"></Image>
                <h1 className="font-poppins text-lg py-2 font-bold">Figma Prototype Designing</h1>
                <p className="text-xs lg:px-16 md:px-10 sm:px-7">I design prototyies for websits and mobile applications using figma</p>
              </div>
            </motion.div>
            </div>
      </section>
      {/* Footer */}
      <section>
        <div className="text-center bg-red-800 bg-opacity-10 py-5">
          <p className="text-xs text-red-950">All rights reserved shivanthi@2023</p>
        </div>
      </section>
    </main>
  </div>
  )
}
