import React from 'react';
import { AiFillLinkedin, AiFillFacebook,AiFillInstagram } from 'react-icons/ai';

const Contact = () => {
  return (
    <div className='px-6 max-w-[1000px] mx-auto glass grid md:grid-cols-2 place-items-center' id='contact'>
      <ul className='my-auto pr-6'>
      <li className='flex'>
        <a href="https://www.linkedin.com/in/brandon-garcía-suarez-9064ab183/" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin className='w-[70px] h-auto text-gray-300'/>
         </a>
           <div className='m-5'>
              <h3 className='text-lg font-bold text-gray-200'>Working Hours</h3>
               <p className='text-gray-400'>Mo-Fri: 8am-5pm</p>
                <p className='text-gray-400'>SoSat: xxx</p>
            </div>
      </li>


        <li className='flex'>
        <a href="https://www.instagram.com/brandohfx/" target="_blank" rel="noopener noreferrer">
          <AiFillInstagram className='w-[70px] h-auto text-gray-300'/>
          </a>
          <div className='m-5'>
            <h3 className='text-lg font-bold text-gray-200'>Working Hours</h3>
            <p className='text-gray-400'>Mo-Fri: 8am-5pm</p>
            <p className='text-gray-400'>SoSat: xxx</p>
          </div>
        </li>


        <li className='flex'>
        <a href="https://www.facebook.com/brandonsuarez.garxia/" target="_blank" rel="noopener noreferrer">
          <AiFillFacebook className='w-[70px] h-auto text-gray-300'/>
          </a>
          <div className='m-5'>
            <h3 className='text-lg font-bold text-gray-200'>Working Hours</h3>
            <p className='text-gray-400'>Mo-Fri: 8am-5pm</p>
            <p className='text-gray-400'>SoSat: xxx</p>
          </div>
        </li>
      </ul>

      <form action='https://getform.io/f/warkdqdb' method='POST' className='max-w-6x1 p-5 md:p-12' id='form'>
        <input 
          type='text'
          id='name'
          placeholder='your name'
          name='name'
          className='mb-2 w-full rounded-md border border-gray-400 py-2 p-2 pr-4'
        />
        <input 
          type='text'
          id='cellphone'
          placeholder='your cellphone'
          name='cellphone'
          className='mb-2 w-full rounded-md border border-gray-400 py-2 p-2 pr-4'
        />
        <textarea 
          id='textarea'
          rows='10'
          placeholder='your Message ...'
          name='message'
          className='mb-2 w-full rounded-md border border-gray-400 py-2 p-2 pr-4'
        />
        <button type='submit' className='w-full py-3 rounded-md text-gray-200 font-semibold text-xl bg-gradient-to-r from-[#50a7c7] via-[#1f7c8f] to-[#3d6ca4]'>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
