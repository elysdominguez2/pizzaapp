//7) aca vamos a hardocrear porque no tenemos API pero en
//otra ocacion puede que estemos llamando una API

import { createSlice, current } from "@reduxjs/toolkit";

//siempre comenzaremos con un initialState
const initialState = {
  name: "Helva",
  id: 42,
  favorites: [67283, 357311], //20)Agrego los favortos, aca los hardcoreo por ahora, <--- continua en 21) en PizzaList
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleFavorites: (state, action) => {
      //25)Agrego aca el action y en el console.log de abajo para chequear que se estan imprimiendo cada vez que apreto el boton en la consola el mensaje junto con el action que me muestra el id.
      //22)Agregando una new case al reducer e importandolo abajo, recordar que esto esta en el paso 11 de mis papeles <-- Sigue en paso 23) en PizzaList
      console.log("Hello from userReducer", action); //25)este console.log chequea como explico arriba.
      console.log("state", current(state)); //26)si quiero hacer console.log del STATE debo poner current(state) e importarlo arriba como se ve junto con el createSlice, esto es para chequear que hay dentro del state
      //26)Ahora creo la lógica para agregar o sacar el corazon de favorito aca abajo y LEE porque esta comentado el newFavoriteArray en la misma funcio comentada
      const id = action.payload;

      // const newFavoritesArray = state.user.favorites.includes(id) ? state.user.favorites.filter(favoriteId => favoriteId !== id) : [...state.user.favorites, id];//26)Esta la comenté para que me de cuenta que NO hay que usar .user(comparar las dos constantes, una lo tiene y la otra no, YA estoy dentro de USER por eso no lo llamo, eso lo hago en los SELECTORS porque estoy fuera del state)
      const newFavoritesArray = state.favorites.includes(id)
        ? state.favorites.filter((favoriteId) => favoriteId !== id)
        : [...state.favorites, id];

      console.log("new Array", newFavoritesArray);

      state.favorites = newFavoritesArray; //27) Finalmente agrego esta linea para hacer update de los datos y puedo ver como funcionan los botones
    },
  },
});

export const { toggleFavorites } = userSlice.actions;

export default userSlice.reducer;

//7) Voy a hacer lo mismo para pizzas/slice.js alla vamos
