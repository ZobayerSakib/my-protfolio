import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Projects></Projects>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;