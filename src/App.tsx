import './App.css'
import {useCounterStore} from "@/model/counter.ts";
import {addTen} from "@/helpers/addTen.ts";

function App() {

  const {counter, increment, decrement} = useCounterStore()

  return <div>


    <button onClick={increment}>increment</button>
    <span>{counter}</span>
    <button onClick={decrement}>decrement</button>

    <button onClick={addTen}>addTen</button>
  </div>


}

export default App
