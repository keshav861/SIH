// import nodemailer from 'nodemailer';
import express from "express";
// import serverless from 'serverless-http;

// const http = require('http').createServer(app)
import http from "http";
import ejs from "ejs";
import nodemailer from 'nodemailer';
import session from "express-session";
import bodyParser from "body-parser";
import socketIO from "socket.io";
import { dirname } from "path";
import { fileURLToPath } from "url"
import mongoose from "mongoose"
const __dirname = dirname(fileURLToPath(
    import.meta.url));

const app = express();
const port = process.env.PORT || 5500;
const senderMail = "ecoverse24@gmail.com";
const password = "qcxs lfxl iyfl witc";
let clientotp = "";
let serverotp = "";
let userEmail = "";
let userPassword = "";
let newUser;

app.set('view engine', 'ejs');

mongoose.connect("mongodb://127.0.0.1:27017/legal-easy", { useNewUrlParser: true });

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
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true
}));

app.use((req, res, next) => {
    if(res.path === '/login')
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
else
res.setHeader('Cache-Control', 'no-store, must-revalidate');
    next();
});



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
    console.log("login - " + `${person}`);
    console.log("login - " + `${provider}`);
})



app.get('/login', async (req, res) => {
    res.sendFile(__dirname + "/pages/login.html");
})



app.get('/log-out', (req, res) => {
    person = null;
    provider = null;
    req.session.destroy((err) => {
        if (err) {
            console.error('Error destroying session:', err);
        }
        
        res.redirect('/login');
    });
});



app.post("/signup", async (req, res) => {
    const existing = await Person.findOne({ number: req.body["number"] }).exec();
    if (existing) {
        res.send("User Exists");
    } else if (req.body["password"] == req.body["conf_password"]) {
        userEmail = req.body.email;
        userPassword = req.body.password;
        newUser = req.body;

        clientotp = Math.floor(100000 + Math.random() * 900000);

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: senderMail,
                pass: password,
            },
        });

        const mailOptions = {
            from: senderMail,
            to: userEmail,
            subject: 'OTP for Email Verification',
            text: `Your OTP code is ${clientotp}.`,
        };

        await transporter.sendMail(mailOptions);
        res.render('otp', { spanText1: "", spanText2: "OTP succesfully sent!" });
    }
    else {
        res.send("PASSWORDS DON'T MATCH");
    }
})


app.post("/OTP", async (req, res) => {
    const userOTP = req.body.n1 + req.body.n2 + req.body.n3 + req.body.n4 + req.body.n5 + req.body.n6;
    if (userOTP == clientotp) {
        Person.create({
            name: newUser["name"],
            password: newUser["password"],
            email: newUser["email"],
            number: newUser["number"]
        }).then((data) => { });
        res.sendFile(__dirname + "/client_interface/index2.html");
    }
    else if (userOTP == serverotp) {
        Server.create({
            name: newUser["name"],
            password: newUser["password"],
            email: newUser["email"],
            number: newUser["number"],
            brnumber: newUser["brnumber"],
        }).then((data) => { });
        res.sendFile(__dirname + "/user_interface/index2.html");
    }
    else {
        res.render('otp', { spanText1: "Incorrect OTP!", spanText2: "" });
    }
});


app.post("/server-signup", async (req, res) => {
    const existing = await Server.findOne({ number: req.body["number"] }).exec();
    if (existing) {
        res.send("Service Provider Exists");
    } else if (req.body["password"] == req.body["conf_password"]) {
        userEmail = req.body.email;
        userPassword = req.body.password;
        newUser = req.body;

        serverotp = Math.floor(100000 + Math.random() * 900000);

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: senderMail,
                pass: password,
            },
        });

        const mailOptions = {
            from: senderMail,
            to: userEmail,
            subject: 'OTP for Email Verification',
            text: `Your OTP code is ${serverotp}.`,
        };

        await transporter.sendMail(mailOptions);
        res.render('otp', { spanText1: "", spanText2: "OTP succesfully sent!" });
    }
    else {
        res.send("PASSWORDS DON'T MATCH");
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

