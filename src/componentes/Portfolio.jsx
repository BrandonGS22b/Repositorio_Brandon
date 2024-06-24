import React, { useState } from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';
import project6 from '../assets/project6.png';
import { AiFillGithub } from 'react-icons/ai';

const projects = [
  {
    img: project1,
    title: "Project #1",
    description: "UI frontend development using React",
    links: {
      site: "https://github.com/",
      github: "https://github.com",
      facebook: "https://www.facebook.com",
    }
  },
  {
    img: project2,
    title: "Project #2",
    description: "UI frontend development using React",
    links: {
      site: "https://github.com/",
      github: "https://github.com",
      facebook: "https://www.facebook.com",
    }
  },
  {
    img: project3,
    title: "Project #3",
    description: "UI frontend development using React",
    links: {
      site: "https://github.com/",
      github: "https://github.com",
      facebook: "https://www.facebook.com",
    }
  },
  {
    img: project4,
    title: "Project #4",
    description: "UI frontend development using React",
    links: {
      site: "https://github.com/",
      github: "https://github.com",
      facebook: "https://www.facebook.com",
    }
  },
  {
    img: project5,
    title: "Project #5",
    description: "UI frontend development using React",
    links: {
      site: "https://github.com/",
      github: "https://github.com",
      facebook: "https://www.facebook.com",
    }
  },
  {
    img: project6,
    title: "Project #6",
    description: "UI frontend development using React",
    links: {
      site: "https://github.com/",
      github: "https://github.com",
      facebook: "https://www.facebook.com",
    }
  },
];

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);

  return (
    <div className='relative max-w-[800px] mx-auto p-6 md:my-20 flex flex-col md:flex-row' id='portfolio'>
      <div className='glass p-6 w-full border-2 max-w-[600px]'>
        <div className='w-full h-80'>
          <img src={projects[currentProject].img} alt={projects[currentProject].title} className='w-full h-80 object-cover rounded-lg mb-4'/>
        </div>
        <p className='text-gray-200 my-4'>
          {projects[currentProject].description}
        </p>
        <div className='flex space-x-4'>
          <a href={projects[currentProject].links.site} className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'>View site</a>
          <a href={projects[currentProject].links.github} className='px-4 py-2 bg-gray-800 text-gray-200 text-2xl rounded-lg hover:bg-gray-600 transition duration-300'><AiFillGithub /></a>
        </div>
      </div>
      
      <ul className='ml-6 flex flex-row md:flex-col gap-6 flex-wrap justify-center mt-4 md:gap-1'>
        {projects.map((project, index) => (
          <li key={index} onClick={() => setCurrentProject(index)} className={`cursor-pointer text-gray-300 bg-slate-700 rounded-lg p-2 max-w-[1000px] hover:bg-slate-800 transition duration-300 ${currentProject === index ? "bg-slate-900" : ""}`}>
            {project.title} {/* Mostrar el título del proyecto u otra información */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
