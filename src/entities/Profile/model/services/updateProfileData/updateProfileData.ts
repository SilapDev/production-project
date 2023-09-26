import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { getProfileData } from '../../selectors/getProfileData/getProfileData'
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm'
import { ValidateProfileError, type Profile } from '../../types/profile'
import { validateProfileData } from '../validateProfile/validateProfile'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const updateProfiledata = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
    'profile/update',
    async (_, thukApi) => {
        const { extra, rejectWithValue, getState } = thukApi

        const formData = getProfileForm(getState())

        const errors = validateProfileData(formData!)

        if (errors.length) {
            return rejectWithValue(errors)
        }

        try {
            const response = await extra.api.put<Profile>('/profile', formData)

            return response.data
        } catch (error) {
            console.log(error)
            return rejectWithValue([ValidateProfileError.SERVER_ERROR])
        }
    }
)
