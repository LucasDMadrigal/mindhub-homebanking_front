import React, { useState } from "react";
import cardFormImage from "../assets/images/imgs/card_form_image.png";
import "../styles/NewCard.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { login } from "../redux/actions/authActions";

const NewCard = () => {
  const [cardType, setCardType] = useState("");
  const [cardVariant, setCardVariant] = useState("");

  const { token } = useSelector((store) => store.auth);
  const CURRENT_URL = "http://localhost:8080/api/auth/current";
  const dispatch = useDispatch();
  const handleChangeCardType = (e) => {
    setCardType(e.target.value);
    console.log("🚀 ~ handleChangeCardType ~ e.target.value:", e.target.value)
  };

  const handleChangeCardVariant = (e) => {
    setCardVariant(e.target.value);
    console.log("🚀 ~ handleChangeCardVariant ~ e.target.value:", e.target.value)
  };

  // const resetForm = (e) =>{
  //   e.preventDefault()
  //   setCardType("")
  //   setCardVariant("")
  //   }

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      cardType:cardType,
      cardColor:cardVariant,
    };
    console.log("🚀 ~ handleSubmit ~ data:", data)

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const actualizarDatos = async () => {
      const responseCurrent = await axios.get(CURRENT_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("🚀 ~ actualizarDatos ~ responseCurrent:", responseCurrent)
      let client = responseCurrent.data;
      console.log("🚀 ~ actualizarDatos ~ responseCurrent.data:", responseCurrent.data)

      client.token = token;

      dispatch(login(client));
    }

    axios
      .post("http://localhost:8080/api/cards/current/create", data, config)
      .then((response) => {
        console.log("Card request successful:", response.data);
        // resetForm(); // Limpiar los campos del formulario después de enviar los datos
        actualizarDatos();
      })
      .catch((error) => {
        console.error("Error requesting card:", error);
      });
  };

  return (
    <div>
      <h1>Apply for a card</h1>
      <div className="form_container">
        <form action="">
          <h6>Select card type</h6>
          <select onChange={handleChangeCardType} name="type" id="type">
            <option value="" disabled selected>seleccione un tipo de tarjeta</option>
            <option value="DEBIT">DEBIT</option>
            <option value="CREDIT">CREDIT</option>
          </select>
          <h6>Select card color</h6>
          <select onChange={handleChangeCardVariant} name="color" id="color">
            <option value="" disabled selected>seleccione una variante</option>
            <option value="BLACK">BLACK</option>
            <option value="GOLD">GOLD</option>
            <option value="TITANIUM">TITANIUM</option>
          </select>
          <div className="button_form--container">
            <button onClick={handleSubmit}>Apply</button>
            <button type="button"  >Cancel</button>
          </div>
        </form>
        <div className="image--container">
          <img src={cardFormImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NewCard;
