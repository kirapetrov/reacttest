import React from 'react'
import Authorization from './features/authorization/Authorization'
import { useSelector } from 'react-redux'

const getSessionKey = state => state.sessionKey;

function App() {

  const sessionKey = useSelector(getSessionKey);

  return (
    <div className="App">
        <Authorization />
    </div>
  )
}

export default App