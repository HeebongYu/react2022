import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import AboutCont from "../includes/AboutCont";
import Loading from "../basics/Loading";
import { gsap } from "gsap";

// function About(){
//     return (
//         <>
//             <Header color={"light"} />
//             <Contents>
//                 <Title title={["about", "me"]} color="light" />
//                 <AboutCont color={"light"} />
//                 <Contact />
//             </Contents>
//             <Footer color={"light"} />
//         </>
//     );
// };

class About extends React.Component {
    state = {
        isLoading: true
    }

    aboutAnimation = () => {
        setTimeout(() => {
            gsap.to("#header", {
                duration: 0.4,
                top: 0,
                ease: "cubic-bezier(1.000, -0.600, 1.000, -0.600)"
            });
            gsap.to("#footer", {
                duration: 0.4,
                bottom: 0,
                ease: "cubic-bezier(1.000, -0.600, 1.000, -0.600)"
            });
            gsap.to(".cont__title strong", {
                duration: 0.5,
                opacity: 1,
                x: 0,
                y: 0,
                delay : 1,
                ease: "cubic-bezier(1.000, -0.600, 1.000, -0.600)"
            });
            gsap.to(".cont__title em", {
                duration: 0.5,
                opacity: 1,
                x: 0,
                y: 0,
                delay : 1.2,
                ease: "cubic-bezier(1.000, -0.600, 1.000, -0.600)"
            });
            gsap.to(".about__inner", {
                duration: 3,
                opacity: 1,
                delay : 2,
                ease: "cubic-bezier(1.000, -0.600, 1.000, -0.600)"
            });
        })
    }

    getAbout = () => {
        setTimeout(() => {
            console.log("두번째 시작")
            this.setState({isLoading: false});
            this.aboutAnimation();
        }, 1600)
    }

    componentDidMount(){
        setTimeout(() => {
            console.log("첫번째 시작")
            document.getElementById("loading").classList.remove("loading__active");
            document.querySelector("body").style.background = "var(--light_bg)";
            this.getAbout();
        }, 2000)
    }

    render(){
        const {isLoading} = this.state;

        return (
            <>
                {isLoading ? (
                    <Loading color={"light"} />
                    ) : (
                    <>
                        <Header color={"light"} />
                        <Contents>
                            <Title title={["about", "me"]} color="light" />
                            <AboutCont color={"light"} />
                            <Contact />
                        </Contents>
                        <Footer color={"light"} />
                    </>
                )}
            </>
        )
    }
}

export default About;