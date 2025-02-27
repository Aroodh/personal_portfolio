import logo from './logo.svg';
import './App.css';
import { Route,Router,Routes,BrowserRouter } from 'react-router-dom';
import Home from './Component/Home.js';
import About from './Component/About.js';
import Education from './Component/Education.js';
import Contact from './Component/Contact.js';
import Project from './Component/Project.js';
import Experience from './Component/Experience.js';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/education' element={<Education/>}/>
          <Route path='/experience' element={<Experience/>}/>
          <Route path='/projects' element={<Project/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
