import React, { useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfilePageHeader.module.scss'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { t } from 'i18next'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileReadonly, profileActions } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch'

interface ProfilePageHeaderProps {
  className?: string
}
export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
  const { t } = useTranslation()

  const readOnly = useSelector(getProfileReadonly)

  const dispatch = useAppDispatch()

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onSave = useCallback(() => {

  }, [])

  return (
      <div className={classNames(cls.ProfilePageHeader, {}, [])}>
          <Text title={t('profilePage')} />
          {readOnly
            ? (
                <Button
          theme={ThemeButton.OUTLINE}
          className={cls.editBtn}
          onClick={onEdit}
        >
                    {t('redact')}
                </Button>
              )
            : (
                <>
                    <Button
                        theme={ThemeButton.OUTLINE}
                        className={cls.editBtn}
                        onClick={onCancelEdit}
                    >
                        {t('Отменить')}
                    </Button>
                    <Button
                        theme={ThemeButton.OUTLINE_RED}
                        className={cls.saveBtn}
                        onClick={onSave}
                    >
                        {t('Сохранить')}
                    </Button>

                </>
              )}
      </div>
  )
}
