import React from 'react'
import { useDispatch } from 'react-redux'
import {increase, decrease, reset, togglePower} from "../store/index"
import { useSelector } from 'react-redux'

function Buttons() {
// useDispatch : Sends actions to the Redux store.
  const dispatch = useDispatch()

  const isOn = useSelector((state) => state.counter.isOn)

  return (
    <div>
      <button onClick={() => dispatch(decrease())} className={`text-2xl transition-all delay-300 mx-4 my-2 px-4 py-2 rounded-xl active:scale-95 active:bg-stone-900 ${isOn ? "bg-black text-white hover:bg-stone-900" : "bg-zinc-700 text-zinc-700"}`}>Decrease</button>
      <button onClick={() => dispatch(reset())} className={`text-2xl transition-all delay-300 mx-4 my-2 px-4 py-2 rounded-xl active:scale-95 active:bg-stone-900  ${isOn ? "bg-black text-white hover:bg-stone-900" : "bg-zinc-700 text-zinc-700"}`}>Reset</button>
      <button onClick={() => dispatch(increase())} className={`text-2xl transition-all delay-300 mx-4 my-2 px-4 py-2 rounded-xl active:scale-95 active:bg-stone-900  ${isOn ? "bg-black text-white hover:bg-stone-900" : "bg-zinc-700 text-zinc-700"}`}>Increase</button>
    </div>
  )
}

export default Buttons

/*
<button onClick={() => dispatch(decrease())} className='bg-black text-white text-2xl mx-4 my-2 px-4 py-2 rounded-xl active:scale-95 active:bg-stone-900 hover:bg-stone-900'>Decrease</button>
*/