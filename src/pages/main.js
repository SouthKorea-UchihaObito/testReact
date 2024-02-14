import { useState } from 'react';
import keyboardData from '../data.js';
import {Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../components/productCard.js';
import axios from 'axios';
function Main(){
    let [product, setProduct] = useState(keyboardData)
    return(
        <main>
            <div className='mainBg'>

            </div>
            <Container className='productGroup'>
                <Row>
                {
                    product.map((item, index)=>{
                    return (
                        <ProductCard product={product[index]} index={index} key={index} />
                    )
                    })
                }
                </Row>
            </Container>
            <button onClick={()=>{
                axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((result)=>{ // 데이터 출력
                    console.log(result.data)
                })
                .catch(()=>{ // ajax 요청 실패 할경우
                    console.log('실패')
                })
            }}>버튼</button>
        </main>
    )
}

export default Main;