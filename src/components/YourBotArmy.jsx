import React from "react";
import BotCard from "./BotCard";

const YourBotArmy = ({ army, onRemoveBot }) => {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {army.length === 0 ? (
        <p>No bots in your army yet!</p>
      ) : (
        <div className="bot-collection">
          {army.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              onBotRemoved={onRemoveBot}
              onBotDeleted={() => {}}
              onBotAdded={() => {}}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default YourBotArmy;
