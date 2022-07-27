const express = require("express");
const path = require("path");
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

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
    //Set static folder
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

app.listen(port, () => {
    console.log(`Server is up ${port} ...`);
});
