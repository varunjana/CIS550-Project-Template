const async = require("async");
const sample_movie_data = require('./sample_movie_data.js')


async function movies(req, res) {
    console.log("Received a request for movies")
    const limit = req.query.limit
    if (limit) {
        console.log('Limit requested: ' + limit)
        res.json(sample_movie_data.movie_data.slice(0, limit))
    } else {
        res.json(sample_movie_data.movie_data)
    }
}


module.exports = { movies }