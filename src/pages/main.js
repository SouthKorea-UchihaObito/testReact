import { useState } from 'react';
import keyboardData from '../data.js';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../components/productCard.js';
import axios from 'axios';
function Main() {
    let [product, setProduct] = useState(keyboardData)


    let [timeText, setTimeText] = useState(false);
    let [lastProduct, setLastProduct] = useState(false);

    let [clickCount, setClickCount] = useState(0);
    return (
        <main>
            <div className='mainBg'>

            </div>
            <Container className='productGroup'>
                <Row>
                    {
                        product.map((item, index) => {
                            return (
                                <ProductCard product={product[index]} index={index} key={index} />
                            )
                        })
                    }
                </Row>
            </Container>
            {timeText === true ? <p>로딩중입니다.</p> : null }
            {lastProduct === true ? <p>더 이상 상품이 존재하지 않습니다.</p> : null}
            <button onClick={() => {
                setClickCount(clickCount += 1);
                setTimeText(true);
                if(clickCount === 1){
                    axios.get('https://codingapple1.github.io/shop/data2.json')
                    .then((result) => { // 데이터 출력
                        let copy = [...product];
                        setProduct(copy.concat(result.data));
                        setTimeText(false);
                        console.log(clickCount)
    
    
                    })
                    .catch(() => { // ajax 요청 실패 할경우
                        console.log('실패')
                    })
                } else if(clickCount === 2) {
                    axios.get('https://codingapple1.github.io/shop/data3.json')
                    .then((result) => { // 데이터 출력
                        let copy = [...product];
                        setProduct(copy.concat(result.data));
                        setTimeText(false);
                        console.log(clickCount)
    
    
                    })
                    .catch(() => { // ajax 요청 실패 할경우
                        console.log('실패')
                    })
                } else {
                    setTimeText(false);
                    setLastProduct(true);
                    return ;
                }
                /* 서버로 데이터 전송하는 POST 요청 */
                // axios.post('/', {name : 'shim'}) 

                // /* 동시에 ajax 요청 여러개 한다면 */
                // Promise.all([axios.get('/url'), axios.get('/url2') ])
                // .then(()=>{
                //     2개 성공했을 시 메시지
                // })
            }}>버튼</button>
        </main>
    )
}

export default Main;