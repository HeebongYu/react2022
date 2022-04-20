import React from 'react'

function ContInfo({text}){
    return <div>{text}</div>
}

const contText = [
    {text : "You are"},
    {text : "already"},
    {text : "doing well."},
]
       
function ContCont(){
    return(
        <section className="cont__cont">
            <div className="cont__inner">
                <div className='text'>
                    {contText.map(txt => (
                        <ContInfo text={txt.text} key={txt.text} />
                    ))}
                </div>
                <p className='desc'>
                    같은 목표를 위해 달려갈 웹 퍼블리셔 & 프론트 앤드 개발자를 모집합니다. 관심 있는 분들은 카카오톡 또는 카페에 문의해주세요.
                </p>
            </div>
        </section>
    )
}
export default ContCont;