const express = require("express");
require("../src/db/connection");
const Menranking = require("../src/models/mens");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
//handle post req
app.post("/mens", async (req, res) => {
    try {
        const addrecord = new Menranking(req.body)//postman part watch again
        console.log(req.body);
        addrecord.save();
    } catch (e) {
        res.send(e);
    }
})

app.get("/", async (req, res) => {
    res.send("hello");
})
app.listen(port, () => {
    console.log(`Connection is live at port no.${port}`);
})