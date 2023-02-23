import React from "react";
import style from "./CurrencyFilter.module.css";

const CurrencyFilter = ({ changeCurrency, currency }) => {
  return (
    <div className={style.Currency}>
      <b>ВАЛЮТА</b>
      <br></br>
      <div className={style.Buttons}>
        <button
          className={`${style.butRub} 
            ${currency === "rub" ? style.activ_currency : null}`}
          onClick={() => changeCurrency("rub")}
        >
          RUB
        </button>
        <button className={style.butUSD} onClick={() => changeCurrency("usd")}>
          USD
        </button>
        <button className={style.butEUR} onClick={() => changeCurrency("eur")}>
          EUR
        </button>
      </div>
    </div>
  );
};

export default CurrencyFilter;
