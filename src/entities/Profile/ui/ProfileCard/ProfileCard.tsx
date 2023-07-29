import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { Text, TextAling, TextTheme } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { type Profile } from 'entities/Profile/model/types/profile'
import { Loader } from 'shared/ui/Loader/Loader'

interface ProfileCardProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  error?: string
  onChangeLastname: (value: string) => void
  onChangeFirstname: (value: string) => void
  readOnly: boolean
}
export const ProfileCard = ({
  className,
  data,
  isLoading,
  error,
  onChangeFirstname,
  onChangeLastname,
  readOnly
}: ProfileCardProps) => {
  const { t } = useTranslation()

  if (isLoading) {
    return (
        <div
        className={classNames(cls.ProfileCard, { [cls.loading]: true }, [
          className
        ])}
      >
            <Loader />
        </div>
    )
  }

  if (error) {
    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <Text
          theme={TextTheme.ERROR}
          title={'Произошла ошибка при загрузке'}
          align={TextAling.CENTER}
        />
        </div>
    )
  }

  return (
      <div className={classNames(cls.ProfileCard, {}, [className])}>
          <div className={cls.data}>
              <Input
          type="text"
          value={data?.first}
          placeholder={t('yourName')}
          className={cls.input}
          onChange={onChangeFirstname}
          readOnly={readOnly}
        />
              <Input
          type="text"
          value={data?.lastname}
          placeholder={t('yourLastName')}
          className={cls.input}
          onChange={onChangeLastname}
          readOnly={readOnly}
        />
          </div>
      </div>
  )
}
