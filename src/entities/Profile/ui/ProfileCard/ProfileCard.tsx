import React from 'react'
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { Text, TextAling, TextTheme } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { type Profile } from 'entities/Profile/model/types/profile'
import { Loader } from 'shared/ui/Loader/Loader'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Select } from 'shared/ui/Select/Select'
import { Currency } from 'shared/const/common'

interface ProfileCardProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  error?: string
  onChangeLastname?: (value: string) => void
  onChangeFirstname?: (value: string) => void
  onChangeAge?: (value: string) => void
  onChangeCity?: (value: string) => void
  onChangeUsername?: (value: string) => void
  onChangeAvatar?: (value: string) => void
  readOnly: boolean
}
export const ProfileCard = ({
  className,
  data,
  isLoading,
  error,
  onChangeFirstname,
  onChangeLastname,
  onChangeAge,
  onChangeCity,
  onChangeAvatar,
  onChangeUsername,
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

  const mods: Mods = {
    [cls.editing]: !readOnly
  }

  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      <div className={cls.data}>

        {data?.avatar && (<div className={cls.avatarWrapper} >
          <Avatar src={data?.avatar} />
        </div>)}
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
        <Input
          type="text"
          value={data?.age}
          placeholder={t('Your age')}
          className={cls.input}
          onChange={onChangeAge}
          readOnly={readOnly}
        />
        <Input
          type="text"
          value={data?.city}
          placeholder={t('City')}
          className={cls.input}
          onChange={onChangeCity}
          readOnly={readOnly}
        />
        <Input
          type="text"
          value={data?.username}
          placeholder={t('Client name')}
          className={cls.input}
          onChange={onChangeUsername}
          readOnly={readOnly}
        />
        <Input
          type="text"
          value={data?.avatar}
          placeholder={t('Url for Avatar')}
          className={cls.input}
          onChange={onChangeAvatar}
          readOnly={readOnly}
        />

        <Select label={"Choose corrency"} options={[
          { value: Currency.RUB, content: Currency.RUB },
          { value: Currency.EUR, content: Currency.EUR },
          { value: Currency.USD, content: Currency.USD },
        ]} />

      </div>
    </div>
  )
}
