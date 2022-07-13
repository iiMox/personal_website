const express = require("express");
require("./db/connection");
const app = express();
const port = process.env.PORT;

const authRouter = require("./src/routes/auth");
const skillRouter = require("./src/routes/skill");
const serviceRouter = require("./src/routes/service");
const projectRouter = require("./src/routes/project");

app.use(express.json());

app.use("/auth", authRouter);
app.use("/skill", skillRouter);
app.use("/service", serviceRouter);
app.use("/project", projectRouter);

app.listen(port, () => {
    console.log(`Server is up ${port} ...`);
});
