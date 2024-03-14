import { configureStore, createSlice } from '@reduxjs/toolkit'
import productInfo from './store/userSlice.js' // 다른곳에있는 것을 쓸때는 이렇게 import 사용할수 있음
/*
  쓰는 이유?
  컴포넌트간 state 공유가 편해진다.
*/

/*
  Redux store에 state 보관하는 법

*/ 


// 값 변수로 저장
// let user = createSlice({
//   name : 'User',
//   initialState : [
//     {id : 0, name : 'White and Black', count : 2},
//     {id : 2, name : 'Grey Yordan', count : 1}
//   ],
//   // Redux의 state 변경 하는 방법
//   // 1. state 수정해주는 함수 만든다.
//   // 2. 만든 함수 export 해야함
//   // 3. 원할 때 그 함수 실행해달라고 store.js 에 요청해야함
  
//   // 1. state 수정해주는 함수 만들기
//   reducers : { // 스펠링 틀리지 않게 주의!
//     changeName(state){ // 기존 state 필요할 경우 파라미터에 넣을 수 있음
//       return 'ㄴㅇ' // 수정할 내용 으로 state 값이 변경 됨
//       // state은 기존 state 값임 ex:) Shim Jae Hun
//     },
//     countPlus(state, action){ // 기존 state 필요할 경우 파라미터에 넣을 수 있음
//       // state 변경함수에 파라미터 뚫는 법

//       state[0].count += 'asd'
//       // 이렇게 파라미터에 값을 정해주지 않고 아래에서 더하고 싶은 값을 기재가능 a 라는 파라미터만 쓰는게 아니라 payload 라고 기재해야함
//       // 파라미터 작명할때 보통 action 으로 작명 정보 변경 함수임
//     }
//     // 아래에 함수 또 만들수 있음
//     // 1+ 말고 +10 플러스 하고 싶을때

//   }
// })


// let productInfo = createSlice({
//   name : 'productInfo',
//   initialState : [
//     {id : 0, name : 'White and Black', count : 2},
//     {id : 2, name : 'Grey Yordan', count : 1}
//   ],
//   reducers : { 
//     plusCount(state){ 
//       state[0].count += 1
//     }
//   }
//   /*
//     array/object의 경우 직접수정해도 state 변경됨
//     immer.js 자동으로 설치되어서  직접수정해도 state 변경됨
//   */ 
// })

let stock = createSlice({
  name : 'stock',
  initialState : [10,11,12]  
})


// 2.만든 함수 export
// export let { changeName, plusCount } = user.actions // 오른쪽에 있는 자료를 변수로 쉽게 처리 

// 이런 식으로 밖으로 빼놓음 함수는 여러개 넣을수 있음 오브젝트 형식으로 출력됨


// 3. 만든 함수 import 해서 사용 (이건 사용할 곳에서 해야함)

export const store = configureStore({
  reducer: {
    // 등록 하는 방법
    stock : stock.reducer,
    productInfo : productInfo.reducer,
  },
})

