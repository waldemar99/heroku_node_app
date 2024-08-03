const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
console.log("", dotenv.config());
const app = express();

app.get("/", (_, res) => res.send("Welcome to my first Heroku App Deployment"));
app.get("/json", (_, res) =>
  res.json({
    code: 200,
    message: "Welcome to my heroku Depolyment",
  })
);

app.listen(process.env.PORT, () =>
  console.log(`server is running on port ${process.env.PORT}`)
);
