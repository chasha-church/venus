import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';
import { scheduleAPI } from '../../api/scheduleAPI';

type ScheduleState = {
    weekSchedule: Array<WeekDay> | null;
    maxPeopleToShow: number;
}

export type WeekDay = {
    "holidays": Array<{ "name": string; "url": string; }>;
    "people": Array<{ "name": string; "url": string; }>;
    "events": Array<{ "title": string; "time": string; }> | null;
}

const initialState: ScheduleState = {
    weekSchedule: null,
    maxPeopleToShow: 3,
};

export const scheduleSlice = createSlice({
    name: 'schedule',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchWeekSchedule.fulfilled, (state, action) => {
            state.weekSchedule = action.payload;
        })
    }
})

// Actions
export const { } = scheduleSlice.actions

// Asynchronous actions
export const fetchWeekSchedule = createAsyncThunk(
    "schedule/fetchWeekSchedule",
    async (_, thunkAPI) => {
        try {
            const response = await scheduleAPI.getWeekSchedule(6);
            return response.data.results;
        }
        catch (error) {
            return null;
        }
    }
);

// Selectors
export const selectWeekSchedule = (state: RootState) => state.schedule.weekSchedule;
export const selectMaxPeopleToShow = (state: RootState) => state.schedule.maxPeopleToShow;

// Reducer
export const scheduleReducer = scheduleSlice.reducer;
