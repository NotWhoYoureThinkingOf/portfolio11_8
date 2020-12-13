import { createSlice } from '@reduxjs/toolkit';

export const backgroundSlice = createSlice({
  name: 'background',
  initialState: {
    image: 'black'
  },
  reducers: {
    addBackground: (state, action) => {
      const {image} = action.payload
      state.image = `${image}`
    },
    emptyBackground: (state, action) => {
      state.image = null
    },
  },
});

export const { addBackground, emptyBackground } = backgroundSlice.actions;

export const selectBackground = state => state.background.image;

export default backgroundSlice.reducer;
