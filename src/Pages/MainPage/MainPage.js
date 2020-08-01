import React from 'react';
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./sections/Header";
import Banner from "./sections/Banner/Banner";
import AboutSection from "./sections/About/AboutSection";
import AdvantageSection from "./sections/Advantage";
import OurObject from "./sections/ourObject/OurObject";
import ProductSection from "./sections/Product/ProductSection";
import Partner from "./sections/Partner/Partner";
import OurWorks from "./sections/ourWorks/OurWorks";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";

const MainPage = () => {
    return (
        <main id="MainPage">
            <Header/>
            <Wrapper>
                <Banner/>
                <AboutSection/>
                <AdvantageSection/>
                <OurObject/>
                <ProductSection/>
                <OurWorks/>
                <Partner/>
                <Contact/>
            </Wrapper>
            <Footer/>
        </main>
    )
}

export default MainPage;
