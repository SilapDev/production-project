import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface LoginFormProps {
  className?: string
}
export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation()

  return (
      <div className={classNames(cls.LoginForm, {}, [])}>
          <Input
            placeholder={t('username')}
            autoFocus
            type="text"
            className={cls.input}

        />
          <Input placeholder={t('password')} type="text" className={cls.input} />
          <Button className={cls.loginBtn}>{t('signIn')}</Button>
      </div>
  )
}