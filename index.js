const express = require("express");
require("dotenv").config();
const authRouter = require("./routes/auth");
const connectDatabase = require("./database/index");

const app = express();

connectDatabase();
app.use(express.json());
app.use("/auth", authRouter);

app.listen(3001, () => {
  console.log(`Server connected at port ${process.env.PORT}`);
});
