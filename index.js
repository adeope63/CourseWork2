const lessons = require("./lessons.json");
const cors = require("cors");

const express = require("express");
const PORT = 3000;

const app = express();

app.use(cors())
app.get("/lessons", (req, res) => {
  res.send(lessons);
});

app.get("/user", (req, res) => {
  res.json({
    email: "user@example.com",
    password: "mypassword",
  });
});


app.listen(PORT, () => console.log(`server listening on ${PORT}`));
