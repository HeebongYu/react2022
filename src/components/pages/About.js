import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import AboutCont from "../includes/AboutCont";

function About(){
    return (
        <>
            <Header color={"light"} />
            <Contents>
                <Title title={["about", "me"]} color="light" />
                <AboutCont color={"light"} />
                <Contact />
            </Contents>
            <Footer color={"light"} />
        </>
    );
};

export default About;