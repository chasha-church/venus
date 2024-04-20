import { scheduleReducer } from './features/scheduleSlice';
import { newsReducer } from './features/newsSlice';
import { configureStore } from '@reduxjs/toolkit';
import { sidebarReducer } from './features/sidebarSlice';

export const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        news: newsReducer,
        schedule: scheduleReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
