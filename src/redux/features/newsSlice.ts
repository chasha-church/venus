import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';
import { newsAPI } from '../../api/newsAPI';

type NewsState = {
    pageSize: number;
    newsPage: number;
    news: Array<NewsItemType>;
}

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
    news: [],
};

export const newsSlice = createSlice({
    name: 'news',
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
export const { } = newsSlice.actions

// Asynchronous actions
type FetchNewsPayload = {
    pageSize: number;
    page: number;
}

export const fetchNews = createAsyncThunk(
    "news/fetchNews",
    async ({ pageSize, page }: FetchNewsPayload, thunkAPI) => {
        const response = await newsAPI.getNews(pageSize, page);
        debugger;
        return response.data.results;
    }
);

// Selectors
export const selectCurrentNews = (state: RootState) => state.news.news;
export const selectNewsPageSize = (state: RootState) => state.news.pageSize;
export const selectNextNewsPage = (state: RootState) => state.news.newsPage + 1;

// Reducer
export const newsReducer = newsSlice.reducer;
