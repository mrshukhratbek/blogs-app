import { createSlice } from '@reduxjs/toolkit';

const initialState = { loading: false };

export const { action: commonActions, reducer: commonReducer } = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    }
  }
});
