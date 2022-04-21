// redux
import { configureStore } from "@reduxjs/toolkit";
import characterSlice from "./slices/characterSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    user: userSlice,
    character: characterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
