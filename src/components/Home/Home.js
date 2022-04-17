import React from 'react';
import Banner from '../Banner/Banner';
import ContactMe from '../ContactMe/ContactMe';
import Footer from '../Footer/Footer';
import MyServices from '../MyServices/MyServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MyServices></MyServices>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </div>
    );
};

export default Home;
