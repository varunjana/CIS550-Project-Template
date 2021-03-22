const express = require('express')

const PORT = process.env.HTTP_PORT || 8081
const app = express()

app.get('/', (req, res) => {
    res.send('Welcome to the server!')
})

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}.`)
})