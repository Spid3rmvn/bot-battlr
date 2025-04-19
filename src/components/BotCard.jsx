import React from "react";

const BotCard = ({ bot, onBotAdded, onBotRemoved, onBotDeleted, isInArmy }) => {
  return (
    <div className="bot-card">
      <h3>{bot.name}</h3>
      <img src={bot.avatar_url} alt={bot.name} />
      <p>
        <strong>Class:</strong> {bot.bot_class}
      </p>
      <p>
        <strong>Health:</strong> {bot.health}
      </p>
      <p>
        <strong>Damage:</strong> {bot.damage}
      </p>
      <p>
        <strong>Armor:</strong> {bot.armor}
      </p>

      {isInArmy ? (
        <button onClick={() => onBotRemoved(bot.id)}>Remove from Army</button>
      ) : (
        <button onClick={() => onBotAdded(bot)}>Add to Army</button>
      )}

      <button onClick={() => onBotDeleted(bot.id)}>X</button>
    </div>
  );
};

export default BotCard;
