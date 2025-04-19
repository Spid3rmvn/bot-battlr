import React from "react";
import BotCard from "./BotCard";

const BotCollection = ({
  bots,
  army,
  onBotAdded,
  onBotRemoved,
  onBotDeleted,
}) => {
  return (
    <div>
      <h2>Bot Collection</h2>
      <div className="bot-collection">
        {bots.map((bot) => {
          const isInArmy = army.some((armyBot) => armyBot.id === bot.id);

          return (
            <BotCard
              key={bot.id}
              bot={bot}
              onBotAdded={onBotAdded}
              onBotRemoved={onBotRemoved}
              onBotDeleted={onBotDeleted}
              isInArmy={isInArmy}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BotCollection;
