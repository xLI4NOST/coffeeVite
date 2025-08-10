import {create} from "zustand/react";
import type {StateCreator} from "zustand/vanilla";

interface CounterState {
    counter: number;
}

interface CounterActions{
    increment: () => void
    decrement: () => void
    changeByMount: (value: number)=> void
}


const counterSlice: StateCreator<CounterState & CounterActions> = (set, get) =>({
    counter: 0,
    increment: () =>{
        const {counter} = get();
        set({counter: counter + 1});
    },
    decrement: () =>{
        const {counter} = get();
        set({counter: counter - 1});
    },
    changeByMount: (value: number)=> {
        const {counter} = get();
       set({counter: counter + value})
    }
})

export const useCounterStore = create<CounterState & CounterActions>(counterSlice);
export const changeByMount = (value: number) => useCounterStore.getState().changeByMount(value)
export const getCounter = () => useCounterStore.getState().counter