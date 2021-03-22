
const get_movies = async () => {
    var res = await fetch(`http://localhost:8081/movies`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
    return res.json()
}

const get_movies_with_limit = async (limit) => {
    var res = await fetch(`/movies/?limit=${limit}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
    return res.json()
}

export { get_movies, get_movies_with_limit }