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
  initialState : 'Shim Jae Hun'  
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
  ]
})

export const store = configureStore({
  reducer: {
    // 등록 하는 방법
    user : user.reducer,
    stock : stock.reducer,
    productInfo : productInfo.reducer
  },
})

