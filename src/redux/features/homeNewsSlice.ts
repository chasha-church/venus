import { isAxiosError } from 'axios';
import {
    createAsyncThunk,
    createSlice,
    type PayloadAction,
} from '@reduxjs/toolkit';
import { RootState } from '../store';
import { newsAPI } from '../../api/newsAPI';

type NewsState = {
    pageSize: number;
    page: number;
    news: Array<NewsListItemType> | null;
    isPending: boolean;
    error: string | null;
};

export type NewsListItemType = {
    news_content_id: number;
    title: string;
    main_asset_url: string;
    created_date: string;
};

const initialState: NewsState = {
    pageSize: 3,
    page: 1,
    news: null,
    isPending: false,
    error: null,
};

export const newsSlice = createSlice({
    name: 'homeNews',
    initialState,
    reducers: {
        setPageSize: (state, action: PayloadAction<number>) => {
            state.pageSize = action.payload;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
    },
    extraReducers: (builder) => {
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
    },
});

// Asynchronous actions
type FetchNewsPayload = {
    pageSize: number;
    page: number;
};

export const fetchNews = createAsyncThunk(
    'homeNews/fetchNews',
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

// Actions
export const { setPageSize, setPage } = newsSlice.actions;

// Selectors
export const selectCurrentNews = (state: RootState) => state.homeNews.news;
export const selectNewsIsPending = (state: RootState) =>
    state.homeNews.isPending;
export const selectNewsFetchError = (state: RootState) => state.homeNews.error;
export const selectNewsPageSize = (state: RootState) => state.homeNews.pageSize;
export const selectNextNewsPage = (state: RootState) => state.homeNews.page;

// Reducer
export const homeNewsReducer = newsSlice.reducer;
