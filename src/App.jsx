import React, { useState, useEffect } from "react";
import YourBotArmy from "./components/YourBotArmy";
import BotCollection from "./components/BotCollection";
import "./App.css";

const App = () => {
  const [army, setArmy] = useState([]);
  const [bots, setBots] = useState([]);

  // Fetch bots from the JSON server
  useEffect(() => {
    const fetchBots = async () => {
      try {
        const response = await fetch("http://localhost:5000/bots");
        const data = await response.json();
        setBots(data);
      } catch (error) {
        console.error("Error fetching bots:", error);
      }
    };

    fetchBots();
  }, []); // Empty dependency array ensures this runs only once when the component mounts.

  const handleAddToArmy = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const handleRemoveFromArmy = (botId) => {
    setArmy(army.filter((bot) => bot.id !== botId));
  };

  return (
    <div>
      <h1>Bot Battlr</h1>
      <YourBotArmy army={army} onRemoveBot={handleRemoveFromArmy} />
      <BotCollection bots={bots} onBotAdded={handleAddToArmy} />
    </div>
  );
};

export default App;
