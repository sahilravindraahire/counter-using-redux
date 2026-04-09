import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import {togglePower} from "../store/index"

function OnOffBtn() {

  const dispatch = useDispatch()
  const isOn = useSelector((state) => state.counter.isOn)

  return (
    <div>
      <button onClick={() => dispatch(togglePower())} className={`px-6 py-2 mt-8 rounded-xl font-bold text-lg mb-4 transition-all duration-300 ${isOn ? "bg-green-500 text-white hover:bg-green-600": "bg-red-500 text-white hover:bg-red-600"}`}>
        {isOn ? "ON" : "OFF"}
      </button>
    </div>
  )
}

export default OnOffBtn
