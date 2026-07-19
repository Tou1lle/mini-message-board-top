const express = require("express");
const path = require("node:path");
const app = express();
const PORT = 3000;
const indexRouter = require("./routes/indexRoute");

// Set EJS as view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Make public styles, images, js available for page
const assetsPublic = path.join(__dirname, "public");
app.use(express.static(assetsPublic));

// Sample data
const messages = [
  {
    text: "Hi there!",
    user: "Amado",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
]

// Routes
app.use("/", indexRouter);

// Start server
app.listen(PORT, (error) => {
  if (error) {
    console.error("An error on server occured: ", error.name, ": ", error.message);
    throw error;
  }
  console.log(`Mini Message Board App listening on port ${PORT}`);
})