import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import {
  fetchBots,
  fetchArmy,
  addBotToArmy,
  removeBotFromArmy,
  deleteBot,
} from "./services/api";
import "./App.css";

const App = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch bots and army when component mounts
  useEffect(() => {
    const loadData = async () => {
      try {
        const [botsData, armyData] = await Promise.all([
          fetchBots(),
          fetchArmy(),
        ]);

        setBots(botsData);
        setArmy(armyData);
      } catch (err) {
        setError(err.message);
        console.error("Failed to load data:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Handle adding a bot to army
  const handleAddToArmy = async (bot) => {
    try {
      // Check if the bot is already in the army
      if (army.some((armyBot) => armyBot.id === bot.id)) {
        alert("This bot is already in your army!");
        return;
      }

      const addedBot = await addBotToArmy(bot);
      setArmy((prevArmy) => [...prevArmy, addedBot]);
    } catch (err) {
      console.error("Error adding bot to army:", err);
      alert("Failed to add bot to army. Please try again.");
    }
  };

  // Handle removing a bot from army
  const handleRemoveFromArmy = async (botId) => {
    try {
      await removeBotFromArmy(botId);
      setArmy((prevArmy) => prevArmy.filter((bot) => bot.id !== botId));
    } catch (err) {
      console.error("Error removing bot from army:", err);
      alert("Failed to remove bot from army. Please try again.");
    }
  };

  // Handle deleting a bot
  const handleDeleteBot = async (botId) => {
    console.log("Deleting bot with ID:", botId);
    try {
      const result = await deleteBot(botId);
      console.log("Delete API response:", result);

      setBots((prevBots) => {
        console.log("Previous bots:", prevBots);
        const newBots = prevBots.filter((bot) => bot.id !== botId);
        console.log("New bots:", newBots);
        return newBots;
      });

      setArmy((prevArmy) => prevArmy.filter((bot) => bot.id !== botId));
    } catch (err) {
      console.error("Error deleting bot:", err);
      alert("Failed to delete bot. Please try again.");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="app">
      <h1>Bot Battlr</h1>
      <YourBotArmy
        army={army}
        onBotRemoved={handleRemoveFromArmy}
        onBotDeleted={handleDeleteBot}
      />
      <BotCollection
        bots={bots}
        army={army}
        onBotAdded={handleAddToArmy}
        onBotRemoved={handleRemoveFromArmy}
        onBotDeleted={handleDeleteBot}
      />
    </div>
  );
};

export default App;
