const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Simulated user data (replace with a database)
const users = [
    { id: 1, email: 'user@example.com', password: 'password123' },
    // Add more users as needed
];

// Serve static files (HTML, CSS, JavaScript)
app.use(express.static(__dirname));

// Route for handling login POST requests
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Simulated user authentication
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
        res.send('Login successful');
    } else {
        res.status(401).send('Login failed');
    }
});

// Route for handling signup POST requests
app.post('/signup', (req, res) => {
    const { email, password } = req.body;

    // Simulated user registration (add to the users array)
    users.push({ id: users.length + 1, email, password });

    res.send('Signup successful');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
