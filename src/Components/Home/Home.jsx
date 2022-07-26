import React from 'react';
import logo from '../../img/logo.png'
import computer from '../../img/wallpaper-computer-room-desktop.png';
import profile from '../../img/ProfilePicture.jpg';
import Food from '../../img/Food.png';
import Menu from '../../img/Menu.png';
import PsicoApp from '../../img/PsicoApp.png';
import Reviews from '../../img/Reviews.png';
const Home = () => {

    const handleOnClick = () => {

        const menu = document.querySelector('#menu');
        menu.classList.toggle('hidden');
    }


    return (
        <div className='h-full bg-gray-800 py-10'>
            <div>
                <nav>
                    <div className='container mx-auto flex items-center justify-between'>
                        <span className='text-white font-Inter font-extrabold text-2xl tracking-widest inline'>Pablo<span className='font-thin'>Causa</span></span>
                        <ul className=' hidden md:flex space-x-12 font-bold'>
                            <li className='text-white font-Inter font-extrabold text-2xl tracking-widest hover:text-gray-500'><a href='http://www.google.com'>Home</a></li>
                            <li className='text-white font-Inter font-extrabold text-2xl tracking-widest hover:text-gray-500'><a href='http://www.google.com'>About</a></li>
                            <li className='text-white font-Inter font-extrabold text-2xl tracking-widest hover:text-gray-500'><a href='http://www.google.com'>Projects</a></li>
                        </ul>
                        <img src={logo} className='hidden md:block w-15 cursor-pointer' alt='logo' />
                        <div className='space-y-1 md:hidden cursor-pointer z-20' onClick={handleOnClick}>
                            <div className='w-6 h-1 bg-black'></div>
                            <div className='w-6 h-1 bg-black'></div>
                            <div className='w-6 h-1 bg-black'></div>
                        </div>
                        <ul id='menu' className='bg-cyan-800 md:hidden font-extrabold absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-center'>
                            <li><a href='http://www.google.com'>Home</a></li>
                            <li><a href='http://www.google.com'>About</a></li>
                            <li><a href='http://www.google.com'>Projects</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className='container mx-auto mt-32'>
                <div className=' grid md:grid-cols-2'>
                    <div className=''>
                        <div>
                            <p className='text-white text-center text-5xl font-bold md:text-center md:text-6xl md:font-bold tracking-widest'>Full Stack</p>
                            <p className='text-white text-center text-5xl font-extrabold md:text-center md:text-6xl md:font-extrabold'>Developer<div className='inline-block h-1 w-6 bg-gray-500'></div></p>
                        </div>
                        <p className='mt-14 font-Poppins font-medium md:text-2xl md:mt-16 md:tracking-wider '>Hi, I'm Pablo, a Full Stack developer in love with technology.
                            I always find joy in challenges and solving problems.
                            Handy brain, handy man.
                        </p>
                        <button className='text-left mt-20 rounded-xl border-4 p-2 px-4 hover:bg-slate-400 font-Poppins bg-slate-700'>Get Started</button>
                        <div className='space-y-6 mt-12 flex items-center relative'>
                            <img src={profile} alt="profile" className='rounded-full w-12' />
                            <div className='h-3 w-3 bg-[#7DCE13] absolute bottom-0 rounded-full left-9'></div>
                            <p className='text-2xl font-Poppins font-bold ml-10 inline-flex'>Availavility: </p> <span className=' text-2xl font-Inter ml-6'>Available for work</span>
                        </div>
                    </div>
                    <div className='hidden md:inline'>
                        <img src={computer} alt="computer" className='' />
                    </div>

                </div>
            </div>
            <div className='w-1/2 mx-auto lg:grid lg:grid-cols-2 mt-16'>
                <div>
                    <img src={profile} alt="ProfilePicture" className='rounded-2xl' />
                </div>
                <div className='m-4'>
                    <h1 className='mt-4 text-2xl font-Poppins font-semibold'>Full Stack Web Developer <span>_</span></h1>
                    <p className='font-Inter mt-3 mb-4 text-lg'>
                        I work in both sides of development, front and back. I like to give handy solutions to customers by using
                        the main technologies in the industry. I'm always learning new stuff in order
                        to achieve and satisfy the customer's requirements. The aim of technology is to make human's life easier
                        and more confortable, therefore, I work with that aim too.
                    </p>
                    <a href="http://www.google.com" className='font-Poppins text-blue-400'>Know more →</a>
                </div>

            </div>
            <div className='container my-32'>
                <p className='mb-3 font-Poppins'>See some of my work</p>
                <div className='grid md:grid-cols-2 gap-4'>

                    <div>
                        <img src={PsicoApp} alt="PsicoApp" className='rounded-xl border-slate-500 border-2 hover:scale-105 duration-500'/>
                    </div>
                    <div>
                        <img src={Food} alt="PsicoApp" className='rounded-xl border-slate-500 border-2 hover:scale-105 duration-500' />
                    </div>
                    <div>
                        <img src={Reviews} alt="PsicoApp" className='rounded-xl border-slate-500 border-2 hover:scale-105 duration-500' />
                    </div>
                    <div>
                        <img src={Menu} alt="PsicoApp" className='rounded-xl border-slate-500 border-2 hover:scale-105 duration-500' />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;