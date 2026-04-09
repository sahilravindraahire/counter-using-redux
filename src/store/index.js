import {configureStore, createSlice} from "@reduxjs/toolkit"

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        increase: (state) => {
            state.value += 1
        },
        decrease: (state) => {
            state.value -= 1
        },
        reset: (state) => {
            state.value = 0
        }
    }
})

export const {increase, decrease, reset} = counterSlice.actions

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
})

export default store