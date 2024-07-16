import { isAxiosError } from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { newsAPI } from '../../api/newsAPI';

export type NewsDetailsType = {
    news_content_id: number;
    title: string;
    text: string;
    view_data: Array<string>;
    main_asset_url: string;
    assets_url: Array<string>;
    created_date: string;
    isPending: boolean;
    error: string | null;
};

export type NewsStateType = {
    pageSize: number;
    page: number;
    news: Array<NewsDetailsType> | null;
    isPending: boolean;
    error: string | null;

    newsDetails: NewsDetailsType | null;
    newsDetailsIsPending: boolean;
    newsDetailsError: string | null;
};

const initialState: NewsStateType = {
    pageSize: 50,
    page: 1,
    news: null,
    isPending: false,
    error: null,

    newsDetails: null,
    newsDetailsIsPending: false,
    newsDetailsError: null,
};

export type NewsListItemType = {
    news_content_id: number;
    title: string;
    main_asset_url: string;
    created_date: string;
};

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Fetch news
        builder.addCase(fetchNews.fulfilled, (state, action) => {
            state.news = action.payload;
            state.isPending = false;
        });
        builder.addCase(fetchNews.pending, (state, action) => {
            state.isPending = true;
        });
        builder.addCase(fetchNews.rejected, (state, action) => {
            state.error = action.payload as string;
            state.isPending = false;
        });

        // Fetch news details
        builder.addCase(fetchNewsDetails.fulfilled, (state, action) => {
            state.newsDetails = action.payload;
            state.isPending = false;
        });
        builder.addCase(fetchNewsDetails.pending, (state, action) => {
            state.isPending = true;
        });
        builder.addCase(fetchNewsDetails.rejected, (state, action) => {
            state.error = action.payload as string;
            state.isPending = false;
        });
    },
});

// Asynchronous actions

type FetchNewsPayload = {
    pageSize: number;
    page: number;
};

export const fetchNews = createAsyncThunk(
    'news/fetchNews',
    async ({ pageSize, page }: FetchNewsPayload, { rejectWithValue }) => {
        try {
            const response = await newsAPI.getNews(pageSize, page);
            return response.data.results;
        } catch (error) {
            return rejectWithValue(
                isAxiosError(error) ? error.message : 'Server Error happened'
            );
        }
    }
);

type FetchNewsDetailsPayload = {
    newsContentId: string;
};

export const fetchNewsDetails = createAsyncThunk(
    'news/fetchNewsDetails',
    async ({ newsContentId }: FetchNewsDetailsPayload, { rejectWithValue }) => {
        try {
            const response = await newsAPI.getNewsDetails(newsContentId);
            return response.data;
        } catch (error) {
            return rejectWithValue(
                isAxiosError(error) ? error.message : 'Server Error happened'
            );
        }
    }
);

// Selectors
export const selectNewsPageSize = (state: RootState) => state.news.pageSize;
export const selectNextNewsPage = (state: RootState) => state.news.page;

export const selectCurrentNews = (state: RootState) => state.news.news;
export const selectNewsIsPending = (state: RootState) => state.news.isPending;
export const selectNewsFetchError = (state: RootState) => state.news.error;

export const selectNewsDetails = (state: RootState) => state.news.newsDetails;
export const selectNewsDetailsIsPending = (state: RootState) =>
    state.news.newsDetailsIsPending;
export const selectNewsDetailsFetchError = (state: RootState) =>
    state.news.newsDetailsError;

// Reducer
export const newsReducer = newsSlice.reducer;
