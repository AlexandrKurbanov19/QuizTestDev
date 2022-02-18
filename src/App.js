import React from "react";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import routes from "./components/route/route";
import ProgressBar from "./components/ProgressBar";
import { Routes, Route } from 'react-router';





function App() {


  return (
    <div className="main">
      <div className="container">
        <Logo />
        <ProgressBar/>
        <div className="wrapper">
        <Routes>
       {
         routes.map((item, index) => (
       <Route path={item.path} element={<item.element/>} key={index}/>  
         ))
       }

    </Routes>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
