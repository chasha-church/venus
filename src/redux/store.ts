import { scheduleReducer } from './features/scheduleSlice';
import { homeNewsReducer } from './features/homeNewsSlice';
import { configureStore } from '@reduxjs/toolkit';
import { sidebarReducer } from './features/sidebarSlice';
import { newsReducer } from './features/newsSlice';

export const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        homeNews: homeNewsReducer,
        news: newsReducer,
        schedule: scheduleReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
