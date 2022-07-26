import React from 'react';
import profile from '../../img/ProfilePicture.jpg';
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { AiOutlineCopyright } from 'react-icons/ai';
const Footer = () => {
    return (
        <div>
            <div className='container mt-32 text-center w-96 space-y-5'>

                <p className='text-3xl font-Poppins font-semibold'>Contact me_</p>
                <p>Hello there! Do you have any interesting idea that you think I can provide value or just want to
                    talk something about technology and science? Just send me and email.
                </p>
                <div className=''>
                    <div className='flex items-center justify-center'>
                        <div className='relative '>
                            <img src={profile} alt="profile" className='rounded-full w-8' />
                            <div className='h-1 w-1 bg-[#7DCE13] absolute bottom-0 rounded-full left-6'></div>
                        </div>

                        <p className='text-base font-Poppins font-bold ml-4 inline-flex'>Estimated reply time:</p><span className=' text-base font-Inter ml-1'>within a day</span>
                    </div>
                </div>
                <p className='border-2 border-slate-500 bg-gray-50 text-black font-semibold w-64 rounded-md m-auto mt-4 font-Poppins py-2'>causapablo@gmail.com</p>

            </div>
            <div className='mt-32'>
                <div className='flex justify-between w-56 mx-auto'>
                    <BsInstagram className='text-3xl text-slate-600' />
                    <BsLinkedin className='text-3xl text-slate-600' />
                    <BsGithub className='text-3xl text-slate-600' />
                </div>
                <div className='flex justify-center items-center text-slate-600 text-md'>
                    <div>
                        <AiOutlineCopyright className='mx-1' />
                    </div>
                    <span>All rights reserved - By Augustus Pablo</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;