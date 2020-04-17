import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const vote = async (id) => {
    const anecdote = await axios.get(`${baseUrl}/${id}`)

    const updatedAnecdote = await axios.patch(`${baseUrl}/${id}`, {
        votes: anecdote.data.votes + 1
    })

    return updatedAnecdote.data
}


const createNew = async (content) => {
    const object = { content, important: false, votes: 0 }
    const response = await axios.post(baseUrl, object)
    return response.data
}

export default { getAll, vote, createNew }