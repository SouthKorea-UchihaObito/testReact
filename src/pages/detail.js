import { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import * as S from './detail.styles.js'
import TabContent from "../components/detail/tabContent.jsx";
// props 문법도 사용 가능 자바스크립트 에서도 사용가능해서 장점
let YellowBtn = styled.button`
    padding:10px;
    background:${ props => props.bg };
    color:${props => props.bg == 'blue' ? 'white' : 'block'};
`

// 기존 스타일 복사 가능
// let NewBtn = styled.button(YellowBtn)`

// `
function Detail(props){
    // mount , update시 여기 코드 실행됨
    // useEffect(()=>{
    //     // 디버깅을 위해 개발모드 때는 2번 실행될수 있음
    //     let countTime = setTimeout(() => {
    //         if(count > 0){
    //             setCount(count -=1)
    //         }
    //         return;
    //     }, 2000);
    //     console.log(count);
    //     return()=>{
    //         clearTimeout(countTime);
    //     }
    // })
    let [count, setCount] = useState(2);
    let [alert, setAlert] = useState(true);
    useEffect(()=>{
        let countTime = setTimeout(() => {
            setCount(count-=1)
            setAlert(false);
        }, 2000);
        return()=>{
            clearTimeout(countTime)
        }
    })
    let [inputValue, setInputValue] = useState('')

    useEffect(()=>{
        if(isNaN(inputValue) == true){
            alert('NO');  
        }
    }, [inputValue])

    // 현재 url 파라미터 주소 출력
    let { id } = useParams();
 
    let result = props.product.find((x)=>{
        return x.id == id
    })
    

    const [tabObj, setTabObj] = useState([
        {id : 0, title : '상품정보', content: "상품정보컨텐츠"},
        {id : 1, title : '배송정책', content: "배송정책컨텐츠"},
        {id : 2, title : '환불내용', content: "환불내용컨텐츠"}
    ]);
    const [tabNum, setTabNum] = useState(0);
   
    return (
        <Container>
            {/*             
            <YellowBtn bg='yellow'>버튼</YellowBtn>
            <YellowBtn bg='blue'>버튼</YellowBtn> */}
            {/* {count == 0 ? null : <div className="alert alertWarning">{count}초이내 구매시 할인</div>} */}
            { alert == true ? <div className="alert alertWarning">2초이내 구매시 할인</div> : null}
            
            <Row>
                <Col sm={8}><img src={process.env.PUBLIC_URL + "/keyboard" + (result.id + 1) + ".jpg"} width="100%"/></Col>
                <Col sm={4}>
                    <h4 className="pt-5">{result.title}</h4>
                    <p>{result.content}</p>
                    <p>{result.price}</p>
                    <button className="btn btn-danger">주문</button>
                </Col>
            </Row>
            <input type="text" onChange={(e)=>{
                setInputValue(e.target.value)
            }}></input>
            <S.TabWrap>
                {
                    tabObj.map((item, index)=>{
                        return (
                            <button className={tabNum === index ? 'active' : ''} type="button" key={item.id} onClick={()=>{
                                setTabNum(index);
                            }}>
                                <span>{item.title}</span>
                            </button>
                        )
                    })
                }
            </S.TabWrap>
            <TabContent tabObj={tabObj} tabNum={tabNum} />
        </Container>
    )
}


export default Detail;