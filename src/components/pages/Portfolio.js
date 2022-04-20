import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import PortCont from "../includes/PortCont";
import Loading from "../basics/Loading";
import { gsap } from "gsap";
import axios from 'axios';

// function Portfolio(){
//     return (
//         <>
//             <Header />
//             <Contents>
//                 <Title title={["portfolio", "site"]}/>
//                 <PortCont />
//                 <Contact />
//             </Contents>
//             <Footer />
//         </>
//     );
// };

class Portfolio extends React.Component {
    state = {
        isLoading : true,
        ports: [],
    }

    portAnimation = () => {
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
            gsap.to(".port__inner", {
                duration: 3,
                button: 0,
                opacity: 1,
                delay : 2,
                ease: "cubic-bezier(1.000, -0.600, 1.000, -0.600)"
            });
        }, 0)
    }

    getPorts = async () => {
        const {data:{data:{ports}}} = await axios.get("https://webstoryboy.github.io/dothome1/portfolio.json");
        
        this.setState({ports:ports});

        // console.log(ports)

        setTimeout(() => {
            console.log("두번째 시작")
            this.setState({isLoading: false});
            this.portAnimation();
        }, 1600)
    }

    componentDidMount(){
        setTimeout(() => {
            console.log("첫번째 시작")
            document.getElementById("loading").classList.remove("loading__active");
            this.getPorts();
        }, 2000)
    }

    render(){
        const {isLoading, ports} = this.state;

        // console.log(ports)

        return (
            <>
                {isLoading ? (
                    <Loading />
                    ) : (
                    <>
                        <Header />
                        <Contents>
                            <Title title={["portfolio", "site"]}/>
                            <PortCont port={ports} />
                            <Contact />
                        </Contents>
                        <Footer />
                    </>
                )}
            </>
        )
    }
}

export default Portfolio;