import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import ReferCont from "../includes/ReferCont";
import Loading from "../basics/Loading";
import { gsap } from "gsap";

// function Reference(){
//     return (
//         <>
//             <Header color={"light"} />
//             <Contents>
//                 <Title title={["reference", "book"]} color="light" />
//                 <ReferCont color={"light"} />
//                 <Contact />
//             </Contents>
//             <Footer color={"light"} />
//         </>
//     );
// };

class Reference extends React.Component{
    state = {
        isLoading: true
    }

    referAnimation = () => {
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
                x: 0,
                y: 0,
                opacity: 1,
                delay : 1.0,
                ease: "cubic-bezier(1.000, -0.600, 1.000, -0.600)"
            });
            gsap.to(".cont__title em", {
                duration: 0.5,
                x: 0,
                y: 0,
                opacity: 1,
                delay : 1.2,
                ease: "cubic-bezier(1.000, -0.600, 1.000, -0.600)"
            });
            gsap.to(".refer__inner", {
                duration: 3,
                opacity: 1,
                delay : 2,
                ease: "cubic-bezier(1.000, -0.600, 1.000, -0.600)"
            });
        })
    }

    getRefer = () => {
        setTimeout(() => {
            console.log("두번째 시작")
            this.setState({isLoading: false});
            this.referAnimation();
        }, 1600)
    }

    componentDidMount(){
        setTimeout(() => {
            console.log("첫번째 시작")
            document.getElementById("loading").classList.remove("loading__active");
            document.querySelector("body").style.background = "var(--light_bg)";
            this.getRefer();
        }, 2000)
    }

    render(){
        const {isLoading} = this.state;

        return (
            <>
                {isLoading ? (
                    <Loading color="light" />
                    ) : (
                    <>
                        <Header color="light" />
                        <Contents>
                            <Title title={["reference", "book"]} color="light" />
                            <ReferCont color="light" />
                            <Contact />
                        </Contents>
                        <Footer color="light" />
                    </>
                )}
            </>
        )
    }
}

export default Reference;