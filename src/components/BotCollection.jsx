import React, { useState, useEffect } from "react";
import BotCard from "./BotCard";

const BotCollection = () => {
  const [bots, setBots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBots = async () => {
      try {
        const response = await fetch("http://localhost:5000/bots");
        const data = await response.json();
        // Ensure unique bots by filtering duplicates
        const uniqueBots = Array.from(new Set(data.map((bot) => bot.id))).map(
          (id) => data.find((bot) => bot.id === id)
        );
        setBots(uniqueBots);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBots();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!bots.length) {
    return <div>No bots available</div>;
  }

  const handleBotDeleted = (botId) => {
    setBots((prevBots) => prevBots.filter((bot) => bot.id !== botId));
  };

  const handleBotAdded = (newBot) => {
    setBots((prevBots) => [...prevBots, newBot]);
  };

  const handleBotRemoved = (botId) => {
    setBots((prevBots) => prevBots.filter((bot) => bot.id !== botId));
  };

  return (
    <div>
      <h2>Bot Collection</h2>
      <div className="bot-collection">
        {bots.map((bot) => (
          <BotCard
            key={bot.id} // Ensure bot.id is unique
            bot={bot}
            onBotDeleted={handleBotDeleted}
            onBotAdded={handleBotAdded}
            onBotRemoved={handleBotRemoved}
          />
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
