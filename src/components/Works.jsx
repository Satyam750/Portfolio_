'use client'
import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "./hoc";
import { projects } from "../constants/constants";

import Image from "next/image";
import color_sharp from "../assets/color_sharp.png";
import Link from "next/link";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";


const ProjectCard = ({
  name,
  image,
  source_code_link,
  live_link,
}) => {
  
  return (
   
<div >
<div 
        className="h-52 md:h-72 md:w-[23vw] w-[85vw] lg:h-72 lg:w-[22vw] xl:w-[20vw] rounded-t-xl relative group"
        style={{background:`url(${image.src})`,  backgroundSize:"cover",objectFit:"contain", backgroundRepeat:"no-repeat",}}
        >
            <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                <Link
                href={source_code_link}
                target="_blank"
                className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                >
                   <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
                </Link>
                <Link
            href={live_link}
            target="_blank"
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>

            </div>
        </div>
        <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
            <h5 className="text-xl font-semibold mb-2">{name}</h5>
            
        </div>

    </div>
  );
};

const Works = () => {
  return (
    <>
      <div className='relative'>
        <div>
          <p id="work" className={`${styles.sectionSubText} `}>My work</p>
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        </div>

        <div className='w-full flex'>
          <motion.p
            className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described with
            links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
          <Image src={color_sharp} alt="color-sharp" className="absolute z-[-1] h-80 -left-60 w-screen -top-20" />
        </div>
      </div>

      <div className='mt-20 flex flex-wrap  gap-7 w-full h-full '>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
