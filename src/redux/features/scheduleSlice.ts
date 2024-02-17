import { createAppAsyncThunk } from './../hooks/hooks';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';
import { scheduleAPI } from '../../api/scheduleAPI';
import { DateHelper } from '../../utils/DateHelper';

type ScheduleState = {
    weekSchedule: Array<WeekDay> | null;
    maxPeopleToShow: number;
    currentWeek: number;
}

export type WeekDay = {
    "holidays": Array<{ "name": string; "url": string; }>;
    "people": Array<{ "name": string; "url": string; }>;
    "events": Array<{ "title": string; "time": string; }> | null;
    "date": string;
    "day_of_week": string;
    "id": string;
}

const createDayId = (dayIndex: number): string => {
    const week = DateHelper.getWeekNumber();
    const day = (week - 1) * 7 + (dayIndex + 1);
    
    return `${new Date().getFullYear()}-${day}`;
}

const initialState: ScheduleState = {
    weekSchedule: null,
    maxPeopleToShow: 3,
    currentWeek: DateHelper.getWeekNumber(),
};

export const scheduleSlice = createSlice({
    name: 'schedule',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchWeekSchedule.fulfilled, (state, action) => {
            let schedule: Array<WeekDay> = action.payload;
            schedule = schedule.map((element, index) => {
                return { ...element, id: createDayId(index) }
            });
            state.weekSchedule = schedule;
        })
    }
})

// Actions
export const {} = scheduleSlice.actions

// Asynchronous actions
export const fetchWeekSchedule = createAppAsyncThunk(
    "schedule/fetchWeekSchedule",
    async (weekNumber: number, thunkAPI) => {
        try {
            const response = await scheduleAPI.getWeekSchedule(weekNumber);
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
export const selectCurrentWeek = (state: RootState) => state.schedule.currentWeek;

// Reducer
export const scheduleReducer = scheduleSlice.reducer;
