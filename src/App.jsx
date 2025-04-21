import { useState, useEffect } from 'react';
import './App.css';
import BotCollection from './Components/BotCollection';
import YourBotArmy from './Components/YourBotArmy';
import FilterBots from './Components/FilterBots'



function App() {
  const [bots, setBots] = useState([]); // all bots from server
  const [army, setArmy] = useState([]); // user's enlisted bots
  const [filters, setFilters] = useState([]); // class filters


  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then((r) => r.json())
      .then((data) => {
        setBots(data);
      });
  }, []);

  function AddBotToArmy(bot) {
    const alreadyInArmy = army.some((b) => b.id === bot.id);
    const sameClassThere = army.some((b) => b.bot_class === bot.bot_class);
  
    if (!alreadyInArmy && !sameClassThere) {
      setArmy([...army, bot]);
    } else if (sameClassThere) {
      alert(`You already have a ${bot.bot_class} in your army!`);
    }
  }
  

  function RemoveBotFromArmy(botId) {
    setArmy(army.filter((b) => b.id !== botId));//to remove from army by clicking on the card
  }

  function DischargeBot(bot) {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          // Remove from bots list
          const updatedBots = bots.filter((botItem) => botItem.id !== bot.id);
          setBots(updatedBots);

          // Remove from army too
          const updatedArmy = army.filter((botEnlisted) => botEnlisted.id !== bot.id);
          setArmy(updatedArmy);
        }
      });
  }

  
    
    return (
      <div className="app-container">
        <h1>Bot Battlr</h1> {/* Heading at the top */}
        <div className="bot-section">
         
          <YourBotArmy
            bots={army}
            onRemove={RemoveBotFromArmy}
            onDischarge={DischargeBot}
          />
          <FilterBots filters={filters} onChange={setFilters} />
      <BotCollection
      bots={bots.filter(bot =>
    filters.length === 0 || filters.includes(bot.bot_class)
  )}
  onAdd={AddBotToArmy}
/>

        </div>
      </div>
    );
  }


export default App;
