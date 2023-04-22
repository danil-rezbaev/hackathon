import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Job } from "./jobsSlice";

export type HistoryEntry = {
    job: Job,
    date: string,
    quanity: number,
}

export type History = {
    entries: HistoryEntry[];
}

const initialState: History = {
    entries: [
        {
            job: {
                title: 'Монтаж Г-образной опоры',
                currentQuantity: 100,
                maxQuantity: 1024,
                unit: 'шт',
            },
            date: new Date().toLocaleDateString(),
            quanity: 100,
        }
    ]
}

const jobsHistorySlice = createSlice({
    name: 'jobsHistory',
    initialState,
    reducers: {
        createEntry(state, action: PayloadAction<HistoryEntry>) {
            state.entries.push(action.payload);
        }
    }
})

export const {createEntry} = jobsHistorySlice.actions

export default jobsHistorySlice.reducer