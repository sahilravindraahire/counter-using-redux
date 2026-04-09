import React from 'react'
import { useSelector } from 'react-redux'

function CounterDisplay() {

  const count = useSelector((state) => state.counter.value)

  return (
    <div className='text-6xl font-black px-4 py-2 w-50 text-center rounded-xl my-7 bg-stone-400'>
      {count}
    </div>
  )
}

export default CounterDisplay
