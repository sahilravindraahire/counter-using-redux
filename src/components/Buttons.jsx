import React from 'react'
import { useDispatch } from 'react-redux'
import {increase, decrease, reset} from "../store/index"

function Buttons() {

  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(decrease())} className='bg-black text-white text-2xl mx-4 my-2 px-4 py-2 rounded-xl active:scale-95 active:bg-stone-900 hover:bg-stone-900'>Decrease</button>
      <button onClick={() => dispatch(reset())} className='bg-black text-white text-2xl mx-4 my-2 px-4 py-2 rounded-xl active:scale-95 active:bg-stone-900 hover:bg-stone-900'>Reset</button>
      <button onClick={() => dispatch(increase())} className='bg-black text-white text-2xl mx-4 my-2 px-4 py-2 rounded-xl active:scale-95 active:bg-stone-900 hover:bg-stone-900'>Increase</button>
    </div>
  )
}

export default Buttons
