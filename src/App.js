import React from "react";
import "./App.css";

import './components/Header.js';
import Header from "./components/Header.js";
import PhotoCard from './components/PhotoCard/PhotoCard'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <section>
        <PhotoCard/>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
