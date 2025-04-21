import { useState, useEffect } from 'react'

import './App.css'
import BotCollection from './Components/BotCollection'
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
 


  function AddBotToArmy(bot){
const BotAlreadyInArmy=army.some (function(botInArmy){ //finds the first bot that meets the condition(id)
  return botInArmy.id===bot.id
});

if(!BotAlreadyInArmy){
  setArmy([...army, bot])
}
  }

  function RemoveBotFromArmy(bot){
const updatedBotArmy=army.filter(function(botFromArmy){
  return botFromArmy.id !== bot.id;
})

setArmy(updatedBotArmy)
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