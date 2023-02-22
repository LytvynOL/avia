import React from "react";
import FillterTicket from "./FillterTicket";
import CurrencyFilter from "./CurrencyFilter";
import style from "./Filter.module.css";

const Filter = () => {
  return (
    <div className={style.Filter}>
      <CurrencyFilter />
      <FillterTicket />
    </div>
  );
};

export default Filter;
