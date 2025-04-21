import React from "react";

function BotCard({ bot, onAdd, onRemove, onDischarge }) {

  console.log("BotCard props:", { bot, onAdd, onRemove, onDischarge });
  
  const handleCardClick = () => {
    if (onAdd) {
      onAdd(); // Used when clicking to add from BotCollection
    } else if (onRemove) {
      onRemove(); // Used when clicking to remove from YourBotArmy
    }
  };

  return (
    <div className="bot-card" onClick={handleCardClick}>
      <h3>{bot.name}</h3>
      <img src={bot.avatar_url} alt={bot.name} width="100" />
      <p>{bot.catchphrase}</p>
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

      {onAdd && (
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent card click when adding
            console.log("Add button clicked for:", bot);
            onAdd(bot);
          }}
          style={{ backgroundColor: "green", color: "white", padding: "8px", marginTop: "8px", marginRight: "8px" }}
        >
          ➕ Add to Army
        </button>
      )}

      {onDischarge && (
        <button
          onClick={(e) => {
            e.stopPropagation();
             // Prevent triggering the onClick for remove
             console.log("Discharge button clicked for:", bot)
            onDischarge(bot); // Call onDischarge with the bot object
          }}
          style={{ color: "red", padding: "8px", marginTop: "8px" }}
        >
          ❌ Discharge
        </button>
      )}
    </div>
  );
}

export default BotCard;