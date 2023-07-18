// helpers
import { classNames } from 'shared/lib/classNames/classNames'

// styles
import cls from './Navbar.module.scss'
import { Modal } from 'shared/ui/Modal/Modal'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { useCallback, useState } from 'react'

interface Props {
  className?: string
}

export const Navbar = ({ className }: Props) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev)
  }, [])

  return (
      <div className={classNames(cls.Navbar, {})}>
          <Button
        theme={ThemeButton.CLEAR}
        className={cls.links}
        onClick={onToggleModal}
      >
              {t('signIn')}
          </Button>
          <Modal isOpen={isAuthModal} onClose={onToggleModal}></Modal>
      </div>
  )
}
