import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store';
import { newsAPI } from '../../api/newsAPI';

type NewsState = {
    pageSize: number;
    newsPage: number;
    news: Array<NewsType>;
}

type NewsType = {
    id: number;
    caption: string;
    image: string;
}

const initialState: NewsState = {
    pageSize: 3,
    newsPage: 0,
    news: [],
};

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        // setSidebarExpanded: (state, action: PayloadAction<boolean>) => {
        //     state.sidebarExpanded = !action.payload;
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchNews.fulfilled, (state, action) => {
            state.news = action.payload;
            state.newsPage += 1;
        })
    }
})

// Actions
export const {  } = newsSlice.actions

// Asynchronous actions

type FetchNewsPayload = {
    pageSize: number;
    page: number;
}

export const fetchNews = createAsyncThunk(
    "news/fetchNews",
    async ( {pageSize, page} : FetchNewsPayload , thunkAPI) => {
        // const response = await newsAPI.getNews(pageSize, page);
        // return response.data;
        debugger;
        const mockData = [
            {
                id: 1,
                caption: "News caption 1",
                image: "news-image 1",
            },
            {
                id: 2,
                caption: "News caption 2",
                image: "news-image 2",
            },
            {
                id: 3,
                caption: "News caption 3",
                image: "news-image 3",
            }
        ]
        return mockData;
    }
);

// Selectors
export const selectCurrentNews = (state: RootState) => state.news.news;
export const selectNewsPageSize = (state: RootState) => state.news.pageSize;
export const selectNextNewsPage = (state: RootState) => state.news.newsPage + 1;

// Reducer
export const newsReducer = newsSlice.reducer;