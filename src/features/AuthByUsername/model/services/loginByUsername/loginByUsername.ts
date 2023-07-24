import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig, type ThunkExtraArg } from 'app/providers/StoreProvider'
import { userActions, type User } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

interface LoginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string> >(
  'login/loginByUsername',
  async (authData, thukApi) => {
    const { extra, dispatch, rejectWithValue } = thukApi

    try {
      const response = await extra.api.post<User>('/login', authData)

      if (!response.data) {
        throw new Error()
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
      dispatch(userActions.setAuthData(response.data))

      return response.data
    } catch (error) {
      console.log(error)
      return rejectWithValue('error')
    }
  }
)
