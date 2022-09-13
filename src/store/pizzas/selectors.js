// 13) Aca voy a crear un selector para que se comunique con la app, apunta a .allPizzas porque tengo un array ahi en mi slice
// export const selectPizzas = (reduxState) => reduxState.pizzas.allPizzas; // <----- ESTO LO COMENTÉ EN EL PASO 15) porque necesito hacer un .sort para que las pizzas se ordenen segun más compradas entonces va a quedar como la opcion de abajo

//15) Cambie el selectPizzas con un .sort para poder acomodar en 1er lugar la mas comprada y asi sucesivamente.
export const selectPizzas = (reduxState) => {
  const clonedArray = [...reduxState.pizzas.allPizzas];
  return clonedArray.sort((a, b) => b.bought - a.bought);
};

//16)Voy a agregar un componente de AddPizzaForm.js para hacer un componente que agregue una pizza
//asi que voy a seguir ahi adentro con ese paso.
