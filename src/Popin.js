import React from "react";

import "./styles.css";
import { candle } from "./assets/candle.png";

const Popin = () => (
  <div className="Popin">
    <h1>Vous priez maintenant pour XXX</h1>
    <img src={candle} height="50%" alt="Bougie" />
    <br />
    <br />
    <button>Amen !</button>
  </div>
);

export default Popin;
