import { createSlice } from "@reduxjs/toolkit"

let productInfo = createSlice({
    name : 'User',
    initialState : [
      {id : 0, name : 'White and Black', count : 2},
      {id : 1, name : 'Grey Yordan', count : 1}
    ],
    // Redux의 state 변경 하는 방법
    // 1. state 수정해주는 함수 만든다.
    // 2. 만든 함수 export 해야함
    // 3. 원할 때 그 함수 실행해달라고 store.js 에 요청해야함
    
    // 1. state 수정해주는 함수 만들기
    reducers : { // 스펠링 틀리지 않게 주의!
      changeName(state){ // 기존 state 필요할 경우 파라미터에 넣을 수 있음
        return 'ㄴㅇ' // 수정할 내용 으로 state 값이 변경 됨
        // state은 기존 state 값임 ex:) Shim Jae Hun
      },
      countPlus(state, action){ // 기존 state 필요할 경우 파라미터에 넣을 수 있음
        // state 변경함수에 파라미터 뚫는 법
        // state[0].count += action.payload
        state[action.payload].count +=1
        console.log(action.payload)
        // 이렇게 파라미터에 값을 정해주지 않고 아래에서 더하고 싶은 값을 기재가능 a 라는 파라미터만 쓰는게 아니라 payload 라고 기재해야함
        // 파라미터 작명할때 보통 action 으로 작명 정보 변경 함수임
      }
      // 아래에 함수 또 만들수 있음
      // 1+ 말고 +10 플러스 하고 싶을때
  
    }
})
export let { changeName, countPlus } = productInfo.actions;


export default productInfo;

