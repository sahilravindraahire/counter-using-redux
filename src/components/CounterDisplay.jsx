import React from 'react'
import { useSelector } from 'react-redux'

function CounterDisplay() {

  // useSelector: Reads data from the Redux store.
  const count = useSelector((state) => state.counter.value) 
  const isOn = useSelector((state) => state.counter.isOn)

  return (
    <div className={`text-6xl font-black px-4 py-2 w-50 text-center transition-all duration-300 rounded-xl my-7  ${isOn ? "bg-stone-400 font-black" : "bg-black text-black"}`}>
      {count}
    </div>
  )
}

export default CounterDisplay
