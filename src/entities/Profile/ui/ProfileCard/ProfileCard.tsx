import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { useSelector } from 'react-redux'
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData'
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface ProfileCardProps {
  className?: string
}
export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation()

  const data = useSelector(getProfileData)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)

  return (
      <div className={classNames(cls.ProfileCard, {}, [className])} >
          <div className={cls.header} >
              <Text title={t('profilePage')} />
              <Button theme={ThemeButton.OUTLINE} className={cls.editBtn} >
                  {t('redact')}
              </Button>
          </div>
          <div className={cls.data} >
              <Input type="text" value={data?.first} placeholder={t('yourName')} className={cls.input} />
              <Input type="text" value={data?.lastname} placeholder={t('yourLastName')} className={cls.input} />
          </div>
      </div>
  )
}
