import React, { useRef } from 'react';

import { Navbar } from "./components/Navbar";
import StartPage from './components/StartPage';
import DiseaseDetection from './components/DiseaseDetection';
import AboutPage from './components/AboutPage';
import TeamPage from './components/TeamPage';
import Footer from './components/Footer';

const Home = ()=>{
    return (
        <>
            <Navbar/>
            <StartPage/>
            <DiseaseDetection/>
            <AboutPage/>
            <TeamPage/>
            <Footer/>
        </>
    )
}
export default Home;