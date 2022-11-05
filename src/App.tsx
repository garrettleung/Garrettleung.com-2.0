import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header></Header>
        <Routes>
          <Route path="">
            
          </Route>
          <Route path="/Home">
            
          </Route>
          <Route path="/Projects">
            
          </Route>
          <Route path="/Resume">
            
          </Route>
          <Route path="/Playground">
            
          </Route>
          <Route path="/About%20me">
            
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
