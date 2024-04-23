import { isAxiosError } from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';
import { newsAPI } from '../../api/newsAPI';

type NewsState = {
    pageSize: number;
    newsPage: number;
    news: Array<NewsItemType> | null;
    isPending: boolean,
    error: string | null,
}

/* TODO: Remove unused properties */
export type NewsItemType = {
    "news_content_id": number,
    "title": string,
    "text": string,
    "view_data": null, // this property goes null from backend
    "main_asset_url": string,
    "assets_url": string[],
    "created_date": string,
    "created_by_id": number,
    "updated_date": string,
    "updated_by_id": number
}

const initialState: NewsState = {
    pageSize: 3,
    newsPage: 0,
    news: null,
    isPending: false,
    error: null,
};

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchNews.fulfilled, (state, action) => {
            state.news = action.payload;
            state.isPending = false;
        })
        builder.addCase(fetchNews.pending, (state, action) => {
            state.isPending = true;
        })
        builder.addCase(fetchNews.rejected, (state, action) => {
            state.error = action.payload as string;
            state.isPending = false;
        })
    }
})

// Actions
export const { } = newsSlice.actions

// Asynchronous actions
type FetchNewsPayload = {
    pageSize: number;
    page: number;
}

export const fetchNews = createAsyncThunk(
    "news/fetchNews",
    async ({ pageSize, page }: FetchNewsPayload, { rejectWithValue }) => {
        try {
            const response = await newsAPI.getNews(pageSize, page);
            return response.data.results;
        }
        catch (error) {
            return rejectWithValue(isAxiosError(error) ? error.message : "Server Error happened");
        }
    }
);

// Selectors
export const selectCurrentNews = (state: RootState) => state.news.news;
export const selectNewsIsPending = (state: RootState) => state.news.isPending;
export const selectNewsFetchError = (state: RootState) => state.news.error;
export const selectNewsPageSize = (state: RootState) => state.news.pageSize;
export const selectNextNewsPage = (state: RootState) => state.news.newsPage + 1;

// Reducer
export const newsReducer = newsSlice.reducer;
