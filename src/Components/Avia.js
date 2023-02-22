import React from "react";
import fly from "../image/fly.png";
import style from "./Avia.module.css";

const Avia = ({
  origin,
  origin_name,
  destination,
  price,
  departure_time,
  departure_date,
  destination_name,
  stops,
}) => {
  return (
    <div className={style.glavGlav}>
      <div className={style.glav}>
        <div className={style.pictBut}>
          <div className={style.pict}>
            <img src={fly} alt="FLY" />
          </div>
          <button className={style.buttonMode}>Купить за: {price}</button>
        </div>
        <div className={style.glavTwo}>
          <div className={style.vrem}>
            <div className={style.time}>{departure_time}</div>
            <div className={style.stops}>
              {stops === 1 ? `${stops} Пересадка` : `${stops} Пересадки`}
            </div>
            <div className={style.time1}>{departure_time}</div>
          </div>
          <div className={style.city}>
            <div className={style.otpr}>
              <b>
                {origin}, {origin_name}
              </b>
              <p>{departure_date}</p>
            </div>
            <div className={style.prib}>
              <b>
                {destination_name}, {destination}
              </b>
              <p>{departure_date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avia;
