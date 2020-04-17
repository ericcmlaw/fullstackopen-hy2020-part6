import React from 'react'

import { connect } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'



const Anecdote = ({ content, votes, handleClick }) => {
    return (
        <div>
            <div>
                {content}
            </div>
            <div>
                has {votes}
                <button onClick={handleClick}>vote</button>
            </div>
        </div>
    )
}

const AnecdoteList = (props) => {
    const voteWithNotification = (anecdote) => {
        props.vote(anecdote.id);
        // dispatch(notify(`you voted '${anecdote.content}'`));
        // setTimeout(() => {
        //     dispatch(notify(""));
        // }, 5000)
        props.notify(`you voted '${anecdote.content}'`, 5);
    }

    const anecdotes = () => {
        if (props.filter) {
            return props.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(props.filter.toLowerCase()))
        } else {
            return props.anecdotes
        }
    }

    return (
        <div>
            {anecdotes()
                .sort((a, b) => b.votes - a.votes)
                .map(anecdote =>
                    <Anecdote
                        key={anecdote.id}
                        content={anecdote.content}
                        votes={anecdote.votes}
                        handleClick={() => {
                            voteWithNotification(anecdote)
                        }}
                    />
                )}
        </div>
    )
}

const mapStateToProps = (state) => {
    // sometimes it is useful to console log from mapStateToProps
    console.log(state)
    return {
        anecdotes: state.anecdotes,
        filter: state.filter
    }
}

const mapDispatchToProps = {notify, vote}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AnecdoteList)
