const express = require("express");
const cors = require("cors");
const app = express();

let data = null;
let serverReady = false;

app.use(express.json());
app.use(cors());

app.post("/bustec", (req, res) => {
    console.log(req.body);
    data = req.body;
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.json({ ok: true });
})

app.get("/status", (req, res) =>{
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.send({
        ver: "0.0.2",
        ready: serverReady
    });
})

app.get("/bustec", (req, res) =>{
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.send(data);
})
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
  serverReady = true;
});