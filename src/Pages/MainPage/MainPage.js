import React from 'react';
import ProductSection from "./sections/Product/ProductSection";
import AboutSection from "./sections/About/AboutSection";
import Header from "./sections/Header";
import Advantage from "./sections/Advantage";


const MainPage = () => {
    return (
        <div>
            <Header/>
            <AboutSection/>
            <Advantage/>
            <ProductSection/>
        </div>
    )
}

export default MainPage;
