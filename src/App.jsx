import { useState, useEffect } from 'react'

import './App.css'
import BotCollection from './Components/BotCollection.jsx'
import YourBotArmy from './Components/YourBotArmy'



function App() {

  const [bots, setBots]=useState([])//all bots from server
  const [army, setArmy]=useState([])//user's enlisted bots

 


  useEffect(()=>{
    fetch('http://localhost:8001/bots')
    .then((r)=>r.json())
    .then((data)=>{
      setBots(data)
  })
  }, [])

  function AddBotToArmy(bot) {
    if (!army.some((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  }
  
  function RemoveBotFromArmy(bot) {
    setArmy(army.filter((b) => b.id !== bot.id));
  }
  
  function DischargeBot(bot) {
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: "DELETE"
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
    <div className='app'> 
      <h1>Bot Battlr</h1>
      <BotCollection bots={bots} onAdd={AddBotToArmy} />
      <YourBotArmy
        bots={army}
        onRemove={RemoveBotFromArmy}
        onDischarge={DischargeBot}
        
      />
      
   </div>
  );
  
}

export default App