import React from 'react';
import ProductSection from "./sections/Product/ProductSection";
import AboutSection from "./sections/About/AboutSection";
import Header from "./sections/Header";
import AdvantageSection from "./sections/Advantage";
import Banner from "./sections/Banner/Banner";
import Wrapper from "./components/Wrapper/Wrapper";
import Contact from "./sections/Contact/Contact";



const MainPage = () => {
    return (
        <main id="MainPage">
            <Header/>
            <Wrapper>
                <Banner/>
                <AboutSection/>
                <AdvantageSection/>
                <ProductSection/>
                <Contact/>
            </Wrapper>
        </main>
    )
}

export default MainPage;
