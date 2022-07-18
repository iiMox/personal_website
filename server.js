const express = require("express");
require("./db/connection");
const app = express();
const port = process.env.PORT;

const authRouter = require("./src/routes/auth");
const skillRouter = require("./src/routes/skill");
const serviceRouter = require("./src/routes/service");
const projectRouter = require("./src/routes/project");
const messageRouter = require("./src/routes/message");
const imageRouter = require("./src/routes/image");

app.use(express.json());

app.use("/auth", authRouter);
app.use("/skill", skillRouter);
app.use("/service", serviceRouter);
app.use("/project", projectRouter);
app.use("/message", messageRouter);
app.use("/image", imageRouter);

app.listen(port, () => {
    console.log(`Server is up ${port} ...`);
});
