// import { client } from 'api/client'

const initialState = []

export default function authorizationReducer(state = initialState, action) {
  switch (action.type) {
    case 'authorization/authorize': {
      return action.payload
    }
    default:
      return state
  }
}

// Thunk function
export async function fetchTodos(dispatch, getState) {
  // const response = await client.get('/fakeApi/todos')
  // dispatch({ type: 'todos/todosLoaded', payload: response.todos })
}