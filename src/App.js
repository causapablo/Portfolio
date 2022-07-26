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
