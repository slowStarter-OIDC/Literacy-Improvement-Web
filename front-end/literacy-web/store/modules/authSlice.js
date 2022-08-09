import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLogin: false,
    email: "",
}; // 초기 상태 정의

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.email = action.payload;
            state.isLogin = true
        },
        logoutUser: (state) => {
            state.email = "";
            state.isLogin = false
        }
    },
});

// 비동기적인 리듀서 함수를 정의하고자 할 땐
// 객체의 프로퍼티로 extraReducers 객체를 추가한다.

// 액션과 리듀서를 export
export const { loginUser, logoutUser } = authSlice.actions; // 액션 생성함수

export default authSlice.reducer;