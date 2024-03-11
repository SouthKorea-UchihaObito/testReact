import { useDispatch, useSelector } from "react-redux";
import styles from "./styles/cart.module.scss"
import { changeName, countPlus, plusCount } from "../store.js";


function Cart(){
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

    // 3. 만든 함수 import 해서 사용 하려면 이것도 필요함
    let dispatch = useDispatch() // useDispatch -> store.js로 요청 보내주는 함수
   
    return (
        <div className={styles.cart}>
            <p>{storeState.productInfo[0].name}의 {storeState.productInfo[0].count}수량</p>
            <button type='button' onClick={()=>{
                dispatch(countPlus());
            }}>증가버튼</button>
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
                        <th>목록</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // storeState.productInfo.map((item, index)=>{
                        //     return (
                        //         <tr key={item.id}> 
                        //             <td>{index}</td>
                        //             <td>{item.name}</td>
                        //             <td>{item.count}</td>
                        //             <td><button type="button" onClick={()=>{
                        //                 // 3. 만든 함수 import 해서 사용
                        //                 dispatch(countPlus()); // 이렇게 사용해야함
                        //                 /*
                        //                     dispatch(state변경함수()) 이렇게 감싸서 사용
                        //                 */ 
                        //             }}>+</button></td>
                        //         </tr>
                        //     )
                        // })
                    }
                    
                </tbody>
            </table>
        </div>
    )
}

export default Cart;