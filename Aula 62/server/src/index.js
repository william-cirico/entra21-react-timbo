const express = require("express");
const app = express();
const PORT = process.env.APP_PORT || 3001;



app.listen(() => console.log("Server running in: " + PORT));

