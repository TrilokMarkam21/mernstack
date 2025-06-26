//Node.js
//create file
//append file
//readFile
//unlinkFile

//createfile

// const { Console } = require('node:console');
// const { Console } = console;

// const greet = require('./greet');

// console.log(greet("chacha"));



// import express from 'express'

// const app = express()

// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

// app.listen(3000)



// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//     res.send('Hello World')
// })

const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

// Example POST route
app.post('/data', (req, res) => {
    const userData = req.body;
    res.send(`Received data: ${JSON.stringify(userData)}`);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



