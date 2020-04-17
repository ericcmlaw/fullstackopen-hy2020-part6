
import React from 'react'

import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = (props) => {

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        props.createAnecdote(content)
        // dispatch(notify(`anecdote '${content}' created`));
        // setTimeout(() => {
        //     dispatch(notify(""));
        // }, 5000)
        props.notify(`anecdote '${content}' created`, 5);
    }
    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div><input name="anecdote" /></div>
                <button>create</button>
            </form>
        </div>
    )
}

// const mapDispatchToProps = dispatch => {
//     return {
//         notify: value => {
//             dispatch(notify(value))
//         },
//         createAnecdote: value => {
//             dispatch(createAnecdote(value))
//         },
//     }
//   }

const mapDispatchToProps = {notify, createAnecdote}

export default connect(
    null,
    mapDispatchToProps
)(AnecdoteForm)