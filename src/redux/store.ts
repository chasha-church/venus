import { newsReducer } from './features/newsSlice';
import { configureStore } from "@reduxjs/toolkit";
import { sidebarReducer } from "./features/sidebarSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    news: newsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
