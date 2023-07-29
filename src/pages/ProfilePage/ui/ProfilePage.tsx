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
  profileReducer
} from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch'
import { useSelector } from 'react-redux'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'

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

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
          <ProfilePageHeader />
          <ProfileCard
        data={formData}
        isLoading={isLoading}
        error={error}
        onChangeFirstname={onChangeFirstname}
        onChangeLastname={onChangeLastname}
        readOnly={readOnly}
      />
      </DynamicModuleLoader>
  )
}

export default ProfilePage
