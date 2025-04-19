import React from "react";
import { deleteBot, addBotToArmy, removeBotFromArmy } from "../services/api";
const BotCard = ({ bot, onBotDeleted, onBotAdded, onBotRemoved }) => {
  const handleDelete = async () => {
    try {
      await deleteBot(bot.id);
      onBotDeleted(bot.id);
    } catch (error) {
      console.error("Error deleting bot:", error);
    }
  };
  const handleAddToArmy = async () => {
    try {
      await addBotToArmy(bot.id);
      onBotAdded(bot);
    } catch (error) {
      console.error("Error adding bot to army:", error);
    }
  };
  const handleRemoveFromArmy = async () => {
    try {
      await removeBotFromArmy(bot.id);
      onBotRemoved(bot.id);
    } catch (error) {
      console.error("Error removing bot from army:", error);
    }
  };
  return (
    <div className="bot-card">
      <h3>{bot.name}</h3>
      <img src={bot.image} alt={bot.name} />
      <p>{bot.description}</p>
      <button onClick={handleAddToArmy}>Add to Army</button>
      <button onClick={handleRemoveFromArmy}>Remove from Army</button>
      <button onClick={handleDelete}>Delete Bot</button>
    </div>
  );
};

export default BotCard;
