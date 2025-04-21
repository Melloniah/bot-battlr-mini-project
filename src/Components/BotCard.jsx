import React from "react";

function BotCard({ bot, onAdd, onRemove, onDischarge }) {
  const handleCardClick = () => {
    if (onAdd) {
      onAdd(bot); // Used when clicking to add from BotCollection
    } else if (onRemove) {
      onRemove(bot.id); // Used when clicking to remove from YourBotArmy
    }
  };

  return (
    <div
      className="bot-card"
      onClick={handleCardClick}
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        cursor: "pointer",
      }}
    >
      <h3>{bot.name}</h3>
      <img src={bot.avatar_url} alt={bot.name} width="100" />
      <p>{bot.catchphrase}</p>
      <p><strong>Class:</strong> {bot.bot_class}</p>
      <p><strong>Health:</strong> {bot.health}</p>
      <p><strong>Damage:</strong> {bot.damage}</p>
      <p><strong>Armor:</strong> {bot.armor}</p>

      {/* Add to Army button (only visible in BotCollection) */}
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

      {/* Discharge button (only visible in YourBotArmy) */}
      {onDischarge && (
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent card click when discharging
            console.log("Discharge button clicked for:", bot);
            onDischarge(bot);
          }}
          style={{ backgroundColor: "red", color: "white", padding: "8px", marginTop: "8px" }}
        >
          ❌ Discharge
        </button>
      )}
    </div>
  );
}

export default BotCard;
