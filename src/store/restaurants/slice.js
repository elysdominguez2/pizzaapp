//30)Cree todo este nuevo slice para los restaurantes,  y ahora voy a crear un nuevo compponente llamado RestaurantList que liste los retaurantes x nombre alfabeticamnente(sorted.) y agregarlo al App component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  all: [
    {
      name: "Sotto Pizza",
      id: 56642,
      pizzas: [67283, 357311],
    },
    {
      name: "I Pazzi",
      id: 56643,
      pizzas: [161235],
    },
    {
      name: "Pizza Napoli",
      id: 56644,
      pizzas: [161235, 357311],
    },
    {
      name: "Eatmosfera",
      id: 56645,
      pizzas: [67283, 161235],
    },
  ],
};

export const restaurantSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {},
});

export const {} = restaurantSlice.actions;

export default restaurantSlice.reducer;
