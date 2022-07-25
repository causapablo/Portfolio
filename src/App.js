import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects'
function App() {
  return (
   <Routes>
    <Route path = '/' element = {<Home/>}/>
    <Route path = '/about' element = {<About/>}/>
    <Route path = '/projects' element = {<Projects/>}/>
   </Routes>

  );
}

export default App;
/*  <body className='bg-gray-100 sm:bg-yellow-300  md:bg-green-600 lg:bg-blue-600 xl:bg-cyan-900'>
<div className='grid lg:grid-cols-2'>
  <div className='px-8 py-10 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 xl:space-y-8 '>
    <img src={logo} alt='logo' className='h-6 sm:h-8 lg:h-14' />
    <img src={playa} alt='Woman working on the beach' className='lg:hidden mt-6 rounded-xl shadow-xl sm:mt-8 sm: h-64 sm:w-full sm:object-cover object-center md:h-80' />
    <h1 className='mt-6 text-2xl font-bold text-gray-900 sm:mt-8  lg:text-5xl xl:text-6xl'>You can work anywhere.
      <br className='hidden lg:inline'></br>
      <span className='text-indigo-500'>Take advange of it</span></h1>
    <p className='mt-2 text-gray-700 sm:mt-4 sm:text-xl'>Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some
      nice weather even when you're not on vacation.</p>
    <div className='mt-4 sm:mt-6'>
      <a className='bg-indigo-400 px-5 py-3 shadow-lg uppercase tracking-wide font-semibold text-sm sm:text-base text-white inline-block rounded-md' href='http://www.google.com'>Book your scape</a>
    </div>
  </div>
  <div className='hidden lg:block relative'>
    <img className='absolute inset-0 w-full h-full object-cover object-center' src={playa} alt='Woman working on the beach' />
  </div>
</div>



</body> */ 