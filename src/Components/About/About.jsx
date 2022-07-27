import React from 'react';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import { FaReact } from 'react-icons/fa'
import {SiMongodb, SiJava,SiRedux,SiCsharp,SiPhp,SiKotlin, SiNodedotjs, SiExpress, SiJsonwebtokens, SiSocketdotio, SiJavascript, SiMomenteo, SiPostgresql,SiHtml5, SiCss3 } from 'react-icons/si'
import ComputerAbout from '../../img/ComputerAbout.jpg'
const About = () => {
    return (
        <div className='h-full bg-gray-800 py-3 text-gray-300 font-Poppins'>
            <Nav />
            <div className='container mx-auto md:w-2/5 mt-24'>
                <h1 className='text-4xl  font-bold'>About me<span className='animate-pulse'>_</span></h1>
                <p className='mt-4'>&nbsp;&nbsp;&nbsp;Hi, my name is Pablo, i'm full stack javascript developer based in Córdoba, Argentina. I am
                    35 years old and i studied physics in National University of Córdoba. I worked as professor of physics
                    and mathematics for some years until I decided to change for computer science, something that always
                    was with me, but as second option, because i always was someone passionate about science.
                    In physics and mathematics I developed a very analytical mindset that helps me to think and work
                    in a very organized and structured way. The tools I've learned these years add me a new manner of working,
                    very handy and more practical.
                    <br></br>
                    &nbsp;&nbsp;&nbsp;On the other hand, the soft skills i developed as professor helps me to have a good and nice treat with people,
                    good communication and teamwork, active listening, among others.
                </p>
                <p>&nbsp;&nbsp;&nbsp;Other of my strenghts is that I'm always learning new stuff and looking for ways to improve the
                    performance of the things I developed
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;In my free time I like to read books of science, currently I'm fascinated about neuroscience,
                    with works of <a className='font-bold' href="https://en.wikipedia.org/wiki/Antonio_Damasio">Antonio Damasio</a>, or listen Podcasts of
                    <a className='font-bold' href="https://www.youtube.com/c/AndrewHubermanLab"> Andrew Huberman.</a> I think that to understand how
                    the mind works is the only way of forestelling the machines prevails over humans.
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;Besides, I like to do sports, running every day at least one hour, that keeps my head light
                    and produces me a better performance in my work and all aspects of my life.
                </p>
            </div>
            <div className='container mx-auto md:w-3/5 my-52'>
                <div className='grid xl:grid-cols-2 xl:gap-x-16'>
                    <div className=''>
                    &nbsp;&nbsp;&nbsp;Computers are in my life since 1994 with a pentium one. Since then I've never lived without a computer or an internet connection.
                        Currently I work designing web applications using one of the main technologies in the industry, JavaScript. I love JavaScript because
                        allows you to do whatever you can imagine, even out of the browser. I use techonlogies like :
                        <div className=' grid grid-cols-4 gap-y-7 text-5xl my-5 mx-auto text-slate-400 '>
                            <div>
                                <SiHtml5 className='mx-auto' />
                            </div>
                            <div>
                                <SiCss3 className='mx-auto' />
                            </div>
                            <div>
                                <SiJavascript className='mx-auto' />
                            </div>
                            <div>
                                <SiJava className='mx-auto'/>
                            </div>
                            <div>
                                <SiCsharp className='mx-auto'/>
                            </div>
                            <div>
                                <SiPhp className='mx-auto'/>
                            </div>
                            <div>
                                <SiKotlin className='mx-auto'/>
                            </div>
                            <div className=''>
                                <FaReact className='mx-auto' />
                            </div>
                            <div>
                                <SiRedux className='mx-auto' />
                            </div>
                            <div>
                                <SiNodedotjs className='mx-auto' />
                            </div>
                            <div>
                                <SiExpress className='mx-auto' />
                            </div>
                            <div>
                                <SiJsonwebtokens className='mx-auto' />
                            </div>
                            <div>
                                <SiSocketdotio className='mx-auto' />
                            </div>
                            <div>
                                <SiMomenteo className='mx-auto' />
                            </div>
                            <div>
                                <SiPostgresql className='mx-auto' />
                            </div>
                            <div>
                                <SiMongodb className='mx-auto'/>
                            </div>

                        </div>


                    </div>
                    <div className=''>
                        <img src={ComputerAbout} alt="Computer" className='h-full object-cover object-center rounded-md'/>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    );
};

export default About;