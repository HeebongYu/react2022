import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import ContCont from "../includes/ContCont";

function Contact(){
    return (
        <>
            <Header />
            <Contents>
                <ContCont />
            </Contents>
            <Footer />
        </>
    );
};

export default Contact;