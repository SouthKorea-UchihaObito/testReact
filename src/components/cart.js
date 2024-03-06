import styles from "./styles/cart.module.scss"

function Cart(){

    // Redux
    /*
        Props 없이 state 공유 가능!
        
    */

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
                    <tr>
                        <td>1</td>
                        <td>안녕</td>
                        <td>안녕</td>
                        <td>안녕하세요</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Cart;