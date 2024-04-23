import { scheduleReducer } from './features/scheduleSlice';
import { newsReducer } from './features/newsSlice';
import { configureStore } from '@reduxjs/toolkit';
import { sidebarReducer } from './features/sidebarSlice';
import { sidebarNewsReducer } from './features/sidebarNewsSlice';

export const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        news: newsReducer,
        schedule: scheduleReducer,
        sidebarNews: sidebarNewsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
