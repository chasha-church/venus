import { createAppAsyncThunk } from './../hooks/hooks';
import { PayloadAction, SerializedError, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { scheduleAPI } from '../../api/scheduleAPI';
import { DateHelper } from '../../utils/DateHelper';
import { isAxiosError } from 'axios';

type ScheduleState = {
    weekSchedule: WeekSchedule;
    maxPeopleToShow: number;
    currentWeek: number;
    isPending: boolean;
    fetchError: string | null;
};

export type WeekSchedule = Array<WeekDay> | null;

export type WeekDay = {
    holidays: Array<{ name: string; url: string }>;
    people: Array<{ name: string; url: string }>;
    events: Array<{ title: string; time: string }> | null;
    date: string;
    day_of_week: string;
    id: string;
};

const createDayId = (dayIndex: number): string => {
    const week = DateHelper.getWeekNumber();
    const day = (week - 1) * 7 + (dayIndex + 1);

    return `${new Date().getFullYear()}-${day}`;
};

const initialState: ScheduleState = {
    weekSchedule: null,
    maxPeopleToShow: 3,
    currentWeek: DateHelper.getWeekNumber(),
    isPending: false,
    fetchError: null,
};

export const scheduleSlice = createSlice({
    name: 'schedule',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            fetchWeekSchedule.fulfilled,
            (state, action: PayloadAction<WeekSchedule>) => {
                let schedule = action.payload;

                /* If schedule is null the map returns undefined so we add '|| null' */
                schedule =
                    schedule?.map((element, index) => {
                        return { ...element, id: createDayId(index) };
                    }) || null;

                state.weekSchedule = schedule;
                state.isPending = false;
            }
        );
        builder.addCase(fetchWeekSchedule.pending, (state, action) => {
            state.isPending = true;
        });
        builder.addCase(fetchWeekSchedule.rejected, (state, action) => {
            state.fetchError = action.payload as string;
            state.isPending = false;
        });
    },
});

// Actions
export const {} = scheduleSlice.actions;

// Asynchronous actions
export const fetchWeekSchedule = createAppAsyncThunk(
    'schedule/fetchWeekSchedule',
    async (weekNumber: number, { rejectWithValue }) => {
        try {
            const response = await scheduleAPI.getWeekSchedule(weekNumber);
            return response.data.results;
        } catch (error) {
            return rejectWithValue(
                isAxiosError(error) ? error.message : 'Server Error happened'
            );
        }
    }
);

// Selectors
export type SelectorType<T> = (state: RootState) => T;

export const selectWeekSchedule = (state: RootState) =>
    state.schedule.weekSchedule;
export const selectMaxPeopleToShow = (state: RootState) =>
    state.schedule.maxPeopleToShow;
export const selectCurrentWeek = (state: RootState) =>
    state.schedule.currentWeek;
export const selectWeekScheduleIsPending = (state: RootState) =>
    state.schedule.isPending;
export const selectWeekScheduleFetchError = (state: RootState) =>
    state.schedule.fetchError;

// Reducer
export const scheduleReducer = scheduleSlice.reducer;
