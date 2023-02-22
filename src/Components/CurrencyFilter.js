import React from "react";
import style from "./CurrencyFilter.module.css";

const CurrencyFilter = () => {
  return (
    <div className={style.Currency}>
      <b>ВАЛЮТА</b>
      <br></br>
      <div className={style.Buttons}>
        <button className={style.butRub}>RUB</button>
        <button className={style.butUSD}>USD</button>
        <button className={style.butEUR}>EUR</button>
      </div>
    </div>
  );
};

export default CurrencyFilter;
