import React from 'react'
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import { gsap } from "gsap";

// function DefinitionInfo(Definition){
//     return (
//         <li>{Definition}</li>
//     )
// }

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
                                        <div>
                                            <table className='table'>
                                                <colgroup>
                                                    <col style={{width: "20%"}}/>
                                                    <col style={{width: "80%"}}/>
                                                </colgroup>
                                                <thead>
                                                    <tr>
                                                        <th>특징</th>
                                                        <th>설명</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th>요소</th>
                                                        <td>{location.state.element}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>닫는 태그</th>
                                                        <td>{location.state.tag}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>버전</th>
                                                        <td>{location.state.version}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>시각적 표현</th>
                                                        <td>{location.state.view}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>사용성</th>
                                                        <td>{location.state.use}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className='definition'>
                                            <div className='title'>정의(Definition)</div>
                                            <ul>
                                                <li>{location.state.Definition[0]}</li>
                                                <li>{location.state.Definition[1]}</li>
                                                <li>{location.state.Definition[2]}</li>
                                                <li>{location.state.Definition[3]}</li>
                                                <li>{location.state.Definition[4]}</li>
                                                <li>{location.state.Definition[5]}</li>
                                                <li>{location.state.Definition[6]}</li>
                                            </ul>
                                        </div>
                                        <div className='accessibility'>
                                            <div className='title'>접근성(Accessibility)</div>
                                            <ul>
                                                <li>{location.state.Accessibility[0]}</li>
                                                <li>{location.state.Accessibility[1]}</li>
                                            </ul>
                                        </div>
                                        <div className='reference'>
                                            <div className='title'>참고 사이트(Reference)</div>
                                            <ul>
                                                <li><a href={location.state.mdn} target="blank">mdn</a></li>
                                                <li><a href={location.state.w3c} target="blank">w3c</a></li>
                                            </ul>
                                        </div>
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