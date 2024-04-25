// import nodemailer from 'nodemailer';
import express from "express";
<<<<<<< Updated upstream
// import serverless from 'serverless-http;
=======
import http from "http";
import socketIO from "socket.io";
>>>>>>> Stashed changes
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url"
import mongoose from "mongoose"
const __dirname = dirname(fileURLToPath(
<<<<<<< Updated upstream
  import.meta.url));
=======
    import.meta.url));
    
// const http = require('http').createServer(app)

>>>>>>> Stashed changes

const app = express();
const port = process.env.PORT || 5500;

<<<<<<< Updated upstream
mongoose.connect("mongodb://127.0.0.1:27017/legal-easy", { useNewUrlParser: true });

const personSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: {
        type: String,
        unique: true,
      },
    number: {
        type: Number,
        unique: true,
        required: true,
      },
});

const serverSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: {
        type: String,
        unique: true,
      },
    brnumber: {
        type: String,
        unique: true,
        required: true,
      },
      number: {
        type: Number,
        unique: true,
        required: true,
      },
});

const Person = mongoose.model("Person", personSchema);

const Server = mongoose.model("Server", serverSchema);
=======
const server = http.createServer(app);
server.listen(3000, () => {
    console.log(`Listening on port 3000`)
})
>>>>>>> Stashed changes


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));


app.post("/login", async(req, res) => {
    const person = await Person.findOne({ number: req.body["number"] }).exec();
    const server = await Server.findOne({ number: req.body["number"] }).exec();

    if (person) {
        if (req.body["password"] === person.password)
            res.sendFile(__dirname + "/client_interface/index2.html");
        else
            res.sendFile(__dirname + "/pages/login.html");
    } else if (server) {
        if (req.body["password"] === server.password)
            res.sendFile(__dirname + "/user_interface/index2.html");
        else
            res.sendFile(__dirname + "/pages/login.html");
    } else
        res.sendFile(__dirname + "/pages/signup.html");
})


app.post("/signup", async(req, res) => {
    const existing = await Person.findOne({ number: req.body["number"] }).exec();
    if (existing) {
        res.send("User Exists");
    } else {
        Person.create({
            name: req.body["name"],
            password: req.body["password"],
            email: req.body["email"],
            number: req.body["number"]
        }).then((data) => {});
        if (req.body["password"] === req.body["conf_password"]) {
            res.sendFile(__dirname + "/client_interface/index2.html");
        }
        else{
            res.send("Passwords Don't Match");
        }
    }
})


app.post("/server-signup", async(req, res) => {
    const existing = await Server.findOne({ number: req.body["number"] }).exec();
    if (existing) {
        res.send("Service Provider Exists");
    } else {
        Server.create({
            name: req.body["name"],
            password: req.body["password"],
            email: req.body["email"],
            number: req.body["number"],
            brnumber: req.body["brnumber"]
        }).then((data) => {});
        if (req.body["password"] == req.body["conf_password"]) {
            res.sendFile(__dirname + "/user_interface/index2.html");
        }
    }
})


app.listen(port, () => {
    console.log(`${port}`);
<<<<<<< Updated upstream
=======
})
// Socket 
// app.use(express.static(__dirname + '/public'))

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + 'Community.html')
// })

// const io = require('socket.io')(http)
const io = socketIO(server);
io.on('connection', (socket) => {
    console.log('Connected...')
    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg)
    })

>>>>>>> Stashed changes
})