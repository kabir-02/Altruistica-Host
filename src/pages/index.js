import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Features from '../components/Features'
import {Leaderboard} from '../components/Leaderboard'
import Testimonials from '../components/Impact'
import Demo from '../components/FAQs'
import Contact from '../components/Contact'
import {Chatbot} from '../components/Chatbot/index.js';
const Home = () => {
    console.log(window.location.pathname);
    return (
       <>
       <Chatbot/>
       <HeroSection />
       <About />
       <Features />
       <Leaderboard />
       <Testimonials />
       <Demo />
       <Contact />
       </>
    )
}

export default Home
