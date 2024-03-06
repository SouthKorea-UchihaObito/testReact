import { useSelector } from "react-redux";
import styles from "./styles/cart.module.scss"

function Cart(){

    // Redux
    /*
        Props 없이 state 공유 가능!
        
        Redux Store의 state 꺼내는 법

    */

    // 변수로 일반적으로 선언
    let storeState = useSelector((storeState)=>{ // Redux store 가져옴
        // return 앞에 있는 storeState는 store안에 있던 모든 state가 됩니다.
        return storeState
        // return storeState.user <- 이런식으로 특정 항목만 따로 쓸수도 있다.
    }) 
    console.log(storeState.productInfo);
    return (
        <div className={styles.cart}>
            <table>
                <caption>상품목록</caption>
                <colgroup>
                    <col width={'25%'} />
                    <col width={'25%'} />
                    <col width={'25%'} />
                    <col width={'25%'} />
                </colgroup>
                <thead>
                    <tr>
                        <th>1</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        storeState.productInfo.map((item, index)=>{
                            return (
                                <tr key={item.id}> 
                                    <td>{index}</td>
                                    <td>{item.name}</td>
                                    <td>{item.count}</td>
                                    <td><button type="button">변경하기</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Cart;