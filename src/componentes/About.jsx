//rafce nueva snippet 

// src/componentes/About.jsx
import React from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project7.png';
import {
  DiJavascript1,
  DiReact,
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiMongodb,
  DiGithubBadge,
  DiNodejs,
  DiNodejsSmall
} from 'react-icons/di';

const About = () => {
  return (
    <div className='max-w-[1300px] mx-auto p-6 grid md:grid-cols-2 gap-8 place-items-center' id='about'>

      <div className='relative group'>
        <div className='w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg
        blur opacity-25 group-hover:opacity-100 transition duration-300'></div>
        <div className='relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
          <img src={project1} alt='project 1' className='rounded-lg md:max-w-[500px]'/>
        </div>
      </div>

       <div className='p-6'>
        <h2 className='text-gray-200 text-3xl font-bold mb-4'>Frontend experience</h2>
        <p className='text-gray-300 mb-4'>Me apasiona el desarrollo web con 5 años de experiencia. Tengo un historial probado de crear visualmente
        </p>
        <div className='md:flex flex-wrap gap-4 text-4xl justify-center hidden'>
          <DiHtml5 className='text-orange-600' />
          <DiCss3 className='text-blue-600' />
          <DiSass className='text-pink-600' />
          <DiJavascript1 className='text-purple-600' />
          <DiReact className='text-yellow-600' />
          <DiBootstrap className='text-blue-600' />
          <DiReact className='text-green-600' />
          <DiNodejsSmall className='text-red-600' />
        </div>
      </div>

     
      
     

      <div className='p-6'>
        <h2 className='text-gray-200 text-3xl font-bold mb-4'>Frontend experience</h2>
        <p className='text-gray-300 mb-4'>Me apasiona el desarrollo web con 5 años de experiencia. Tengo un historial probado de crear visualmente
        </p>
        <div className='md:flex flex-wrap gap-4 text-4xl justify-center hidden'>
          <DiHtml5 className='text-orange-600' />
          <DiCss3 className='text-blue-600' />
          <DiSass className='text-pink-600' />
          <DiJavascript1 className='text-purple-600' />
          <DiReact className='text-yellow-600' />
          <DiBootstrap className='text-blue-600' />
          <DiReact className='text-green-600' />
          <DiNodejsSmall className='text-red-600' />
        </div>
      </div>

      <div className='relative group'>
        <div className='w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg
        blur opacity-25 group-hover:opacity-100 transition duration-300'></div>
        <div className='relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
          <img src={project2} alt='project 2' className='rounded-lg md:max-w-[500px]'/>
        </div>
      </div>




      <div className='relative group'>
        <div className='w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-teal-900 rounded-lg
        blur opacity-25 group-hover:opacity-100 transition duration-300'></div>
        <div className='relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg'>
          <img src={project3} alt='project 3' className='rounded-lg md:max-w-[500px]'/>
        </div>
      </div>

      <div className='p-6'>
        <h2 className='text-gray-200 text-3xl font-bold mb-4'>Full stack experience</h2>
        <p className='text-gray-300 mb-4'>Me apasiona el desarrollo web con 5 años de experiencia. Tengo un historial probado de crear visualmente
        </p>
        <div className='md:flex flex-wrap gap-4 text-4xl justify-center hidden'>
          <DiHtml5 className='text-orange-600' />
          <DiCss3 className='text-blue-600' />
          <DiSass className='text-pink-600' />
          <DiJavascript1 className='text-purple-600' />
          <DiReact className='text-yellow-600' />
          <DiBootstrap className='text-blue-600' />
          <DiReact className='text-green-600' />
          <DiNodejsSmall className='text-red-600' />
        </div>
      </div>
    </div>
  );
};

export default About;