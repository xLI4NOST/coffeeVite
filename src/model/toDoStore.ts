import type {StateCreator} from "zustand/vanilla";
import {create} from "zustand/react";
import {devtools} from "zustand/middleware";

export interface ToDoInt {
    'title': string;
    isComplete: boolean;
}

export interface ToDoState {
    todos: ToDoInt[]
}

export interface ToDoActions {
    addTodo: (value: string) => void;
    changesIsComplete: (index: number) => void;

}

const toDoSlice:StateCreator<ToDoState & ToDoActions , [['zustand/devtools', never]]> =(set, get)=>({
    todos: [],
    addTodo:  (value: string) => {
        const {todos} = get()
        set({todos: [...todos, {title: value, isComplete: false}]}, false, 'addTodo')
    },
    changesIsComplete:  (index: number) => {
        const {todos} = get()
        const newTodos: ToDoInt[] =[
            ...todos.slice(0, index),
            {...todos[index], isComplete: !todos[index].isComplete},
            ...todos.slice(index + 1)
        ];
       set({todos: newTodos})
    },
})

export const useTodoStore = create<ToDoState & ToDoActions> ()(devtools(toDoSlice))