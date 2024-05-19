import { isAxiosError } from 'axios';
import {
    createAsyncThunk,
    createSlice,
} from '@reduxjs/toolkit';
import { RootState } from '../store';
import { newsAPI } from '../../api/newsAPI';

export type NewsDetailsState = {
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

const initialState: NewsDetailsState = {
    news_content_id: 0,
    title: '',
    text: '',
    view_data: [''],
    main_asset_url: '',
    assets_url: [''],
    created_date: '',
    isPending: false,
    error: null,
};

export const newsDetailsSlice = createSlice({
    name: 'newsDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchNewsDetails.fulfilled, (state, action) => {
            state.news_content_id = action.payload.news_content_id;
            state.text = action.payload.text;
            state.title = action.payload.title;
            state.assets_url = action.payload.assets_url;
            state.main_asset_url = action.payload.main_asset_url;
            state.view_data = action.payload.view_data;
            state.created_date = action.payload.created_date;

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
export const selectCurrentNewsDetails = (state: RootState) => state.newsDetails;
export const selectNewsDetailsIsPending = (state: RootState) => state.newsDetails.isPending;
export const selectNewsDetailsFetchError = (state: RootState) => state.newsDetails.error;

// Reducer
export const newsDetailsReducer = newsDetailsSlice.reducer;
