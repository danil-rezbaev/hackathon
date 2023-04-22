import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Job = {
    title: string,
    maxQuantity: number,
    unit: string,
    currentQuantity: number,
}

export type Order = {
    id: number,
    jobs: Job[],
}

const initialState: Order = {
    id: 1,
    jobs: [
        {title: 'Монтаж Г-образной опоры', maxQuantity: 1024, unit: 'шт', currentQuantity: 100},
        {title: 'Монтаж закладных', maxQuantity: 1024, unit: 'шт', currentQuantity: 0},
        {title: 'Монтаж дорожных знаков на Г-образную опору', maxQuantity: 1024, unit: 'шт', currentQuantity: 0},
        {title: 'Установка знаков дорожных', maxQuantity: 1024, unit: 'шт', currentQuantity: 0},
        {title: 'Монтаж Световозвращателя дорожного, Тип КДЗ-Б-I', maxQuantity: 1024, unit: 'шт', currentQuantity: 0},
        {title: 'Установка пешеходного ограждения, секции длиной 2 м', maxQuantity: 1024, unit: 'шт', currentQuantity: 0},
        {title: 'Установка столбика дорожного сигнального С3П H - 0,75 м', maxQuantity: 1024, unit: 'шт', currentQuantity: 0},
        {title: 'Устройство присыпных берм', maxQuantity: 2480, unit: 'м3', currentQuantity: 0},
        {title: 'Монтаж ЗИП', maxQuantity: 743, unit: 'м2', currentQuantity: 0},
        {title: 'Установка стоек ЗИП (Р217)', maxQuantity: 1024, unit: 'шт', currentQuantity: 0},
    ],
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
        }
    }
})

export const { addQuantity } = jobsSlice.actions

export default jobsSlice.reducer