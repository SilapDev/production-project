import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { getProfileData } from '../../selectors/getProfileData/getProfileData'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'
import { type Profile } from '../../types/profile'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const updateProfiledata = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/update',
    async (_, thukApi) => {
        const { extra, rejectWithValue, getState } = thukApi

        const formData = getProfileForm(getState())

        try {
            const response = await extra.api.put<Profile>('/profile', formData)

            return response.data
        } catch (error) {
            console.log(error)
            return rejectWithValue('error')
        }
    }
)
