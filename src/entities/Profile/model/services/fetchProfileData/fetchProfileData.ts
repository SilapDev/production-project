import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Profile } from '../../types/profile'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchProfiledata = createAsyncThunk<Profile, void, ThunkConfig<string> >(
  'profile/fetchProfiledata',
  async (_, thukApi) => {
    const { extra, rejectWithValue } = thukApi

    try {
      const response = await extra.api.get<Profile>('/profile')

      return response.data
    } catch (error) {
      console.log(error)
      return rejectWithValue('error')
    }
  }
)
