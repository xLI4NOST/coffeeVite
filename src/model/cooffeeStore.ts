import type {CoffeeType} from "@/types/coffeeType.ts";
import type {StateCreator} from "zustand/vanilla";
import {create} from "zustand";
import {devtools} from "zustand/middleware";
import axios from "axios";
import {toast} from "react-toastify";


const BASE_URL = 'http://purpleschool.ru/coffee-api/';

export interface coffeeState {
    coffeeItems: CoffeeType[]
    getCoffeeItems: () => Promise<void>
}

const getCoffeeSlice: StateCreator<coffeeState, [['zustand/devtools', never]]> = (set) => ({
    coffeeItems: [],
    getCoffeeItems: async () => {
        try {
            const {data} = await axios.get(BASE_URL)
            set({coffeeItems: data})
            toast.success('Кофе загружено')
        } catch (e) {
            toast.error('Что то не так')
        }
    }
})

export const useCoffeeStore = create<coffeeState>()(devtools(getCoffeeSlice))