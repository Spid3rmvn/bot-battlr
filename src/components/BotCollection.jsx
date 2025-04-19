import React, { useState, useEffect } from "react";
import BotCard from "./BotCard";
import { fetchBots } from "../services/api";

const BotCollection = () => {
  const [bots, setBots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchBots();
        setBots(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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
            key={bot.id}
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
