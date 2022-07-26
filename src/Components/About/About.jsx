import React from 'react';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';

const About = () => {
    return (
        <div className='h-full bg-gray-800 py-3 text-gray-300'>
            <Nav/>
            <div className='container mx-auto md:w-2/5 mt-24'>
                <h1 className='text-4xl font-Poppins font-bold'>About me_</h1>
                <p className='font-Poppins mt-2'>Hi, my name is Pablo, i'm full stack javascript developer based in Córdoba, Argentina. I am
                    35 years old and i studied physics in National University of Córdoba. I worked as professor of physics
                    and mathematics for some years until I decided to change for computer science, something that always
                    was with me, but as second option, because i always was someone passionate about science. 
                    In physics and mathematics I developed a very analytical mindset that helps me to think and work
                    in a very organized and structured way. The tools I've learned these years add me a new manner of working,
                    very handy and more practical. 
                    In the other hand, the software skills i developed as professor helps me to have a good and nice 
                </p>
            </div>
            <Footer/>
            
        </div>
    );
};

export default About;