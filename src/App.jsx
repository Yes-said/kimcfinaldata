import React from 'react';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Documentation from './Components/Documentation';
import Dashboard from './Components/Dashboard';
import Results from './Components/Results';
import Courses from './Components/Courses';
import Students from './Components/Students';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <div className="columns">
          <div className="column is-2">
            <Sidebar />
           
          </div>
          <div className="column">
            <Routes>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/documentation" component={Documentation} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/results" component={Results} />
              <Route path="/courses" component={Courses} />
              <Route path="/students" component={Students} />
              
              </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
