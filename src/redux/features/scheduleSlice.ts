import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';
import { newsAPI } from '../../api/newsAPI';

type ScheduleState = {
}

const initialState: ScheduleState = {
    pageSize: 3,
    newsPage: 0,
    news: [],
};

export const scheduleSlice = createSlice({
    name: 'schedule',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchNews.fulfilled, (state, action) => {
            state.news = action.payload;
            state.newsPage += 1;
        })
    }
})

// Actions
export const { } = scheduleSlice.actions

// Asynchronous actions
type FetchNewsPayload = {
    pageSize: number;
    page: number;
}

export const fetchNews = createAsyncThunk(
    "news/fetchNews",
    async ({ pageSize, page }: FetchNewsPayload, thunkAPI) => {
        const response = await newsAPI.getNews(pageSize, page);
        return response.data.results;
    }
);

// Selectors
// export const selectCurrentNews = (state: RootState) => state.news.news;

// Reducer
export const scheduleReducer = scheduleSlice.reducer;
