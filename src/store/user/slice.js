//7) aca vamos a hardocrear porque no tenemos API pero en
//otra ocacion puede que estemos llamando una API

import { createSlice } from "@reduxjs/toolkit";

//siempre comenzaremos con un initialState
const initialState = {
  name: "Helva",
  id: 42,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;

//7) Voy a hacer lo mismo para pizzas/slice.js alla vamos