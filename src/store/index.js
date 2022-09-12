// 5) Ponemos lo siguiente para este caso que vamos a crear
//dos slices reducers

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/slice";
import pizzasReducer from "./pizzas/slice";

const store = configureStore({
  reducer: {
    pizzas: pizzasReducer,
    user: userReducer,
  },
});

export default store;

//6) Y ahora creo las carpetas que ahi puse, que serian:
// dentro de STORE ---> PIZZAS y USER(minuscula), dentro de cada una hago
// los siguientes archivos ---> slice.js y selectors.js

//7)Sigue dentro del slice.js que esta dentro de USER
