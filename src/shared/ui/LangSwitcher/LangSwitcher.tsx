import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from '../Button/Button'
import { classNames } from 'shared/lib/classNames/classNames'

interface LangSwitcherProps {
  className?: string
  short?: boolean
}
export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
      <Button
      className={classNames('', {}, [className!])}
      onClick={toggle}
      theme={ThemeButton.CLEAR}
    >
          {t(short ? 'shortLanguage' : 'language')}
      </Button>
  )
}
