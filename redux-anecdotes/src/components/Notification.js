import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => state.notifications)
  const visibility = notification === '' ? 'hidden' : 'visible';
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    visibility
  }
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification