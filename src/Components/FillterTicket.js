import React from "react";
import style from "./FillterTicket.module.css";

const FillterTicket = () => {
  return (
    <div>
      <div class={style.FillterTicket}>
        <b>КОЛИЧЕСТВО ПЕРЕСАДОК</b>
        <br></br>
        <input type="checkbox" id="1" /> Все
        <br></br>
        <input type="checkbox" id="2" /> Без пересадок
        <br></br>
        <input type="checkbox" id="3" /> 1 пересадка
        <br></br>
        <input type="checkbox" id="4" /> 2 пересадки
        <br></br>
        <input type="checkbox" id="5" /> 3 пересадки
      </div>
    </div>
  );
};

export default FillterTicket;
