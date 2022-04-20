import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import MainCont from "../includes/MainCont";
import Loading from "../basics/Loading";
import { gsap } from "gsap";

// function Main(){
//     return (
//         <>
//             <Header />
//             <Contents>
//                 <MainCont />
//             </Contents>
//             <Footer />
//         </>
//     );
// };

class Main extends React.Component {
    state = {
        isLoading: true
    }

    mainAnimation = () => {
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
            gsap.to(".main__inner > div:nth-child(1)", {
                duration: 0.4,
                opacity: 1,
                y: 0,
                delay: 0.8,
                ease: "cubic-bezier(0.540, 0.545, 0.515, 0.550)"
            });
            gsap.to(".main__inner > div:nth-child(2)", {
                duration: 0.4,
                opacity: 1,
                y: 0,
                delay: 1.1,
                ease: "cubic-bezier(0.540, 0.545, 0.515, 0.550)"
            });
            gsap.to(".main__inner > div:nth-child(3)", {
                duration: 0.4,
                opacity: 1,
                y: 0,
                delay: 1.4,
                ease: "cubic-bezier(0.540, 0.545, 0.515, 0.550)"
            });
            gsap.to(".main__inner > div:nth-child(4)", {
                duration: 0.4,
                opacity: 1,
                y: 0,
                delay: 1.7,
                ease: "cubic-bezier(0.540, 0.545, 0.515, 0.550)"
            });
        })
    }

    getMain = () => {
        setTimeout(() => {
            console.log("두번째 시작")
            this.setState({isLoading: false});
            this.mainAnimation();
        }, 1600)
    }

    componentDidMount(){
        setTimeout(() => {
            console.log("첫번째 시작")
            document.getElementById("loading").classList.remove("loading__active");
            this.getMain();
        }, 2000)
    }

    render(){
        const {isLoading} = this.state;

        return (
            <>
                {isLoading ? (
                    <Loading />
                    ) : (
                    <>
                        <Header />
                        <Contents>
                            <MainCont />
                        </Contents>
                        <Footer />
                    </>
                )}
            </>
        )
    }
}

export default Main;