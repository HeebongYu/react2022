import React from 'react'
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import { gsap } from "gsap";

class ReferDetail extends React.Component {
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
            gsap.to(".refer__inner", {
                duration: 3,
                opacity: 1,
                delay : 2,
                ease: "cubic-bezier(1.000, -0.600, 1.000, -0.600)"
            });
        })
    }
    
    componentDidMount(){
        this.referAnimation()
        document.querySelector("body").style.background = "var(--light_bg)";
    }

    render(){
        return (
            <>
                <Header color="light" />
                <Contents>
                    <section>
                        <div className='refer__cont light'>
                            <div className='container'>
                                <div className='refer__inner'>

                                </div>
                            </div>
                        </div>
                    </section>
                </Contents>
                <Footer color="light" />
            </>
        )
    }
}

export default ReferDetail