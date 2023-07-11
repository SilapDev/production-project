import { classNames } from 'shared/lib/classNames'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from '../Button/Button'

interface LangSwitcherProps {
  className?: string
}
export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
      <Button
      className={classNames('', {}, [])}
      onClick={toggle}
      theme={ThemeButton.CLEAR}
    >
          {t('language')}
      </Button>
  )
}
