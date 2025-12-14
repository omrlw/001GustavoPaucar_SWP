import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import TreatedConditions from '../components/TreatedConditions';
import ServicesGrid from '../components/ServicesGrid';
import Testimonials from '../components/Testimonials';
import Faq from '../components/Faq';
import Location from '../components/Location';

const Home = () => (
    <>
        <Hero />
        <About />
        <TreatedConditions />
        <ServicesGrid />
        <Testimonials />
        <Faq />
        <Location />
    </>
);

export default Home;
