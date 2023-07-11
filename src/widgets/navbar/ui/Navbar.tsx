
// helpers
import { classNames } from 'shared/lib/classNames'

// styles
import cls from './Navbar.module.scss'
import { Applink, ApplinkTheme } from 'shared/ui/AppLink/Applink'

interface Props {
  className?: string
}

export const Navbar = ({ className }: Props) => {
  return (
      <div className={classNames(cls.Navbar, {})}>
          <div className={cls.links}>
              <Applink
          theme={ApplinkTheme.SECONDARY}
          to={'/'}
          className={cls.mainLink}
        >
                  Главная
              </Applink>
              <Applink theme={ApplinkTheme.SECONDARY} to={'/about'}>
                  О сайте
              </Applink>
          </div>
      </div>
  )
}
