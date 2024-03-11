import { configureStore, createSlice } from '@reduxjs/toolkit'
/*
  쓰는 이유?
  컴포넌트간 state 공유가 편해진다.
*/

/*
  Redux store에 state 보관하는 법

*/ 


// 값 변수로 저장
let user = createSlice({
  name : 'User',
  initialState : 'Shim Jae Hun',
  // Redux의 state 변경 하는 방법
  // 1. state 수정해주는 함수 만든다.
  // 2. 만든 함수 export 해야함
  // 3. 원할 때 그 함수 실행해달라고 store.js 에 요청해야함
  
  // 1. state 수정해주는 함수 만들기
  reducers : { // 스펠링 틀리지 않게 주의!
    changeName(state){ // 기존 state 필요할 경우 파라미터에 넣을 수 있음
      return 'ㄴㅇ' // 수정할 내용 으로 state 값이 변경 됨
      // state은 기존 state 값임 ex:) Shim Jae Hun
    }
    // 아래에 함수 또 만들수 있음
  }
})




let stock = createSlice({
  name : 'stock',
  initialState : [10,11,12]  
})

let productInfo = createSlice({
  name : 'productInfo',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers : {
    countPlus(state){
      return 'asdsa'
    }
  }
})

// 2.만든 함수 export
export let { changeName, countPlus } = user.actions // 오른쪽에 있는 자료를 변수로 쉽게 처리 
// 이런 식으로 밖으로 빼놓음 함수는 여러개 넣을수 있음 오브젝트 형식으로 출력됨


// 3. 만든 함수 import 해서 사용 (이건 사용할 곳에서 해야함)

export const store = configureStore({
  reducer: {
    // 등록 하는 방법
    user : user.reducer,
    stock : stock.reducer,
    productInfo : productInfo.reducer
  },
})

