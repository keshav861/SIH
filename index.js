import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url"
const __dirname = dirname(fileURLToPath(
    import.meta.url));

const app = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/pages/login.html", (req, res) => {
    res.sendFile(__dirname + "/pages/login.html");
})

app.post("/submit", (req, res) => {
    if (req.body["email"] == "client1@gmail.com" && req.body["password"] == "user")
        res.send("<h1>Clinet login</h1>");
    else if (req.body["email"] == "consultant1@gmail.com" && req.body["password"] == "user")
        res.sendFile("../user_interface/index2.html");
    else
        res.sendFile("./pages/login.html");
})

app.listen(port, () => {
    console.log(`${port}`);
})
