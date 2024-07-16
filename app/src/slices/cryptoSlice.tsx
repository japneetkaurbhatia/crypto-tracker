import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CryptoState {
  currentCode: string;
}

const initialState: CryptoState = {
  currentCode: 'BTC',
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setcurrentCode(state, action: PayloadAction<string>) {
      state.currentCode = action.payload;
    },
  },
});

export const { setcurrentCode } = cryptoSlice.actions;
export default cryptoSlice.reducer;
