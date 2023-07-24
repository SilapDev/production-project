import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, type ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { profileReducer } from 'entities/Profile'

const reducers: ReducerList = {
  profile: profileReducer
}

interface ProfilePageProps {
  className?: string
}
const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation()

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount >
          {t('profilePage')}
      </DynamicModuleLoader>
  )
}

export default ProfilePage
