// import nodemailer from 'nodemailer';
import express from "express";
// import serverless from 'serverless-http;

// const http = require('http').createServer(app)
import http from "http";
import bodyParser from "body-parser";
import socketIO from "socket.io";
import { dirname } from "path";
import { fileURLToPath } from "url"
import mongoose from "mongoose"
const __dirname = dirname(fileURLToPath(
    import.meta.url));

const app = express();
const port = process.env.PORT || 5500;

mongoose.connect("mongodb://localhost:27017/legal-easy", { useNewUrlParser: true });

const personSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: {
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

const serverSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: {
        type: String,
        unique: true,
        required: true,
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

let person;
let provider;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));





app.post("/login", async (req, res) => {
    person = await Person.findOne({ number: req.body["number"] }).exec();
    provider = await Server.findOne({ number: req.body["number"] }).exec();

    if (person) {
        if (req.body["password"] === person.password)
            res.sendFile(__dirname + "/client_interface/index2.html");
        else
            res.sendFile(__dirname + "/pages/login.html");
    } else if (provider) {
        if (req.body["password"] === provider.password)
            res.sendFile(__dirname + "/user_interface/index2.html");
        else
            res.sendFile(__dirname + "/pages/login.html");
    } else
        res.sendFile(__dirname + "/pages/signup.html");
    console.log("login - "+`${person}`);
    console.log("login - "+`${provider}`);
})


// app.get('/log-out', async(req,res)=>{
//     person = "";
//     provider = "";
//     console.log("log-out - "+`${person}`);
//     console.log("log-out - "+`${provider}`);
//     res.render(__dirname + "/pages/login.html");
    
// })


app.post("/signup", async (req, res) => {
    const existing = await Person.findOne({ number: req.body["number"] }).exec();
    if (existing) {
        res.send("User Exists");
    } else {

        Person.create({
            name: req.body["name"],
            password: req.body["password"],
            email: req.body["email"],
            number: req.body["number"]
        }).then((data) => { });
        if (req.body["password"] === req.body["conf_password"]) {
            res.sendFile(__dirname + "/client_interface/index2.html");
        }
        else {
            res.send("Passwords Don't Match");
        }
    }
})


app.post("/server-signup", async (req, res) => {
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
        }).then((data) => { });
        if (req.body["password"] == req.body["conf_password"]) {
            res.sendFile(__dirname + "/user_interface/index2.html");
        }
    }
})


app.post("/reset", async (req, res) => {
    if (req.body["password"] === req.body["conf_password"]) {
        if (person) {
            await Person.updateOne({ email: person.email }, { password: req.body["password"] });
        }
        // res.send(`${person}`);
        else if (provider) {
            await Server.updateOne({ email: provider.email }, { password: req.body["password"] });
        }
        res.sendFile(__dirname + "/pages/login.html");
        console.log(`${person}`);
        console.log(`${provider}`);
    }
    // res.send(`${provider}`);
})


app.listen(port, () => {
    console.log(`${port}`);
})


const server = http.createServer(app);

server.listen(3000, () => {
    console.log(`Listening on port 3000`)
})

const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('Connected...')
    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg)
    })

})

