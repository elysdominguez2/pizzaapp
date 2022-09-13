//16) Aca hice un formulario para agregar más pizzas, solo el esqueleto del Form y su funcion para agregar la información
//de aca voy a PizzaList.js para poner el componente ahi asi se imprime en la pantalla

import { useState } from "react";
import { useDispatch } from "react-redux"; //18)importo useDispatch
import { addPizza } from "../store/pizzas/slice"; //18) Importo desde mi slice.js

const AddPizzaForm = () => {
  const dispatch = useDispatch(); //18)creo mi const de dispatch
  const [name, setName] = useState(" ");
  const [description, setDescription] = useState(" ");
  const [image, setImage] = useState(
    // "https://syndy-content.azureedge.net/media/products/44cf0000-ff27-0003-bcdb-08d9fc37d9d1/images/AW0HA3GItENDpZ-NPK0ohvI./AADPRCf-AwBAuAjZ-Ns5yQ.1350x1350.jpg"
    "https://www.italianstylecooking.net/wp-content/uploads/2022/01/Pizza-Salami-1536x1024.jpg"
  );

  const submit = (event) => {
    event.preventDefault();

    console.log("new pizza: ", name, description, image);

    const newPizza = { name, description, image }; //18)creo una nueva constante con la nueva pizza

    dispatch(addPizza(newPizza)); //18)hago dispatch de la accion que envia la nueva pizza al store

    setName(""); //18)limpio los imputs, este y el de abajo, la descripcion - Esto continua en slice.js de PIZZAS 19)
    setDescription("");
  };

  return (
    <form onSubmit={submit}>
      <h2> Add a new pizza</h2>
      <p>
        <label>
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Description:{" "}
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Image:{" "}
          <input value={image} onChange={(e) => setImage(e.target.value)} />
        </label>
      </p>
      <p>
        <button type="submit"> Add this pizza!</button>
      </p>
    </form>
  );
};

export default AddPizzaForm;
