import React from "react";
import BotCard from "./BotCard";

const YourBotArmy = ({ army, onBotRemoved, onBotDeleted }) => {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {army.length === 0 ? (
        <p>No bots in your army yet!</p>
      ) : (
        <div className="bot-army">
          {army.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              onBotAdded={() => {}} // Not needed in army view
              onBotRemoved={onBotRemoved}
              onBotDeleted={onBotDeleted}
              isInArmy={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default YourBotArmy;
