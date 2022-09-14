// 5) Ponemos lo siguiente para este caso que vamos a crear
//dos slices reducers

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/slice";
import pizzasReducer from "./pizzas/slice";
import restaurantReducer from "./restaurants/slice";

const store = configureStore({
  reducer: {
    pizzas: pizzasReducer,
    user: userReducer,
    restaurants: restaurantReducer, //35) Agrego este Reducer y arriba lo  importo, sigue el paso 36) con el archivo de RESTAURANTS/SELECTORS.js
  },
});

export default store;

//6) Y ahora creo las carpetas que ahi puse, que serian:
// dentro de STORE ---> PIZZAS y USER(minuscula), dentro de cada una hago
// los siguientes archivos ---> slice.js y selectors.js

//7)Sigue dentro del slice.js que esta dentro de USER
