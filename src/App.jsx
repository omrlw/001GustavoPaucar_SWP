import React from 'react';
import About from './components/About';
import Faq from './components/Faq';
import Hero from './components/Hero';
import Layout from './components/layout/Layout';
import Location from './components/Location';
import ServicesGrid from './components/ServicesGrid';
import Testimonials from './components/Testimonials';
import TreatedConditions from './components/TreatedConditions';

const App = () => (
  <Layout>
    <Hero />
    <About />
    <TreatedConditions />
    <ServicesGrid />
    <Testimonials />
    <Faq />
    <Location />
  </Layout>
);

export default App;
