import React from "react";
import Topic1 from "./BlogFolder/Topic1";
import Topic2 from "./BlogFolder/Topic2";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "./Pages/Home";
import Page2 from "./Pages/Page2";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Browse =()=>{
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Topic1" element={<Topic1/>} />  
      </Routes>    
    </Router>
    </>
}

export default Browse;