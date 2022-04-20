import React from 'react'

function ReferCont(props) {
    return (
        <section className={`refer__cont ${props.color}`}>
            <div className="container">
                <div className="refer__inner">
                    <h2>CSS</h2>
                    <table>
                        <colgroup>
                            <col style={{width: "10%"}}/>
                            <col style={{width: "20%"}}/>
                            <col style={{width: "70%"}}/>
                        </colgroup>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>align-content</td>
                                <td>align-content 속성은 콘텐츠의 상하관계 정렬 상태를 정의합니다.</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>align-items</td>
                                <td>align-items 속성은 콘텐츠 내부의 정렬 상태를 정의합니다.</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>all</td>
                                <td>all 속성은 요소의 속성을 초기화 또는 상속을 설정합니다.</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>animation</td>
                                <td>animation 속성은 애니메이션을 설정합니다.</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>animation-delay</td>
                                <td>animation-delay 속성은 요소가 로드된 후 애니메이션이 시작될 때 까지의 시간을 나타냅니다.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
  }
  
  export default ReferCont