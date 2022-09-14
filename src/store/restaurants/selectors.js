//36) Aca hago la funcion que va a comparar los nombres de los restaurantes, lo hago en selectors porque NO va a modificar el estado, solo los va a acomodar
export const selectRestaurants = (reduxState) => {
  const clonedArray = [...reduxState.restaurants.all];
  return clonedArray.sort((a, b) => a.name.localeCompare(b.name));
};
