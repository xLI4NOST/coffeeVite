import {changeByMount, getCounter} from "@/model/counter.ts";


export const addTen = () =>{
    const counter = getCounter()
    counter > 0 ? changeByMount(10) : changeByMount(-10)
}