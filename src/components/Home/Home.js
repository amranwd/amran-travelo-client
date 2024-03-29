import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Cta from '../Cta/Cta';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Cta></Cta>
            <Contact></Contact>
        </div>
    );
};

export default Home;