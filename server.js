const express = require("express");
require("./db/connection");
const app = express();
const port = process.env.PORT;

const authRouter = require("./src/routes/auth");

app.use(express.json());

app.use("/auth", authRouter);

app.listen(port, () => {
    console.log(`Server is up ${port} ...`);
});
