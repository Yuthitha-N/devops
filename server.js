const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 7000;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Explicit root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// IMPORTANT: bind to 0.0.0.0
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
