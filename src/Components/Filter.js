import React from "react";
import FillterTicket from "./FillterTicket";
import CurrencyFilter from "./CurrencyFilter";
import style from "./Filter.module.css";

const Filter = ({ currency, changeCurrency }) => {
  return (
    <div className={style.Filter}>
      <CurrencyFilter currency={currency} changeCurrency={changeCurrency} />
      <FillterTicket />
    </div>
  );
};

export default Filter;
