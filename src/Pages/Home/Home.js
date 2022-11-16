import React from 'react';
import Faq from '../FAQ/Faq';
import Footer from '../Footer/Footer';
import Product from '../Product/Product';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Product></Product>
            <Faq></Faq>
            <Footer></Footer>
        </div>
    );
};

export default Home;