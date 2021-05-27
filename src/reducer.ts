import { combineReducers } from 'redux'

import authorizationReducer from './features/authorization/authorizationSlice'

const rootReducer = combineReducers({
  authorization: authorizationReducer
})

export default rootReducer