// helpers
import { classNames } from 'shared/lib/classNames/classNames'

// styles
import cls from './Navbar.module.scss'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { memo, useCallback, useState } from 'react'
import { LoginModal } from 'features/AuthByUsername'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthData, userActions } from 'entities/User'

interface Props {
  className?: string
}

export const Navbar = memo(({ className }: Props) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)
  const authData = useSelector(getAuthData)
  const dispatch = useDispatch()

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (authData) {
    return (
        <div className={classNames(cls.Navbar, {})}>
            <Button
          theme={ThemeButton.CLEAR}
          className={cls.links}
          onClick={onLogout}
        >
                {t('signOut')}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </div>
    )
  }

  return (
      <div className={classNames(cls.Navbar, {})}>
          <Button
            theme={ThemeButton.CLEAR}
            className={cls.links}
            onClick={onShowModal}
          >
              {t('signIn')}
          </Button>
          { isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
      </div>
  )
})
