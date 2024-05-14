import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface SidebarNewsState {
    sidebarNewsExpanded: boolean;
    newsContentId: number;
}

const initialState: SidebarNewsState = {
    sidebarNewsExpanded: false,
    newsContentId: 0,
};

export const sidebarNewsSlice = createSlice({
    name: 'sidebarNews',
    initialState,
    reducers: {
        setSidebarNewsExpanded: (state, action: PayloadAction<boolean>) => {
            state.sidebarNewsExpanded = action.payload;
        },
        setNewsContentId: (state, action: PayloadAction<number>) => {
            state.newsContentId = action.payload;
        },
    },
});

// Actions
export const { setSidebarNewsExpanded, setNewsContentId } =
    sidebarNewsSlice.actions;

// Selectors
export const selectSidebarNewsExpanded = (state: RootState) =>
    state.sidebarNews.sidebarNewsExpanded;
export const selectNewsContentId = (state: RootState) =>
    state.sidebarNews.newsContentId;

// Reducer
export const sidebarNewsReducer = sidebarNewsSlice.reducer;
