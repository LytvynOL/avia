import React from "react";
import Avia from "./Avia";
import style from "./Avias.module.css";
import tickets from "../arrayTicket";

const Avias = () => {
  return (
    <div className={style.Avias}>
      {tickets.map((post, index) => (
        <Avia {...post} />
      ))}
    </div>
  );
};

export default Avias;
