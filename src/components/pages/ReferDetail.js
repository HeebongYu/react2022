import React from 'react'
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import { gsap } from "gsap";

class ReferDetail extends React.Component {
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
            gsap.to(".refer__inner", {
                duration: 3,
                opacity: 1,
                delay : 2,
                ease: "cubic-bezier(1.000, -0.600, 1.000, -0.600)"
            });
        })
    }

    componentDidMount(){
        const {location, history} = this.props;
        if(location.state === undefined){
            history.push("/reference");
        }
        this.mainAnimation();
    }

    render(){
        const {location} = this.props;

        if(location.state === undefined){
            return <div>잘못된 페이지입니다.</div>
        } else {
            return (
                <>
                    <Header color="light" />
                    <Contents>
                        <section className="refer__cont light">
                            <div className="container">
                                <div className="refer__inner">
                                    <div className='refer__table'>
                                        <h3>{location.state.title}</h3>
                                        <p>{location.state.desc}</p>
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
}

export default ReferDetail