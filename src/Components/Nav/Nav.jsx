import React from 'react';
import { SiSequelize } from 'react-icons/si'
import {Link} from 'react-router-dom';
const Nav = () => {
    const handleOnClick = () => {

        const menu = document.querySelector('#menu');
        menu.classList.toggle('hidden');
    }
    return (
        <nav>
            <div className='container mx-auto flex items-center justify-between'>
                <span className='text-white font-Inter font-extrabold text-2xl tracking-widest inline'>Pablo<span className='font-thin'>Causa</span></span>
                <ul className=' hidden md:flex space-x-12 font-bold'>
                    <li className='text-white font-Inter font-extrabold text-2xl tracking-widest hover:text-gray-500'><Link to='/'>Home</Link></li>
                    <li className='text-white font-Inter font-extrabold text-2xl tracking-widest hover:text-gray-500'><Link to='/about'>About</Link></li>
                    <li className='text-white font-Inter font-extrabold text-2xl tracking-widest hover:text-gray-500'><Link to='/projects'>Projects</Link></li>
                </ul>
                <div>
                    <SiSequelize className='hidden md:block w-15 text-4xl cursor-pointer' />
                </div>

                <div className='space-y-1 md:hidden cursor-pointer z-20' onClick={handleOnClick}>
                    <div className='w-6 h-1 bg-black'></div>
                    <div className='w-6 h-1 bg-black'></div>
                    <div className='w-6 h-1 bg-black'></div>
                </div>
                <ul id='menu' className='bg-cyan-800 hidden font-extrabold absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-center'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/projects'>Projects</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;