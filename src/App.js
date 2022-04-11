import { Route, Routes } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ThemeProvider} from '@mui/material/styles';
import CustomTheme from './CustomTheme.js'
import "./css/App.css";

function App() {
  return (
  <ThemeProvider theme={CustomTheme}>
    <React.Fragment>
      <CssBaseline />
      <Navbar />
        <Routes>
          <Route exact path="/" element ={<Home />}/> 
          <Route exact path="About" element={<About />}/> 
          <Route exact path="Projects" element={<Projects />}/> 
          <Route exact path="Contact" element={<Contact />}/> 
        </Routes>
    </React.Fragment>
  </ThemeProvider>
  );
}

export default App;
