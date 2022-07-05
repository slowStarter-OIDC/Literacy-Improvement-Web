
import { createSlice } from '@reduxjs/toolkit';

const initialState = { isQuizEnd: false }; // 초기 상태 정의

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        finishQuiz: state => { state.isQuizEnd = true },
        resetQuiz: state => { state.isQuizEnd = false },
    },
});

// 비동기적인 리듀서 함수를 정의하고자 할 땐
// 객체의 프로퍼티로 extraReducers 객체를 추가한다.

// 액션과 리듀서를 export
export const { finishQuiz, resetQuiz } = quizSlice.actions; // 액션 생성함수

export default quizSlice.reducer;