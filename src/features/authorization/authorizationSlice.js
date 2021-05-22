// import { client } from 'api/client'

const initialState = []

export default function authorizationReducer(state = initialState, action) {
  switch (action.type) {
    // case 'authorization/authorize': {
      // return 
    // }

    case 'authorization/authorized': {
      return [
        ...state,
        {
          sessionKey: action.payload
        }
      ];
    }
    default:
      return state
  }
}

export function authorize(login, password, ipAddress, nginxAddress) {
  return function authorizeThunk(dispatch, getState) {
    // const response = await client.post('/fakeApi/todos', { todo: initialTodo })
    setTimeout(() => {
      dispatch({ 
        type: 'authorization/authorized',
        payload: `${login} - ${password} - ${ipAddress} - ${nginxAddress}`})
    }, 5000)    
  }
}