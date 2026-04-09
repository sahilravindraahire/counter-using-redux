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
        },
        togglePower: (state) => {
            state.isOn = !state.isOn
        }
    }
})

export const {increase, decrease, reset, togglePower} = counterSlice.actions

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
})

export default store