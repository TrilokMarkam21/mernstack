// const express = require('express');
// const http = require('http')
// const app = express()

// app.get('/', (req, res) =>{
//     res.send("Hello from express!")
// })


// const server = http.createServer((req, res) => {
//     res.end("Server is running")
// })


// server.listen(3000, () =>{
//     console.log('Server running on http://localhost:3000')
// })


const express = require('express');
const axios = require('axios')
const app = express()

app.get('/', (req, res) => {
    res.send("Hello from express")
})
//home route

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('connected to atlas'))

app.get('/users', async(req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        res.json(response.data)
    } catch (error) {
        res.status(500).json({error:'Failed to fetch'})
    }
})

app.listen(3000, ()=> {
    console.log('server running on http://localhost:3000')
})
//create server


