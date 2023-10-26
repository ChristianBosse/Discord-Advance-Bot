const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 4000;

const app = express();

app.get("*", (req, res) => {
    res.status(200).send("Hello World");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
