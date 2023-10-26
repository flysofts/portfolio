import logo from './logo.svg';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Skill from './components/Skill';





function App() {
  return (
    <>
    <div>
  <Home></Home>
  <About></About>
  <Skill></Skill>
    </div>
  

    {/* <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/skill" element={<Skill/>}/>
    </Routes> */}
    </>
  );
}

export default App;
