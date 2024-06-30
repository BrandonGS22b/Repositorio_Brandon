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
        <h2 className='text-gray-200 text-3xl font-bold mb-4'>Backend Experience</h2>
        <p className='text-gray-300 mb-4'>Con 1 año de experiencia en desarrollo backend, 
          me apasiona crear soluciones robustas y escalables. 
          Tengo un historial comprobado en la implementación de APIs eficientes, 
          la gestión de bases de datos y la integración de servicios que mejoran la funcionalidad y la experiencia del usuario.
        </p>
        <div className='md:flex flex-wrap gap-4 text-4xl justify-center hidden'>
          <DiJavascript1 className='text-purple-600' />
          <DiReact className='text-yellow-600' />
          <DiReact className='text-green-600' />
          <DiNodejsSmall className='text-red-600' />
          <DiMongodb className='text-green-600' />
        </div>
      </div>

     
      
     

      <div className='p-6'>
        <h2 className='text-gray-200 text-3xl font-bold mb-4'>Frontend Experience</h2>
        <p className='text-gray-300 mb-4'> Con un año de experiencia en desarrollo frontend, 
          me dedico a crear interfaces de usuario atractivas y funcionales. 
          Utilizo tecnologías modernas para asegurar que las aplicaciones sean intuitivas y visualmente impactantes,
           mejorando la experiencia del usuario.
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
        <p className='text-gray-300 mb-4'>Me apasiona el desarrollo web Fullstack con 1 año de experiencia. 
          Tengo un historial probado de crear aplicaciones visualmente atractivas y altamente funcionales, 
          desde la implementación de interfaces de usuario dinámicas hasta la gestión eficiente del backend y las bases de datos.
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