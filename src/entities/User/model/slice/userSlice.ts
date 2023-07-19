import { createSlice } from '@reduxjs/toolkit'
import { type Userschema } from '../types/user'

const initialState: Userschema = {

}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

  }
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
