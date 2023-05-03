const express = require("express");
const app = express();
const { port } = require("./config/serverConfig");

const startServer = async () => {
    app.get("/", (req, res) => {
        res.send("Hello World!");
    });
    console.log(process.env);

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
};

startServer();
