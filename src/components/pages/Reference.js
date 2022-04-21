import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import ReferCont from "../includes/ReferCont";
import Loading from "../basics/Loading";
import { gsap } from "gsap";
import axios from "axios";

class Reference extends React.Component{
    state = {
        isLoading: true,
        refers: [],
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

    getRefers = async () => {
        const {
            data:{
                data:{htmlRefer}
            }
        } = await axios.get("https://webstoryboy.github.io/react2022/src/assets/json/refer.json");
        this.setState({refers:htmlRefer, isLoading: false});
        this.mainAnimation();
    }

    componentDidMount(){
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active");
            document.querySelector("body").style.background = "var(--light_bg)";
            this.getRefers();
        }, 2000)
    }

    render(){
        const {isLoading, refers} = this.state;

        return (
            <>
                {isLoading ? (
                    <Loading color="light" />
                    ) : (
                    <>
                        <Header color="light" />
                        <Contents>
                            <Title title={["reference", "book"]} color="light" />
                            <section className="refer__cont light">
                                <div className="container">
                                    <div className="refer__inner">
                                        <h2>CSS</h2>
                                        <ul className="refer__list light">
                                            {refers.map((refer) => (
                                                <ReferCont
                                                    key={refer.id}
                                                    id={refer.id}
                                                    title={refer.title}
                                                    desc={refer.desc}
                                                    desc2={refer.desc2}
                                                    element={refer.element}
                                                    tag={refer.tag}
                                                    version={refer.version}
                                                    view={refer.view}
                                                    use={refer.use}
                                                    image={refer.image}
                                                    link={refer.link}
                                                    Definition={refer.Definition}
                                                    Accessibility={refer.Accessibility}
                                                    CrossBroswing={refer.CrossBroswing}
                                                    Related={refer.Related}
                                                    mdn={refer.mdn}
                                                    w3c={refer.w3c}
                                                />
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </section>
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