import React from 'react';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import PsicoApp from '../../img/PsicoApp.png';

const Projects = () => {
    return (
        <div className='h-full bg-gray-800 py-3 text-gray-300 font-Poppins'>
            <Nav />
            <div className='container mx-auto md:w-1/2 lg:w-2/5 mt-24'>
                <h1 className='text-center mb-5 text-5xl font-bold'><a href="https://psico-app.vercel.app/">Psico Health App</a><span className='animate-pulse'>_</span></h1>
                <div>
                    <h1 className='text-3xl font-bold mb-2'>Description<span className='animate-pulse'>_</span></h1>
                    <p>&nbsp;&nbsp;&nbsp;Web application with 3 entries, one for customers, patients, other for 
                        psychologists and other for admins. In each sections the customer can manage his account according
                        his preferences.  
                    </p>
                    <h1 className='text-3xl font-bold mt-5 mb-2'>Skills<spa className='animate-pulse' n>_</spa></h1>
                    <div className='mb-5'>
                        <ul className='list-disc ml-5'>
                            <li>React</li>
                            <li>Redux</li>
                            <li>Material/UI</li>
                            <li>Tailwind</li>
                            <li>Chakra</li>
                            <li>MomentJs</li>
                            <li>NodeJs</li>
                            <li>ExpressJS</li>
                            <li>JasonWebToken</li>
                            <li>Mercado Pago API</li>
                            <li>Sequelize</li>
                            <li>PostgreSQL</li>

                        </ul>
                    </div>
                    <h1 className='text-3xl font-bold mb-2'>More details<span className='animate-pulse'>_</span></h1>
                    <p>&nbsp;&nbsp;&nbsp;We created this platform to connect patients with psychologists.
                        It has a landing page where it shows the features of the service, FAQ's
                        and testimonials from customers. There's a view in which the patience
                        can search a psychologist. Also, in the list of psychologists the customer
                        can filter by specialization, years of experience or gender.
                        Besides, you can make an appointment, pay or cancel the date.
                        In the section of messages, the patience can chat with his favorites doctors.
                        The area for psychologists hast similar features, managing the account according
                        his preferences.
                        Also, there's an admin area, in which the admin can see metrics and manage the whole
                        website.</p>
                </div>
                <div>
                    <img src={PsicoApp} alt="psicoapp" className='rounded-md my-6' />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Projects;