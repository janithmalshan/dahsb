import React from 'react';
import './App.css';
import ContentBar from "./components/ContentBar";
import Content from "./components/Content";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <ContentBar/>
            <Content/>
        </div>
    );
}

export default App;
