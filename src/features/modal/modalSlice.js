import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    room: null
  },
  reducers: {
    addRoom: (state, action) => {
      const {id, type, image, description, name, price, size, capacity, pets, breakfast, extras} = action.payload
      state.room = {
        id: id,
        type: type,
        image: image,
        description:description,
        name: name,
        price: price,
        size: size,
        capacity: capacity,
        pets: pets,
        breakfast: breakfast,
        extras: extras,
      }
    },
    emptyRoom: (state, action) => {
      state.room = null
    },
  },
});

export const { addRoom, emptyRoom } = modalSlice.actions;

export const selectRoom = state => state.modal.room;

export default modalSlice.reducer;
