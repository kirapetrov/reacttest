import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

interface AuthorizationState {
  sessionKey: string
}

// Define the initial state using that type
const initialState: AuthorizationState = {
  sessionKey: ""
}

type ACTIONTYPE =
  | { type: "increment"; payload: number }
  | { type: "authorization/authorized"; payload: string };


export const counterSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    // increment: state => {
    //   state.value += 1
    // },
    // decrement: state => {  
    //   state.value -= 1
    // },
    authorized: (state, action: PayloadAction<AuthorizationState>) => {
       return action.payload
     }
  }
})

export const { authorized } = counterSlice.actions

export const selectCount = (state: RootState) => state.authorization

export default counterSlice.reducer