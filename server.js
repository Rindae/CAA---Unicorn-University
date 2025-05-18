const express = require("express");
const app = express();
const cors = require('cors');
const { loadConfig } = require("./src/utils/configManager");
const { connectDatabase, initDatabase, getDatabase } = require('./src/database/index');


// --- Load configuration ---
const config = loadConfig();

// --- Enable Frontend communication ---

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true                
}));

// --- Body parsing ---
app.use(express.json()); // Necessary to parse JSON bodies


//  --- Database connection ---
connectDatabase();
initDatabase();

// --- Routing ---

app.use("/place", require("./src/routes/place"));
app.use("/event", require("./src/routes/event"));
app.use("/rating", require("./src/routes/rating"));
app.use("/category", require("./src/routes/category"));

// --- Launch ---

const port =  config.server.port;
app.listen(port, () => {
    console.log("Server listening on port " + port + "...");
})