import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
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
        </Container>
    )
}
export default Detail;