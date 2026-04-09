
import CounterDisplay from "./components/CounterDisplay"
import Buttons from "./components/Buttons"
import OnOffBtn from "./components/OnOffBtn"


function App() {
  

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center bg-slate-300">
        
        <div className="px-4 py-2 bg-zinc-700 flex flex-col items-center justify-center rounded-xl mt-5">
          <OnOffBtn/>
          <CounterDisplay/>
          <div>
            <Buttons/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
