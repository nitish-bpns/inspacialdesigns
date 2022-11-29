import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Project from './pages/Project';
import { ScrollToTop } from 'react-router-scroll-to-top';
// import Project1 from './pages/Project1';
// import Project2 from './pages/Project2';
// import Project3 from './pages/Project3';
// import Project4 from './pages/Project4';
// import Project5 from './pages/Project5';
// import Project6 from './pages/Project6';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>

        <Route path='/' exact element={<Home />}></Route>
        <Route path='/projects' element={<Project />}></Route>
        {/* <Route path='/projects/nalini' element={<Project1 />}></Route>
        <Route path='/projects/vamsi' element={<Project2 />}></Route>
        <Route path='/projects/venkatesh' element={<Project3 />}></Route>
        <Route path='/projects/venkatramana' element={<Project4 />}></Route>
        <Route path='/projects/sridhar' element={<Project5 />}></Route>
        <Route path='/projects/sridharmalini' element={<Project6 />}></Route> */}


      </Routes>
    </Router >
  );
}

export default App;
