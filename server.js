const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

// Public folder serve करो
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
