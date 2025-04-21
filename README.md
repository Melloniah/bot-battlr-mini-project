Week 2 Code Challenge Bot Battlr

# 🤖 Bot Battlr
This is a React-based app where a user can browse bot profile, filter by their class and build their own bot army by simply clicking on any bot they want.  

## 🚀 Features
As a user, you can ;
View All Bots
All available bots are fetched from a backend JSON server and displayed in the BotCollection component.

Build Your Army
Click on a bot to add it to your personal army (YourBotArmy). Each bot can only be enlisted once.

Release a Bot
Click on a bot in your army to remove it from YourBotArmy. The bot is not deleted — just released.

Discharge a Bot
Click the red ❌ button on an army bot to permanently remove them from the army and delete them from the backend.

Filter Bots by Class
Use the FilterBar to filter bots by their class (e.g. Medic, Assault, Witch). You can select multiple classes at once.


## Project Structure


src/
├── App.jsx
├── App.css
├── main.jsx
├── index.css
├── assets/
│   └── react.svg
├── Components/
│   ├── BotCard.jsx
│   ├── BotCollection.jsx
│   └── YourBotArmy.jsx
    ├── FilterBar.jsx 
## To Begin
Make sure you have Node.js and npm
npm install
Start your backend server by; json-server --watch db.json --port 8001
start the vite React app by :npm run dev
## Backend API
It allows us to GET for fetching bot collection
Delete a bot by DELETE when a user discharges an army

## Responsiveness
Two Column Layout — BotCollection on the left, YourBotArmy on the right

Responsive Cards — Each bot is clickable and responsive