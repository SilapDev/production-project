import React, { useCallback, useEffect } from 'react'
import {
  DynamicModuleLoader,
  type ReducerList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
  ProfileCard,
  fetchProfiledata,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  profileActions,
  profileReducer,
  getProfileValidateError
} from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch'
import { useSelector } from 'react-redux'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country/model/types/Country'
import { Text, TextTheme } from 'shared/ui/Text/Text'

const reducers: ReducerList = {
  profile: profileReducer
}

interface ProfilePageProps {
  className?: string
}
const ProfilePage = ({ className }: ProfilePageProps) => {
  const dispatch = useAppDispatch()

  const formData = useSelector(getProfileForm)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const readOnly = useSelector(getProfileReadonly)
  const validateErrors = useSelector(getProfileValidateError)

  useEffect(() => {
    dispatch(fetchProfiledata())
  }, [dispatch])

  const onChangeFirstname = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ first: value || '' }))
    },
    [dispatch]
  )

  const onChangeLastname = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ lastname: value || '' }))
    },
    [dispatch]
  )

  const onChangeCity = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ city: value || '' }))
    },
    [dispatch]
  )

  const onChangeAge = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ age: Number(value || 0) }))
    },
    [dispatch]
  )
  const onChangeAvatar = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || "" }))
    },
    [dispatch]
  )
  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ username: value || "" }))
    },
    [dispatch]
  )
  const onChangeCurrency = useCallback(
    (currency: Currency) => {
      dispatch(profileActions.updateProfile({ currency }))
    },
    [dispatch]
  )
  const onChangeCountry = useCallback(
    (country: Country) => {
      dispatch(profileActions.updateProfile({ country }))
    },
    [dispatch]
  )

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <ProfilePageHeader />
      {validateErrors?.length && validateErrors.map(err => (
        <Text theme={TextTheme.ERROR} text={err} />
      ))}
      <ProfileCard
        data={formData}
        isLoading={isLoading}
        error={error}
        onChangeFirstname={onChangeFirstname}
        onChangeLastname={onChangeLastname}
        onChangeAge={onChangeAge}
        onChangeCity={onChangeCity}
        onChangeAvatar={onChangeAvatar}
        onChangeUsername={onChangeUsername}
        onChangeCurrency={onChangeCurrency}
        onChangeCountry={onChangeCountry}
        readOnly={readOnly}
      />
    </DynamicModuleLoader>
  )
}

export default ProfilePage
