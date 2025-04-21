import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, onRemove, onDischarge }) { 
  //console.log("YourBotArmy props:", { bots, onRemove, onDischarge });


  return (
    <div className="your-bot-army">
      <h3>My Bot Army</h3>
      {bots.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          onRemove={onRemove}
          onDischarge={onDischarge}
        />
      ))}
    </div>
  );
}

export default YourBotArmy;