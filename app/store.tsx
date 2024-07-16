import { configureStore } from '@reduxjs/toolkit';
import cryptoSlice from './src/slices/cryptoSlice';

export const store = configureStore({
  reducer: {
    crypto: cryptoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
