import React from 'react';
import {AiOutlineArrowRight} from 'react-icons/ai'
const ProjectCard = ({ title, description, imgUrl, url, urltitle }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-[550px] p-4">
      <div className="proj-imgbx relative">
        <img src={imgUrl} alt={title} className="w-[600px] h-[300px] rounded-lg " />
        <div className="proj-txtx text-center top-[65%] left-[50%] opacity-0  hover:top-[50%] hover:opacity-5 absolute bottom-0  w-full p-4 bg-white bg-opacity-80 backdrop-blur-md">
          <h4 className="text-xl  font-semibold text-black">{title}</h4>
          <span className="text-gray-600">{description}</span>
          <br />
          <a href={url} target="_blank"  className='  capitalize flex items-center justify-center mt-7 text-yellow-600 '> {urltitle} <AiOutlineArrowRight/></a>
        </div>
      </div>
    </div>
  
  );
};

export default ProjectCard;

