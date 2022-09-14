import { useSelector } from "react-redux";
import { selectRestaurants } from "../store/restaurants/selectors";

//32) Cree esto solo la funcion y la llamo y ahora lo agrego a App.js (voy para alla con el paso 33))
function RestaurantList() {
  const restaurants = useSelector(selectRestaurants);
  return (
    <div>
      <h1>Restaurants</h1>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantList;
//34) Ahora completo con todo lo que me esta pidiendo en este aacaso mapear los restaurantes por nombre, ademas importo useSelector y selectRestaurants(store/restaurants/selectors)
//34)Sigue en STORE index.js con el numero 35)
