import './App.css'
import { Input } from "@/components/ui/input"
import {Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {useCounterStore} from "@/model/counter.ts";

import type {ToDoInt} from "@/model/toDoStore.ts";
import {useTodoStore} from "@/model/toDoStore.ts";
import {useState} from "react";

function App() {
// const todos:ToDoInt[];
  const {addTodo, changesIsComplete, todos} = useTodoStore()
  const [value, setValue] = useState<string>("")

  return <div>
    <Input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className="w-[300px]"
        onKeyDown={e=>{
          e.key === "Enter" && addTodo(value)
        }}
    />


    {todos.map((todo, index) => (
        <Card key={index} className="p-[16px] w-[300px] h-[250px] gap-[8px] justify-center">
          <CardHeader>

          </CardHeader>
            <CardContent>
                <p>{todo.title}</p>
                <input type={'checkbox'} checked={todo.isComplete} onChange={() => changesIsComplete(index)}/>
            </CardContent>

            {/*<CardFooter>*/}
            {/*    <p>Card Footer</p>*/}
            {/*</CardFooter>*/}
        </Card>
    ))}

  </div>


}

export default App
