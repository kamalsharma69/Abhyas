// footer
import React from 'react'
import {AiFillGithub} from 'react-icons/ai';
function Footer() {
  return (
    <div className='text-white text-center font-light italic p-3 mt-3 bg-gray-800'>
        This site is still in development, you can track its progress here 
        <a className='ml-2' href='https://github.com/kamalsharma69/Abhyas'>
            <AiFillGithub className='inline' />
        </a>
    </div>
  )
}

export default Footer