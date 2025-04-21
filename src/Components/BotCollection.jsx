import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, onAdd }) {
  return (
    <div className="bot-collection">
      <h3>Bot Collection</h3>
      {bots.map((bot) => (
        <BotCard 
          key={bot.id} 
          bot={bot} 
          onAdd={onAdd} 
          
        />
      ))}
    </div>
  );
}

export default BotCollection;
