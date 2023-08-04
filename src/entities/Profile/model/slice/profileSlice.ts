import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type Profile, type ProfileSchema } from '../types/profile'
import { fetchProfiledata } from '../services/fetchProfileData/fetchProfileData'
import { updateProfiledata } from '../services/updateProfileData/updateProfileData'

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload
    },
    cancelEdit: (state) => {
      state.readonly = true
      state.form = state.data
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.form = {
        ...state.form,
        ...action.payload
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfiledata.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchProfiledata.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.isLoading = false
        state.data = action.payload
        state.form = action.payload
      })
      .addCase(fetchProfiledata.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(updateProfiledata.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(updateProfiledata.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.isLoading = false
        state.data = action.payload
        state.form = action.payload
      })
      .addCase(updateProfiledata.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
