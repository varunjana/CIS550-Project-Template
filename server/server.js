const path = require('path')

const express = require('express')
var  cors = require('cors')


const PORT = process.env.HTTP_PORT || 8081
const app = express()
// allow all clients
app.use(cors())
app.use(express.static(path.join(__dirname, 'client', 'build')));


// Import all route files
const movie_routes = require('./movie_routes.js');

// Register simple route to test
app.get('/', (req, res) => {
    res.send('Welcome to the server!')
})

// Register movie routes:
app.get('/movies', movie_routes.movies)


app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}.`)
})