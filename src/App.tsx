import Authorization from './features/authorization/Authorization'
import { useSelector } from 'react-redux'

type State = {
  sessionKey: string 
}

const getSessionKey = (state: State) => state.sessionKey;

function App() {

  const sessionKey = useSelector(getSessionKey);

  return (
    <div className="App">
        <Authorization />
    </div>
  )
}

export default App