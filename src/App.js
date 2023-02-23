import { useState } from "react";
import "./App.css";
import Avias from "./Components/Avias";
import Filter from "./Components/Filter";
import defaultTickets from "./arrayTicket";

function App() {
  const [tickets, setTickets] = useState(defaultTickets);
  const [currency, setCurrency] = useState("rub");

  const changeCurrency = (item) => {
    setTickets(
      tickets.map((ticket) => {
        if (item === "usd") {
          ticket.price *= 20;
        }
      })
    );
    setCurrency(item);
  };

  return (
    <div className="App">
      <Filter currency={currency} changeCurrency={changeCurrency} />
      <Avias tickets={tickets} />
    </div>
  );
}

export default App;
