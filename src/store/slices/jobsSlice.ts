import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import jobsHistorySlice from "./jobsHistorySlice";

export type Job = {
    title: string,
    maxQuantity: number,
    unit: string,
    currentQuantity: number,
}

export type Order = {
    id: number,
    jobs: Job[],
    isCompleted: boolean,
}

const initialState: Order = {
    id: 1,
    jobs: [
        {title: 'Монтаж Г-образной опоры', maxQuantity: 1024, unit: 'шт', currentQuantity: 1024},
        {title: 'Монтаж закладных', maxQuantity: 1024, unit: 'шт', currentQuantity: 1024},
        {title: 'Монтаж дорожных знаков на Г-образную опору', maxQuantity: 1024, unit: 'шт', currentQuantity: 1024},
        {title: 'Установка знаков дорожных', maxQuantity: 1024, unit: 'шт', currentQuantity: 1024},
        {title: 'Монтаж Световозвращателя дорожного, Тип КДЗ-Б-I', maxQuantity: 1024, unit: 'шт', currentQuantity: 1024},
        {title: 'Установка пешеходного ограждения, секции длиной 2 м', maxQuantity: 1024, unit: 'шт', currentQuantity: 1024},
        {title: 'Установка столбика дорожного сигнального С3П H - 0,75 м', maxQuantity: 1024, unit: 'шт', currentQuantity: 1024},
        {title: 'Устройство присыпных берм', maxQuantity: 2480, unit: 'м3', currentQuantity: 2200},
        {title: 'Монтаж ЗИП', maxQuantity: 743, unit: 'м2', currentQuantity: 743},
        {title: 'Установка стоек ЗИП (Р217)', maxQuantity: 1024, unit: 'шт', currentQuantity: 1024},
    ],
    isCompleted: false,
}


const jobsSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        addQuantity(state, action: PayloadAction<number[]>) {
            const [index, quantity] = action.payload

            state.jobs[index].currentQuantity += quantity; 
            if (state.jobs[index].currentQuantity > state.jobs[index].maxQuantity) {
                state.jobs[index].currentQuantity = state.jobs[index].maxQuantity
            }
            console.log(state.jobs);
        },
        setCompletion(state) {
            state.isCompleted = true;
        }
    }
})

export const { addQuantity,setCompletion } = jobsSlice.actions

export default jobsSlice.reducer